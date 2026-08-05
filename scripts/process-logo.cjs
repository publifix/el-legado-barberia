const sharp = require('sharp');
const path = require('path');

async function main() {
  const input = path.join(__dirname, '..', 'el-legado-logo.jpg');
  const { data, info } = await sharp(input)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const out = Buffer.alloc(width * height * 4);

  // Background is a dark textured grey (~50,50,50); the mark (razors + "L"/"B")
  // is light grey/white (~230-255). Map luminance to alpha, force color to pure white.
  const black = 95;
  const white = 165;
  const noiseGate = 55;

  for (let i = 0; i < width * height; i++) {
    const r = data[i * channels];
    const g = data[i * channels + 1];
    const b = data[i * channels + 2];
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;

    let alpha = ((lum - black) / (white - black)) * 255;
    alpha = Math.max(0, Math.min(255, alpha));
    if (alpha < noiseGate) alpha = 0;

    out[i * 4] = 255;
    out[i * 4 + 1] = 255;
    out[i * 4 + 2] = 255;
    out[i * 4 + 3] = Math.round(alpha);
  }

  const outPath = path.join(__dirname, '..', 'src', 'assets', 'images', 'logo-mark-white.png');

  await sharp(out, { raw: { width, height, channels: 4 } })
    .png()
    .trim({ threshold: 10 })
    .toFile(outPath);

  const meta = await sharp(outPath).metadata();
  console.log('Wrote', outPath, meta.width, meta.height);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
