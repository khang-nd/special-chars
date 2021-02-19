const umd = require("umd");
const fs = require("fs");
const spc = require("./spc");

fs.mkdirSync("dist", { recursive: true });
fs.writeFileSync(
  "dist/index.js",
  umd("spc", "return " + JSON.stringify(spc), false)
);
