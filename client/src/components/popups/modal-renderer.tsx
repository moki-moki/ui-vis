import { ElementType } from 'react';

import { Check, X } from 'lucide-react';

import ButtonPopup from '@/components/popups/button-popup';
import CardPopup from '@/components/popups/card-popup';
import Button from '@/components/ui/button';
import { useModal } from '@/context/modal-context';
import { useSidebarContext } from '@/context/sidebar-context';

const ModalMap: Record<string, ElementType> = {
  button: ButtonPopup,
  card: CardPopup,
};

const ModalRender = () => {
  const { closeModal } = useModal();

  const { editingComponent, handleSubmitChanges } = useSidebarContext();

  const PopupComponent = ModalMap[editingComponent.componentName];

  return (
    <div className="fixed top-0 left-0 h-screen w-full bg-secondary-faded-color z-10">
      <div className="w-full max-w-md rounded-lg p-4 bg-secondary-color m-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-accent-color border-2">
        <div className="flex justify-between items-center">
          <Button
            className="bg-secondary-color border-none"
            onClick={closeModal}
          >
            <X />
          </Button>
          <Button
            className="hover:bg-secondary-color"
            onClick={() => handleSubmitChanges(editingComponent.id)}
          >
            <Check />
          </Button>
        </div>
        <span className="bg-accent-color block rounded-full my-2 w-full h-0.5"></span>
        <PopupComponent
          id={editingComponent.id}
          component={editingComponent}
          label={editingComponent.props.label}
        />
      </div>
    </div>
  );
};

export default ModalRender;
