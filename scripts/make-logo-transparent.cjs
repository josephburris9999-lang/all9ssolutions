const fs = require("fs");
const path = require("path");
const { PNG } = require("pngjs");

const logoPath = path.join(__dirname, "..", "public", "logo.png");
/** Pixels at or below this in all RGB channels are treated as background black. */
const BLACK_THRESHOLD = 32;

const input = fs.readFileSync(logoPath);
const png = PNG.sync.read(input);

for (let y = 0; y < png.height; y++) {
  for (let x = 0; x < png.width; x++) {
    const idx = (png.width * y + x) << 2;
    const r = png.data[idx];
    const g = png.data[idx + 1];
    const b = png.data[idx + 2];
    if (r <= BLACK_THRESHOLD && g <= BLACK_THRESHOLD && b <= BLACK_THRESHOLD) {
      png.data[idx + 3] = 0;
    }
  }
}

const out = PNG.sync.write(png);
fs.writeFileSync(logoPath, out);
