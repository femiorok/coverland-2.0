import { TProductData, fetchPDPData, fetchPDPDataWithQuery } from '@/lib/db';
import Image from 'next/image';
import CarSelector from '@/components/PDP/CarSelector';
import KeepDry from '@/images/PDP/keep_dry.webp';
import LayerImg from '@/images/PDP/layer_breakdown.webp';
import Material from '@/images/PDP/material-right.webp';
import ZeroLeaks from '@/images/PDP/zero_leaks.webp';
import Climate from '@/images/PDP/climate_crisis.webp';
import Garage from '@/images/PDP/no_garage.webp';
import Badge from '@/images/PDP/60-day.png';
import Waterproof from '@/images/difference/waterproof-car-cover.webp';
import { redirect } from 'next/navigation';
import { ProductHero } from '@/components/PDP/ProductHero';
import Package_01 from '@/images/PDP/package_01.webp';
import Package_02 from '@/images/PDP/package_02.webp';
import Package_03 from '@/images/PDP/package_03.webp';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import {
  FaCheckSquare,
  FaEyeDropper,
  FaPaw,
  FaShieldAlt,
  FaShieldVirus,
  FaSun,
  FaTemperatureLow,
  FaTree,
  FaWind,
} from 'react-icons/fa';

export type TPDPPathParams = { productType: string; product: string[] };

export type TPDPQueryParams = {
  year: string | undefined;
  submodel: string | undefined;
  second_submodel: string | undefined;
};

export default async function ProductPDP({
  params: pathParams,
  searchParams,
}: {
  params: TPDPPathParams;
  searchParams: TPDPQueryParams;
}) {
  console.log('pathParams', pathParams);
  if (
    pathParams.productType !== 'car-covers' &&
    pathParams.productType !== 'suv-covers' &&
    pathParams.productType !== 'truck-covers' &&
    pathParams.productType !== 'van-covers'
  ) {
    redirect('/404');
  }
  let productData = [];

  productData = searchParams.year
    ? (await fetchPDPDataWithQuery(searchParams, pathParams)) ?? []
    : (await fetchPDPData(pathParams)) ?? [];

  if (!productData) return null;
  const modelData = productData?.filter((item) => item.msrp);
  console.log('modelData', modelData);

  const hasSubmodels = modelData.some(
    (model) => model.submodel1_slug || model.submodel2_slug
  );
  console.log('hasSubmodels', hasSubmodels);

  const getUniqueSubmodel1 = () => {
    const submodel1 = modelData.map((model) => model.submodel1_slug);
    const uniqueSubmodel1 = [...new Set(submodel1)];
    return uniqueSubmodel1;
  };

  const getUniqueSubmodel2 = () => {
    const submodel2 = modelData.map((model) => model.submodel2_slug);
    const uniqueSubmodel2 = [...new Set(submodel2)];
    return uniqueSubmodel2;
  };

  const uniqueSubmodel1 = getUniqueSubmodel1();
  const uniqueSubmodel2 = getUniqueSubmodel2();

  const submodelData = { uniqueSubmodel1, uniqueSubmodel2 };

  console.log('submodelData', submodelData);

  console.log('uniqueSubmodel1', uniqueSubmodel1);
  console.log('uniqueSubmodel2', uniqueSubmodel2);

  const modelDataByYear = searchParams.year
    ? modelData.filter(
        (model) =>
          model?.year_range &&
          model.year_range.includes(searchParams?.year ?? '2023')
      )
    : modelData;

  const modelDataBySubmodel = searchParams.submodel
    ? modelDataByYear.filter((model) => {
        model.submodel1_slug === searchParams.submodel ??
          model.submodel2_slug === searchParams.submodel;
      })
    : modelDataByYear;

  console.log(modelDataBySubmodel, searchParams.submodel, modelDataByYear);

  const dataByParams = !!modelDataBySubmodel?.length
    ? modelDataBySubmodel
    : modelDataByYear;

  console.log(dataByParams);

  return (
    <>
      <CarSelector
        modelData={dataByParams}
        pathParams={pathParams}
        submodelData={submodelData}
      />
      <div
        id="product-details"
        className="w-full h-auto flex flex-col justify-center items-center max-w-[1440px] py-4 lg:py-20 px-4 md:px-20"
      >
        <Video />
        <Layers />
        <ProductHero />
        <ClimateCrisis />
        <NoGarage />
        <OurCarCovers />
        <ProductChecklist />
        <ProductSpecGrid />
        <ProductPackage />
        <PDPAccordion />
        <MoneyBack />
      </div>
    </>
  );
}

