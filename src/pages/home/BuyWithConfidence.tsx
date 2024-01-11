import {
  DollarSignIcon,
  ReturnBoxIcon,
  SafeShoppingIcon,
  SameDayShippingIcon,
} from '@/components/PDP/images';
import { LargeSizeTitle } from '@/components/general';
import React from 'react';

const BuyWithConfidence: React.FC = () => {
  let buyFeaturesArr = [
    {
      id: 1,
      image: <ReturnBoxIcon />,
      title: '30-Day Free Returns',
      subtitle: 'Return Label Included',
    },
    {
      id: 2,
      image: <DollarSignIcon />,
      title: '90-Day Full Money Back',
      subtitle: 'No Restocking Fees',
    },
    {
      id: 3,
      image: <SameDayShippingIcon />,
      title: 'Same-Day Free Shipping',
      subtitle: 'All Orders Over $50',
    },
    {
      id: 4,
      image: <SafeShoppingIcon />,
      title: 'Safe Shopping',
      subtitle: 'Protection Against Fraud',
    },
  ];
  return (
    <section className="my-8 md:my-18 lg:my-28">
      <LargeSizeTitle title="Buy with confidence" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-20 lg:gap-28 mt-14 mt-16 lg:mt-20">
        {buyFeaturesArr.map((item, index) => {
          return (
            <div className="flex flex-col items-center justify-center">
              <div className="mb-4">{item.image}</div>
              <h5 className="text-[#1A1A1A] text-lg font-bold capitalize leading-9">
                {item.title}
              </h5>
              <h6 className="text-[#727272] text-base font-normal text-center">
                {item.subtitle}
              </h6>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BuyWithConfidence;
