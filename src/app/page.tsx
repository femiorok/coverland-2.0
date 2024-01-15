import HeroSection from '@/components/hero/HeroSection';
import BuyWithConfidence from '@/pages/home/BuyWithConfidence';
import CarModelsInfo from '@/pages/home/CarModelsInfo';
import CategoryCards from '@/pages/home/CategoryCards';
import CustomerReviews from '@/pages/home/CustomerReviews';
import FeaturedMakes from '@/pages/home/FeaturedMakes';
// import CategoryCards from '@/pages/home/CategoryCards';
import ImageAndBlurb from '@/pages/home/ImageAndBlurb';
import JoinCTA from '@/pages/home/JoinCTA';
import ProductTypesInfo from '@/pages/home/ProductTypes';
import SecuritySection from '@/pages/home/SecuritySection';
import SolutionSection from '@/pages/home/SolutionSection';
import TrendingCarBrands from '@/pages/home/TrendingCarBrands';
import TrustBanner from '@/pages/home/TrustBanner';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductTypesInfo />
      <CarModelsInfo />
      <TrendingCarBrands />
      <SolutionSection />
      <CustomerReviews />
      {/* <CategoryCards /> */}
      <TrustBanner />
      <BuyWithConfidence />
      <SecuritySection />
      {/* <ImageAndBlurb /> */}
      <FeaturedMakes />
      <JoinCTA />
    </>
  );
}
