import chroma from 'chroma-js';

type ColorsObj = Record<(typeof keys)[number], string>;

const keys = ['background', 'text', 'primary', 'secondary', 'accent'] as const;

const ajustHue = (
  baseColor: string,
  precent: number,
  operation: 'minus' | 'plus',
) =>
  chroma(baseColor).set(
    'hsl.h',
    (operation === 'minus'
      ? chroma(baseColor).get('hsl.h') - precent + 360
      : chroma(baseColor).get('hsl.h') + precent) % 360,
  );

const getRandomTypeColor = (): string => {
  // TODO: put these arrays somewhere else
  const types = ['monochromatic', 'complementary', 'analogous'];

  const random = Math.floor(Math.random() * types.length);

  return types[random];
};

const generateBackgroundColor = (baseColor: string) =>
  chroma.mix(baseColor, 'white', 0.9).hex();

const textColor = (baseColor: string) =>
  chroma.mix(baseColor, 'black', 0.9).hex();

export const generateScheme = (type: string): ColorsObj => {
  type === 'all' ? (type = getRandomTypeColor()) : null;

  const baseColor = chroma.random().hex();

  const obj: Partial<ColorsObj> = {};

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
        newColors = [
          generateBackgroundColor(baseColor),
          textColor(baseColor),
          baseColor,
          ajustHue(baseColor, 180, 'plus').hex(),
          ajustHue(baseColor, 140, 'plus').hex(),
        ];

        keys.forEach((key, idx) => {
          obj[key] = newColors[idx];
        });
      }
      break;

    case 'analogous':
      newColors = [
        generateBackgroundColor(baseColor),
        textColor(baseColor),
        baseColor,
        ajustHue(baseColor, 30, 'plus').hex(),
        ajustHue(baseColor, 30, 'minus').hex(),
      ];
      keys.forEach((key, idx) => {
        obj[key] = newColors[idx];
      });
      break;

    default:
      break;
  }

  return obj as ColorsObj;
};

export const applyColorsToRoot = (colors: Record<string, string>) => {
  Object.keys(colors).forEach((key) =>
    document.documentElement.style.setProperty(`--${key}-color`, colors[key]),
  );
};
