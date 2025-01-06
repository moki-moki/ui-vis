import { ReactNode } from 'react';

export interface ComponentI {
  id: string;
  name: string;
  icon: ReactNode;
}

export interface SidebarContextI {
  droppedComponents: { id: string }[];
  handleDrop: (_e: React.DragEvent) => void;
  handleDragOver: (_e: React.DragEvent) => void;
  handleDragStart: (e: React.DragEvent, name: string) => void;
}
