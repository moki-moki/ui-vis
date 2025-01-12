import { ReactNode } from 'react';

export interface ComponentI {
  id: string;
  name: string;
  icon: ReactNode;
  props: ComponentPropsI;
}

export interface DroppedComponentI extends ComponentPropsI {
  componentName: string;
}

export interface SidebarContextI {
  droppedComponents: DroppedComponentI[];
  handleDrop: (_e: React.DragEvent) => void;
  handleDragOver: (_e: React.DragEvent) => void;
  handleDragStart: (
    e: React.DragEvent,
    id: string,
    name: string,
    props: ComponentPropsI,
  ) => void;
  handleUpdateComponent: (id: string, key: string, newValue: string) => void;
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
