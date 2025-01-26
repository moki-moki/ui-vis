import { ChangeEvent } from 'react';

import { Lock, LockKeyhole, LockOpen } from 'lucide-react';

import { ColorTypes } from '@/types/colors';

import { Input } from '../ui/input';

interface Props {
  color: string;
  type: ColorTypes;
  isLocked: boolean;
  lockColorHandler: (type: ColorTypes) => void;
  changeColorHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ColorInput = ({
  type,
  color,
  isLocked,
  changeColorHandler,
  lockColorHandler,
}: Props) => {
  return (
    <div className="relative">
      <span className="block uppercase text-sm font-bold tracking-wide">
        {type}
      </span>
      <label
        htmlFor={type}
        className="block w-32 h-12 rounded-md cursor-pointer border-accent-color"
        style={{ backgroundColor: color }}
      >
        &nbsp;
      </label>
      <Input
        onChange={changeColorHandler}
        name={type}
        id={type}
        value={color}
        type="color"
        className="hidden "
      />
      <button
        className="absolute text-lime-50 left-1.5 bottom-1.5 mix-blend-difference hover:cursor-pointer"
        type="button"
        onClick={() => lockColorHandler(type)}
      >
        {isLocked ? <LockKeyhole size={20} /> : <LockOpen size={20} />}
      </button>
    </div>
  );
};

export default ColorInput;
