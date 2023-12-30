// @ts-nocheck

import { useCartContext } from '@/providers/CartProvider';
import React, { Fragment } from 'react';

const OrderReview = () => {
  const { cartItems } = useCartContext();
  return (
    <Fragment>
      <div className="hidden mt-10 mb-5 text-dark"> Your Cart</div>
      <div>
        {cartItems.map((item, index) => {
          return <CheckoutItemCard key={index} itemData={item} />;
        })}
      </div>
    </Fragment>
  );
};

const CheckoutItemCard = ({ itemData }) => {
  const skuKey = Object.keys(itemData).find((key) => key.startsWith('SKU_'));
  //const dynamicString = skuKey ? skuKey.split('_').slice(1).join('_') : ''

  const featureImageProp = `feature_image`;
  const coverTypeProp = `cover_type`;
  const priceProp = `price`;
  const SalePriceProp = `msrp`;
  const displayColorProp = `display_color`;

  return (
    <div
      className="flex items-center bg-offWhite rounded-xl p-4 mb-2
		"
    >
      <div className="w-2/4 md:w-auto pr-8">
        <img
          src={itemData[featureImageProp]}
          alt={itemData.uc_title}
          width={50}
          height={50}
          className="w-full md:w-14"
        />
      </div>
      <div className="flex flex-col w-2/4 md:w-auto">
        <div className="font-bold text-md text-dark pb-2">
          {itemData[coverTypeProp]}
        </div>
        <div className="font-normal text-sm text-dark flex flex-col xs:flex-col sm:flex-row mb-2 sm:mb-1">
          <span className="text-xs text-dark font-semibold">Vehicle:</span>
          <span className="text-xs sm:ml-1 text-dark">
            {itemData.vehicle_info}
          </span>
        </div>
        <div className="font-normal text-sm text-dark flex flex-col xs:flex-col sm:flex-row mb-2 sm:mb-1">
          <span className="text-xs text-dark font-semibold">Color:</span>
          <span className="text-xs sm:ml-1 text-dark">
            {itemData[displayColorProp]}
          </span>
        </div>
        <div className="font-normal text-sm text-dark flex flex-col xs:flex-col sm:flex-row mb-2 sm:mb-1">
          <span className="text-xs text-dark font-semibold">Quantity:</span>
          <span className="text-xs sm:ml-1 text-dark">{itemData.quantity}</span>
        </div>
        <div className="font-normal text-sm text-dark flex flex-col xs:flex-col sm:flex-row">
          <span className="text-xs text-dark font-semibold">Price:</span>
          <div className="flex flex-row">
            <span className="text-xs sm:ml-1 text-dark line-through">
              ${parseFloat(itemData[priceProp]).toFixed(2)}
            </span>
            <span className="text-xs sm:ml-1 text-dark ml-1">
              ${parseFloat(itemData[SalePriceProp]).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
