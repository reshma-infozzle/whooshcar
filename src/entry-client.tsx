import React from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css"; // <- ensure this path matches your CSS

import { BrowserRouter } from "react-router-dom";
import * as helmetPkg from "react-helmet-async";
const { HelmetProvider } = helmetPkg;

hydrateRoot(
  document.getElementById("root")!,
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);
