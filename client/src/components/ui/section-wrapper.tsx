import { ReactElement } from 'react';

const SectionWrapper = ({ children }: { children: ReactElement }) => {
  return (
    <section className="m-auto max-w-screen-2xl">
      <div className="p-2 my-10 border-2 border-background-color">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
