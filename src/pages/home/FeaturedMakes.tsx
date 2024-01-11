'use client';
import React, { useEffect, useState } from 'react';
import { makes } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const FeaturedMakes: React.FC = () => {
  const [makesCount, setMakesCount] = useState<number>(15);

  useEffect(() => {
    const handleResize = () => {
      // Set the number of visible makes based on screen width
      setMakesCount(window.innerWidth < 640 ? 8 : 15);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial count based on screen width

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const viewMore = () => {
    setMakesCount((prev) => prev + (window.innerWidth < 640 ? 4 : 5));
  };
  return (
    <section className="my-4 md:my-8 lg:my-14">
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-stretch gap-4 md:gap-8">
        <h2 className="text-black text-lg lg:text-2xl font-bold underline capitalize">
          {' '}
          featured makes
        </h2>
        <h6 className="text-[#707070] text-lg lg:text-2xl font-medium capitalize">
          Shop Car Covers by vehicle Brand
        </h6>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-auto gap-3 mt-6 md:mt-8">
        {makes.length > 0
          ? makes.slice(0, makesCount).map((item, index) => {
              return (
                <Link
                  href="/"
                  key={index}
                  className="border border-[#9C9C9C] rounded flex items-center justify-between p-4"
                >
                  <span className="text-[#343434] text-base lg:text-lg font-medium capitalize">
                    {item}
                  </span>
                  <ChevronRight size={24} color="#343434" />
                </Link>
              );
            })
          : ''}
      </div>

      {makesCount < makes.length && (
        <div className="h-11 w-40 mt-8 md:mt-14 md:mx-auto">
          <Button
            onClick={viewMore}
            className="w-full h-full text-lg bg-transparent hover:bg-[#1A1A1A] rounded-full border border-black text-base font-black text-black hover:text-white tracking-[0.32px] capitalize"
          >
            view more
          </Button>
        </div>
      )}
    </section>
  );
};

export default FeaturedMakes;
