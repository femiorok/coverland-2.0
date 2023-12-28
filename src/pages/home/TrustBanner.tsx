import { Star } from 'lucide-react';
import eBayTrustBanner from '../../../public/images/trust-banner/ebay.svg';
import amazon from '../../../public/images/trust-banner/amazon.svg';
import google from '../../../public/images/trust-banner/google.svg';
import Image from 'next/image';

const TrustBanner = () => {
  return (
    <div
      className="mt-20 h-auto lg:h-80 bg-foreground text-black flex flex-col justify-start items-center py-7 mb-0 text-center"
      //   style={{
      //     background: 'linear-gradient(90deg, #FF9400 0%, #FF9400 100%)',
      //   }}
    >
      <div>
        <p className="text-white uppercase pt-3 text-md">
          Thousands of Happy Customers
        </p>
      </div>
      <div>
        <p className="text-white font-black uppercase text-3xl pt-0">
          20 years of trust
        </p>
      </div>
      <div className="flex flex-row justify-center items-center pb-1">
        <div>
          <Star size={40} color="#FF9400" />
        </div>
        <div>
          <Star size={40} color="#FF9400" />
        </div>
        <div>
          <Star size={40} color="#FF9400" />
        </div>
        <div>
          <Star size={40} color="#FF9400" />
        </div>
        <div>
          <Star size={40} color="#FF9400" />
        </div>
      </div>
      <div className="py-4">
        <p className="text-white uppercase text-sm pb-4">
          4.8 average star rating!
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center w-full ">
        <div className="rounded-full w-56 lg:w-64 h-14 bg-white flex flex-row justify-evenly items-center flex-nowrap ">
          <div className="h-auto w-1/4 flex flex-row justify-center items-center">
            <Image
              src={eBayTrustBanner}
              className="w-auto h-7 object-contain"
              alt="coverland ebay 5-star reviews"
            />
          </div>{' '}
          <div className="flex flex-col justify-center items-center">
            <p className="text-s !leading-tight  text-dark font-bold">
              99.9% Positive
            </p>
            <p className="text-xs !leading-tight text-dark">Feedback on eBay</p>
          </div>
        </div>
        <div className="rounded-full w-56 lg:w-64 h-14  flex flex-row justify-evenly items-center flex-nowrap bg-[#FF9400] my-8 md:my-0 md:mx-8">
          <div className="h-auto w-1/4 flex flex-row justify-center items-center">
            <Image
              src={amazon}
              className="w-auto h-7 object-contain"
              alt="coverland amazon 5-star reviews"
            />
          </div>{' '}
          <div className="flex flex-col justify-center items-center">
            <p className="!leading-tight text-dark font-bold">
              Over 5k Positive
            </p>
            <p className="text-xs !leading-tight text-dark">
              Reviews on Amazon
            </p>
          </div>
        </div>
        <div className="rounded-full w-56 lg:w-64 h-14 bg-white flex flex-row justify-evenly items-center flex-nowrap">
          <div className="h-auto w-1/4 flex flex-row justify-center items-center">
            <Image
              src={google}
              className="w-auto h-7 object-contain"
              alt="coverland google 5-star reviews"
            />
          </div>{' '}
          <div className="flex flex-col justify-center items-center">
            <p className="text-s !leading-tight text-dark font-bold">
              5-Star Rating
            </p>
            <p className="text-xs !leading-tight text-dark">on Google</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBanner;
