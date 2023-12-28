'use client';

import { TProductData, fetchPDPData } from '@/lib/db';
import { Separator } from '@/components/ui/separator';

import {
  getNewestModel,
  getUniqueYearGenerations,
  groupProductsBy,
  modelToSlug,
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

function CarSelector({ data }: { data: TProductData[] }) {
  const defaultModel = getNewestModel(data)[0];
  const [selectedModel, setSelectedModel] =
    useState<TProductData>(defaultModel);
  const [selections, setSelections] = useState({
    color: '',
    cover: '',
  });
  const [featuredImage, setFeaturedImage] = useState<string | null>(null);

  const currentSelections = Object.values(selections).filter((s) => s !== '');

  const displayedCover =
    data.find((product) =>
      currentSelections.every((selection) =>
        Object.values(product).includes(selection)
      )
    ) || defaultModel;

  console.log(displayedCover);

  console.log(selections);
  const [selectedImage, setSelectedImage] = useState<string>(
    selectedModel.feature as string
  );
  const generationOptions = getUniqueYearGenerations(data);

  const productOptions = data.filter(
    (model) =>
      model.year_generation === selectedModel.year_generation &&
      model.feature?.includes('category')
  );
  const colorOptions = groupProductsBy('display_color', productOptions);
  const coverOptions = groupProductsBy('display_id', productOptions);

  console.log('productOptions', productOptions);

  //   const skusByColor = data.filter(obj => obj.display_color === colorOptions[0])

  console.log(colorOptions, coverOptions);

  const productImages = displayedCover.product?.split(',') ?? [];

  const selectedOptionBorder = (option: string) => {
    console.log('option', option);
    return productOptions.find((prod) => prod.display_color === option)
      ? 'h-40'
      : '';
  };

  const selectionClassname = (option: string, type: keyof typeof selections) =>
    `w-full h-full m-1 border border-gray-300 rounded cursor-pointer ${
      selections[type] === option ? 'border-4 border-red-300 rounded-lg' : ''
    }`;

  console.log('classname', selectionClassname);
  return (
    <section className="h-auto w-full max-w-[1440px] mx-auto px-4 md:px-20">
      <div className="flex flex-col lg:flex-row justify-between w-full items-start py-14">
        {/* Left Panel */}
        <div className=" h-auto w-full lg:w-3/5 lg:pr-16 flex flex-col justify-center items-center pb-8 lg:pb-0">
          {/* Featured Image */}
          <Image
            id="featured-image"
            src={featuredImage ?? (displayedCover.feature as string)}
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
                    ? 'border-4 border-red-300 rounded-lg'
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
          <p className="font-semibold">Cover Colors</p>
          <div className="grid grid-cols-5 w-auto gap-4 ">
            {colorOptions.map((option, idx) => (
              <div
                className="flex flex-col justify-center items-center"
                key={option}
              >
                <Image
                  src={
                    productOptions.find((prod) => prod.display_color === option)
                      ?.feature as string
                  }
                  width={100}
                  height={100}
                  alt="car cover details"
                  className={selectionClassname(option, 'color')}
                  onClick={() =>
                    setSelections({ ...selections, color: option })
                  }
                />
              </div>
            ))}
          </div>
          <Separator className="my-4" />
          <p className="font-semibold">Cover Types</p>
          <div className="grid grid-cols-5 w-auto gap-4">
            {coverOptions.map((option, idx) => (
              <button
                className="flex flex-col justify-center items-center"
                key={option}
                onClick={() => setSelections({ ...selections, cover: option })}
              >
                <Image
                  src={
                    productOptions.find((prod) => prod.display_id === option)
                      ?.feature as string
                  }
                  width={100}
                  height={100}
                  alt="car cover details"
                  className={selectionClassname(option, 'cover')}
                />
              </button>
            ))}
          </div>
          <Separator className="my-4" />

          <hr className="h-[1px] w-full bg-dark opacity-30 my-4" />
          {/* Title and Descriptions*/}
          <div className="grid grid-cols-1 gap-1">
            <div className="h-20">
              <h2 className="text-2xl font-bold text-dark pb-4">
                {displayedCover.make} {displayedCover.product_name}&trade;{' '}
                {displayedCover.display_id} {displayedCover.display_color}
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
                ${displayedCover.msrp}
              </p>
              <p className="text-dark text-lg">
                <span className="text-base  line-through opacity-50">
                  ${displayedCover.price}
                </span>{' '}
                Save 50% ( $
                {String(
                  Number(displayedCover.price) - Number(displayedCover.msrp)
                )}
                )
              </p>
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
            <div className="mt-8">
              <DropdownPDP currentSelection={displayedCover} />
            </div>
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

          <button
            // onClick={handleAddToCart}
            className="bg-dark-red text-white px-4 py-2 rounded mt-2 uppercase w-full"
          >
            Add to Cart
          </button>
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
