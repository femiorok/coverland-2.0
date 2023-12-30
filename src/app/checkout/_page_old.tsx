// @ts-nocheck

'use client';
import React, { useState, useEffect, Fragment } from 'react';
import PaymentForm from './_components_old/PaymentForm';
import OrderReview from './_components_old/OrderReview';
import AddressForm from './_components_old/AddressForm';
import ShippingSummary from './_components_old/ShippingSummary';
import handleOrderConfirmationEmail from '../api/utils/orders';
import { getEligibleShippingOptions } from './utils';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useRouter } from 'next/navigation';
import Processing from './_components_old/ProcessingLoader';
import { MdCreditCardOff, MdOutlineCreditCardOff } from 'react-icons/md';
import { useCartContext } from '@/providers/CartProvider';

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''
);

export type TOrder = {
  id: string;
  order_placed: string;
  shipping_address: any;
  items: any[];
  subtotal: number;
  discount: number;
  total: number;
  shipping_cost: number;
  payment_details?: any;
} | null;

const UserCheckout = () => {
  const router = useRouter();
  const { cartItems, getTotalPrice } = useCartContext();
  const [shippingCost, setShippingCost] = useState(0);
  const [order, setOrder] = useState<TOrder>(null);
  const [shippingDetails, setShippingDetails] = useState(null);
  const [showForm, setShowForm] = useState(true);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState('');
  const [selectedShippingOption, setSelectedShippingOption] = useState(null);
  const [isPaymentStep, setIsPaymentStep] = useState(false);
  const [isOrderReadyToPlace, setIsOrderReadyToPlace] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [paymentError, setPaymentError] = useState(false);

  const shippingOptions = shippingDetails
    ? getEligibleShippingOptions(cartItems, shippingDetails?.state)
    : [];

  const handleShippingOptionSelect = (option) => {
    console.log('option', option);
    setSelectedShippingOption(option);
    setShippingCost(option.shipping_cost);
  };

  const generateOrderId = () => {
    const randomNumber = Math.floor(100000 + Math.random() * 900000);
    return `CL-${randomNumber}`;
  };

  const handleSaveAndContinue = (details) => {
    const timestamp = new Date().toISOString();
    const orderId = generateOrderId();
    setShippingDetails(details);
    setShowForm(false);
    const newOrder = {
      id: orderId,
      order_placed: timestamp,
      shipping_address: details,
      items: cartItems,
      subtotal: getTotalPrice(),
      discount: 5,
      total: getTotalPrice() - 5,
      shipping_cost: 0,
    };
    setOrder(newOrder);
  };

  const renderSelectedShippingOption = () => {
    if (!selectedShippingOption) return null;
    return (
      <div className="mt-10">
        <div className="font-bold pl-4 text-xl pb-4 text-dark">
          Selected Shipping
        </div>

        <div className="selected-shipping-option-card p-4 border rounded-xl bg-offWhite">
          <div className="font-normal text-dark">
            {selectedShippingOption.shipping_cost === 0
              ? 'Free'
              : `$${selectedShippingOption.shipping_cost}`}{' '}
            - {selectedShippingOption.shipping_type}
          </div>
          <div className="font-normal text-dark">
            {selectedShippingOption.shipping_method}
          </div>
        </div>
      </div>
    );
  };

  const handleContinueToPayment = () => {
    setIsPaymentStep(true);
  };

  const handleEditClick = () => {
    setShowForm(true);
  };

  const handleTokenCreated = (token) => {
    setOrder((currentOrder) => ({
      ...currentOrder,
      payment_details: { stripeToken: token },
    }));
  };

  const handlePaymentOptionChange = (event) => {
    setSelectedPaymentOption(event.target.value);
  };

  const handlePlaceOrder = async () => {
    if (
      !order ||
      !order.payment_details ||
      !order.payment_details.stripeToken
    ) {
      console.error('Stripe token is not available');
      return;
    }

    const orderData = {
      stripeToken: order.payment_details.stripeToken,
      total: order.total,
      customerDetails: {
        name:
          order.shipping_address.firstName +
          ' ' +
          order.shipping_address.lastName,
        email: order.shipping_address.email,
        address: {
          line1: order.shipping_address.address,
          city: order.shipping_address.city,
          state: order.shipping_address.state,
          postal_code: order.shipping_address.postalCode,
          country: 'US',
        },
      },
    };

    try {
      const response = await fetch('/api/checkout-sessions', {
        body: JSON.stringify(orderData),
        method: 'POST',
      });
      const data = response;

      if (data.success) {
        console.log('Payment successful');
        console.log(order);
        localStorage.setItem('order-number', order.id);
        handleOrderConfirmationEmail(order);
        router.push('/order-confirmation');
      } else {
        setPopupMessage('Payment failed: ' + data.message);
        setShowPopup(true);
        setPaymentError(true);
        resetPaymentForm();
      }
    } catch (error) {
      setPopupMessage('Error during payment: ' + error.message);
      setShowPopup(true);
      setPaymentError(true);
      resetPaymentForm();
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupMessage('');
  };
  const resetPaymentForm = () => {
    console.log('TOKEN ID CLEARED');
    // ClEARS STRIPE TOKEN
    setOrder((currentOrder) => ({
      ...currentOrder,
      payment_details: {},
    }));
  };

  return (
    <Fragment>
      <div className="bg-white w-full flex lg:flex-row flex-col-reverse h-full px-4 md:px-20 py-8 lg:py-20">
        <div className="flex flex-col lg:w-2/4 xl:w-2/3 bg-gray-200 h-auto font-bold lg:pr-8">
          <div className="mb-4 text-xl text-dark pl-4">Shipping</div>
          {!isPaymentStep ? (
            showForm ? (
              <div className="">
                <AddressForm
                  formType="shipping"
                  onFormSubmit={handleSaveAndContinue}
                  initialData={shippingDetails}
                />
              </div>
            ) : (
              <Fragment>
                <ShippingSummary
                  shippingDetails={shippingDetails}
                  onEditClick={handleEditClick}
                />
                <div className="shipping-options mt-10">
                  <div className="mb-4 text-xl text-dark pl-4">
                    Shipping Method
                  </div>
                  {shippingOptions
                    .sort((a, b) => a.shipping_cost - b.shipping_cost)
                    .map((option, index) => (
                      <div
                        key={index}
                        className={`shipping-option-card text-dark mb-4 p-4 border hover:cursor-pointer border-dark hover:border-opacity-100 transition duration-250 border-opacity-30 bg-offWhite rounded-xl ${
                          selectedShippingOption === option
                            ? 'border-2 border-black'
                            : ''
                        }`}
                        onClick={() => handleShippingOptionSelect(option)}
                      >
                        <div className="font-normal tezt-dark">
                          {option.shipping_cost === 0
                            ? '$0'
                            : `$${option.shipping_cost}`}{' '}
                          - {option.shipping_type}
                        </div>
                        <div className="font-normal tezt-dark">
                          {option.shipping_method}
                        </div>
                      </div>
                    ))}
                </div>
                <div className="flex justify-end mt-5">
                  <button
                    type="button"
                    className={`bg-${
                      selectedShippingOption ? 'black' : 'grey-500'
                    } text-white py-2 px-4 rounded-xl`}
                    onClick={handleContinueToPayment}
                    disabled={!selectedShippingOption}
                  >
                    Continue to Payment
                  </button>
                </div>
              </Fragment>
            )
          ) : (
            <Fragment>
              <ShippingSummary shippingDetails={shippingDetails} />
              {renderSelectedShippingOption()}
              <div className="payment-options mt-10">
                <div className="font-bold mb-4 pl-4 text-xl text-dark">
                  Payment
                </div>
                <div className="bg-offWhite rounded-xl p-4">
                  <div className="payment-option mb-2 ">
                    <input
                      type="radio"
                      id="credit-debit-card"
                      name="paymentOption"
                      value="card"
                      onChange={handlePaymentOptionChange}
                    />
                    <label
                      htmlFor="credit-debit-card"
                      className="ml-2 text-dark"
                    >
                      Credit or Debit Card
                    </label>
                  </div>
                  <div className="payment-option">
                    <input
                      type="radio"
                      id="paypal"
                      name="paymentOption"
                      value="paypal"
                      onChange={handlePaymentOptionChange}
                      disabled // remove this if you implement PayPal integration
                    />
                    <label htmlFor="paypal" className="ml-2 text-dark">
                      PayPal
                    </label>
                  </div>
                </div>
                {selectedPaymentOption === 'card' && isPaymentStep && (
                  <Elements stripe={stripePromise}>
                    <PaymentForm
                      updateOrder={setOrder}
                      onTokenCreated={handleTokenCreated}
                      order={order}
                    />
                  </Elements>
                )}
                {isOrderReadyToPlace && (
                  <div className="flex justify-center md:justify-end mt-10">
                    <button
                      className="bg-black text-white p-2 rounded-lg"
                      onClick={handlePlaceOrder}
                    >
                      Confirm & Place Order
                    </button>
                  </div>
                )}
              </div>
              {/*PROCESSING LOADER*/}
            </Fragment>
          )}
        </div>
        <div className="flex flex-col lg:w-2/4 xl:w-1/3  h-auto font-bold text-base text-dark ">
          <div className="pl-4 pb-4 text-xl">Order Summary</div>
          <OrderReview />

          <div className="mt-4 font-normal text-md bg-offWhite rounded-xl p-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${order?.subtotal.toFixed(2)}</span>
            </div>
            {/*<div className='flex justify-between mt-2' style={{ color: 'red' }}>
							<span>Sale-Discount</span>
							<span>-${discount.toFixed(2)}</span>
								</div>*/}
            <div className="flex justify-between mt-2">
              <span>Shipping</span>
              <span>
                {selectedShippingOption === null
                  ? '---'
                  : shippingCost === 0
                  ? 'Free'
                  : `$${shippingCost.toFixed(2)}`}
              </span>
            </div>
            <div className="flex justify-between mt-2 border-t border-dark border-opacity-30 pt-2">
              <span>Total</span>
              <span>${(order?.subtotal + shippingCost).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="px-4 fixed inset-0 bg-gray bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
          <div className="flex flex-col bg-[#f8e5e5] p-4 rounded-lg shadow-xl border border-[#cf4a4a]">
            <div className=" flex flex-row justify-center items-center ">
              <MdOutlineCreditCardOff size={80} color="#cf4a4a" />
              <div className="text-dark grid grid-cols-1 pl-4">
                <span className="text-lg font-black text-[#cf4a4a] pb-1">
                  Payment declined.
                </span>
                <span className="text-base font-normal text-[#cf4a4a]">
                  Oh snap! The credit card information was declined.{' '}
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-center">
              <button
                onClick={closePopup}
                className="mt-4 bg-red-500 bg-[#cf4a4a] transition duration-300 hover:bg-[#a13838] text-white font-bold py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {/*	<ProcessingLoader message="Processing your order..." />*/}
    </Fragment>
  );
};

export default UserCheckout;
