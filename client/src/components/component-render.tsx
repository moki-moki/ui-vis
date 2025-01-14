import { ElementType } from 'react';

import { createPortal } from 'react-dom';

import ContextMenu from '@/components/context-menu';
import ModalRender from '@/components/popups/ModalRender';
import Button from '@/components/ui/button';
import SectionWrapper from '@/components/ui/section-wrapper';
import { useContextMenu } from '@/context/context-menu';
import { useModal } from '@/context/modal-context';
import { useSidebarContext } from '@/context/sidebar-context';

const COMPONENT_MAP: Record<string, ElementType> = {
  button: ({ label, variant, props }) => (
    <Button label={label} variants={variant} {...props} />
  ),
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
            <>
              <span onContextMenu={(e) => handleContextMenu(e)}>
                <Component props={el.props} variant={el.props.variant} />
              </span>
              {isOpen &&
                createPortal(
                  <ModalRender
                    id={el.id}
                    component={el}
                    label={el.props.label}
                    type={el.componentName}
                  />,
                  document.body,
                )}
              {contextMenu.isVisible && <ContextMenu id={el.id} />}
            </>
          </SectionWrapper>
        );
      })}
    </>
  );
};

export default ComponentRender;
