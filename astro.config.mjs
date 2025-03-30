import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  server: {
    host: true, // Permite conexiones externas
  },
  vite: {
    server: {
      host: true, // También en Vite
      allowedHosts: true, // ¡Permite Cloudflare Tunnel!
    },
    plugins: [tailwindcss()],
  },
  integrations: [react()],
  output: 'static'
});
