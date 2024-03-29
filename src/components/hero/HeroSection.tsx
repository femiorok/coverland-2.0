import { HeroDropdown } from './dropdown/HeroDropdown';
import bg from '/public/images/hero/home-hero_D.webp';

const HeroSection = () => {
  return (
    <section className="h-auto flex flex-col justify-start lg:justify-start items-center ">
      <div
        className="w-full lg:max-w-[1440px] h-[360px] lg:h-[500px] relative"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="w-full h-full flex flex-col justify-between items-center py-8 z-10">
          <div className="flex flex-row justify-center items-center w-full pb-24">
            <p className="uppercase italic text-white whitespace-nowrap xs:text-md md:text-3xl lg:text-2xl font-semibold lg:whitespace-wrap">
              limited time offer <span className="text-red">50% off</span>
            </p>
          </div>
          <div className="flex flex-col justify-between items-start px-4">
            <div className="flex flex-col justify-start xs:items-start md:items-center">
              <div className="pb-2">
                <p className="text-6xl text-left font-black text-white uppercase">
                  Select your Vehicle
                </p>
              </div>
              <div>
                <p className="text-sm uppercase text-white md:text-2xl md:font-semibold">
                  #1 Rated Car Cover in the USA
                </p>
              </div>
            </div>
          </div>
          <div id="desktop-filter" className="pt-16 hidden w-full lg:block">
            <HeroDropdown />
          </div>
        </div>
      </div>
      <div
        id="mobile-filter"
        className="pt-4 md:pt-20 w-full flex flex-col items-center bg-[#F9F9FB] md:hidden"
      >
        <HeroDropdown />
      </div>
    </section>
  );
};

export default HeroSection;
