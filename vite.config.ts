import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: ["whooshcar.testingweblink.com"],
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // CLIENT build output and manifest
  build: {
    outDir: "dist/client",
    emptyOutDir: false,
    rollupOptions: {
      input: "index.html",
    },
    manifest: true, // important for production
  },

  // SSR config
  ssr: {
    noExternal: ["react-helmet-async"],
  },
}));
