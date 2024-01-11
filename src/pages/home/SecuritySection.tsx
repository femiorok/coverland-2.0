import React from 'react';
import Image from 'next/image';
import Beach from '../../../public/images/security/security-beach.webp';
import {
  CheckSquare,
  CircleDollarSign,
  CloudRainWind,
  Shield,
  SunMedium,
  Umbrella,
} from 'lucide-react';
import { FaCheckSquare, FaShippingFast } from 'react-icons/fa';
import { RiSecurePaymentFill } from 'react-icons/ri';
import {
  BsBoxSeamFill,
  BsCheckSquareFill,
  BsFillCheckSquareFill,
} from 'react-icons/bs';
import { ImageCardBox } from '@/components/general';
import OutdoorCoverImg from '/public/images/home/outdoor-cover.png';
import IndoorCoverImg from '/public/images/home/indoor-cover.png';
import WaterProofImg from '/public/images/home/oxf-waterproof.png';
import { RoundCheckboxIcon } from '@/components/PDP/images';
import CloudIcon from '@/images/home/cloud.png';
import FeatherIcon from '@/images/home/feather.png';
import UmbrellaIcon from '@/images/home/umbrella.png';
import SettingsIcon from '@/images/home/settings.png';

const SecuritySection = () => {
  let featuredListArr = [
    {
      title: 'Weatherproof Car Covers',
      description:
        'It fully protects my car in all weather conditions. Built to be effective in all seasons.',
      icon: UmbrellaIcon,
    },
    {
      title: 'UV & Heatproof Car Covers',
      description:
        'Without heat accumulation, our covers reflect 100% of all UV rays.',
      icon: SettingsIcon,
    },
    {
      title: 'Scratchproof Car Covers',
      description:
        'Serving as a protective coat, our covers guard against scratches by kids, dirt and even cats.',
      icon: FeatherIcon,
    },
    {
      title: 'Hail, Strom, & Snowproof Car Covers',
      description:
        'Regardless of weather conditions, our covers are snowproof, waterproof and windproof.',
      icon: CloudIcon,
    },
  ];
  let checkListArr = [
    { listItem: 'Luxury thick microfiber material.' },
    { listItem: 'Indoor car covers & outdoor car covers.' },
    {
      listItem:
        'Water-proof car cover with a shield for protection from water damage.',
    },
    {
      listItem:
        'Different types of car covers in varied sizes and color options.',
    },
    { listItem: 'Protection against damage from sun and UV rays.' },
    { listItem: 'Windproof, easy buckle nylon straps and two small grommets.' },
  ];
  return (
    <>
      <section className="my-8 md:my-18 lg:my-28 py-8 md:py-18 lg:py-28 px-4 md:px-8 xl:px-16 bg-[#F9F9FB] flex flex-col gap-20 md:gap-32">
        {/* Info Card 1 */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-20">
          <ImageCardBox
            title="Outdoor car covers"
            btnText="shop now"
            bgImage={OutdoorCoverImg.src}
          />
          <div className="flex flex-col items-stretch gap-8 lg:flex-1">
            <h3
              className="text-[#1A1A1A] font-black text-2xl md:text-3xl lg:text-[34px] uppercase"
              style={{ lineHeight: '1.5' }}
            >
              Experience the best <br className="hidden lg:block" /> car cover
              in the USA
            </h3>
            <div className="flex flex-col gap-4">
              {featuredListArr.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row gap-2 md:gap-4 items-center"
                  >
                    <div className="md:flex-1">
                      <Image
                        src={item.icon}
                        alt="title"
                        width={87}
                        height={87}
                      />
                    </div>
                    <div className="flex flex-col items-center md:items-stretch gap-2 md:flex-[5]">
                      <h6 className="text-lg text-[#1A1A1A] font-semibold capitalize">
                        {item.title}
                      </h6>
                      <p className="text-base text-[#767676] font-normal text-center md:text-left">
                        {' '}
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* Info Card 2 */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 md:gap-20">
          <div className="flex flex-col items-stretch gap-8 lg:flex-1">
            <h3
              className="text-[#1A1A1A] font-black text-2xl md:text-3xl lg:text-[34px] uppercase"
              style={{ lineHeight: '1.5' }}
            >
              Custom-Fit Car Covers <br className="hidden lg:block" /> Designed
              In The USA
            </h3>
            <p className="font-normal text-[#1A1A1A] text-base">
              For every car enthusiast, owning a car is a considerable
              investment. Therefore, investing some money and effort for its
              protection is also an important step that involves buying premium
              quality car cover that is best for providing complete protection
              against extreme weather conditions. <br /> <br />
              Now, the question is what kind of car cover is best for your
              vehicle? If you have the privilege of a garage, you can use our
              indoor car covers whereas if you have to park your cars outdoors,
              you can benefit from our universal customizable car cover. All our
              indoor and outdoor covers are custom made to be perfectly fitted,
              durable, and cost-effective.
            </p>
          </div>
          <ImageCardBox
            title="Indoor car covers"
            btnText="shop now"
            bgImage={IndoorCoverImg.src}
          />
        </div>
        {/* Info Card 3 */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-20">
          <ImageCardBox
            title="Waterproof car covers"
            btnText="shop now"
            bgImage={WaterProofImg.src}
          />
          <div className="flex flex-col items-stretch gap-8 lg:flex-1">
            <h3
              className="text-[#1A1A1A] font-black text-2xl md:text-3xl lg:text-[34px] uppercase"
              style={{ lineHeight: '1.5' }}
            >
              Why Choose <br className="hidden lg:block" /> CoverLand Car
              Covers?
            </h3>
            <div className="flex flex-col gap-4">
              {checkListArr.map((item, index) => {
                return (
                  <div key={index} className="flex flex-row gap-4 items-center">
                    <div className="md:flex-2">
                      <RoundCheckboxIcon />
                    </div>
                    <p className="text-sm text-[#1A1A1A] font-normal md:flex-[5]">
                      {' '}
                      {item.listItem}
                    </p>
                  </div>
                );
              })}
            </div>
            <p className="font-normal text-[#1A1A1A] text-base">
              Our top covers are specifically made to be closely fitted on your
              vehicle in order to safeguard it from outside elements. With all
              the above-mentioned features, keep in mind our custom-made strong
              car covers ensure your car's safety. We also provide our customers
              with free shipping and an easy 30-day return policy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecuritySection;
