import { ReactNode } from 'react';

export interface ComponentI {
  id: string;
  name: string;
  icon: ReactNode;
  properties: ComponentPropsI;
}

export interface DroppedComponentI extends ComponentPropsI {
  componentName: string;
}

export interface SidebarContextI {
  droppedComponents: DroppedComponentI[];
  editingComponent: Omit<DroppedComponentI, 'icon'>;
  handleDrop: (_e: React.DragEvent) => void;
  handleDragOver: (_e: React.DragEvent) => void;
  handleDragStart: (
    e: React.DragEvent,
    id: string,
    name: string,
    props: ComponentPropsI,
  ) => void;
  handleUpdateComponent: (id: string, key: string, newValue: string) => void;
  handleSubmitChanges: (id: string) => void;
  getEditingComponentData: (id: string) => void;
  addChildCard: () => void;
}

export interface DragStartI {
  e: React.DragEvent;
  name: string;
  props: ComponentPropsI;
}

export interface ComponentPropsI {
  // Refactor this to be generic
  [key: string]: any;
}
