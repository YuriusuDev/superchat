import {context} from "esbuild";

const esbuild = await context({
  define: {
    "FIREBASE_API_KEY": "''",
    "FIREBASE_AUTH_DOMAIN": "''",
    "FIREBASE_PROJECT_ID": "''",
    "FIREBASE_STORAGE_BUCKET": "''",
    "FIREBASE_MESSAGING_SENDER_ID": "''",
    "FIREBASE_APP_ID": "''",
    "FIREBASE_MEASUREMENT_ID": "''"
  },
  entryPoints: [
    "./src/*"
  ],
  loader: {
    ".html": "copy",
    ".css": "css",
    ".jsx": "jsx",
    ".json": "copy",
    ".png": "copy",
    ".svg": "copy"
  },
  assetNames: "[dir]/[name]",
  entryNames: "[dir]/[name]",
  publicPath: "./",
  outdir: "public",
  target: "esnext",
  format: "esm",
  jsx: "automatic",
  bundle: true,
  treeShaking: true,
  splitting: false,
  sourcemap: false,
  minify: true,
  minifyIdentifiers: true,
  minifyWhitespace: true,
  minifySyntax: true,
  write: true
});

await esbuild.watch();
const {host, port} = await esbuild.serve();
console.table({Server: `http://${host}:${port}`});
