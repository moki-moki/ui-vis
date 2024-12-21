import { ChangeEvent, useState } from 'react';

import ColorInput from './color-input';
import Dice from './dice';
import { DEFAULT_COLORS } from '../../data/colors';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useMutateColors } from '../../hooks/useMutateColors';
import { applyColorsToRoot, generateScheme } from '../../utils/colors';

export type ColorType = 'monochromatic' | 'complementary' | 'analogous' | 'all';

const Toolkit = () => {
  const [colors, setColors] = useLocalStorage('colors', DEFAULT_COLORS);
  const [selected, setSelected] = useState('all');

  useMutateColors(colors);

  const changeColorHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setColors((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    document.body.style.setProperty(`--${e.target.name}-color`, e.target.value);
  };

  const generateColors = (type: ColorType) => {
    const colorScheme = generateScheme(type);

    setSelected(type);
    setColors(colorScheme);
    applyColorsToRoot(colorScheme);
  };

  return (
    <div className="bg-slate-500/30 backdrop-blur-lg p-5 flex justify-evenly items-center max-w-4xl m-auto absolute bottom-2 left-0 right-0 rounded-xl">
      <ColorInput
        type="background"
        color={colors.background}
        changeColorHandler={changeColorHandler}
      />
      <ColorInput
        type="text"
        color={colors.text}
        changeColorHandler={changeColorHandler}
      />
      <ColorInput
        type="primary"
        color={colors.primary}
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
      <Dice selected={selected} generateColors={generateColors} />
    </div>
  );
};

export default Toolkit;
