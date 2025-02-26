import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import dotenv from 'dotenv';
import { defineConfig } from 'vite';

// Load environment variables from .env file
dotenv.config();

// Vite configuration
export default defineConfig({
  // Base public path
  base: "/",

  // Plugins used in the project
  plugins: [react(), tailwindcss()],

  // Preview server configuration
  preview: {
    port: Number(process.env.VITE_PORT) || 5173,
    strictPort: true,
  },

  // Development server configuration
  server: {
    port: Number(process.env.VITE_PORT) || 5173,
    strictPort: true,
    host: true,
    origin: `http://0.0.0.0:${process.env.VITE_PORT || 5173}`,
    watch: {
      usePolling: true,
    },
  },
});
