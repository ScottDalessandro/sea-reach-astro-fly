import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://sea-reach.com",
  output: "static",
  integrations: [sitemap(), react()],
  vite: {
    build: {
      cssMinify: true,
      minify: true,
    },
  },
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
});
