import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import bgImage from '/public/images/home/join-cta-bg.png';
import WhiteLogo from '@/images/logos/multiline-white-logo.png';

const JoinCTA: React.FC = () => {
  let listArr = [
    { id: 1, text: 'exclusive discounts' },
    { id: 2, text: 'first access to new arrivals' },
    { id: 3, text: 'tailored recommendations' },
    { id: 4, text: 'loyalty rewards' },
    { id: 5, text: 'dedicated support & maintenance tips' },
  ];

  let actionBtnArr = [
    { id: 1, url: '/login', text: 'login' },
    { id: 2, url: '/join', text: 'join us' },
  ];
  return (
    <>
      <section
        className="h-auto hidden md:flex flex-row justify-between items-center mb-4 w-full lg:max-w-[1440px] relative py-2 md:py-8 px-2 md:px-8 lg:py-10 lg:px-14"
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        {/* Left Column */}
        <div className="flex flex-col items-stretch gap-8">
          <h1 className="uppercase text-white text-2xl font-black">
            The coverland Benefits
          </h1>
          <ul>
            {listArr.map((item, index) => {
              return (
                <li
                  key={index}
                  className="text-white text-base font-normal capitalize my-1"
                >
                  {item.text}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-stretch gap-4">
          <div className="flex flex-col items-stretch gap-8">
            <Image
              alt="coverland"
              src={WhiteLogo}
              placeholder="blur"
              width={228}
              height={114}
            />
            {/* Action Buttons */}
            <div className="flex flex-row items-center justify-between gap-4">
              {actionBtnArr.map((item, index) => {
                return (
                  <Link
                    key={index}
                    className="h-11 w-[130px] mx-auto flex items-center justify-center bg-white hover:bg-transparent rounded-full border border-[#1A1A1A] text-base font-black text-black hover:text-white capitalize tracking-[0.32px]"
                    href={item.url}
                  >
                    {item.text}
                  </Link>
                );
              })}
            </div>
          </div>

          <p className="text-base text-white font-bold capitalize">
            Join and Receive 10%off your order.
          </p>
        </div>
      </section>

      {/* Responsive Left Col Section */}
      <section
        className="h-auto md:hidden flex flex-row justify-between items-center mb-4 w-full relative py-10 px-4 "
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        <div className="flex flex-col items-stretch gap-8">
          <h1 className="uppercase text-white text-2xl font-black">
            The coverland Benefits
          </h1>
          <ul>
            {listArr.map((item, index) => {
              return (
                <li
                  key={index}
                  className="text-white text-base font-normal capitalize my-1"
                >
                  {item.text}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      {/* Responsive Right Col Section */}
      <section className="bg-[#1A1A1A] h-auto md:hidden flex flex-row justify-between items-center mb-4 w-full relative py-10 px-4 ">
        <div className="flex flex-col items-stretch gap-6">
          <div className="flex flex-col items-stretch gap-8">
            <Image
              alt="coverland"
              src={WhiteLogo}
              placeholder="blur"
              width={178}
              height={89}
            />
            {/* Action Buttons */}
            <div className="flex flex-col items-start justify-between gap-5">
              {actionBtnArr.map((item, index) => {
                return (
                  <Link
                    key={index}
                    className="h-11 w-40 flex items-center justify-center bg-white hover:bg-transparent rounded-full border border-[#1A1A1A] text-base font-black text-black hover:text-white capitalize tracking-[0.32px]"
                    href={item.url}
                  >
                    {item.text}
                  </Link>
                );
              })}
            </div>
          </div>

          <p className="text-base text-white font-bold capitalize">
            Join and Receive 10%off your order.
          </p>
        </div>
      </section>
    </>
  );
};

export default JoinCTA;
