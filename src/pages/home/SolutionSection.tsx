import Image from 'next/image';
import Link from 'next/link';
import Custom from '../../../public/images/solutions/custom-car-cover.webp';
import Waterproof from '../../../public/images/solutions/waterproof-cover.webp';

export default function SolutionSection() {
  return (
    <section className="w-screen h-auto bg-white flex flex-col xs:pb-2 max-w-[1440px] px-4 md:px-20">
      <div className="w-full h-full flex flex-col xs:justify-center items-center pb-8 md:pb-20">
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="uppercase font-extrabold text-3xl lg:text-5xl pb-5 text-dark">
            Perfect Solution For All Weather
          </h1>
          <p className="text-xl uppercase font-bold lg:text-2xl text-lightGray">
            Ultimate Protection!
          </p>
        </div>
        <div className="text-center mt-10 mb-10 md:mb-0 md:flex">
          <div className="">
            <Link
              href="/car-covers"
              className="bg-black font-medium text-lg md:text-xl rounded-full text-white px-5 mb-5 md:mb-0 md:mx-5 p-2 xs:mb-5"
            >
              Shop Car Covers
            </Link>
          </div>
          <div className=" my-4 lg:my-0">
            <Link
              href="/suv-covers"
              className="bg-black font-medium text-lg md:text-xl rounded-full text-white mb-5 md:mb-0 px-5 p-2 md:mx-5"
            >
              Shop SUV Covers
            </Link>
          </div>
          <div>
            <Link
              href="/truck-covers"
              className="bg-black font-medium text-lg md:text-xl rounded-full px-5 text-white p-2 md:mx-5"
            >
              Shop Truck Covers
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full md:flex-row">
        <div className="flex flex-col justify-end items-start object-cover px-4 w-full md:mr-2 lg:p-0">
          <Image
            src={Custom}
            className=" w-full rounded-xl backdrop-filter backdrop-brightness-50"
            alt="a grey car cover on a vehicle"
          />
          <div className="flex flex-col justify-end items-start absolute pb-8 pl-4">
            <p className="capitalize text-lg sm:text-lg text-white font-bold lg:text-2xl">
              Customized Car Car Solutions
            </p>
            <div className="pt-4">
              <Link
                href="/car-covers"
                className="bg-white text-lg font-semibold rounded-full py-2 px-4 text-dark"
              >
                Shop Custom Covers
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end items-start object-cover px-4 w-full md:ml-2 lg:p-0">
          <Image
            src={Waterproof}
            className=" w-full rounded-xl backdrop-filter backdrop-brightness-50"
            alt="a woman pulling a car cover over her vehicle"
          />
          <div className="flex flex-col justify-end items-start absolute pb-8 pl-4">
            <p className="capitalize text-lg sm:text-lg text-white font-bold lg:text-2xl">
              Rain-Repellent Shield For your Car
            </p>
            <div className="pt-4">
              <Link
                href="/car-covers"
                className="bg-white text-lg font-semibold rounded-full py-2 px-4 text-dark"
              >
                Shop Waterproof Covers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
