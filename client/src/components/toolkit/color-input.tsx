import { ChangeEvent } from 'react';

import { Input } from '../ui/input';

interface Props {
  color: string;
  type: 'primary' | 'secondary' | 'accent' | 'text';
  changeColorHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ColorInput = ({ color, type, changeColorHandler }: Props) => {
  return (
    <div>
      <span className="block uppercase text-sm font-bold tracking-wide">
        {type}
      </span>
      <label
        htmlFor={type}
        className={`block w-24 h-10 rounded-xl cursor-pointer`}
        style={{ backgroundColor: color }}
      ></label>
      <Input
        onChange={changeColorHandler}
        name={type}
        id={type}
        value={color}
        type="color"
        className="bg-lime-700 hidden"
      />
    </div>
  );
};

export default ColorInput;
