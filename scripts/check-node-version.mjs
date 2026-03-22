const [major] = process.versions.node.split(".");

if (major !== "22") {
  console.error("This repo requires Node 22.x. Run `nvm use` before continuing.");
  process.exit(1);
}
