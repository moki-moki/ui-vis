import { ChangeEvent, useState } from 'react';

import { DEFAULT_COLORS } from '@/data/colors';
import { useKeyBind } from '@/hooks/useKeyBind';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useMutateColors } from '@/hooks/useMutateColors';
import { ColorsI, ColorTypes, SelectedColorType } from '@/types/colors';
import { applyColorsToRoot, generateScheme } from '@/utils/colors';
import { toggleObjectLock } from '@/utils/utils';

import ColorInput from './color-input';
import Dice from './dice';

const Toolkit = () => {
  const [colors, setColors] = useLocalStorage('colors', DEFAULT_COLORS);
  const [selected, setSelected] = useState<SelectedColorType>('all');

  useMutateColors(colors);

  const changeColorHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name as ColorTypes;
    let newValue = { ...colors };

    if (newValue[`${name}_locked`]) return;
    else newValue = { ...newValue, [e.target.name]: e.target.value };

    setColors(newValue);
    document.body.style.setProperty(`--${e.target.name}-color`, e.target.value);
  };

  const lockColorHandler = async (key: ColorTypes) => {
    const newVal = { ...colors };
    toggleObjectLock(newVal, key);

    setColors(newVal);
  };

  const generateColors = (type: SelectedColorType) => {
    const colorScheme = generateScheme(type);
    setSelected(type);
    setColors((prev) => {
      const newState = { ...prev };

      for (const key in colorScheme) {
        const isLocked = `${key}_locked` as keyof ColorsI;
        const keyOf = key as ColorTypes;

        if (!prev[isLocked]) {
          newState[keyOf] = colorScheme[keyOf];
        }
      }
      return newState;
    });

    applyColorsToRoot(colorScheme);
  };

  useKeyBind('R', () => generateColors(selected));

  return (
    <div className="bg-white/40 border-2 border-accent-color backdrop-blur-lg p-5 flex justify-evenly items-center max-w-4xl m-auto fixed bottom-2 left-0 right-0 rounded-xl">
      <ColorInput
        type="background"
        color={colors.background}
        isLocked={colors.background_locked}
        changeColorHandler={changeColorHandler}
        lockColorHandler={lockColorHandler}
      />
      <ColorInput
        type="text"
        color={colors.text}
        isLocked={colors.text_locked}
        changeColorHandler={changeColorHandler}
        lockColorHandler={lockColorHandler}
      />
      <ColorInput
        type="primary"
        color={colors.primary}
        isLocked={colors.primary_locked}
        changeColorHandler={changeColorHandler}
        lockColorHandler={lockColorHandler}
      />
      <ColorInput
        type="secondary"
        color={colors.secondary}
        isLocked={colors.secondary_locked}
        changeColorHandler={changeColorHandler}
        lockColorHandler={lockColorHandler}
      />
      <ColorInput
        type="accent"
        color={colors.accent}
        isLocked={colors.accent_locked}
        changeColorHandler={changeColorHandler}
        lockColorHandler={lockColorHandler}
      />
      <Dice selected={selected} generateColors={generateColors} />
    </div>
  );
};

export default Toolkit;
