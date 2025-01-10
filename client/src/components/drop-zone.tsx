import { ReactElement } from 'react';

import SectionWrapper from '@/components/ui/section-wrapper';

interface Props {
  children: ReactElement;
  onDrop: (e: React.DragEvent) => void;
  onDragOver: (e: React.DragEvent) => void;
}

const DropZone = ({ children, onDrop, onDragOver }: Props) => {
  return (
    <SectionWrapper>
      <div
        className="p-5 border border-dotted border-accent-color rounded-sm"
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        {children}
      </div>
    </SectionWrapper>
  );
};

export default DropZone;
