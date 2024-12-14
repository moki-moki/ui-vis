import { ChangeEvent, useEffect } from 'react';

import { DEFAULT_COLORS } from '../../data/colors';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import ColorInput from './color-input';
import Dice from './dice';

const Toolkit = () => {
  const [colors, setColors] = useLocalStorage('colors', DEFAULT_COLORS);

  const changeColorHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setColors((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    document.body.style.setProperty(`--${e.target.name}-color`, e.target.value);
  };

  useEffect(() => {
    const storedColors = localStorage.getItem('colors');

    if (storedColors) {
      const parsedValue = JSON.parse(storedColors);
      Object.keys(parsedValue).forEach((key) => {
        console.log(key, parsedValue[key]);
        document.body.style.setProperty(`--${key}-color`, parsedValue[key]);
      });
    }
  }, []);

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
      <Dice />
    </div>
  );
};

export default Toolkit;