function MoneyBack() {
  return (
    <div className="bg-[#1F2B47] w-full flex flex-col-reverse md:flex-row justify-between  px-8 md:px-20">
      <div className="grid grid-cols-1 gap-4 w-4/5 items-center align-center content-center">
        <p className="text-white font-black text-2xl uppercase">
          60-days money back guaranteed
        </p>
        <p className="text-white font-normal text-base">
          If you're not satisfied, we've got you covered with an easy return
          process and full refunds. We're here to make your shopping experience
          as smooth as possible.
        </p>
      </div>
      <div className="w-1/5">
        <Image
          src={Badge}
          alt="an amazing 60-day money back badge"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

function PDPAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          Is putting this car cover on a hassle ?
        </AccordionTrigger>
        <AccordionContent>
          We make buying the right cover simple and easy. Simply use our cover
          finder tool on the homepage to find the exact custom-fit car cover for
          your make and model. Once you insert the information, you will be
          directed to a page where you can choose from 2 different options:
          standard versus premium. With over 120,000 car covers available, we
          have the exact custom-fit, tailored car cover for your vehicle, no
          matter the year, make, or model.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

function ProductPackage() {
  return (
    <div className="w-full flex flex-col md:flex-row pt-16">
      <div className="flex flex-col w-full lg:w-2/4">
        <div className="">
          <p className="text-dark font-semibold text-lg">Package Includes:</p>
        </div>
        <div className="grid grid-cols-2 gap-2 w-full lg:w-2/4 pt-8 lg:pt-0">
          <div className="block lg:hidden col-span-2">
            <Image
              src={Package_01}
              alt="carrying bag"
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 pt-8 lg:pt-16">
          <div className="flex flex-row justify-start items-start">
            <div className="w-10">
              <div className="flex flex-col justify-center items-center bg-[#E0E0E0] h-10 w-10 text-dark font-semibold rounded-full">
                1
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2 px-8">
              <p className="text-dark font-semibold text-lg">
                Waterproof Carrying Bag
              </p>
              <p className="text-dark font-normal text-base">
                Includes a waterproof storage bag for effortless storage.
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-start items-start">
            <div className="w-10">
              <div className="flex flex-col justify-center items-center bg-[#E0E0E0] h-10 w-10 text-dark font-semibold rounded-full">
                2
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2 px-8">
              <p className="text-dark font-semibold text-lg">
                1 Antenna Patch
                <br />1 Pair of grommets
              </p>
              <p className="text-dark font-normal text-base">
                Anxious that the cover won't fit because of the antenna? The
                antenna patch and grommets are here to help to create an antenna
                hole in the antenna location.
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-start items-start">
            <div className="w-10">
              <div className="flex flex-col justify-center items-center bg-[#E0E0E0] h-10 w-10 text-dark font-semibold rounded-full">
                3
              </div>
            </div>
            <div className="grid grid-cols-1 gap-2 px-8">
              <p className="text-dark font-semibold text-lg">
                3 Straps with buckles
              </p>
              <p className="text-dark font-normal text-base">
                Worry no more about your car cover in the wind! Secure it with
                our free straps.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 w-full lg:w-2/4 pt-8 lg:pt-0">
        <div className=" hidden lg:block lg:col-span-2">
          <Image
            src={Package_01}
            alt="carrying bag"
            className="w-full h-full"
          />
        </div>
        <div className=" col-span-2 lg:col-span-1">
          <Image
            src={Package_02}
            alt="antenna hole"
            className="w-full h-full"
          />
        </div>
        <div className=" col-span-2 lg:col-span-1">
          <Image src={Package_03} alt="black clip" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}

function ProductChecklist() {
  return (
    <div className="w-full h-full flex flex-col-reverse lg:flex-row pt-8 lg:pt-20">
      <div className="w-full lg:w-2/4 flex flex-col justify-center items-start bg-dark px-8 py-8 lg:py-0">
        <div className="pb-8">
          <p className="text-white font-semibold text-xl">
            Who benefits from our covers?
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 ">
          <div className="flex flex-row justify-start items-center">
            <FaCheckSquare color="ffffff" size={20} />
            <div className="ml-4">
              <p className="text-white">
                <b>Car Enthusiasts</b>
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-start items-center">
            <FaCheckSquare color="ffffff" size={20} />
            <div className="ml-4">
              <p className="text-white">
                Those who prefer <b>minimal car washing</b>
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-start items-center">
            <FaCheckSquare color="ffffff" size={20} />
            <div className="ml-4">
              <p className="text-white">
                Residents of <b>wildlife</b> and <b>tree-abundant</b> areas
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-start items-center">
            <FaCheckSquare color="ffffff" size={20} />
            <div className="ml-4">
              <p className="text-white">
                Cars frequently exposed to <b>rain</b> and <b>humidity</b>
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-start items-center">
            <FaCheckSquare color="ffffff" size={20} />
            <div className="ml-4">
              <p className="text-white">
                Car owners in <b>hurricane-prone</b> regions
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-start items-center">
            <FaCheckSquare color="ffffff" size={20} />
            <div className="ml-4">
              <p className="text-white">
                Car owners in <b>snowy</b> climates
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-start items-center">
            <FaCheckSquare color="ffffff" size={20} />
            <div className="ml-4">
              <p className="text-white">
                Car owners in <b>sunny</b> climates
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-2/4">
        <Image
          src={Waterproof}
          alt="a car sitting inside of a building"
          width={500}
          height={500}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}

function ProductSpecGrid() {
  //use placeholder data for now
  return (
    <>
      <div className="flex flex-col w-full">
        <div className="w-full pb-8 lg:pb-16 hidden lg:block">
          <p className="text-dark font-black text-3xl uppercase text-center">
            specifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 gap-y-8 w-full pt-4 lg:pt-0">
          <div className="flex flex-row border-b border-dark border-opacity-30">
            <p className="text-dark font-semibold">Model:</p>
            <p className="text-dark font-normal pl-2">SKU</p>
          </div>
          <div className="flex flex-row border-b border-dark border-opacity-30">
            <p className="text-dark font-semibold">Exterior:</p>
            <p className="text-dark font-normal pl-2 capitalize">POLYESTER</p>
          </div>
          <div className="flex flex-row border-b border-dark border-opacity-30">
            <p className="text-dark font-semibold">Item Weight:</p>
            <p className="text-dark font-normal pl-2">2.2 Pounds</p>
          </div>
          <div className="flex flex-row border-b border-dark border-opacity-30">
            <p className="text-dark font-semibold">Interior:</p>
            <p className="text-dark font-normal pl-2 capitalize">FLEECE</p>
          </div>
          <div className="flex flex-row border-b border-dark border-opacity-30">
            <p className="text-dark font-semibold">Product Dimensions:</p>
            <p className="text-dark font-normal pl-2">18" x 15" x 5"</p>
          </div>
          <div className="hidden lg:flex flex-row border-b border-dark border-opacity-30">
            <p className="text-dark font-semibold"></p>
            <p className="text-dark font-normal pl-2"></p>
          </div>
        </div>
      </div>
    </>
  );
}

function OurCarCovers() {
  return (
    <div className="flex flex-col">
      <div className="w-full py-8 lg:py-16">
        <p className="text-dark font-black text-3xl uppercase text-center">
          Our car covers have you covered
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="grid grid-cols-4 gap-2 justify-items-center items-start">
            <div className="h-[60px] w-[60px]">
              <div className="bg-blue rounded-full h-full w-full flex flex-col justify-center items-center">
                <FaSun color="#185cff" size={20} className="absolute z-10" />
                <FaShieldAlt color="#fff" size={40} className="absolute" />
              </div>
            </div>
            <div className="col-span-3">
              <p className="text-dark text-lg font-semibold capitalize pb-1">
                UV Harm
              </p>
              <p className="text-dark text-base capitalize">
                Prolonged sun exposure can harm your paint. Keep it looking
                fresh with our cover.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 justify-items-center items-start">
            <div className="h-[60px] w-[60px]">
              <div className="bg-blue rounded-full h-full w-full flex flex-col justify-center items-center">
                <FaEyeDropper
                  color="#185cff"
                  size={20}
                  className="absolute z-10"
                />
                <FaShieldVirus color="#fff" size={40} className="absolute" />
              </div>
            </div>
            <div className="col-span-3">
              <p className="text-dark text-lg font-semibold capitalize pb-1">
                Water and humidity
              </p>
              <p className="text-dark text-base capitalize">
                Fear rust? Our covers are waterproof with air vents for full
                protection.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 justify-items-center items-start">
            <div className="h-[60px] w-[60px]">
              <div className="bg-blue rounded-full h-full w-full flex flex-col justify-center items-center">
                <FaWind color="#185cff" size={20} className="absolute z-10" />
                <FaShieldAlt color="#fff" size={40} className="absolute" />
              </div>
            </div>
            <div className="col-span-3">
              <p className="text-dark text-lg font-semibold capitalize pb-1">
                Strong Wind
              </p>
              <p className="text-dark text-base capitalize">
                Don&apos;t let strong winds unsettle your cover. Our wind straps
                keep it steady even in gusty conditions.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 justify-items-center items-start">
            <div className="h-[60px] w-[60px]">
              <div className="bg-blue rounded-full h-full w-full flex flex-col justify-center items-center">
                <FaTemperatureLow
                  color="#185cff"
                  size={20}
                  className="absolute z-10"
                />
                <FaShieldAlt color="#fff" size={40} className="absolute" />
              </div>
            </div>
            <div className="col-span-3">
              <p className="text-dark text-lg font-semibold capitalize pb-1">
                Temperature Shifts
              </p>
              <p className="text-dark text-base capitalize">
                Shield Your Car from Temperature Changes. Prevent overheating
                and cold-related issues.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 justify-items-center items-start">
            <div className="h-[60px] w-[60px]">
              <div className="bg-blue rounded-full h-full w-full flex flex-col justify-center items-center">
                <FaTree color="#185cff" size={20} className="absolute z-10" />
                <FaShieldAlt color="#fff" size={40} className="absolute" />
              </div>
            </div>
            <div className="col-span-3">
              <p className="text-dark text-lg font-semibold capitalize pb-1">
                Leaves and Trees
              </p>
              <p className="text-dark text-base capitalize">
                Dealing with fallen leaves and tree sap? Cleaning is a breeze
                with our easy-to-clean covers.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-2 justify-items-center items-start">
            <div className="h-[60px] w-[60px]">
              <div className="bg-blue rounded-full h-full w-full flex flex-col justify-center items-center">
                <FaPaw color="#185cff" size={20} className="absolute z-10" />
                <FaShieldAlt color="#fff" size={40} className="absolute" />
              </div>
            </div>
            <div className="col-span-3">
              <p className="text-dark text-lg font-semibold capitalize pb-1">
                Birds and Animals
              </p>
              <p className="text-dark text-base capitalize">
                Rest easy - No more unexpected bird droppings or curious animals
                causing potential damage to your car.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NoGarage() {
  return (
    <div className="relative w-full">
      <div className="-z-0">
        <Image
          alt="product"
          src={Garage}
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

function ClimateCrisis() {
  return (
    <div className="relative w-full">
      <div className="-z-0">
        <Image
          alt="product"
          src={Climate}
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

function Video() {
  return (
    <div
      id="productvideo"
      className="py-8 md:py-8 md:px-20 w-screen h-auto flex flex-col justify-center items-center max-w-full "
    >
      <video src="/video/coverland.webm" controls className="w-full h-full" />
      <div className="w-full h-auto bg-[#1A1A1A] flex flex-col justify-center items-start py-8 px-4 lg:px-8">
        <div>
          <p className="text-white font-semibold text-3xl uppercase text-left">
            Tailored for the perfect fit
          </p>
        </div>
        <div className="pb-4">
          <p className="text-white text-xs uppercase ">
            Your Car, Your Shield. Experience the superior custom fit we offer.{' '}
          </p>
        </div>
      </div>
    </div>
  );
}

function Layers() {
  return (
    <>
      <div className="w-full h-auto flex flex-col flex-start justify-start pb-8 ">
        <p className="text-dark font-normal text-base">High Quality</p>
        <p className="text-dark font-black text-3xl uppercase text-left">
          Engineered to Perfection
        </p>
      </div>
      <div className="w-full h-full flex flex-col lg:flex-row bg-[#F9F9FB]">
        <div className="w-full lg:w-2/4 pb-8 lg:pb-0">
          <Image
            src={LayerImg}
            alt="a car sitting inside of a building"
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>
        <div className="grid grid-cols-1 gap-8 w-full lg:w-2/4 items-center px-4 lg:px-16">
          <div className="grid grid-cols-1 gap-4">
            <p className="text-dark font-semibold capitalize text-lg">
              Next-Level Waterproof
            </p>
            <p className="text-dark font-normal  text-base">
              Extra waterproof Coating Provides the Ultimate Shield Against Rain
              and Moisture as well as the Elements.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <p className="text-dark font-semibold capitalize text-lg">
              Beyond Resilience
            </p>
            <p className="text-dark font-normal  text-base">
              Made with Top-Quality Premium Polyester, Our Cover Ensures
              Resilience. enjoy Year-Round Security in All Climates
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <p className="text-dark font-semibold capitalize text-lg">
              everlasting color
            </p>
            <p className="text-dark font-normal  text-base">
              Our Exclusive Coating Preserves the Original Color, preventing
              Fading Over Time.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-3 gap-2 pt-8 ">
        <div className="flex flex-col">
          <div className="h-[200px]">
            <Image
              src={ZeroLeaks}
              alt="seams of a cover"
              width={500}
              height={500}
              className="w-full h-full"
            />
          </div>
          <div className="pt-2">
            <p className="text-dark font-semibold capitalize text-lg">
              Zero Leaks
            </p>
            <p className="pt-1 text-dark font-normal  text-base">
              Stay Dry! Our specialized sealing tape is engineered to keep your
              car completely dry.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="h-[200px]">
            <Image
              src={Material}
              alt="seams of a cover"
              width={500}
              height={500}
              className="w-full h-full"
            />
          </div>
          <div className="pt-2">
            <p className="text-dark font-semibold capitalize text-lg">
              Soft Touch
            </p>
            <p className="pt-1 text-dark font-normal  text-base">
              Gentle on Paint, Tough on Elements! Lined with soft fleece for a
              perfect balance of comfort and durability.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="h-[200px]">
            <Image
              src={KeepDry}
              alt="seams of a cover"
              width={500}
              height={500}
              className="w-full h-full"
            />
          </div>
          <div className="pt-2">
            <p className="text-dark font-semibold capitalize text-lg">
              Keeps it dry
            </p>
            <p className="pt-1 text-dark font-normal  text-base">
              This car cover is one of the lightest you can find. Our covers are
              made from a meshwork of almost weightless fibers and a fluffy
              cotton interior.{' '}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

const ProductSwatch = () => {
  //   const searchParams = useSearchParams();
  //   const colorParam = searchParams.get('color');

  //   const {
  //     colorName,
  //     setColorName,
  //     products,
  //     selectedProduct,
  //     setSelectedProduct,
  //   } = useContext(Shop);

  //   const handleProductClick = (product) => {
  //     setSelectedProduct(product);
  //   };

  //   useEffect(() => {
  //     if (selectedProduct) {
  //       const newColorName = selectedProduct.display_color;
  //       setColorName(newColorName);
  //     }
  //   }, [selectedProduct]);

  //   function NextArrow(props) {
  //     const { className, style, onClick } = props;
  //     return (
  //       <div
  //         className={className}
  //         style={{
  //           ...style,
  //           display: 'block',
  //           background: 'white',
  //           color: 'black',
  //         }}
  //         onClick={onClick}
  //       />
  //     );
  //   }

  //   function PrevArrow(props) {
  //     const { className, style, onClick } = props;
  //     return (
  //       <div
  //         className={className}
  //         style={{
  //           ...style,
  //           display: 'block',
  //           background: 'white',
  //           color: 'black',
  //         }}
  //         onClick={onClick}
  //       />
  //     );
  //   }

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: `=>`,
    prevArrow: `<-`,
  };

  return (
    <div id="productSwatch">
      <div className="flex flex-start ">
        <p className="font-bold text-sm text-dark mr-2">Color Option</p>
        <p className="font-normal text-gray text-sm">Color</p>
      </div>
      {/* <Slider {...settings} className="product-swatch-item">
        {products.map((product, index) => (
          <div
            key={index}
            className="!flex flex-col justify-center items-center  hover:cursor-pointer relative"
          >
            <Image
              src={product.feature_image}
              alt="a car cover on top of a car"
              onClick={() => handleProductClick(product)}
              width={100}
              height={100}
            />
          </div>
        ))}
      </Slider> */}
    </div>
  );
};
