import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercelStatic from "@astrojs/vercel/static";
import partytown from "@astrojs/partytown";

import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://crablabs.io",
  integrations: [
    tailwind(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    } ),
    sitemap(), 
    mdx()
  ],
  output: "static",
  adapter: vercelStatic()
});