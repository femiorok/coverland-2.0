'use client';

import React, { useEffect, useState } from 'react';
import { DropdownSearch } from './dropdown/DropdownSearch';
import bg from '/public/images/hero/home-hero-bg.png';
import mobileBg from '/public/images/hero/home-hero-mobile-bg.png';

const HeroSection: React.FC = () => {
  const [bgImage, setBgImage] = useState<string>('');

  useEffect(() => {
    setBgImage(window.innerWidth > 768 ? bg.src : mobileBg.src);
  }, []);

  return (
    <section
      className={`w-full max-w-full md:max-w-[1440px] min-h-[530px] md:min-h-[500px] relative flex flex-col justify-end items-center py-8 bg-cover`}
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full h-full flex flex-col justify-between items-center z-10">
        <div className="flex flex-row justify-center items-center w-full pb-24">
          {/* <p className="uppercase italic text-white whitespace-nowrap xs:text-md md:text-3xl lg:text-2xl font-semibold lg:whitespace-wrap">
              limited time offer <span className="text-red">50% off</span>
            </p> */}
        </div>
        <div className="flex flex-col justify-stretch items-start">
          <div className="flex flex-col justify-center items-center gap-1.5">
            <h4 className="text-xs sm:text-lg lg:text-[28px] text-center uppercase text-white md:text-2xl font-medium tracking-[1.4px] sm:mb-4">
              #1 Rated Car Cover in the USA
            </h4>
            <h2 className="text-[22px] sm:text-3xl lg:text-[55px] text-left font-black text-white uppercase">
              Select your Vehicle
            </h2>
          </div>
        </div>
        <div id="desktop-filter" className="pt-8 w-11/12">
          <DropdownSearch />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
