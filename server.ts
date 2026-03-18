import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProd = process.env.NODE_ENV === "production";
const app = express();

async function start() {
  if (!isProd) {
    const { createServer } = await import("vite");
    const vite = await createServer({
      server: { middlewareMode: "ssr" },
      appType: "custom",
    });

    app.use(vite.middlewares);

    app.use(/.*/, async (req, res) => {
      const url = req.originalUrl;
      let template = fs.readFileSync(path.resolve(__dirname, "index.html"), "utf-8");
      template = await vite.transformIndexHtml(url, template);
      const { render } = await vite.ssrLoadModule("/src/entry-server.tsx");
      const appHtml = render(url);
      const html = template.replace("<!--ssr-outlet-->", appHtml);
      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    });
  } else {
    const clientDist = path.resolve(__dirname, "dist/client");
    const serverDist = path.resolve(__dirname, "dist/server");

    // Serve static client assets with correct MIME
    app.use(express.static(clientDist, { index: false }));

    app.use(/.*/, async (req, res) => {
      const url = req.originalUrl;

      // Load built index.html (from client build)
      const template = fs.readFileSync(path.join(clientDist, "index.html"), "utf-8");

      // Read client manifest (Vite writes a manifest in dist/client/.vite/manifest.json)
      const manifestPath = path.join(clientDist, ".vite", "manifest.json");
      if (!fs.existsSync(manifestPath)) {
        res.status(500).end("Manifest not found. Run `npm run build`.");
        return;
      }
      const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));

      // Load SSR renderer
      const entryServer = pathToFileURL(path.join(serverDist, "entry-server.js")).href;
      const { render } = await import(entryServer);
      const appHtml = render(url);

      // Insert SSR HTML; client index.html already contains correct links to hashed assets
      const html = template.replace("<!--ssr-outlet-->", appHtml);

      res.status(200).set({ "Content-Type": "text/html" }).end(html);
    });
  }

  app.listen(3000, () => {
    console.log("SSR server running at http://localhost:3000");
  });
}

start();
