import Button from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSidebarContext } from '@/context/sidebar-context';

const ButtonPopup = ({ label, id }: { label: string; id: string }) => {
  const { handleUpdateComponent } = useSidebarContext();

  return (
    <div className="p-4">
      <div className="flex items-center my-2">
        <Button
          className="rounded-full rounded-r-none border-r-0"
          onClick={() => handleUpdateComponent(id, 'variant', 'default')}
        >
          Ghosted
        </Button>
        <Button
          className="rounded-full rounded-l-none"
          onClick={() => handleUpdateComponent(id, 'variant', 'outlined')}
        >
          Outlined
        </Button>
      </div>
      <Input
        value={label}
        onChange={(e) => handleUpdateComponent(id, 'label', e.target.value)}
      />
    </div>
  );
};

export default ButtonPopup;
