import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";

import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://crablabs.io",
  integrations: [
    tailwind(),
    mdx(),
    sitemap(), 
  ],
  output: "static",
  adapter: vercel()
});