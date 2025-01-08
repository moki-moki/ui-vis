import { ReactNode } from 'react';

export interface ComponentI {
  id: string;
  name: string;
  icon: ReactNode;
  props: ComponentPropsI;
}

export interface DroppedComponentI extends ComponentPropsI {
  id: string;
}

export interface SidebarContextI {
  droppedComponents: DroppedComponentI[];
  handleDrop: (_e: React.DragEvent) => void;
  handleDragOver: (_e: React.DragEvent) => void;
  handleDragStart: (
    e: React.DragEvent,
    name: string,
    props: ComponentPropsI,
  ) => void;
}

export interface ComponentPropsI {
  // Refactor this to be generic
  [key: string]: any;
}
