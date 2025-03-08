import {argv} from "node:process";
import {access, rm} from "node:fs/promises";
import {build, context} from "esbuild";
import configuration from "./configuration.js";

const isAccessible = async (path) => {
  try {
    await access(path);
    return true;
  }
  catch {
    return false;
  }
};

const remove = async (path) => {
  if (Array.isArray(path)) {
    for (const item of path) {
      await remove(item);
    }
  }
  else if (await isAccessible(path)) {
    await rm(path, {recursive: true});
  }
};

for (let args = argv.slice(2); args.length;) {
  switch (args.shift()) {
    case "--help":
    case "-h":
      console.log([
        "Usage: node server [command|option]",
        "",
        "Commands:",
        "  start             Launch development server",
        "  build             Bundle for production",
        "  clean             Remove generated build",
        "",
        "Options:",
        "  --help, -h        Show this message"
      ].join("\n"));
      break;
    case "clean":
      await remove(configuration.build.outdir);
      break;
    case "build":
      await build(configuration.build);
      break;
    case "serve":
    default:
      const esbuild = await context(configuration.build);
      await esbuild.watch();
      await esbuild.serve(configuration.serve);
      console.clear();
  }
}
