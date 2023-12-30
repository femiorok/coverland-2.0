// @ts-nocheck

import Image from 'next/image';
import Logo from './../../../public/brand/logo_light.png';
import { ClipLoader } from 'react-spinners';

export default function Processing(isLoading, message) {
  if (!isLoading) return null;

  return (
    <div className="loader-container visible !left-0">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-24 h-24 object-contain flex flex-col justify-center items-center">
          <Image src={Logo} alt="logo" className="w-full h-auto" />
          <ClipLoader
            className="absolute"
            size={150}
            speedMultiplier={0.2}
            color="#fff"
          />
        </div>

        <p className="text-base text-white mt-10">{message}</p>
      </div>
    </div>
  );
}
