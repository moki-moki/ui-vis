import Button from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSidebarContext } from '@/context/sidebar-context';
import { DroppedComponentI } from '@/types/component';
const CardPopup = () => {
  const { editingComponent, addChildCard } = useSidebarContext();
  const count = 0;

  const renderChildrenPopup = (
    child: Omit<DroppedComponentI, 'icon'>,
    count: number,
  ) => {
    count += 1;
    return child.map((el: Omit<DroppedComponentI, 'icon'>) => (
      <div>
        <div className="w-full h-0.5 rounded-full bg-accent-color mt-4 mb-2"></div>
        <div className="flex flex-col gap-2">
          <label className="text-sm uppercase font-bold text-text-color">
            Card Title {count}
          </label>
          <Input
            className="text-text-color outline-none rounded-md bg-background-color border-2 border-accent-color"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2 my-2">
          <label className="text-sm uppercase font-bold text-text-color">
            Card Description {count}
          </label>
          <Input
            className="text-text-color outline-none rounded-md bg-background-color border-2 border-accent-color"
            type="text"
          />
        </div>
        {el.properties.child && renderChildrenPopup(el.properties.child, count)}
      </div>
    ));
  };

  return (
    <div>
      <div className="flex flex-col gap-2">
        <label className="text-sm uppercase font-bold text-text-color">
          Card Title
        </label>
        <Input
          className="text-text-color outline-none rounded-md bg-background-color border-2 border-accent-color"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-2 my-2">
        <label className="text-sm uppercase font-bold text-text-color">
          Card Description
        </label>
        <Input
          className="text-text-color outline-none rounded-md bg-background-color border-2 border-accent-color"
          type="text"
        />
      </div>
      <Button
        className="hover:bg-secondary-color uppercase font-bold text-sm"
        type="button"
        onClick={addChildCard}
      >
        Add card
      </Button>
      {editingComponent.properties.child &&
        renderChildrenPopup(editingComponent.properties.child, count)}
    </div>
  );
};

export default CardPopup;
