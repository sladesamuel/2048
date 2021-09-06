const path = require("path");
const open = require("open");

(async () => {
  const gamePath = path.resolve(__dirname, "..", "index.html");
  await open(`file:///${gamePath}`);
})();
