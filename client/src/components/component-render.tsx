import { ElementType, useRef } from 'react';

import ContextMenu from '@/components/context-menu';
import Button from '@/components/ui/button';
import SectionWrapper from '@/components/ui/section-wrapper';
import { useContextMenu } from '@/context/context-menu';
import { useSidebarContext } from '@/context/sidebar-context';
import { useClickOutside } from '@/hooks/useClickOutside';

const COMPONENT_MAP: Record<string, ElementType> = {
  button: ({ label, variant, props }) => (
    <Button label={label} variants={variant} {...props} />
  ),
};

const ComponentRender = () => {
  const ref = useRef(null);
  const { droppedComponents } = useSidebarContext();
  const { contextMenu, handleContextMenu, onClose } = useContextMenu();

  useClickOutside(ref, onClose);

  return (
    <>
      {droppedComponents.map((el) => {
        const Component = COMPONENT_MAP[el.id];

        return (
          <SectionWrapper key={el.id}>
            <span ref={ref} onContextMenu={handleContextMenu}>
              <Component props={el.props} variant={el.props.variant} />
            </span>
          </SectionWrapper>
        );
      })}

      {contextMenu.isVisible && <ContextMenu />}
    </>
  );
};

export default ComponentRender;
