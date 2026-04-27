const fs = require("fs");
const path = require("path");

const src = path.join(__dirname, "..", "src", "generated");
const dest = path.join(__dirname, "..", "dist", "generated");

if (!fs.existsSync(src)) {
  console.error("Missing src/generated. Run: npx prisma generate");
  process.exit(1);
}
fs.mkdirSync(path.dirname(dest), { recursive: true });
fs.cpSync(src, dest, { recursive: true, force: true });
console.log("Copied Prisma client to dist/generated");
