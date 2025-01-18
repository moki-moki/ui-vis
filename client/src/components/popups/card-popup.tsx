import { Input } from '@/components/ui/input';
import { useSidebarContext } from '@/context/sidebar-context';

const CardPopup = () => {
  const { addChildCard } = useSidebarContext();
  return (
    <div>
      <div>
        <label>Card Title</label>
        <Input type="text" />
      </div>
      <div>
        <label>Card Description</label>
        <Input type="text" />
      </div>
      <button type="button" onClick={addChildCard}>
        Add card
      </button>
    </div>
  );
};

export default CardPopup;
