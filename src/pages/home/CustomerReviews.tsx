import { LargeSizeTitle } from '@/components/general';
import React from 'react';
import ReviewImg from '@/images/home/review-img-1.png';
import Image from 'next/image';
import { Star, StarsIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { RiStarSFill } from 'react-icons/ri';

const CustomerReviews: React.FC = () => {
  let reviewsArr = [
    {
      id: 1,
      title: 'Excellent quality cover for my car',
      review:
        'Great products with customer service second to none. Attention to detail is extremely impressive.',
      rating: 5,
      userName: 'Raul',
      image: ReviewImg,
    },
  ];
  return (
    <section className="my-8 md:my-18 lg:my-28">
      <LargeSizeTitle
        title="car cover reviews"
        subtitle="Thousands of happy customers!"
        isTitleBelow
      />

      <div className="bg-[#F4F4F4] px-8 md:px-10 pt-8 md:pt-20 lg:pt-28 pb-12 mt-11">
        {reviewsArr.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-8 md:gap-16 lg:gap-20 xl:gap-36"
            >
              <div className="rounded-3xl overflow-hidden w-full h-52 md:h-80 lg:w-[619px] lg:h-[397px]">
                <Image
                  src={item.image}
                  alt={'review'}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col items-center lg:items-stretch gap-6 lg:gap-10">
                <div className="flex flex-col items-center lg:items-stretch gap-4">
                  <div className="flex items-center gap-2">
                    {Array.from({ length: item.rating }, (_, i) => (
                      <Star key={i} fill="#FFD80E" stroke="#FF9F47" size={45} />
                    ))}
                  </div>
                  <h6 className="text-2xl text-[#1A1A1A] font-bold capitalize text-center lg:text-left">
                    {item.title}
                  </h6>
                </div>
                <div className="flex flex-col items-center lg:items-stretch gap-3">
                  <p className="text-xl text-[#1A1A1A] font-normal w-full lg:w-[518px] leading-8 text-center lg:text-left">{`“${item.review}”`}</p>
                  <h6 className="text-[#626262] text-xl font-normal italic">
                    {item.userName}
                  </h6>
                </div>

                <Button className="h-12 w-52 capitalize rounded flex items-center justify-center text-lg bg-[#BE1B1B] text-white font-black text-base">
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

export default CustomerReviews;
