import Image from 'next/image';
import product from '@/images/PDP/product_details_01.webp';

export function ProductHero() {
  return (
    <div className="relative w-full">
      <div className="-z-0">
        <Image
          alt="product"
          src={product}
          placeholder="blur"
          quality={75}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <p className="text-white font-black text-3xl uppercase text-center">
          Your car deserves the Best
        </p>
        <p className="capitalize text-off font-normal pt-4 flex flex-row flex-nowrap">
          Timeless Resilience
          <br className="lg:hidden" />
          <span className="hidden lg:block mr-1">. </span> Ultimate durability
        </p>
      </div>
    </div>
  );
}
