export const styleTiles = Array.from({ length: 24 }, (_, i) =>
  `/images/styles/style_${String(i + 1).padStart(2, '0')}.webp`
);

export const styleRowA = styleTiles.slice(0, 12);
export const styleRowB = styleTiles.slice(12);
