import { SquarePen } from 'lucide-react';

import { useContextMenu } from '@/context/context-menu';

const ContextMenu = () => {
  const { contextMenu: menu } = useContextMenu();
  return (
    <div
      className="absolute p-2 border-2 border-accent-color rounded-lg bg-background-color min-w-44"
      style={{ top: `${menu.y}px`, left: `${menu.x}px` }}
    >
      <ul className="flex flex-col gap-1">
        <li className="flex items-center justify-between cursor-pointer text-xs font-bold uppercase text-text-color">
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
