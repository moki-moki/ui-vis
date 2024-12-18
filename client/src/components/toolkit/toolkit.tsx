import { ChangeEvent } from 'react';

import ColorInput from './color-input';
import Dice from './dice';
import { DEFAULT_COLORS } from '../../data/colors';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useMutateColors } from '../../hooks/useMutateColors';
import { applyColorsToRoot, generateScheme } from '../../utils/colors';

const Toolkit = () => {
  const [colors, setColors] = useLocalStorage('colors', DEFAULT_COLORS);

  useMutateColors(colors);

  const changeColorHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setColors((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    document.body.style.setProperty(`--${e.target.name}-color`, e.target.value);
  };

  const generateColors = () => {
    const colorScheme = generateScheme('monochromatic');

    const newState = {
      background: colorScheme[0],
      primary: colorScheme[1],
      secondary: colorScheme[2],
      text: colorScheme[3],
      accent: colorScheme[4],
    };

    setColors(newState);
    applyColorsToRoot(colorScheme);
  };

  return (
    <div className="bg-slate-500/30 backdrop-blur-lg p-5 flex justify-evenly items-center max-w-4xl m-auto absolute bottom-2 left-0 right-0 rounded-xl">
      <ColorInput
        type="primary"
        color={colors.primary}
        changeColorHandler={changeColorHandler}
      />
      <ColorInput
        type="text"
        color={colors.text}
        changeColorHandler={changeColorHandler}
      />
      <ColorInput
        type="secondary"
        color={colors.secondary}
        changeColorHandler={changeColorHandler}
      />
      <ColorInput
        type="accent"
        color={colors.accent}
        changeColorHandler={changeColorHandler}
      />
      <Dice generateColors={generateColors} />
    </div>
  );
};

export default Toolkit;
