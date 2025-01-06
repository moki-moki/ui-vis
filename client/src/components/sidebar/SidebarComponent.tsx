import { ComponentI } from '@/types/component';

interface Props {
  component: ComponentI;
  handleDragStart: (e: React.DragEvent, id: string) => void;
}

const SidebarComponent = ({ component, handleDragStart }: Props) => {
  // TODO: Add props to ui components
  const { name, icon } = component;

  return (
    <div
      className="border border-secondary-color rounded-xl my-3 p-5 cursor-grab flex flex-col"
      draggable={true}
      onDragStart={(e) => handleDragStart(e, name)}
    >
      <div className="m-auto text-accent-color">{icon}</div>
      <span className="text-text-color">{name}</span>
    </div>
  );
};

export default SidebarComponent;
