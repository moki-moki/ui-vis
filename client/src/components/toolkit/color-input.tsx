import { ChangeEvent } from 'react';

import { Input } from '../ui/input';

interface Props {
  color: string;
  type: 'primary' | 'secondary' | 'accent' | 'text';
  changeColorHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ColorInput = ({ color, type, changeColorHandler }: Props) => {
  console.log(color);
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
        defaultValue={color}
        name={type}
        id={type}
        type="color"
        className="bg-lime-700 hidden"
      />
    </div>
  );
};

export default ColorInput;
