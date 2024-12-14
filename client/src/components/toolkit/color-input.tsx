import { Input } from '../ui/input';

interface Props {
  color: string;
  type: 'primary' | 'secondary' | 'accent' | 'text';
}

const ColorInput = ({ color, type }: Props) => {
  return (
    <>
      <span className="block uppercase text-sm font-bold tracking-wide">
        {type}
      </span>
      <label
        htmlFor={type}
        className={`block w-24 h-10 rounded-xl cursor-pointer`}
        style={{ backgroundColor: color }}
      ></label>
      <Input
        defaultValue={color}
        name={type}
        id={type}
        type="color"
        className="bg-lime-700 hidden"
      />
    </>
  );
};

export default ColorInput;
