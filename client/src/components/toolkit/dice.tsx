import { useState } from 'react';

import { ArrowUp, Dice5 } from 'lucide-react';

import { SelectedColorType } from '@/types/colors';

import Button from '../ui/button';

interface Props {
  selected: SelectedColorType;
  generateColors: (type: SelectedColorType) => void;
}

const Dice = ({ selected, generateColors }: Props) => {
  const [colorMenu, setColorMenu] = useState<boolean>(false);

  const menuToggler = () => setColorMenu((prev) => !prev);

  return (
    <div className="relative">
      <div className="flex justify-between border-accent-color border-2 rounded-xl overflow-hidden">
        <Button
          type="button"
          className="border-none rounded-none h-12 bg-secondary-main px-4 py-2 text-accent-color hover:bg-accent-color hover:text-text-color"
          onClick={() => generateColors(selected)}
        >
          <Dice5 size={25} />
        </Button>
        <Button
          type="button"
          className="border-r-0 border-t-0 border-b-0 border-l-2 rounded-none border-accent-color p-2 text-accent-color bg-secondary-main"
          onClick={menuToggler}
        >
          <ArrowUp size={20} />
        </Button>
      </div>

      {colorMenu && (
        <ul className="absolute text-text-color flex flex-col gap-2 p-1 uppercase font-bold -top-2 rounded-xl border border-secondary-main -translate-y-full translate-x-1/2 backdrop-blur-lg bg-slate-500/30">
          <li
            className={`hover:bg-accent-color rounded-xl px-1 ${selected == 'all' ? 'bg-accent-color' : ''}`}
          >
            <Button
              className="w-full text-start"
              type="button"
              onClick={() => generateColors('all')}
            >
              All
            </Button>
          </li>
          <li
            className={`hover:bg-accent-color rounded-xl px-1 ${selected == 'analogous' ? 'bg-accent-color' : ''}`}
          >
            <Button
              className="w-full text-start"
              type="button"
              onClick={() => generateColors('analogous')}
            >
              Analogous
            </Button>
          </li>
          <li
            className={`hover:bg-accent-color rounded-xl px-1 ${selected == 'monochromatic' ? 'bg-accent-color' : ''}`}
          >
            <Button
              className="w-full text-start"
              type="button"
              onClick={() => generateColors('monochromatic')}
            >
              Monochromatic
            </Button>
          </li>
          <li
            className={`hover:bg-accent-color rounded-xl px-1 ${selected == 'complementary' ? 'bg-accent-color' : ''}`}
          >
            <Button
              className="w-full text-start"
              type="button"
              onClick={() => generateColors('complementary')}
            >
              Complementary
            </Button>
          </li>
          <li
            className={`hover:bg-accent-color rounded-xl px-1 ${selected == 'triadic' ? 'bg-accent-color' : ''}`}
          >
            <Button
              className="w-full text-start"
              type="button"
              onClick={() => generateColors('triadic')}
            >
              Triadic
            </Button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dice;
