import React from 'react';
import CarCoverImg from '@/images/PDP/product-types/car-cover.png';
import TruckCoverImg from '@/images/PDP/product-types/truck-cover.png';
import SUVCoverImg from '@/images/PDP/product-types/suv-cover.png';
import VanCoverImg from '@/images/PDP/product-types/van-cover.png';
import Image from 'next/image';

const ProductTypesInfo: React.FC = () => {
  let typesArr = [
    { id: 1, image: CarCoverImg, title: 'car covers' },
    { id: 2, image: TruckCoverImg, title: 'truck covers' },
    { id: 3, image: SUVCoverImg, title: 'suv covers' },
    { id: 4, image: VanCoverImg, title: 'van covers' },
  ];
  return (
    <section className="my-4 md:my-8 lg:my-10">
      <div className="grid grid-cols-2 gap-x-5 gap-y-6">
        {typesArr.map((item, index) => {
          return (
            <div
              key={index}
              className="pt-2 pb-4 md:py-0 pl:8 pr-0 md:px-6 lg:px-12 overflow-hidden flex flex-col-reverse md:flex-row items-center justify-between rounded-lg bg-[#F9F9FB] shadow-[0_4px_14px_0_rgba(0,0,0,0.10)]"
            >
              <h4 className="text-[#1A1A1A] text-sm md:text-xl lg:text-2xl font-black uppercase text-center md:flex-1">
                {item.title}
              </h4>
              <Image
                src={item.image}
                alt={item.title}
                className="-mr-6 md:mr-0"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductTypesInfo;
