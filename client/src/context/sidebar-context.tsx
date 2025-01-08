import { createContext, ReactElement, useContext, useState } from 'react';

import {
  ComponentPropsI,
  DroppedComponentI,
  SidebarContextI,
} from '@/types/component';

const DEFAULT_VALUES: SidebarContextI = {
  droppedComponents: [],
  handleDrop: (_e: React.DragEvent) => {},
  handleDragOver: (_e: React.DragEvent) => {},
  handleDragStart: (
    e: React.DragEvent,
    name: string,
    props: ComponentPropsI,
  ) => {
    e.dataTransfer.setData('component', name);
    e.dataTransfer.setData('componentProps', JSON.stringify(props));
  },
};

const SidebarContext = createContext(DEFAULT_VALUES);

export const SidebarContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [droppedComponents, setDroppedComponents] = useState<
    DroppedComponentI[]
  >([]);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('component');
    const componentProps = JSON.parse(e.dataTransfer.getData('componentProps'));

    setDroppedComponents((prev) => [
      ...prev,
      { id: data, props: componentProps },
    ]);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(); // Allows dropping
  };

  const handleDragStart = (
    e: React.DragEvent,
    name: string,
    props: ComponentPropsI,
  ) => {
    e.dataTransfer.setData('component', name);
    e.dataTransfer.setData('componentProps', JSON.stringify(props));
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
