import Image from 'next/image';
import product from '@/images/PDP/product_details_01.webp';
import WhiteLogo from '@/images/logos/logo-white.png';

export function ProductHero() {
  return (
    <div className="relative w-full">
      <div className="-z-0">
        <Image
          alt="product"
          src={product}
          placeholder="blur"
          quality={75}
          className="object-cover w-full"
        />
      </div>
      <div className="absolute top-2.5 md:top-[75px] left-0 w-full h-full flex flex-col items-center">
        <p className="text-white font-black sm:text-xl md:text-3xl lg:text-5xl uppercase text-center">
          Your car deserves the Best
        </p>
        <p className="capitalize text-white opacity-80 text-lg md:text-2xl font-normal pt-4 flex flex-row flex-nowrap tracking-[0.48px]">
          Timeless Resilience
          <br className="invisible md:visible" />
          <span className="hidden lg:block mr-1">. </span> Ultimate durability
        </p>
      </div>

      <div className="absolute bottom-2.5 md:bottom-[57px] left-2.5 md:left-[71px]">
        <Image
          alt="coverland"
          src={WhiteLogo}
          placeholder="blur"
          width={184}
          height={31}
        />
      </div>
    </div>
  );
}
