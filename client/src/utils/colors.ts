import chroma from 'chroma-js';
import { ColorsI } from '../types/colors';

const randomColors = Array.from({ length: 50 }, () => chroma.random().hex());

export const generateMonochromaticColors = (color?: string): string[] => {
  const clr = color
    ? color
    : randomColors[Math.floor(Math.random() * randomColors.length)];

  return chroma
    .scale([chroma(clr).darken(5), clr, chroma(clr).brighten(5)])
    .colors(20);
};

export const applyColorsToRoot = (colors: ColorsI) => {
  Object.entries(colors).forEach(([key, value]) => {
    document.documentElement.style.setProperty(`--${key}-color`, value);
  });
};
