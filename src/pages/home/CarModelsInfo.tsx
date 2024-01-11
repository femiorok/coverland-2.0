import React from 'react';
import Image from 'next/image';
import DodgeChallengerImg from '@/images/car-models/dodge-challenger-2023-str-bkgr.png';
import ChevyCorvetteImg from '@/images/car-models/chevy-corvette-c8-2020-2023-str-bkrd.png';
import MazdaMiataImg from '@/images/car-models/mazda-miata-mx-5-2016-2023-str-bkgr.png';
import ChevyElCaminoImg from '@/images/car-models/chevy-el-camino-1968-1972-str-bkrd.png';
import { Button } from '@/components/ui/button';
import { MediumSizeTitle } from '@/components/general';

const CarModelsInfo: React.FC = () => {
  let typesArr = [
    { id: 1, image: DodgeChallengerImg, title: 'Dodge Challenger' },
    { id: 2, image: ChevyCorvetteImg, title: 'Chevy Corvette' },
    { id: 3, image: MazdaMiataImg, title: 'Mazda Miata' },
    { id: 4, image: ChevyElCaminoImg, title: 'Chevy El-camino' },
  ];
  return (
    <section className="mt-8 md:mt-18 lg:mt-28 bg-[#F9F9FB] pl-4 pr-0 py-10 md:p-10">
      <MediumSizeTitle title="best-selling car models" />
      <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-5 overflow-x-auto md:overflow-hidden">
        {typesArr.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-between min-w-[60%] md:min-w-0"
            >
              <Image src={item.image} alt={item.title} className="" />
              <h4 className="text-black text-base md:text-lg lg:text-[22px] font-medium capitalize text-center ">
                {item.title}
              </h4>
              <div className="h-11 w-40 mt-5 mx-auto">
                <Button className="w-full h-full text-lg bg-transparent hover:bg-[#1A1A1A] rounded-full border border-black text-base font-black text-black hover:text-white tracking-[0.32px] capitalize">
                  shop now
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CarModelsInfo;
