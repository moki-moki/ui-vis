import { Input } from '@/components/ui/input';

const CardPopup = () => {
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
    </div>
  );
};

export default CardPopup;
