import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://sea-reach.com",
  output: "static",
  integrations: [sitemap()],
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
