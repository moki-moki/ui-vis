import { useState } from 'react';

import { CreditCard, SidebarIcon } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

import SidebarComponent from '@/components/sidebar/sidebar-components';
import Button from '@/components/ui/button';
import { useSidebarContext } from '@/context/sidebar-context';

const DEFAULT_COMPONENTS = [
  {
    id: uuidv4(),
    name: 'button',
    icon: <CreditCard />,
    properties: {
      label: 'Placeholder text',
      variant: 'default',
    },
  },
  {
    id: uuidv4(),
    name: 'card',
    icon: <CreditCard />,
    properties: {
      label: 'Placeholder title',
      text: 'Placeholder description',
    },
  },
];

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu((prev) => !prev);

  const { handleDragStart } = useSidebarContext();

  return (
    <div className="fixed top-0 flex items-start z-10">
      {openMenu && (
        <div className="min-w-36 h-screen py-2 px-5 bg-background-color border-r border-secondary-color">
          {DEFAULT_COMPONENTS.map((component) => (
            <SidebarComponent
              key={component.id}
              component={component}
              handleDragStart={handleDragStart}
            />
          ))}
        </div>
      )}
      <Button
        type="button"
        className="m-2 border-none text-accent-color p-2"
        onClick={toggleMenu}
      >
        <SidebarIcon />
      </Button>
    </div>
  );
};

export default Sidebar;
