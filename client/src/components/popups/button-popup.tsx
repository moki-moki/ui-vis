import { Input } from '@/components/ui/input';
import { useSidebarContext } from '@/context/sidebar-context';
import { DroppedComponentI } from '@/types/component';

const ButtonPopup = ({
  id,
  component,
  label,
}: {
  id: string;
  component: DroppedComponentI;
  label: string;
}) => {
  const { handleUpdateComponent } = useSidebarContext();

  return (
    <>
      <h5 className="text-sm uppercase font-bold mb-2">Button Styles</h5>
      <div className="flex items-center w-1/2">
        <label
          className="relative flex-grow p-1 cursor-pointer "
          htmlFor="btnStyle"
        >
          <span className="block relative pointer-events-none z-20 p-2">
            Outlined
          </span>
          <Input
            onChange={() => handleUpdateComponent(id, 'variant', 'default')}
            defaultChecked={component.props.variant === 'default'}
            name="btnStyle"
            value="default"
            type="radio"
            className="w-full absolute top-0 left-0 peer h-full cursor-pointer appearance-none rounded-full border border-accent-color rounded-r-none border-r-0 checked:bg-primary-color transition-all"
          />
        </label>

        <label
          className="relative flex-grow p-1 cursor-pointer"
          htmlFor="solid"
        >
          <span className="block pointer-events-none relative z-20 p-2">
            Solid
          </span>
          <Input
            onChange={() => handleUpdateComponent(id, 'variant', 'outlined')}
            defaultChecked={component.props.variant === 'outlined'}
            value="outlined"
            name="btnStyle"
            type="radio"
            className="w-full absolute top-0 left-0 peer h-full cursor-pointer appearance-none rounded-full border border-accent-color rounded-l-none checked:bg-primary-color transition-all"
          />
        </label>
      </div>
      <div className="my-4">
        <label
          htmlFor="text"
          className="block text-sm uppercase font-bold my-2"
        >
          Button Text
        </label>
        <Input
          name="text"
          type="text"
          value={label}
          onChange={(e) => handleUpdateComponent(id, 'label', e.target.value)}
          className="p-2 w-full border-2 outline-none rounded-md border-accent-color"
        />
      </div>
    </>
  );
};

export default ButtonPopup;
