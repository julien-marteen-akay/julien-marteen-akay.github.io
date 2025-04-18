import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
tailwind({
      // Optional: Disable applying Tailwind's base styles if necessary
      // applyBaseStyles: false,
    })
  ]
}); 