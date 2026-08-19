import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  // Never inline assets as base64/data: URIs. The CSP's `img-src` (see vercel.json) intentionally has
  // no `data:` source, so a small asset (e.g. the social icons, both under the 4KB default limit)
  // getting inlined means its <img src> gets silently blocked by CSP in production.
  build: {
    assetsInlineLimit: 0,
  },
  // tanstackRouter must come before react() — it codegens src/routeTree.gen.ts from src/routes/*
  // before the React plugin processes the app's JSX.
  plugins: [tanstackRouter({ autoCodeSplitting: true, target: 'react' }), react(), tailwindcss()],
  resolve: {
    tsconfigPaths: true,
  },
});
