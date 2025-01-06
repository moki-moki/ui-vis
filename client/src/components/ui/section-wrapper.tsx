import { ReactElement } from 'react';

const SectionWrapper = ({ children }: { children: ReactElement }) => {
  return (
    <section className="m-auto my-10 max-w-screen-2xl">
      <div className="p-2 my-10">{children}</div>
    </section>
  );
};

export default SectionWrapper;
