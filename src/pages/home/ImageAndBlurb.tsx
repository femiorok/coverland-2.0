import Image from 'next/image';
import Block1 from '../../../public/images/difference/best-materials.webp';
import Block2 from '../../../public/images/difference/waterproof-car-cover.webp';
import { BsCheckSquareFill } from 'react-icons/bs';

export default function ImageAndBlurb() {
  return (
    <section className="w-screen h-auto bg-white flex flex-col  max-w-[1440px] pb-12 lg:pb-20">
      <div className="w-full flex flex-col justify-center items-center lg:flex-row-reverse px-4 lg:px-20 xxl:px-0">
        <div className="w-full md:w-3/4 lg:w-2/4 pb-3 lg:pb-0">
          <Image
            src={Block1}
            className="w-full"
            alt="a coverland car cover on a vehicle that is facing forward"
          />
        </div>
        <div className="flex flex-col justify-center items-start w-full md:w-3/4 lg:w-2/4 lg:pr-16 mt-5 mb-5">
          <h1 className="text-2xl font-extrabold uppercase pb-10 pt-10 md:text-5xl text-dark w-full text-center md:w-auto lg:text-left">
            The <span className="text-red">Coverland</span> Difference
          </h1>
          <p className="text-dark">
            For every car enthusiast, owning a car is a considerable investment.
            Therefore, investing some money and effort for its protection is
            also an important step that involves buying premium quality car
            cover that is best for providing complete protection against extreme
            weather conditions.
            <br />
            <br />
            Now, the question is what kind of auto cover is best for your
            vehicle? If you have the privilege of a garage, you can use our
            indoor car covers whereas if you have to park your cars outdoors,
            you can benefit from our universal customizable car cover. All our
            indoor and outdoor covers are custom made to be perfectly fitted,
            durable, and cost-effective.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center lg:flex-row px-4 lg:px-20 xxl:px-0 pt-20 lg:pt-28">
        <div className="w-full md:w-3/4 lg:w-2/4 pb-5 lg:pb-0">
          <Image
            src={Block2}
            className="w-full"
            alt="a closeup shot of a coverland car cover showing the sturdy materials against rain droplets"
          />
        </div>
        <div className="flex flex-col justify-center items-start w-full md:w-3/4 lg:w-2/4 lg:pl-16">
          <h1 className="text-2xl font-extrabold uppercase pb-10 pt-10 md:text-5xl text-dark w-full text-center md:w-auto lg:text-left">
            Innovation Meets Protection
          </h1>
          <div className="pb-8 lg:pb-0">
            <p className="text-dark text-base">
              {`Driven by a dedication to shield your vehicle with the best, we've
              married state-of-the-art technology with top-tier materials. Every
              stitch, fiber, and design element is a testament to our
              commitment. Dive deep into the unique features and materials our
              covers boast... built with:`}
            </p>
          </div>
          <div className="flex flex-col justify-start items-start  pt-0 lg:pt-7 ">
            <span className="flex flex-row justify-center items-center pb-4">
              <div>
                <BsCheckSquareFill size={24} color="#000" />
              </div>
              <p className="pl-4 text-dark text-base font-semibold">
                Luxury thick microfiber material
              </p>
            </span>
            <span className="flex flex-row justify-center items-center pb-4">
              <div>
                <BsCheckSquareFill size={24} color="#000" />
              </div>
              <p className="pl-4 text-dark text-base font-semibold">
                Indoor/Outdoor Choices
              </p>
            </span>
            <span className="flex flex-row justify-center items-center pb-4">
              <div>
                <BsCheckSquareFill size={24} color="#000" />
              </div>
              <p className="pl-4 text-dark text-base font-semibold">
                Water resistant shiled to give protection from impairment caused
                by water
              </p>
            </span>
            <span className="flex flex-row justify-center items-center pb-4">
              <div>
                <BsCheckSquareFill size={24} color="#000" />
              </div>
              <p className="pl-4 text-dark text-base font-semibold">
                Varied size and color option
              </p>
            </span>
            <span className="flex flex-row justify-center items-center pb-4">
              <div>
                <BsCheckSquareFill size={24} color="#000" />
              </div>
              <p className="pl-4 text-dark text-base font-semibold">
                Protection against damage from sun and UV rays
              </p>
            </span>
            <span className="flex flex-row justify-center items-center pb-0">
              <div>
                <BsCheckSquareFill size={24} color="#000" />
              </div>
              <p className="pl-4 text-dark text-base font-semibold">
                Windproof, easy buckle nylon straps and two small grommets.
              </p>
            </span>
          </div>
          <div className="pt-7 pb-10">
            <p className="text-dark">
              Our covers are specifically made to be closely fitted on your
              vehicle in order to safeguard it from outside elements. With all
              the above-mentioned features, keep in mind our custom-made strong
              car covers ensure your car &apos;s safety. We also provide our
              customers with free shipping and an easy 30-day return policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
