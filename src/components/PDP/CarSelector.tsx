'use client';

import { TProductData, fetchPDPData } from '@/lib/db';
import { Separator } from '@/components/ui/separator';

import {
  getNewestModel,
  getUniqueYearGenerations,
  groupProductsBy,
} from '@/lib/utils';
import Image from 'next/image';
import { GoDotFill } from 'react-icons/go';
import { IoRibbonSharp } from 'react-icons/io5';
import { FaShippingFast, FaThumbsUp } from 'react-icons/fa';
import { MdSupportAgent } from 'react-icons/md';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BsBoxSeam, BsGift, BsInfoCircle } from 'react-icons/bs';
import { DropdownPDP } from './DropdownPDP';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import useCart from '@/lib/cart/useCart';
import { ToastAction } from '@/components/ui/toast';
import { useToast } from '@/components/ui/use-toast';
import { useCartContext } from '@/providers/CartProvider';
import { TPDPPathParams } from '@/app/[productType]/[...product]/page';
import { match } from 'assert';
import { get } from 'http';
import { Popover } from '@radix-ui/react-popover';
import { PopoverContent, PopoverTrigger } from '../ui/popover';

function CarSelector({
  modelData,
  pathParams,
}: {
  modelData: TProductData[];
  pathParams: TPDPPathParams;
}) {
  const [coverOptionSelections, setCoverOptionSelections] = useState<{
    color: string | undefined;
    cover: string | undefined;
    sku: string | undefined;
  }>({
    color: '',
    cover: '',
    sku: '',
  });
  const [featuredImage, setFeaturedImage] = useState<string | null>(null);
  const { toast } = useToast();
  const { addToCart } = useCartContext();

  const { color, cover, sku } = coverOptionSelections;

  const isReadyForSelection =
    modelData.filter(
      (model) =>
        model.submodel1 === modelData[0].submodel1 &&
        model.year_generation === modelData[0].year_generation
    ).length === modelData.length;

  console.log('isReadyForSelection', isReadyForSelection);

  const hasSubmodels = modelData.find((model) => model.submodel1 !== '')
    ? true
    : false;
  console.log(hasSubmodels);

  const getDefaultModelDisplayData = (
    model: TProductData,
    allModels: TProductData[]
  ) => {
    if (!model) return;
    const { year_generation, submodel1, submodel2 } = model;
    const matchingModels = allModels.filter(
      (cover) =>
        cover.year_generation === year_generation &&
        cover.submodel1 == submodel1 &&
        cover.submodel2 == submodel2
    );

    return matchingModels;
  };

  const defaultModel = getNewestModel(modelData)[0];
  const defaultCoverOptions = getDefaultModelDisplayData(
    defaultModel,
    modelData
  );

  const activeSku =
    modelData.filter(
      (model) => model.display_color === color && model.display_id === cover
    )[0] ?? defaultModel;

  const displayedProduct = isReadyForSelection
    ? modelData.filter((model) => model.sku === sku)[0] ?? modelData[0]
    : defaultModel;

  const isReadyForCart = hasSubmodels === !!activeSku?.submodel1;

  console.log(modelData, displayedProduct, coverOptionSelections);

  const isDisabled = !sku;
  const handleAddToCart = () => {
    const selectedProduct = displayedProduct;
    if (!selectedProduct) return;
    console.log('running');
    return addToCart({ ...selectedProduct, quantity: 1 });
  };

  const productImages = displayedProduct?.product?.split(',') ?? [];

  const colorOptions = groupProductsBy('display_color', modelData);
  const coverTypeOptions = groupProductsBy('display_id', modelData);

  console.log('types', coverTypeOptions);

  const isOptionDisabled = (
    productOption: TProductData | undefined,
    type: keyof typeof coverOptionSelections
  ) => {
    const validOptions = modelData.filter(
      (prod) => prod.display_color === color
    );

    const isDisabled =
      type === 'cover' &&
      !validOptions.find((o) => o.display_id === productOption?.display_id);

    return isDisabled;
  };

  const selectionClassname = (
    productOption: TProductData | undefined,
    type: keyof typeof coverOptionSelections
  ) => {
    const disabledClassname = isOptionDisabled(productOption, type)
      ? 'opacity-50 cursor-not-allowed'
      : '';

    if (type === 'cover') {
      return `w-full h-full m-1 border border-gray-300 rounded cursor-pointer ${disabledClassname} ${
        cover === productOption?.display_id
          ? 'border-4 border-red-600 rounded-lg'
          : ''
      }`;
    }

    return `w-full h-full m-1 border border-gray-300 rounded cursor-pointer ${disabledClassname} ${
      sku === productOption?.sku ? 'border-4 border-red-600 rounded-lg' : ''
    }`;
  };

  return (
    <section className="h-auto w-full max-w-[1440px] mx-auto px-4 md:px-20">
      <div className="flex flex-col lg:flex-row justify-between w-full items-start py-14">
        {/* Left Panel */}
        <div className=" h-auto w-full lg:w-3/5 lg:pr-16 flex flex-col justify-center items-center pb-8 lg:pb-0">
          {/* Featured Image */}
          <Image
            id="featured-image"
            src={featuredImage ?? (displayedProduct?.feature as string)}
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
                  featuredImage === img
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
              {activeSku && `${activeSku?.display_color}`}
            </span>
          </p>
          <div className="grid grid-cols-5 w-auto gap-4 ">
            {isReadyForSelection &&
              colorOptions.map((option) => {
                const productOption = modelData.find(
                  (prod) => prod.display_color === option
                );
                console.log('productOption', productOption);
                return (
                  <div
                    className="flex flex-col justify-center items-center"
                    key={option}
                  >
                    <Image
                      src={productOption?.feature as string}
                      width={100}
                      height={100}
                      alt="car cover details"
                      className={selectionClassname(productOption, 'color')}
                      onClick={() =>
                        setCoverOptionSelections({
                          color: option,
                          cover: productOption?.display_id as string,
                          sku: productOption?.sku,
                        })
                      }
                    />
                  </div>
                );
              })}
          </div>
          {isReadyForSelection && (
            <>
              <Separator className="my-4" />
              <p className="font-semibold">
                {isDisabled ? 'Please select a color' : 'Cover Types:'}{' '}
                <span className="font-normal">
                  {activeSku && `${activeSku?.display_id}`}
                </span>
              </p>
            </>
          )}
          <div className="grid grid-cols-5 w-auto gap-4">
            {isReadyForSelection &&
              coverTypeOptions.map((option, idx) => {
                const productOption = modelData.find(
                  (prod) => prod.display_id === option
                );
                return (
                  <button
                    className="flex flex-col justify-center items-center"
                    key={option}
                    onClick={() =>
                      setCoverOptionSelections({
                        cover: option,
                        color: coverOptionSelections.color,
                        sku: coverOptionSelections.sku,
                      })
                    }
                    disabled={isOptionDisabled(productOption, 'cover')}
                  >
                    <Image
                      src={productOption?.feature as string}
                      width={100}
                      height={100}
                      alt="car cover details"
                      className={selectionClassname(productOption, 'cover')}
                    />
                  </button>
                );
              })}
          </div>
          <Separator className="my-4" />

          {/* Title and Descriptions*/}
          <div className="grid grid-cols-1 gap-4">
            <div className="h-20">
              <h2 className="text-2xl font-bold text-dark pb-4">
                {`${activeSku?.year_generation}
                ${activeSku?.make} ${activeSku?.product_name}`}
                &trade;{' '}
                {`
                ${activeSku?.display_id} ${activeSku?.display_color}`}
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
              <p className="text-dark text-3xl font-bold">${activeSku?.msrp}</p>
              {activeSku?.price && (
                <p className="text-dark text-lg">
                  <span className="text-base  line-through opacity-50">
                    ${activeSku?.price}
                  </span>
                  Save 50% ( $
                  {String(Number(activeSku?.price) - Number(activeSku?.msrp))})
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
              <DropdownPDP modelData={modelData} />
            </div>
            {isDisabled ? (
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
                onClick={() => {
                  handleAddToCart();
                  toast({
                    duration: 3000,
                    action: (
                      <ToastAction altText="Success" className="w-full">
                        Added your item to cart!
                      </ToastAction>
                    ),
                  });
                }}
              >
                Add To Cart
              </Button>
            )}
          </div>

          {/* Button and borrowing info stuff */}
          {/* {selected.submodel !== '' ? (
        <div className="flex-row mb-5 bg-offWhite rounded-xl">
          <div className="p-4">
            <div>
              <p className="text-dark font-semibold">
                Vehicle Options Selected:
              </p>
            </div>
            <div className="text-dark">{selected.submodel}</div>
            <div className="text-dark">{selected.submodelOption}</div>
          </div>
        </div>
      ) : (
        <></>
      )} */}
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
