import { ReactElement } from 'react';

interface Props {
  title: string;
  text: string;
  icon: ReactElement;
}

const Card = ({ title, icon, text }: Props) => {
  return (
    <div className="flex flex-col p-4 rounded-xl bg-secondary-faded-color">
      <span className="self-center text-accent-color">{icon}</span>
      <div className="relative">
        <h3 className="text-text-color text-3xl mb-2">{title}</h3>
        <span className="absolute bottom-1/3 left-0 translate-x-1/2 h-2 w-1/2 bg-secondary-faded-color ease-in duration-200 rounded-full hover:h-3.5"></span>
      </div>
      <p className="text-text-color text-start">{text}</p>
    </div>
  );
};

export default Card;
