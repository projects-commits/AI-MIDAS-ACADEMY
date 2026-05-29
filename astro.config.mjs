import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  output: "static",
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
