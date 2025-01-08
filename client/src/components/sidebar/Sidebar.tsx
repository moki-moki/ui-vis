import { useState } from 'react';

import { Component, CreditCard, SidebarIcon } from 'lucide-react';

import SidebarComponent from '@/components/sidebar/SidebarComponent';
import Button from '@/components/ui/button';
import { useSidebarContext } from '@/context/sidebar-context';

const DEFAULT_COMPONENTS = [
  {
    id: '1',
    name: 'button',
    icon: <CreditCard />,
    props: {
      label: 'Placeholder text',
    },
  },
  {
    id: '2',
    name: 'input',
    icon: <Component />,
    props: {
      label: 'Placeholder text',
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
        className="text-accent-color p-2"
        onClick={toggleMenu}
      >
        <SidebarIcon />
      </Button>
    </div>
  );
};

export default Sidebar;
