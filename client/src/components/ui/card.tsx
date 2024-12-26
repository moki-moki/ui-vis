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
      <h3 className="text-text-color text-3xl mb-2">{title}</h3>
      <p className="text-text-color text-start">{text}</p>
    </div>
  );
};

export default Card;
