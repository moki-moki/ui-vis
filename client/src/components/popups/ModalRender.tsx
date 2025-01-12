import { ElementType } from 'react';

import { Check, X } from 'lucide-react';

import ButtonPopup from '@/components/popups/ButtonPopup';

const ModalMap: Record<string, ElementType> = {
  button: ButtonPopup,
};

interface Props {
  id: string;
  type: string;
  label: string;
}

const ModalRender = ({ label, id, type }: Props) => {
  const PopupComponent = ModalMap[type];

  return (
    <div className="w-full max-w-md rounded-lg bg-secondary-color m-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="flex justify-between items-center text-accent-color border-b-2 border-accent-color p-4">
        <div>
          <X />
        </div>
        <div>
          <Check />
        </div>
      </div>
      <PopupComponent id={id} label={label} />
    </div>
  );
};

export default ModalRender;
