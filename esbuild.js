import {context} from "esbuild";

const esbuild = await context({
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
  write: true,
  define: {
    "process.env.FIREBASE_API_KEY": "'AIzaSyDwtVZ_a_CwxM4GrRKFl04hDTNwzPMPcFg'",
    "process.env.FIREBASE_AUTH_DOMAIN": "'yuriusu-superchat.firebaseapp.com'",
    "process.env.FIREBASE_PROJECT_ID": "'yuriusu-superchat'",
    "process.env.FIREBASE_STORAGE_BUCKET": "'yuriusu-superchat.appspot.com'",
    "process.env.FIREBASE_MESSAGING_SENDER_ID": "'58217748697'",
    "process.env.FIREBASE_APP_ID": "'1:58217748697:web:c7896177f3075392e246c8'",
    "process.env.FIREBASE_MEASUREMENT_ID": "'G-CE5H8W2SR9'"
  }
});

await esbuild.watch();
const {host, port} = await esbuild.serve();
console.table({Server: `http://${host}:${port}`});
