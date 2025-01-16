import { ElementType } from 'react';

import { createPortal } from 'react-dom';

import ContextMenu from '@/components/context-menu';
import ModalRender from '@/components/popups/modal-renderer';
import Button from '@/components/ui/button';
import Card from '@/components/ui/card';
import SectionWrapper from '@/components/ui/section-wrapper';
import { useContextMenu } from '@/context/context-menu';
import { useModal } from '@/context/modal-context';
import { useSidebarContext } from '@/context/sidebar-context';

const COMPONENT_MAP: Record<string, ElementType> = {
  button: ({ id, label, variant, props }) => (
    <Button id={id} label={label} variants={variant} {...props} />
  ),
  card: ({ id, props }) => <Card id={id} {...props} />,
};

const ComponentRender = () => {
  const { droppedComponents } = useSidebarContext();
  const { contextMenu, handleContextMenu } = useContextMenu();
  const { isOpen } = useModal();

  return (
    <>
      {droppedComponents.map((el) => {
        const Component = COMPONENT_MAP[el.componentName];

        return (
          <SectionWrapper key={el.id}>
            <span onContextMenu={(e) => handleContextMenu(e)}>
              <Component
                id={el.id}
                props={el.props}
                variant={el.props.variant}
              />
            </span>
          </SectionWrapper>
        );
      })}
      {contextMenu.isVisible && <ContextMenu />}
      {isOpen && createPortal(<ModalRender />, document.body)}
    </>
  );
};

export default ComponentRender;
