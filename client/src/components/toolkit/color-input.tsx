import { ChangeEvent } from 'react';

import { Lock, LockOpen } from 'lucide-react';

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
  color,
  type,
  changeColorHandler,
  isLocked,
  lockColorHandler,
}: Props) => {
  return (
    <div className="relative">
      <span className="block uppercase text-sm font-bold tracking-wide">
        {type}
      </span>
      <label
        htmlFor={type}
        className={`block w-24 h-10 rounded-xl cursor-pointer`}
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
        className="bg-lime-700 hidden"
      />
      <button
        className="absolute left-1.5 bottom-1.5 text-teal-50 hover:cursor-pointer hover:bg-slate-400"
        type="button"
        onClick={() => lockColorHandler(type)}
      >
        {isLocked ? <Lock size={15} /> : <LockOpen size={15} />}
      </button>
    </div>
  );
};

export default ColorInput;
