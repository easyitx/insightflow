import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const svgPath = path.join(root, "public/favicon.svg");
const iconsDir = path.join(root, "public/icons");

const squareSizes = {
  "favicon-16x16.png": 16,
  "favicon-32x32.png": 32,
  "favicon-96x96.png": 96,
  "favicon-120x120.png": 120,
  "android-icon-72x72.png": 72,
  "android-icon-96x96.png": 96,
  "android-icon-144x144.png": 144,
  "android-icon-192x192.png": 192,
  "android-icon-512x512.png": 512,
  "apple-touch-icon-57x57.png": 57,
  "apple-touch-icon-60x60.png": 60,
  "apple-touch-icon-72x72.png": 72,
  "apple-touch-icon-76x76.png": 76,
  "apple-touch-icon-114x114.png": 114,
  "apple-touch-icon-120x120.png": 120,
  "apple-touch-icon-144x144.png": 144,
  "apple-touch-icon-152x152.png": 152,
  "apple-touch-icon-180x180.png": 180,
  "mstile-70x70.png": 70,
  "mstile-144x144.png": 144,
  "mstile-150x150.png": 150,
  "mstile-310x310.png": 310,
};

await mkdir(iconsDir, { recursive: true });

for (const [filename, size] of Object.entries(squareSizes)) {
  await sharp(svgPath)
    .resize(size, size)
    .png()
    .toFile(path.join(iconsDir, filename));
  console.log(`✓ ${filename}`);
}

await sharp(svgPath)
  .resize(280, 280, { fit: "contain", background: { r: 5, g: 5, b: 5, alpha: 1 } })
  .extend({
    top: 0,
    bottom: 0,
    left: 15,
    right: 15,
    background: { r: 5, g: 5, b: 5, alpha: 1 },
  })
  .resize(310, 150, { fit: "contain", background: { r: 5, g: 5, b: 5, alpha: 1 } })
  .png()
  .toFile(path.join(iconsDir, "mstile-310x150.png"));

console.log("✓ mstile-310x150.png");
console.log("Done.");
