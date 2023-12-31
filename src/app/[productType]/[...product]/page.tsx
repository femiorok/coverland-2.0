import { fetchPDPData, fetchPDPDataWithQuery } from '@/lib/db';
import Image from 'next/image';
import CarSelector from '@/components/PDP/CarSelector';
import KeepDry from '@/images/PDP/keep_dry.webp';
import LayerImg from '@/images/PDP/layer_breakdown.webp';
import Material from '@/images/PDP/material-right.webp';
import ZeroLeaks from '@/images/PDP/zero_leaks.webp';

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
  const initData = await fetchPDPData(pathParams);
  const dataWithQueries = await fetchPDPDataWithQuery(searchParams, pathParams);

  const data = dataWithQueries?.length ? dataWithQueries : initData;
  console.log('data', data);

  if (!data) return null;
  const modelData = data?.filter((item) => item.msrp);
  console.log('modelData', modelData);

  const modelDataByYear = searchParams.year
    ? modelData.filter((model) => model.year_range.includes(searchParams.year))
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
      <CarSelector modelData={dataByParams} pathParams={pathParams} />
      <div
        id="product-details"
        className="w-full h-auto flex flex-col justify-center items-center max-w-[1440px] py-4 lg:py-20 px-4 md:px-20"
      >
        {/* <ProductHero /> */}
        <Video />
        <Layers />
      </div>
    </>
  );
}

function ProductHero() {
  return (
    <div className="pdp-info-hero">
      <div className="flex flex-col justify-between lg:justify-start items-center w-full h-full lg:pt-16 py-16 px-4">
        <p className="text-white font-black text-3xl uppercase text-center">
          Your Car Deserves the Best
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
