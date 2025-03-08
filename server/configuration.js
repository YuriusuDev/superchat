import variables from "./variables.json" with {type: "json"};

export default {
  build: {
    define: variables,
    entryPoints: [
      "source/*"
    ],
    loader: {
      ".css": "css",
      ".js": "jsx",
      ".json": "copy",
      ".html": "copy",
      ".png": "copy",
      ".svg": "copy",
      ".ttf": "copy"
    },
    assetNames: "[dir]/[name]",
    entryNames: "[dir]/[name]",
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
    legalComments: "none",
    write: true
  },
  serve: {
    host: "0.0.0.0",
    port: 3000,
    servedir: "public",
    fallback: "public/index.html"
  }
};
