import Button from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSidebarContext } from '@/context/sidebar-context';
import { DroppedComponentI } from '@/types/component';
const CardPopup = () => {
  const { editingComponent, addChildCard, handleUpdateComponent } =
    useSidebarContext();
  let count = 1;

  const incrementCount = () => count++;

  const renderChildrenPopup = (
    child: Omit<DroppedComponentI, 'icon'>,
    count: number,
  ) => {
    incrementCount();
    return child.map((el: Omit<DroppedComponentI, 'icon'>, idx: number) => (
      <div key={idx}>
        <div className="w-full h-0.5 rounded-full bg-accent-color mt-4 mb-2"></div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="title"
            className="text-sm uppercase font-bold text-text-color"
          >
            Card Title {count}
          </label>
          <Input
            className="p-1 text-text-color outline-none rounded-md bg-background-color border-2 border-accent-color"
            type="text"
            name="title"
            value={el.properties.label}
            onChange={(e) =>
              handleUpdateComponent(el.id, 'label', e.target.value)
            }
          />
        </div>
        <div className="flex flex-col gap-2 my-2">
          <label
            htmlFor="text"
            className="text-sm uppercase font-bold text-text-color"
          >
            Card Description {count}
          </label>
          <Input
            className="p-1 text-text-color outline-none rounded-md bg-background-color border-2 border-accent-color"
            type="text"
            name="text"
            value={el.properties.text}
            onChange={(e) =>
              handleUpdateComponent(el.id, 'text', e.target.value)
            }
          />
        </div>
        {el.properties.child && renderChildrenPopup(el.properties.child, count)}
      </div>
    ));
  };

  return (
    <div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="label"
          className="text-sm uppercase font-bold text-text-color"
        >
          Card Title
        </label>
        <Input
          className="p-1 text-text-color outline-none rounded-md bg-background-color border-2 border-accent-color"
          type="text"
          name="label"
          value={editingComponent.properties.label}
          onChange={(e) =>
            handleUpdateComponent(editingComponent.id, 'label', e.target.value)
          }
        />
      </div>
      <div className="flex flex-col gap-2 my-2">
        <label
          htmlFor="text"
          className="text-sm uppercase font-bold text-text-color"
        >
          Card Description
        </label>
        <Input
          className="p-1 text-text-color outline-none rounded-md bg-background-color border-2 border-accent-color"
          type="text"
          name="text"
          value={editingComponent.properties.text}
          onChange={(e) =>
            handleUpdateComponent(editingComponent.id, 'text', e.target.value)
          }
        />
      </div>
      {editingComponent.properties.child &&
        renderChildrenPopup(editingComponent.properties.child, count)}

      {count < 3 ? (
        <Button
          className="outline-none hover:bg-secondary-color uppercase font-bold text-sm"
          type="button"
          onClick={addChildCard}
        >
          Add card
        </Button>
      ) : null}
    </div>
  );
};

export default CardPopup;
