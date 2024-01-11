import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LargeSizeTitle, YTVideo } from '@/components/general';
import { Button } from '@/components/ui/button';

const SolutionSection: React.FC = () => {
  return (
    <section className="my-8 md:my-18 lg:my-28">
      <LargeSizeTitle title="Perfect Solution For All Weather" />
      <div className="bg-[#1A1A1A] mt-8 px-4 md:px-0 pt-12 md:pt-16 lg:pt-24 pb-6 lg:pb-10">
        <div className="w-full md:w-4/5 h-48 md:h-[500px] lg:h-[641px] mx-auto">
          <YTVideo
            url="https://www.youtube.com/embed/MzF7jIIkDAo?si=t-6lccUtdSOH0NZM"
            width={'100%'}
            height={'100%'}
            title="Product Video"
          />
        </div>

        <Button className="h-12 w-52 capitalize rounded mt-8 mx-auto flex items-center justify-center text-lg bg-[#BE1B1B] text-white font-black text-base">
          shop now
        </Button>
      </div>
    </section>
  );
};

export default SolutionSection;
