import React from 'react';
import Image from 'next/image';
import ChevyBrandImg from '/public/images/car-brands/chevy-brand.png';
import DodgeBrandImg from '/public/images/car-brands/dodge-brand.png';
import FordBrandImg from '/public/images/car-brands/ford-brand.png';
import RamBrandImg from '/public/images/car-brands/ram-brand.png';
import { Button } from '@/components/ui/button';
import { MediumSizeTitle } from '@/components/general';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const TrendingCarBrands: React.FC = () => {
  let brandsArr = [
    { id: 1, image: ChevyBrandImg.src, title: 'chevy' },
    { id: 2, image: DodgeBrandImg.src, title: 'dodge' },
    { id: 3, image: FordBrandImg.src, title: 'ford' },
    { id: 4, image: RamBrandImg.src, title: 'ram' },
  ];
  return (
    <section className="bg-[#F9F9FB] pl-4 pr-0 py-10 md:p-10">
      <MediumSizeTitle title="trending car brands" />
      <div className="flex md:grid md:grid-cols-3 lg:grid-cols-4 gap-5 overflow-x-auto md:overflow-hidden mt-8">
        {brandsArr.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-start justify-end md:justify-center gap-5 min-w-[60%] md:min-w-0 h-[227px] md:h-[367px] rounded-[6px] overflow-hidden p-6 lg:px-8 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <h4 className="text-white text-2xl md:text-3xl lg:text-4xl font-black capitalize text-left mt-0 md:mt-28">
                {item.title}
              </h4>

              <Link
                href="/"
                className="h-auto flex items-end justify-stretch gap-1.5 hover:underline text-white"
              >
                <span className="font-medium text-white text-sm md:text-base capitalize">
                  {`see all-${item.title}`}
                  <br /> custom car covers
                </span>
                <ArrowRight size={16} color="#fff" />
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TrendingCarBrands;
