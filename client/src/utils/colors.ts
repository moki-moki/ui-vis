import chroma from 'chroma-js';

const randomColors = Array.from({ length: 50 }, () => chroma.random().hex());

export const generateScheme = (type: string): string[] => {
  const baseColor = chroma.random().hex();

  let newColors: string[] = [];

  switch (type) {
    case 'monochromatic':
      newColors = chroma
        .scale([baseColor, chroma(baseColor).darken(2)])
        .colors(5); // 5 shades of monochromatic color
      break;
    case 'complementary':
      newColors = [
        baseColor,
        chroma(baseColor)
          .set('hsl.h', (chroma(baseColor).get('hsl.h') + 180) % 360)
          .hex(),
      ];
      break;

    case 'analogous':
      newColors = [
        baseColor,
        chroma(baseColor)
          .set('hsl.h', (chroma(baseColor).get('hsl.h') + 30) % 360)
          .hex(),
        chroma(baseColor)
          .set('hsl.h', (chroma(baseColor).get('hsl.h') - 30 + 360) % 360)
          .hex(),
      ];
      break;

    default:
      break;
  }

  return newColors;
};

export const applyColorsToRoot = (colors: string[]) => {
  document.documentElement.style.setProperty(`--primary-color`, colors[0]);
  document.documentElement.style.setProperty(`--secondary-color`, colors[1]);
  document.documentElement.style.setProperty(`--accent-color`, colors[2]);
  document.documentElement.style.setProperty(`--text-color`, colors[3]);
};
