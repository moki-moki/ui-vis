import { useState } from 'react';

import { ArrowUp, Dice5 } from 'lucide-react';

import { ColorType } from './toolkit';
import Button from '../ui/button';

interface Props {
  generateColors: (type: ColorType) => void;
}

const Dice = ({ generateColors }: Props) => {
  const [colorMenu, setColorMenu] = useState<boolean>(false);

  const menuToggler = () => setColorMenu((prev) => !prev);

  return (
    <div className="relative">
      <div className="flex justify-between border-border-color border-2 rounded-xl overflow-hidden">
        <Button
          type="button"
          className="h-12 bg-secondary-main px-4 py-2 text-accent-color border-r-2 border-border-color hover:bg-accent-color hover:text-text-color"
        >
          <Dice5 size={25} />
        </Button>
        <Button
          type="button"
          className="p-2 text-accent-color bg-secondary-main"
          onClick={menuToggler}
        >
          <ArrowUp size={20} />
        </Button>
      </div>

      {colorMenu && (
        <ul className="absolute text-text-color flex flex-col gap-2 p-1 uppercase font-bold -top-2 rounded-xl border border-secondary-main -translate-y-full translate-x-1/2  bg-slate-500/30">
          <li className="hover:bg-accent-color rounded-xl px-1">
            <Button className="w-full text-start" type="button">
              All
            </Button>
          </li>
          <li className="hover:bg-accent-color rounded-xl px-1">
            <Button className="w-full text-start" type="button">
              Analogous
            </Button>
          </li>
          <li className="hover:bg-accent-color rounded-xl px-1">
            <Button
              className="w-full text-start"
              type="button"
              onClick={() => generateColors('monochromatic')}
            >
              Monochromatic
            </Button>
          </li>
          <li className="hover:bg-accent-color rounded-xl px-1">
            <Button
              className="w-full text-start"
              type="button"
              onClick={() => generateColors('complementary')}
            >
              Complementary
            </Button>
          </li>
          <li className="hover:bg-accent-color rounded-xl px-1 text-nowrap">
            <Button className="w-full text-start" type="button">
              Split Complementary
            </Button>
          </li>
          <li className="hover:bg-accent-color rounded-xl px-1">
            <Button className="w-full text-start" type="button">
              Triadic
            </Button>
          </li>
          <li className="hover:bg-accent-color rounded-xl px-1">
            <Button className="w-full text-start" type="button">
              Tetradic
            </Button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dice;
