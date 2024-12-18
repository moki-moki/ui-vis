import chroma from 'chroma-js';

const ajustHue = (baseColor: string, precent: number) =>
  chroma(baseColor).set(
    'hsl.h',
    (chroma(baseColor).get('hsl.h') - precent + 360) % 360,
  );

const generateBackgroundColor = (baseColor: string) =>
  chroma.mix(baseColor, 'white', 0.9);

const textColor = (baseColor: string) => chroma.mix(baseColor, 'black', 0.9);

export const generateScheme = (type: string): string[] => {
  const baseColor = chroma.random().hex();

  let newColors: string[] = [];

  switch (type) {
    case 'monochromatic':
      {
        const colors = chroma
          .scale([
            generateBackgroundColor(baseColor),
            baseColor,
            textColor(baseColor),
          ])
          .colors(11);
        newColors = [colors[0], colors[2], colors[4], colors[10], colors[6]];
      }
      break;
    case 'complementary':
      newColors = [
        baseColor,
        ajustHue(baseColor, 30).hex(),
        ajustHue(baseColor, 50).hex(),
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
