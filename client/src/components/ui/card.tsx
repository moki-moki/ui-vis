import { TimerIcon } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

import { ComponentPropsI } from '@/types/component';

interface Props extends ComponentPropsI {
  label: string;
  text: string;
}

const Card = ({
  id,
  label,
  icon = <TimerIcon size={80} />,
  text,
  properties,
  ...props
}: Props) => {
  return (
    <>
      <div
        className="flex gap-2 items-center justify-center"
        key={uuidv4()}
        data-id={id}
      >
        <div className="flex gap-2 items-center max-w-screen-lg">
          <div
            className="flex flex-col p-4 rounded-xl bg-secondary-faded-color w-full m-auto"
            {...props}
          >
            <span className="self-center text-accent-color">{icon}</span>
            <div className="relative">
              <h3 className="text-text-color text-3xl mb-2">{label}</h3>
              <span className="absolute bottom-1/3 left-0 translate-x-1/2 h-2 w-1/2 bg-secondary-faded-color ease-in duration-200 rounded-full hover:h-3.5"></span>
            </div>
            <p className="text-text-color text-start">{text}</p>
          </div>
        </div>

        {properties?.child &&
          properties?.child.map((el: ComponentPropsI) => {
            return (
              <Card
                key={uuidv4()}
                text={el.text}
                label={el.label}
                properties={el.properties}
                id={el.id}
                icon={<TimerIcon size={80} />}
              />
            );
          })}
      </div>
    </>
  );
};

export default Card;
