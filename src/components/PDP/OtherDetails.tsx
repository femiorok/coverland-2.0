'use client';

import { useRef, useState } from 'react';
import { MoneyBack } from './MoneyBack';
import { PDPAccordion } from './PDPAccordian';
import { ProductHero } from './ProductHero';
import { ProductPackage } from './ProductPackage';
import { OurCarCovers } from './OurCarCovers';
import { ProductSpecGrid } from './ProductSpecification';
import { ProductChecklist } from './ProductChecklist';
import { NoGarage } from './NoGarage';
import { ClimateCrisis } from './ClimateCrisis';
import { Layers } from './Layers';
import { Separator } from '../ui/separator';

export function ExtraProductDetails() {
  const [selectedSection, setSelectedSection] = useState<string>('');

  const pdRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<HTMLDivElement>(null);
  const carCoverRef = useRef<HTMLDivElement>(null);
  const specsRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  // Add refs for other sections similarly...

  const scrollToSection = (
    ref: React.RefObject<HTMLDivElement>,
    sectionName: string
  ) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      });
      setSelectedSection(sectionName);
    }
  };

  const PD_ID = 'product-details';
  const LAYERS_ID = 'layers-sec';
  const SPECS_ID = 'specs-sec';
  const FAQ_ID = 'faq-sec';
  const CAR_COVER_INS_ID = 'car-cover-inst-sec';

  return (
    <>
      <div className="mt-8 md:mt-18 lg:mt-28 py-6 flex flex-col md:flex-row items-stretch gap-4 md:gap-0 md:items-center justify-between flex-wrap border-t border-b border-[#DADADA]">
        <h1
          onClick={() => scrollToSection(pdRef, PD_ID)}
          className={`text-lg text-black font-normal capitalize cursor-pointer ${
            selectedSection === PD_ID ? 'underline' : ''
          }`}
        >
          product details
        </h1>
        <h1
          onClick={() => scrollToSection(layersRef, LAYERS_ID)}
          className={`text-lg text-black font-normal capitalize cursor-pointer ${
            selectedSection === LAYERS_ID ? 'underline' : ''
          }`}
        >
          benefits
        </h1>
        <h1
          onClick={() => scrollToSection(specsRef, SPECS_ID)}
          className={`text-lg text-black font-normal capitalize cursor-pointer ${
            selectedSection === SPECS_ID ? 'underline' : ''
          }`}
        >
          specification
        </h1>
        <h1
          onClick={() => scrollToSection(faqRef, FAQ_ID)}
          className={`text-lg text-black font-normal capitalize cursor-pointer ${
            selectedSection === FAQ_ID ? 'underline' : ''
          }`}
        >
          Q&A
        </h1>
        <h1
          onClick={() => scrollToSection(layersRef, LAYERS_ID)}
          className={`text-lg text-black font-normal capitalize cursor-pointer ${
            selectedSection === LAYERS_ID ? 'underline' : ''
          }`}
        >
          Shipping & Returns
        </h1>
        <h1
          onClick={() => scrollToSection(layersRef, LAYERS_ID)}
          className={`text-lg text-black font-normal capitalize cursor-pointer ${
            selectedSection === LAYERS_ID ? 'underline' : ''
          }`}
        >
          warranty
        </h1>
        <h1
          onClick={() => scrollToSection(carCoverRef, CAR_COVER_INS_ID)}
          className={`text-lg text-black font-normal capitalize cursor-pointer ${
            selectedSection === CAR_COVER_INS_ID ? 'underline' : ''
          }`}
        >
          car cover instruction
        </h1>
        <h1
          onClick={() => scrollToSection(layersRef, LAYERS_ID)}
          className={`text-lg text-black font-normal capitalize cursor-pointer ${
            selectedSection === LAYERS_ID ? 'underline' : ''
          }`}
        >
          car cover reviews
        </h1>
      </div>

      <div ref={pdRef}>
        <ProductHero />
      </div>
      <div className="mt-8 md:mt-18 lg:mt-28">
        <Video />
      </div>
      <div ref={carCoverRef} className="mt-8 md:mt-18 lg:mt-28">
        <Layers />
      </div>
      <div className="mt-8 md:mt-18 lg:mt-28">
        <ClimateCrisis />
      </div>

      <div className="mt-8 md:mt-18 lg:mt-28">
        <NoGarage />
      </div>
      <div className="mt-8 md:mt-18 lg:mt-28">
        <OurCarCovers />
      </div>
      <div className="mt-8 md:mt-18 lg:mt-28">
        <ProductChecklist />
      </div>
      <div ref={specsRef} className="mt-8 md:mt-18 lg:mt-28">
        <ProductSpecGrid />
        <ProductPackage />
      </div>
      <div ref={faqRef} className="mt-8 md:mt-18 lg:mt-28">
        <PDPAccordion />
      </div>
      <div className="my-8 md:my-18 lg:my-28">
        <MoneyBack />
      </div>
    </>
  );
}

function Video() {
  return (
    <div
      id="productvideo"
      className="py-8 md:py-8 w-full h-auto flex flex-col justify-center items-center max-w-full "
    >
      <div className="w-full h-[550px]">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/MzF7jIIkDAo?si=t-6lccUtdSOH0NZM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-full h-auto bg-[#1A1A1A] flex flex-col justify-center items-start p-4 md:p-8 lg:p-14">
        <div>
          <p className="text-white font-black sm:text-xl md:text-3xl lg:text-5xl uppercase text-left tracking-[1.35px]">
            Tailored for the perfect fit
          </p>
        </div>
        <div className="pt-4 pb-3">
          <p className="capitalize text-white opacity-80 text-lg md:text-2xl font-normal tracking-[0.48px]">
            Your Car, Your Shield. Experience the superior custom fit we offer.{' '}
          </p>
        </div>
      </div>
    </div>
  );
}
