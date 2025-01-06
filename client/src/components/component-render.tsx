import { ElementType } from 'react';

import Button from '@/components/ui/button';
import SectionWrapper from '@/components/ui/section-wrapper';
import { useSidebarContext } from '@/context/sidebar-context';

const ComponentMap: Record<string, ElementType> = {
  button: () => <Button>Button</Button>,
};

const ComponentRender = () => {
  const { droppedComponents } = useSidebarContext();

  return (
    <>
      {droppedComponents.map((el) => {
        const Component = ComponentMap[el.id];

        return (
          <SectionWrapper key={el.id}>
            <Component />
          </SectionWrapper>
        );
      })}
    </>
  );
};

export default ComponentRender;
