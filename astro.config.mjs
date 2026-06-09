import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  output: "static",
  i18n: {
    defaultLocale: "pt-br",
    locales: ["pt-br", "en", "es", "de", "ko"],
    routing: {
      prefixDefaultLocale: false
    }
  },
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
