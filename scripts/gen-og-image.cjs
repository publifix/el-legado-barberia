const sharp = require('sharp');

async function main() {
  const W = 1200;
  const H = 630;
  const heroBuf = await sharp('src/assets/images/hero-el-legado.jpg')
    .resize(W, H, { fit: 'cover', position: 'attention' })
    .modulate({ brightness: 0.75 })
    .toBuffer();

  const svgOverlay = Buffer.from(`
  <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#0B0B0B" stop-opacity="0.55"/>
        <stop offset="55%" stop-color="#0B0B0B" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="#0B0B0B" stop-opacity="0.85"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
    <text x="600" y="340" font-family="Georgia, Times New Roman, serif" font-size="72" font-weight="700" fill="#FFFFFF" text-anchor="middle" letter-spacing="2">EL LEGADO</text>
    <text x="600" y="392" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="400" fill="#C2A46D" text-anchor="middle" letter-spacing="10">BARBERIA</text>
    <rect x="560" y="420" width="80" height="2" fill="#C2A46D"/>
    <text x="600" y="470" font-family="Arial, Helvetica, sans-serif" font-size="24" fill="#F5F2EC" text-anchor="middle" letter-spacing="1">Donde el estilo se convierte en legado</text>
  </svg>
  `);

  const logoMark = await sharp('src/assets/images/logo-mark-white.png')
    .resize(90, 90, { fit: 'inside' })
    .toBuffer();
  const logoMeta = await sharp(logoMark).metadata();

  await sharp(heroBuf)
    .composite([
      { input: svgOverlay, top: 0, left: 0 },
      { input: logoMark, top: 130, left: Math.round(600 - logoMeta.width / 2) },
    ])
    .jpeg({ quality: 88 })
    .toFile('public/og-image.jpg');
  console.log('done');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
