import Image from 'next/image';
import TrustBg from '/public/images/hero/trust-hero-bg.png';
import RatingA from '@/images/home/rating-A.png';
import GoogleRating from '@/images/home/google-rating.png';
import FiveStar from '@/images/home/five-star.png';

const TrustBanner = () => {
  let trustArr = [
    { id: 1, imgOne: RatingA },
    { id: 2, text: '20-years of trust' },
    { id: 3, imgOne: GoogleRating, imgTwo: FiveStar },
  ];
  return (
    <section
      className={`w-full md:max-w-[1440px] z-20 p-12 h-auto relative flex flex-col justify-center items-center py-8 relative overflow-hidden bg-cover md:bg-auto`}
      style={{
        backgroundImage: `url(${TrustBg.src})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 -z-[1] h-full w-full bg-[#404040] opacity-90"></div>
      <div className="grid lg:grid-cols-3 gap-12 md:gap-16">
        <div className="block md:hidden">
          <h4 className="font-black text-3xl lg:text-4xl xl:text-5xl text-white text-center capitalize">
            20-years of trust
          </h4>
        </div>
        {trustArr.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2"
            >
              {item.imgOne && (
                <Image width={159} src={item.imgOne} alt="rating" />
              )}
              {item.imgTwo && (
                <Image width={159} src={item.imgTwo} alt="rating" />
              )}

              <div className="hidden md:block">
                <h4 className="font-black text-3xl lg:text-4xl xl:text-5xl text-white text-center capitalize">
                  {item.text}
                </h4>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TrustBanner;
