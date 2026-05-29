import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  output: "static",
  base: "/AI-MIDAS-ACADEMY/",
  trailingSlash: "always",
  integrations: [mdx()],
  markdown: {
    syntaxHighlight: "shiki"
  },
  vite: {
    server: {
      host: true
    }
  }
});
