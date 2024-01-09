import { TProductData, fetchPDPData, fetchPDPDataWithQuery } from '@/lib/db';
import CarSelector from '@/components/PDP/CarSelector';

import { redirect } from 'next/navigation';
import { ExtraProductDetails } from '@/components/PDP/OtherDetails';

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
        className="w-full h-auto"
        // flex flex-col justify-center items-center max-w-[1440px] py-4 lg:py-20 px-4 md:px-20"
      >
        <ExtraProductDetails />
      </div>
    </>
  );
}

function BreadCrumbsTitle() {
  return (
    <div className="w-full mt-8">
      <h6 className="text-[#343434] text-sm font-normal">Home / Car Covers</h6>
    </div>
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
