import { useRef } from 'react';

import { SquarePen } from 'lucide-react';

import { useContextMenu } from '@/context/context-menu';
import { useModal } from '@/context/modal-context';
import { useClickOutside } from '@/hooks/useClickOutside';

const ContextMenu = () => {
  const { contextMenu: menu, onClose } = useContextMenu();
  const { openModal } = useModal();

  const ref = useRef(null);

  useClickOutside(ref, onClose);

  return (
    <div
      className="absolute p-2 border-2 border-accent-color rounded-lg bg-background-color min-w-44"
      style={{ top: `${menu.y}px`, left: `${menu.x}px` }}
      ref={ref}
    >
      <ul className="flex flex-col gap-1">
        <li
          className="flex items-center justify-between cursor-pointer text-xs font-bold uppercase text-text-color"
          onClick={openModal}
        >
          Edit
          <span className="mr-2 block text-end">
            <SquarePen size={15} />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ContextMenu;
