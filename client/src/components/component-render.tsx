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
  button: ({ id, label, variant, properties, props }) => (
    <Button
      id={id}
      label={label}
      variants={variant}
      properties={properties}
      {...props}
    />
  ),
  card: ({ id, label, text, properties, props }) => (
    <Card
      id={id}
      text={text}
      label={label}
      properties={properties}
      {...props}
    />
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
        const { variant, label, text } = el.properties;

        return (
          <SectionWrapper key={el.id}>
            <span onContextMenu={(e) => handleContextMenu(e)}>
              <Component
                id={el.id}
                text={text}
                label={label}
                variant={variant}
                properties={el.properties}
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
