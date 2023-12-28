import React from 'react';
// import Logo from '../../../../public/brand/logo_light.png';
import Image from 'next/image';
import { FaArrowAltCircleRight } from 'react-icons/fa';

//HIDE THIS COMPONENT WHEN THE USER IS LOGGED IN!!!!!

const Membership = () => {
  return (
    <section className="membership flex flex-col md:flex-row justify-center md:justify-between lg:justify-center items-center w-full max-w-[1440px]  md:px-4 lg:px-0">
      <div className=" flex flex-col md:flex-row justify-between items-center w-full px-4 lg:px-20 h-auto py-8 lg:py-16">
        <div className="flex flex-col justify-center items-center md:items-start  w-full md:w-2/3 xl:w-3/4 pb-8 md:pb-0">
          <div className="flex flex-row justify-center items-center md:hidden w-full">
            {' '}
            {/* <Image
              src={Logo}
              alt="coverland logo"
              className="object-cover w-4/5"
            /> */}
          </div>
          <p className="text-2xl font-semibold text-white uppercase py-6">
            The Coverland Benefits
          </p>
          <div className="grid grid-cols-1 gap-2">
            <span className="flex flex-row justify-start items-center">
              <FaArrowAltCircleRight color="#fff" size={20} className="mr-4" />{' '}
              <p className="text-white text-base capitalize">
                Exclusive Discounts
              </p>
            </span>
            <span className="flex flex-row justify-start items-center">
              <FaArrowAltCircleRight color="#fff" size={20} className="mr-4" />{' '}
              <p className="text-white text-base capitalize">
                First Access to New Arrivals
              </p>
            </span>
            <span className="flex flex-row justify-start items-center">
              <FaArrowAltCircleRight color="#fff" size={20} className="mr-4" />{' '}
              <p className="text-white text-base capitalize">
                Tailored Recommendations
              </p>
            </span>
            <span className="flex flex-row justify-start items-center">
              <FaArrowAltCircleRight color="#fff" size={20} className="mr-4" />{' '}
              <p className="text-white text-base capitalize">Loyalty Rewards</p>
            </span>
            <span className="flex flex-row justify-start items-center">
              <FaArrowAltCircleRight color="#fff" size={20} className="mr-4" />{' '}
              <p className="text-white text-base capitalize">
                Dedicated Support &amp; Maintenance Tips
              </p>
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/3 xl:w-1/4">
          <div className="hidden md:block">
            {' '}
            {/* <Image
              src={Logo}
              alt="coverland logo"
              className="object-cover h-28 w-auto"
            /> */}
          </div>

          <div className="flex flex-row pt-6 pb-12 md:py-6">
            <div className="pr-4 w-full ">
              {' '}
              <button className="bg-white text-base rounded-full text-dark py-2 px-4 font-semibold w-32 h-10 md:w-[115px] md:h-[40px] flex flex-col justify-center items-center align-center">
                Login
              </button>
            </div>
            <div className="w-full ">
              <button className="bg-white text-base rounded-full text-dark py-2 px-4 font-semibold w-32 h-10 md:w-[115px] md:h-[40px] flex flex-col justify-center items-center align-center">
                Sign Up
              </button>
            </div>
          </div>
          <p className="text-xs text-white text-center md:text-left">
            Not a member?
            <br className="md:hidden" /> Join and receive 10% off your first
            order.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Membership;
