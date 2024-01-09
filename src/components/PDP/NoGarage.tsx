'use client';
import Garage from '@/images/PDP/no_garage.webp';
import Image from 'next/image';

export function NoGarage() {
  return (
    <div className="relative w-full">
      <div className="-z-0">
        <Image
          alt="product"
          src={Garage}
          placeholder="blur"
          quality={75}
          className="object-cover w-full"
        />
      </div>
      <div className="absolute top-[35px] left-[-40px] w-full h-full flex flex-col items-stretch">
        <p className="text-[#494949] font-black sm:text-xl md:text-3xl lg:text-5xl uppercase text-right tracking-[1.35px]">
          No Garage? No problem!
        </p>
      </div>
    </div>
  );
}
