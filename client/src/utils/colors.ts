import chroma from 'chroma-js';

type ColorsObj = Record<(typeof keys)[number], string>;

const keys = [
  'background',
  'text',
  'primary',
  'secondary',
  'accent',
  'secondary-faded',
] as const;

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
  const types = ['monochromatic', 'complementary', 'analogous', 'triadic'];

  const random = Math.floor(Math.random() * types.length);

  return types[random];
};

const mixColor = (baseColor: string, mixColor: 'white' | 'black') =>
  chroma.mix(baseColor, mixColor, 0.9).hex();

const generateOpacityColor = (baseColor: string, opacityValue: number) =>
  chroma(baseColor).alpha(opacityValue);

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
            mixColor(baseColor, 'white'),
            baseColor,
            mixColor(baseColor, 'black'),
          ])
          .colors(11);
        newColors = [
          colors[0],
          colors[10],
          colors[4],
          colors[2],
          colors[7],
          generateOpacityColor(colors[4], 0.3).hex(),
        ];

        keys.forEach((key, idx) => {
          obj[key] = newColors[idx];
        });
      }
      break;
    case 'complementary':
      {
        newColors = [
          mixColor(baseColor, 'white'),
          mixColor(baseColor, 'black'),
          baseColor,
          ajustHue(baseColor, 180, 'plus').hex(),
          ajustHue(baseColor, 140, 'plus').hex(),
          generateOpacityColor(
            ajustHue(baseColor, 180, 'plus').hex(),
            0.3,
          ).hex(),
        ];

        keys.forEach((key, idx) => {
          obj[key] = newColors[idx];
        });
      }
      break;

    case 'analogous':
      newColors = [
        mixColor(baseColor, 'white'),
        mixColor(baseColor, 'black'),
        baseColor,
        ajustHue(baseColor, 30, 'plus').hex(),
        ajustHue(baseColor, 30, 'minus').hex(),
        generateOpacityColor(ajustHue(baseColor, 30, 'plus').hex(), 0.3).hex(),
      ];
      keys.forEach((key, idx) => {
        obj[key] = newColors[idx];
      });
      break;

    case 'triadic':
      {
        newColors = [
          mixColor(baseColor, 'white'),
          mixColor(baseColor, 'black'),
          baseColor,
          ajustHue(baseColor, 120, 'plus').hex(),
          ajustHue(baseColor, 240, 'plus').hex(),
          generateOpacityColor(
            ajustHue(baseColor, 120, 'plus').hex(),
            0.3,
          ).hex(),
        ];
      }
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
