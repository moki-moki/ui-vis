import { createContext, ReactElement, useContext, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import {
  ComponentPropsI,
  DroppedComponentI,
  SidebarContextI,
} from '@/types/component';

const DEFAULT_VALUES: SidebarContextI = {
  droppedComponents: [],
  editingComponent: {},
  handleDrop: (_e: React.DragEvent) => {},
  handleDragOver: (_e: React.DragEvent) => {},
  handleDragStart: (
    e: React.DragEvent,
    id: string,
    name: string,
    props: ComponentPropsI,
  ) => {
    e.dataTransfer.setData('id', id);
    e.dataTransfer.setData('name', name);
    e.dataTransfer.setData('componentProps', JSON.stringify(props));
  },
  handleUpdateComponent: (_id: string) => {},
  handleSubmitChanges: (_id: string) => {},
  getEditingComponentData: (_id: string) => {},
  addChildCard: () => {},
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

  const [editingComponent, setEditingComponent] = useState<
    Omit<DroppedComponentI, 'icon'>
  >({});

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('id');
    const name = e.dataTransfer.getData('name');
    const componentProps = JSON.parse(e.dataTransfer.getData('componentProps'));

    setDroppedComponents((prev) => [
      ...prev,
      { id, componentName: name, properties: componentProps },
    ]);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(); // Allows dropping
  };

  const handleDragStart = (
    e: React.DragEvent,
    id: string,
    name: string,
    properties: ComponentPropsI,
  ) => {
    e.dataTransfer.setData('id', id);
    e.dataTransfer.setData('name', name);
    e.dataTransfer.setData('componentProps', JSON.stringify(properties));
  };

  const handleUpdateComponent = (id: string, key: string, newValue: string) => {
    setEditingComponent((prev) =>
      prev.id === id
        ? { ...prev, props: { ...prev.properties, [key]: newValue } }
        : prev,
    );
  };

  const handleSubmitChanges = (id: string) => {
    setDroppedComponents((prev) =>
      prev.map((el) => (el.id === id ? { ...el, ...editingComponent } : el)),
    );
  };

  const addChildCard = () => {
    const newCard = {
      id: uuidv4(),
      label: 'Placeholder Title',
      text: 'Placeholder description',
      properties: {},
    };

    const addChildrenRecursivly = (prev: Omit<DroppedComponentI, 'icon'>) => {
      if (prev.properties.child) {
        return {
          ...prev,
          properties: {
            ...prev.properties,
            child: prev.properties.child.map(addChildrenRecursivly),
          },
        };
      } else {
        return {
          ...prev,
          properties: {
            ...prev.properties,
            child: prev.properties.child
              ? [...prev.properties.child, newCard]
              : [newCard],
          },
        };
      }
    };

    setEditingComponent((prev) => addChildrenRecursivly(prev));
  };

  const getEditingComponentData = (id: string) => {
    const component = droppedComponents.find((el) => el.id === id);

    if (component) setEditingComponent(component);
  };

  return (
    <SidebarContext.Provider
      value={{
        droppedComponents,
        editingComponent,
        handleDrop,
        addChildCard,
        handleDragOver,
        handleDragStart,
        handleSubmitChanges,
        handleUpdateComponent,
        getEditingComponentData,
      }}
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
