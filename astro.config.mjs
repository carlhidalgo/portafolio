import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      // Desactivamos la inyección automática para evitar conflictos con src/index.css
      applyBaseStyles: false,
    })
  ]
});
