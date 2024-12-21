import chroma from 'chroma-js';

const keys = ['background', 'text', 'primary', 'secondary', 'accent'] as const;

type MyObj = Record<(typeof keys)[number], string>;

const ajustHue = (baseColor: string, precent: number) =>
  chroma(baseColor).set(
    'hsl.h',
    (chroma(baseColor).get('hsl.h') - precent + 360) % 360,
  );

const generateBackgroundColor = (baseColor: string) =>
  chroma.mix(baseColor, 'white', 0.9).hex();

const textColor = (baseColor: string) =>
  chroma.mix(baseColor, 'black', 0.9).hex();

export const generateScheme = (type: string): MyObj => {
  const baseColor = chroma.random().hex();

  const obj: Partial<MyObj> = {};

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
        newColors = [colors[0], colors[10], colors[4], colors[2], colors[6]];

        keys.forEach((key, idx) => {
          obj[key] = newColors[idx];
        });
      }
      break;
    case 'complementary':
      {
        const colors = [
          generateBackgroundColor(baseColor),
          baseColor,
          ajustHue(baseColor, 30).hex(),
          textColor(baseColor),
          ajustHue(baseColor, 50).hex(),
        ];

        newColors = colors;
      }
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

  return obj as MyObj;
};

export const applyColorsToRoot = (colors: Record<string, string>) => {
  Object.keys(colors).forEach((key) =>
    document.documentElement.style.setProperty(`--${key}-color`, colors[key]),
  );
};
