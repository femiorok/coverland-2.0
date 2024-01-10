'use client';

import { TProductData, fetchPDPData } from '@/lib/db';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import { GoDotFill } from 'react-icons/go';
import { IoRibbonSharp } from 'react-icons/io5';
import { FaShippingFast, FaThumbsUp } from 'react-icons/fa';
import { MdSupportAgent } from 'react-icons/md';
import Link from 'next/link';
import { useState } from 'react';
import { BsBoxSeam, BsGift, BsInfoCircle } from 'react-icons/bs';
import { DropdownPDP } from './DropdownPDP';
import { useToast } from '@/components/ui/use-toast';
import { useCartContext } from '@/providers/CartProvider';
import {
  TPDPPathParams,
  TPDPQueryParams,
} from '@/app/[productType]/[...product]/page';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@radix-ui/react-popover';
import { Button } from '../ui/button';
import { generationDefaultCarCovers } from '@/lib/constants';

function CarSelector({
  modelData,
  pathParams,
  searchParams,
  submodels,
  secondSubmodels,
}: {
  modelData: TProductData[];
  pathParams: TPDPPathParams;
  submodels: string[];
  secondSubmodels: string[];
  searchParams: TPDPQueryParams;
}) {
  const initialProduct = modelData.find(
    (product) =>
      (product.display_color === 'Black Red Stripe' ||
        product.display_color === 'Black Gray Stripe') &&
      generationDefaultCarCovers.includes(product.sku.slice(-6))
  );

  const [selectedProduct, setSelectedProduct] = useState<TProductData>(
    initialProduct ?? modelData[0]
  );
  const [featuredImage, setFeaturedImage] = useState<string>(
    selectedProduct?.feature as string
  );
  const [showDropdown, setShowDropdown] = useState(false);

  const { toast } = useToast();
  const { addToCart } = useCartContext();
  const isReadyForSelection = submodels.length
    ? pathParams?.product?.length === 3 && !!searchParams?.submodel
    : pathParams?.product?.length === 3;

  const shouldSubmodelDisplay = !!submodels.length && !searchParams?.submodel;
  console.log('shouldSubmodelDisplay', shouldSubmodelDisplay);
  console.log(modelData.filter((product) => product.sku.includes('100983')));

  const uniqueColors = Array.from(
    new Set(modelData.map((model) => model.display_color))
  ).map((color) => modelData.find((model) => model.display_color === color));

  const uniqueTypes = Array.from(
    new Set(modelData.map((model) => model.display_id))
  ).map((type) => modelData.find((model) => model.display_id === type));
  console.log('uniqueCoverColors', uniqueColors);
  console.log('uniqueCoverTypes', uniqueTypes);

  // const handleAddToCart = () => {
  //   const selectedProduct = displayedProduct;
  //   if (!selectedProduct) return;
  //   console.log('running');
  //   return addToCart({ ...selectedProduct, quantity: 1 });
  // };

  const productImages = selectedProduct?.product?.split(',') ?? [];
  console.log('productImages', productImages);

  return (
    <section className="h-auto w-full max-w-[1440px] mx-auto px-4 md:px-20">
      <div className="flex flex-col lg:flex-row justify-between w-full items-start py-14">
        {/* Left Panel */}
        <div className=" h-auto w-full lg:w-3/5 lg:pr-16 flex flex-col justify-center items-center pb-8 lg:pb-0">
          {/* Featured Image */}
          <Image
            id="featured-image"
            src={featuredImage ?? ''}
            alt="a car with a car cover on it"
            width={500}
            height={500}
            className="w-full h-full md:w-[250px] md:h-{250px] lg:w-[500px] lg:h-[500px]"
            // onClick={console.log(selectedImage)}
          />
          {/* Gallery Images */}
          <div className="grid grid-cols-5 w-auto gap-4 pt-4">
            {productImages.map((img, idx) => (
              <Image
                key={idx}
                src={img}
                width={100}
                height={100}
                alt="car cover details"
                className={`w-full h-full border border-gray-300 rounded cursor-pointer ${
                  selectedProduct.product?.includes(img)
                    ? 'border-4 border-red-600 rounded-lg'
                    : ''
                }}`}
                onClick={() => setFeaturedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div className=" h-auto w-full lg:w-2/5 pl-0">
          {/* Color options */}
          <p className="font-semibold">
            {isReadyForSelection
              ? `Color Options`
              : `Please select your car's details below`}
            :{' '}
            <span className="font-normal">
              {isReadyForSelection && `${selectedProduct?.display_color}`}
            </span>
          </p>
          {isReadyForSelection && (
            <div className="grid grid-cols-5 w-auto gap-4 ">
              {uniqueColors?.map((sku) => {
                return (
                  <div
                    className="flex flex-col justify-center items-center"
                    key={sku?.sku}
                  >
                    <Image
                      src={sku?.feature as string}
                      width={100}
                      height={100}
                      alt="car cover details"
                      className={`w-full h-full m-1 border border-gray-300 rounded cursor-pointer`}
                      onClick={() => {
                        setFeaturedImage(sku?.feature as string);
                        setSelectedProduct(sku as TProductData);
                      }}
                    />
                  </div>
                );
              })}
            </div>
          )}
          {isReadyForSelection && (
            <>
              <Separator className="my-4" />
              <p className="font-semibold">
                Cover Types:
                <span className="font-normal">
                  {isReadyForSelection && ` ${selectedProduct?.display_id}`}
                </span>
              </p>
            </>
          )}
          {isReadyForSelection && (
            <div className="grid grid-cols-5 w-auto gap-4">
              {uniqueTypes.map((type, idx) => {
                return (
                  <button
                    className="flex flex-col justify-center items-center"
                    key={type?.sku}
                    onClick={() => {
                      setFeaturedImage(type?.feature as string);
                      setSelectedProduct(type as TProductData);
                    }}
                    // disabled={isOptionDisabled(productOption, 'cover')}
                  >
                    <Image
                      src={type?.feature as string}
                      width={100}
                      height={100}
                      alt="car cover details"
                      className={`w-full h-full m-1 border border-gray-300 rounded cursor-pointer`}
                    />
                  </button>
                );
              })}
            </div>
          )}
          <Separator className="my-4" />
          {/* Title and Descriptions*/}
          <div className="grid grid-cols-1 gap-4">
            <div className="h-20">
              <h2 className="text-2xl font-bold text-dark pb-4">
                {`${selectedProduct?.year_generation}
                ${selectedProduct?.make} ${selectedProduct?.product_name} ${selectedProduct?.display_id}`}
                &trade; {`${selectedProduct?.display_color}`}
              </h2>
            </div>
            <div className="flex flex-start items-center leading-4">
              <GoDotFill size={10} color="#008000 " />
              <p className="text-dark font-semibold text-xs pl-1">
                Full Warranty for 7 years
              </p>
            </div>
            <div className="flex flex-start items-center leading-4">
              <GoDotFill size={10} color="#008000 " />
              <p className="text-dark font-semibold text-xs pl-1">In Stock</p>
            </div>
          </div>
          {/* Pricing */}
          <div className="pt-4">
            <div className="grid grid-cols-1">
              <p className="text-dark text-3xl font-bold">
                ${selectedProduct?.msrp}
              </p>
              {selectedProduct?.price && (
                <p className="text-dark text-lg">
                  <span className="text-base  line-through opacity-50">
                    ${selectedProduct?.price}
                  </span>{' '}
                  Save 50% ( $
                  {String(
                    Number(selectedProduct?.price) -
                      Number(selectedProduct?.msrp)
                  )}
                  )
                </p>
              )}
            </div>
          </div>
          {/* Product Description */}
          {/* <ProductDropdown dropdownItems={dropdownItems} /> */}
          {/* info stuff */}
          <div className="flex flex-col justify-start items-start pb-8 pt-10">
            <div className="flex flex-row justify-start items-start">
              <div className="flex flex-col justify-start items-start pt-0 pr-4">
                <BsBoxSeam size={20} color="#000" />
              </div>
              <div className="flex flex-col justify-start items-start">
                <div className="text-dark text-lg capitalize leading-4 xl:flex flex-row justify-start items-center">
                  <span className="uppercase leading-6 font-bold xl:mr-1">
                    Free shipping
                  </span>
                  <br className="xl:hidden" />
                  <span className="hidden xl:block md:mr-1">-</span>
                  Delivery est. 3-5 Days
                </div>
                <p className="text-dark text-sm">
                  Order within{' '}
                  <span className="opacity-75">9 Hours 3 Mins</span>
                </p>
                <p className="text-green-500 text-sm pt-2">
                  Free Returns within 30 Days
                </p>
              </div>
            </div>
            <div className="flex justify-start items-center pt-4">
              <BsGift size={20} color="#000" />
              <p className="text-dark text-lg capitalize ml-4 mr-1">
                <span className="uppercase font-bold">$30 free</span> value kit
                included
              </p>
              <BsInfoCircle size={14} color="#767676" />
            </div>
            <div className="mt-8 w-full">
              <DropdownPDP
                modelData={modelData}
                submodels={submodels}
                secondSubmodels={secondSubmodels}
              />
            </div>
            {!isReadyForSelection && selectedProduct ? (
              <Popover>
                <PopoverTrigger asChild>
                  <Button className="h-[60px] md:w-[400px] w-full mt-4 text-lgbg-[#BE1B1B] opacity-70">
                    Add To Cart
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="">
                    <p>Please finish your selection</p>
                  </div>
                </PopoverContent>
              </Popover>
            ) : (
              <Button
                className="h-[60px] md:w-[400px] w-full mt-4 text-lg bg-[#BE1B1B] disabled:bg-[#BE1B1B]"
                // onClick={() => {
                //   handleAddToCart();
                //   toast({
                //     duration: 3000,
                //     action: (
                //       <ToastAction altText="Success" className="w-full">
                //         Added your item to cart!
                //       </ToastAction>
                //     ),
                //   });
                // }}
              >
                Add To Cart
              </Button>
            )}
          </div>
          <div className="pt-4">
            <p className="text-dark text-xs">
              As low as <span className="font-semibold">$32.50/mo</span> with{' '}
              <span className="font-semibold">PayPal</span>. Terms and
              conditions may apply.
            </p>
          </div>
          <hr className="h-[1px] w-full bg-dark opacity-30 my-8" />
          {/* Selling Attributes */}
          <div className="grid grid-cols-2 gap-4 pb-4">
            <div className="flex flex-row">
              <div className="rounded-full border border-dark w-10 h-10 flex flex-col justify-center items-center">
                <IoRibbonSharp size={20} color="#000" />
              </div>
              <div className="flex flex-col justify-center pl-2">
                <p className="text-base text-dark">Guaranteed Fit</p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="rounded-full border border-dark w-10 h-10 flex flex-col justify-center items-center">
                <FaShippingFast size={20} color="#000" />
              </div>
              <div className="flex flex-col justify-center pl-2">
                <p className="text-base text-dark">Free Shipping</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-row">
              <div className="rounded-full border border-dark w-10 h-10 flex flex-col justify-center items-center">
                <MdSupportAgent size={20} color="#000" />
              </div>
              <div className="flex flex-col justify-center pl-2">
                <p className="text-base text-dark">Dedicated Support</p>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="rounded-full border border-dark w-10 h-10 flex flex-col justify-center items-center">
                <FaThumbsUp size={20} color="#000" />
              </div>
              <div className="flex flex-col justify-center pl-2">
                <p className="text-base text-dark">Free Returns</p>
              </div>
            </div>
          </div>
          {/* CSR */}
          <div className="flex flex-row pt-8">
            <div className="h-10 w-10 flex flex-col justify-center items-center">
              {/* <Image
            src={AgentProfileImg}
            className="rounded-full w-full h-full"
          /> */}
            </div>
            <div className="flex flex-col justify-center items-start pl-2">
              <p className="text-dark font-semibold">Need Help?</p>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="tel:1-800-799-5165"
                  className="text-dark hover-underline-animation-dark text-sm"
                >
                  1-800-799-5165
                </Link>
                {/* PUT LIVE CHAT BTN HERE */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarSelector;
