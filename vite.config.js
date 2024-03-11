import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "src",
  base: "./",
  envDir: "../",
  envPrefix: "ENV",
  publicDir: false,
  plugins: [
    react()
  ],
  build: {
    target: "esnext",
    minify: "esbuild",
    outDir: "../build",
    assetsInlineLimit: 0,
    emptyOutDir: true,
    copyPublicDir: false,
    sourcemap: false,
    modulePreload: false,
    write: true,
    rollupOptions: {
      output: {
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
        assetFileNames: "[name].[ext]"
      }
    }
  },
  server: {
    host: "0.0.0.0"
  },
  preview: {
    host: "0.0.0.0"
  }
});
