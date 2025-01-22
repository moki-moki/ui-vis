import { ChangeEvent, useState } from 'react';

import { DEFAULT_COLORS } from '@/data/colors';
import { useKeyBind } from '@/hooks/useKeyBind';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useMutateColors } from '@/hooks/useMutateColors';
import { ColorTypes } from '@/types/colors';
import { applyColorsToRoot, generateScheme } from '@/utils/colors';

import ColorInput from './color-input';
import Dice from './dice';

const Toolkit = () => {
  const [colors, setColors] = useLocalStorage('colors', DEFAULT_COLORS);
  const [selected, setSelected] = useState<ColorTypes>('all');

  useMutateColors(colors);

  const changeColorHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setColors((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    document.body.style.setProperty(`--${e.target.name}-color`, e.target.value);
  };

  const generateColors = (type: ColorTypes) => {
    const colorScheme = generateScheme(type);

    setSelected(type);
    setColors(colorScheme);
    applyColorsToRoot(colorScheme);
  };

  useKeyBind('R', () => generateColors(selected));

  return (
    <div className="bg-white/40 border-2 border-accent-color backdrop-blur-lg p-5 flex justify-evenly items-center max-w-4xl m-auto fixed bottom-2 left-0 right-0 rounded-xl">
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
