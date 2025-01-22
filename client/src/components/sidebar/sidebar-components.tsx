import { ComponentI, ComponentPropsI } from '@/types/component';

interface Props {
  component: ComponentI;
  handleDragStart: (
    e: React.DragEvent,
    name: string,
    properties: ComponentPropsI,
  ) => void;
}

const SidebarComponent = ({ component, handleDragStart }: Props) => {
  const { name, icon, properties } = component;

  return (
    <div
      className="border border-secondary-color rounded-xl my-3 p-5 cursor-grab flex flex-col"
      draggable={true}
      onDragStart={(e) => handleDragStart(e, name, properties)}
    >
      <div className="m-auto text-accent-color">{icon}</div>
      <span className="text-text-color">{name}</span>
    </div>
  );
};

export default SidebarComponent;
