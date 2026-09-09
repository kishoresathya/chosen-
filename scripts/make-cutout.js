import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function generateCutout() {
  const inputPath = path.resolve('public/images/vijaya-ragavan-original.jpg');
  const outputPath = path.resolve('public/images/vijaya-ragavan-sticker.webp');

  const { data, info } = await sharp(inputPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const isBg = new Uint8Array(width * height);
  const queue = [];

  // Seed boundary
  for (let x = 0; x < width; x++) {
    queue.push(0 * width + x);
    isBg[0 * width + x] = 1;
    // Bottom border corners
    if (x < 70 || x > 920) {
      queue.push((height - 1) * width + x);
      isBg[(height - 1) * width + x] = 1;
    }
  }
  for (let y = 0; y < height; y++) {
    queue.push(y * width + 0);
    isBg[y * width + 0] = 1;
    queue.push(y * width + (width - 1));
    isBg[y * width + (width - 1)] = 1;
  }

  // Phase 1: High-confidence background flood fill
  let head = 0;
  while (head < queue.length) {
    const curr = queue[head++];
    const cx = curr % width;
    const cy = Math.floor(curr / width);

    const neighbors = [
      [cx + 1, cy],
      [cx - 1, cy],
      [cx, cy + 1],
      [cx, cy - 1],
    ];

    for (const [nx, ny] of neighbors) {
      if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
        const nidx = ny * width + nx;
        if (!isBg[nidx]) {
          const pidx = nidx * channels;
          const r = data[pidx];
          const g = data[pidx + 1];
          const b = data[pidx + 2];

          // Neutral studio background check
          const isNeutral =
            Math.abs(r - g) <= 12 &&
            Math.abs(g - b) <= 12 &&
            Math.abs(r - b) <= 12;

          if (isNeutral && r >= 205 && g >= 205 && b >= 205) {
            isBg[nidx] = 1;
            queue.push(nidx);
          }
        }
      }
    }
  }

  // Phase 2: Border refinement (de-fringing edge pixels touching background)
  // Check adjacent pixels that are neutral and > 130 brightness
  for (let pass = 0; pass < 2; pass++) {
    const borderQueue = [];
    for (let y = 1; y < height - 1; y++) {
      for (let x = 1; x < width - 1; x++) {
        const idx = y * width + x;
        if (!isBg[idx]) {
          // Does it touch background?
          if (
            isBg[idx - 1] ||
            isBg[idx + 1] ||
            isBg[idx - width] ||
            isBg[idx + width]
          ) {
            const pidx = idx * channels;
            const r = data[pidx];
            const g = data[pidx + 1];
            const b = data[pidx + 2];
            const mean = (r + g + b) / 3;
            const isNeutral =
              Math.abs(r - g) <= 14 &&
              Math.abs(g - b) <= 14 &&
              Math.abs(r - b) <= 14;

            // If it's neutral and bright (camera edge anti-aliasing against white studio wall)
            if (isNeutral && mean >= 150) {
              borderQueue.push(idx);
            }
          }
        }
      }
    }
    for (const idx of borderQueue) {
      isBg[idx] = 1;
    }
  }

  // Phase 3: Construct RGBA buffer with smooth anti-aliased edge
  const rgba = Buffer.alloc(width * height * 4);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = y * width + x;
      const srcIdx = idx * channels;
      const dstIdx = idx * 4;

      const r = data[srcIdx];
      const g = data[srcIdx + 1];
      const b = data[srcIdx + 2];

      if (isBg[idx]) {
        rgba[dstIdx] = 0;
        rgba[dstIdx + 1] = 0;
        rgba[dstIdx + 2] = 0;
        rgba[dstIdx + 3] = 0;
      } else {
        // Foreground pixel
        // Check if it's on the immediate edge of background for slight smoothing
        const touchesBg =
          (x > 0 && isBg[idx - 1]) ||
          (x < width - 1 && isBg[idx + 1]) ||
          (y > 0 && isBg[idx - width]) ||
          (y < height - 1 && isBg[idx + width]);

        rgba[dstIdx] = r;
        rgba[dstIdx + 1] = g;
        rgba[dstIdx + 2] = b;

        if (touchesBg) {
          const mean = (r + g + b) / 3;
          const isNeutral =
            Math.abs(r - g) <= 14 &&
            Math.abs(g - b) <= 14 &&
            Math.abs(r - b) <= 14;
          // If slightly brightened by background, slightly de-fringe color towards dark
          if (isNeutral && mean > 80) {
            const factor = Math.max(0, 1 - (mean - 80) / 100);
            rgba[dstIdx] = Math.round(r * factor);
            rgba[dstIdx + 1] = Math.round(g * factor);
            rgba[dstIdx + 2] = Math.round(b * factor);
            rgba[dstIdx + 3] = Math.round(200 + 55 * factor);
          } else {
            rgba[dstIdx + 3] = 255;
          }
        } else {
          rgba[dstIdx + 3] = 255;
        }
      }
    }
  }

  await sharp(rgba, {
    raw: {
      width,
      height,
      channels: 4,
    },
  })
    .webp({ quality: 95, lossless: false })
    .toFile(outputPath);

  console.log('Successfully generated:', outputPath);
}

generateCutout().catch(console.error);
