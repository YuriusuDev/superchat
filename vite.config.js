import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: "src",
  base: "./",
  envDir: "../",
  envPrefix: "VITE",
  publicDir: false,
  plugins: [
    {transformIndexHtml: (html) => html.replace(/(script.*) crossorigin (.*)/, "$1 defer $2")},
    react()
  ],
  build: {
    target: "esnext",
    outDir: "../build",
    assetsDir: ".",
    assetsInlineLimit: 0,
    emptyOutDir: true,
    copyPublicDir: false,
    sourcemap: false,
    modulePreload: false,
    write: true,
    minify: "esbuild",
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
