import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  site: 'https://julien-marteen-akay.github.io',
  integrations: [
    tailwind({
      // Optional: Disable applying Tailwind's base styles if necessary
      // applyBaseStyles: false,
    }),
    icon()
  ],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'dracula', 
      langs: [],
      wrap: true,
    },
  }
}); 