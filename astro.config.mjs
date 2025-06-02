import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import node from "@astrojs/node";

export default defineConfig({
  site: "https://sea-reach.com",
  output: "server", // Change this to server for API routes
  integrations: [sitemap(), react()],
  adapter: node({
    mode: "standalone",
  }),
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
