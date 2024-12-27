import { CheckCircle, PuzzleIcon, TimerIcon } from 'lucide-react';

import Card from '@/components/ui/card';
import SectionWrapper from '@/components/ui/section-wrapper';

const Home = () => {
  return (
    <>
      <SectionWrapper>
        <div className="flex items-center">
          <div className="flex-1">
            <h1 className="text-start text-4xl">
              Visualize your <br />
              <span className="font-bold text-accent-color mr-3">UI</span>
              and
              <span className="uppercase stroke-font ml-3">colors</span>
            </h1>
          </div>
          <div className="flex-1 flex gap-5 items-center h-80">
            <div className="bg-text-color rounded-full w-full h-full"></div>
            <div className="bg-primary-color rounded-full h-full w-full"></div>
            <div className="bg-secondary-color rounded-full h-full w-full"></div>
            <div className="bg-accent-color rounded-full h-full w-full"></div>
          </div>
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div className="flex justify-between items-center gap-5 my-10">
          <Card
            title="Save Time"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsam consectetur non, blanditiis voluptate odit! Iusto quod quo quae accusamus."
            icon={<TimerIcon size={80} />}
          />
          <Card
            title="Ease of use"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsam consectetur non, blanditiis voluptate odit! Iusto quod quo quae accusamus."
            icon={<CheckCircle size={80} />}
          />
          <Card
            title="Extensive"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsam consectetur non, blanditiis voluptate odit! Iusto quod quo quae accusamus."
            icon={<PuzzleIcon size={80} />}
          />
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div className="bg-secondary-faded-color flex p-4 rounded-xl">
          <div className="text-start w-1/2">
            <h3 className="text-4xl font-bold">Why use this?</h3>
            <h4 className="text-2xl">Personalie your color pallet and UI</h4>
          </div>
          <div className="flex flex-wrap gap-2 w-full text-start font-bold">
            <p className="before:content-['1.'] before:mr-2 before:text-accent-color before:text-2xl flex-grow w-1/3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ipsum,Lorem ipsum dolor sit amet. beatae.
            </p>
            <p className="before:content-['2.'] before:mr-2 before:text-accent-color before:text-2xl flex-grow w-1/3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Delectus eum odit aspernatur.
            </p>
            <p className="before:content-['3.'] before:mr-2 before:text-accent-color before:text-2xl flex-grow w-1/3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              beatae.
            </p>
            <p className="before:content-['4.'] before:mr-2 before:text-accent-color before:text-2xl flex-grow w-1/3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
              beatae. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Praesentium nihil excepturi nam mollitia neque, esse recusandae?
              Beatae eum ab delectus!
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Home;
