import { DEFAULT_COLORS } from '../../data/colors';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import ColorInput from './color-input';

const Toolkit = () => {
  const [colors] = useLocalStorage('colors', DEFAULT_COLORS);
  return (
    <div className="bg-slate-500/30 backdrop-blur-lg p-5 flex justify-between items-center max-w-4xl m-auto absolute bottom-2 left-0 right-0 rounded-xl">
      <div>
        <ColorInput type="primary" color={colors.primary} />
      </div>
      <div>
        <ColorInput type="text" color={colors.text} />
      </div>
      <div>
        <ColorInput type="secondary" color={colors.secondary} />
      </div>
      <div>
        <ColorInput type="accent" color={colors.accent} />
      </div>
    </div>
  );
};

export default Toolkit;
