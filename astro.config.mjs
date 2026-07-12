import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://aimidasacademy.xyz",
  trailingSlash: "always",
  output: "static",
  integrations: [mdx(), sitemap()],
  markdown: {
    syntaxHighlight: "shiki"
  },
  vite: {
    server: {
      host: true
    }
  }
});
