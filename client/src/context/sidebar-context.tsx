import { createContext, ReactElement, useContext, useState } from 'react';

import { SidebarContextI } from '@/types/component';

const DEFAULT_VALUES: SidebarContextI = {
  droppedComponents: [],
  handleDrop: (_e: React.DragEvent) => {},
  handleDragOver: (_e: React.DragEvent) => {},
  handleDragStart: (e: React.DragEvent, name: string) => {
    e.dataTransfer.setData('component', name);
  },
};

const SidebarContext = createContext(DEFAULT_VALUES);

export const SidebarContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [droppedComponents, setDroppedComponents] = useState<{ id: string }[]>(
    [],
  );

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('component');

    setDroppedComponents((prev) => [...prev, { id: data }]);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(); // Allows dropping
  };

  const handleDragStart = (e: React.DragEvent, name: string) => {
    e.dataTransfer.setData('component', name);
  };

  return (
    <SidebarContext.Provider
      value={{ handleDrop, handleDragOver, handleDragStart, droppedComponents }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => {
  const context = useContext(SidebarContext);

  if (context === undefined) {
    throw new Error('useSidebarContext must be within a app pages layout');
  }

  return context;
};
