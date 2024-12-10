import chroma from 'chroma-js';

export const DEFAULT_COLORS = {
    'primary-color': '#141414',
    'secondary-color': '#080808',
    'text-color': '#666666',
    'accent-color': '#fffcfa',
};

// TODO, ADD MORE MAIN COLORS FOR MONOCHROMATIC
export const MONOCHROMATIC_COLORS = [
    '#FFBF00',
    '#F5F5DC',
    '#0000FF',
    '#6E0A1E',
    '#DFFF00',
    '#DCD0FF',
];

export const generateMonochromaticColors = (colors: string[]): string[] => {
    if (colors.length >= 1) {
        return chroma.scale(colors).colors(8);
    } else {
        const clr =
            MONOCHROMATIC_COLORS[
                Math.floor(Math.random() * MONOCHROMATIC_COLORS.length)
            ];

        return chroma
            .scale([chroma(clr).darken(10), clr, chroma(clr).brighten(2)])
            .colors(8);
    }
};
