import { ElementType } from 'react';

import Button from '@/components/ui/button';
import SectionWrapper from '@/components/ui/section-wrapper';
import { useSidebarContext } from '@/context/sidebar-context';

const COMPONENT_MAP: Record<string, ElementType> = {
  button: ({ label, props }) => <Button label={label} {...props} />,
};

const ComponentRender = () => {
  const { droppedComponents } = useSidebarContext();

  return (
    <>
      {droppedComponents.map((el) => {
        const Component = COMPONENT_MAP[el.id];

        return (
          <SectionWrapper key={el.id}>
            <Component props={el.props} />
          </SectionWrapper>
        );
      })}
    </>
  );
};

export default ComponentRender;
