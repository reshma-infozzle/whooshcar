import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App";

import { StaticRouter } from "react-router-dom/server";
import * as helmetPkg from "react-helmet-async";
const { HelmetProvider } = helmetPkg;

export function render(url: string) {
  const helmetContext: any = {};

  const app = (
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  return renderToString(app);
}
