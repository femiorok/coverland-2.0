import React from 'react';
import Image from 'next/image';
import Beach from '../../../public/images/security/security-beach.webp';
import {
  CircleDollarSign,
  CloudRainWind,
  Shield,
  SunMedium,
  Umbrella,
} from 'lucide-react';
import { FaShippingFast } from 'react-icons/fa';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { BsBoxSeamFill } from 'react-icons/bs';

const SecuritySection = () => {
  return (
    <>
      <section className="px-4 md:px-24 lg:px-20 xxl:px-0 w-screen h-auto bg-white flex flex-col max-w-[1440px] lg:pt-20">
        <div className="flex flex-col xl:flex-row justify-center items-center ">
          <div className="flex flex-col justify-center items-start h-full">
            <div className="pb-20 lg:pb-10 pt-20 lg:pt-0 w-full">
              <h1 className=" text-2xl uppercase font-extrabold md:text-5xl text-dark text-center xl:text-left">
                Experience the Best Security
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-6">
              <div className="flex flex-row w-full pb-8 lg:pb-10">
                <div className="bg-offWhite flex flex-row justify-center items-center w-14 h-14 icon-shadow rounded-lg mr-8">
                  <Umbrella size={30} color="#185CFF" />
                </div>
                <div className="flex flex-col justify-start items-start w-3/4">
                  <h2 className="text-xl lg:text-lg capitalize lg:uppercase font-semibold text-dark">
                    Weatherproof
                  </h2>
                  <p className=" text-dark">
                    It fully protects my car in all weather conditions. Built to
                    be effective in all seasons.
                  </p>
                </div>
              </div>
              <div className="flex flex-row w-full pb-8 md:pb-10">
                <div className="bg-offWhite flex flex-row justify-center items-center w-14 h-14 icon-shadow rounded-lg mr-8">
                  <SunMedium size={30} color="#185CFF" />
                </div>
                <div className="flex flex-col justify-start items-start w-3/4">
                  <h2 className="text-xl lg:text-lg capitalize lg:uppercase font-semibold text-dark">
                    UV & Heat Protection
                  </h2>
                  <p className=" text-dark">
                    Without heat accumulation, our covers reflect 100% of all UV
                    rays.
                  </p>
                </div>
              </div>
              <div className="flex flex-row w-full pb-8 md:pb-10">
                <div className="bg-offWhite flex flex-row justify-center items-center w-14 h-14 icon-shadow rounded-lg mr-8">
                  <Shield size={30} color="#185CFF" />
                </div>
                <div className="flex flex-col justify-start items-start w-3/4">
                  <h2 className="text-xl lg:text-lg capitalize lg:uppercase font-semibold text-dark">
                    Scratchproof
                  </h2>
                  <p className=" text-dark">
                    Serving as a protective coat, our covers guard against
                    scratches by kids, dirt and even cats.
                  </p>
                </div>
              </div>
              <div className="flex flex-row w-full pb-4 lg:pb-0">
                <div className="bg-offWhite flex flex-row justify-center items-center w-14 h-14 icon-shadow rounded-lg mr-8">
                  <CloudRainWind size={30} color="#185CFF" />
                </div>
                <div className="flex flex-col justify-start items-start w-3/4">
                  <h2 className="text-xl lg:text-lg capitalize lg:uppercase font-semibold text-dark">
                    Hail, Storm & Snow Protection
                  </h2>
                  <p className="text-dark text-base">
                    Regardless of weather conditions, our covers are snowproof,
                    waterproof and windproof.{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end items-start object-cover pb-4 pt-4 md:pt-16 md:pb-0 w-full">
            <Image
              src={Beach}
              className=" w-full rounded-xl"
              alt="a fully-covered vehicle with a coverland car cover on it"
            />
          </div>
        </div>
      </section>
      <div className="px-4 md:px-24 lg:px-20 xxl:px-0 w-screen h-auto bg-white flex flex-col max-w-[1440px] pt-8 md:pt-20">
        <div className="flex flex-col lg:flex-row justify-center items-start ">
          <div className="flex flex-col justify-center items-start h-full">
            <div className="pb-10 lg:pb-20 pt-0 w-full">
              <h1 className=" text-2xl uppercase font-extrabold md:text-5xl text-dark text-center  xl:text-center">
                Buy with confidence
              </h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8"'>
              <div className="flex flex-row md:flex-col md:justify-start md:items-center w-full pb-8 lg:pb-0">
                <CircleDollarSign size={55} color="#185CFF" />

                <div className="flex flex-col justify-start items-start md:items-center w-full ml-8 md:ml-0">
                  <h2 className="text-xl lg:text-lg capitalize lg:uppercase font-semibold text-dark xl:py-4 text-left md:text-center">
                    90-Day Money Back
                  </h2>
                  <p className=" text-dark text-base text-left md:text-center">
                    Purchase confidently, knowing we offer a full 90-day
                    money-back guarantee.
                  </p>
                </div>
              </div>
              <div className="flex flex-row md:flex-col md:justify-start md:items-center w-full pb-8 lg:pb-0">
                <RiSecurePaymentFill size={55} color="#185CFF" />

                <div className="flex flex-col justify-start items-start md:items-center w-full ml-8 md:ml-0">
                  <h2 className="text-xl lg:text-lg capitalize lg:uppercase font-semibold text-dark xl:py-4 text-left md:text-center">
                    Secure Shopping
                  </h2>
                  <p className=" text-dark text-base text-left md:text-center">
                    Rest easy with our commitment to the highest standards of
                    secure shopping.
                  </p>
                </div>
              </div>
              <div className="flex flex-row md:flex-col md:justify-start md:items-center w-full pb-8 lg:pb-0">
                <FaShippingFast size={55} color="#185CFF" />

                <div className="flex flex-col justify-start items-start md:items-center w-full ml-8 md:ml-0">
                  <h2 className="text-xl lg:text-lg capitalize lg:uppercase font-semibold text-dark xl:py-4 text-left md:text-center whitespace-nowrap">
                    Same-Day Processing
                  </h2>
                  <p className=" text-dark text-base text-left md:text-center">
                    {`Place your order today, and we'll ensure immediate, same-day
                    processing.`}
                  </p>
                </div>
              </div>
              <div className="flex flex-row md:flex-col md:justify-start md:items-center w-full pb-4 lg:pb-0">
                <BsBoxSeamFill size={55} color="#185CFF" />

                <div className="flex flex-col justify-start items-start md:items-center w-full ml-8 md:ml-0">
                  <h2 className="text-xl lg:text-lg capitalize lg:uppercase font-semibold text-dark xl:py-4 text-left md:text-center">
                    30-Day Free Returns
                  </h2>
                  <p className="text-dark text-base text-left md:text-center">
                    Changed your mind? No worries; we offer free returns for 30
                    days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecuritySection;
