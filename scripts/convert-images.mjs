import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const IMAGES_DIR = path.resolve('public/images');
const files = fs.readdirSync(IMAGES_DIR);

const THRESHOLD = 200 * 1024; // 200KB

const results = [];
const skipped = [];

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

  const fullPath = path.join(IMAGES_DIR, file);
  const stat = fs.statSync(fullPath);

  if (stat.size > THRESHOLD) {
    const baseName = path.basename(file, ext);
    const outName = `${baseName}.webp`;
    const outPath = path.join(IMAGES_DIR, outName);

    await sharp(fullPath).webp({ quality: 80 }).toFile(outPath);

    const outStat = fs.statSync(outPath);
    const savedBytes = stat.size - outStat.size;
    const reduction = ((savedBytes / stat.size) * 100).toFixed(1);

    results.push({
      original: file,
      webp: outName,
      origSizeKB: (stat.size / 1024).toFixed(1),
      webpSizeKB: (outStat.size / 1024).toFixed(1),
      savedKB: (savedBytes / 1024).toFixed(1),
      reductionPct: `${reduction}%`
    });
  } else {
    skipped.push({
      file,
      sizeKB: (stat.size / 1024).toFixed(1)
    });
  }
}

console.log(JSON.stringify({ results, skipped }, null, 2));
