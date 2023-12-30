// @ts-nocheck

import React, { useState, useContext, useEffect } from 'react';
import AddressForm from './AddressForm';
import { IoShieldCheckmark } from 'react-icons/io5';

import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from '@stripe/react-stripe-js';

const PaymentForm = ({
  updateOrder,
  onReadyToSubmit,
  onTokenCreated,
  order,
}) => {
  const stripe = useStripe();
  const elements = useElements();

  const [isBillingSameAsShipping, setIsBillingSameAsShipping] = useState(true);
  const [billingFormSubmitted, setBillingFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [paymentFormSubmitted, setPaymentFormSubmitted] = useState(false);

  const handleSubmit = async () => {
    if (!stripe || !elements) {
      console.log('Stripe not initialized');
      return;
    }

    const cardNumberElement = elements.getElement(CardNumberElement);
    const cardExpiryElement = elements.getElement(CardExpiryElement);
    const cardCvcElement = elements.getElement(CardCvcElement);

    const { error, token } = await stripe.createToken(cardNumberElement, {
      name: order.billing_address
        ? `${order.billing_address.firstName} ${order.billing_address.lastName}`
        : '',
      address_line1: order.billing_address ? order.billing_address.address : '',
      address_line2: order.billing_address
        ? order.billing_address.address2
        : '',
      address_city: order.billing_address ? order.billing_address.city : '',
      address_state: order.billing_address ? order.billing_address.state : '',
      address_zip: order.billing_address
        ? order.billing_address.postalCode
        : '',
      address_country: 'US', // Assuming the country is always 'US'
    });

    if (error) {
      console.error('DID NOT GO THROUGH');
      cardNumberElement.clear();
      setPaymentFormSubmitted(false);
      return;
    }

    updateOrder((currentOrder) => ({
      ...currentOrder,
      payment_details: { stripeToken: token.id },
    }));

    setPaymentFormSubmitted(true);
    onReadyToSubmit(true);
    onTokenCreated(token.id);
  };

  const handleBillingAddress = (details) => {
    console.log('--- user has billing address ---');
    console.log(details);
    updateOrder((currentOrder) => ({
      ...currentOrder,
      billing_address: details,
    }));
    setBillingFormSubmitted(true);
  };
  const STRIPE_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: '#000000',
        fontSize: '16px',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },
  };

  return (
    <div className="payment-form border mt-10 mb-5">
      <div className="font-bold mb-4 text-xl pl-4 text-dark">Add Card</div>
      {!paymentFormSubmitted ? (
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="col-span-2 lg:col-span-2 xl:col-span-1 flex-1 pr-2 font-normal">
            <label
              htmlFor="cardNumber"
              className="text-dark text-xs opacity-75 hidden"
            >
              Card Number
            </label>
            <CardNumberElement
              id="cardNumber"
              className="stripe-input"
              options={STRIPE_ELEMENT_OPTIONS}
            />
          </div>
          <div className="flex-1 pr-2 font-normal">
            <label
              htmlFor="expDate"
              className="text-dark text-xs opacity-75 hidden"
            >
              {' '}
              Exp Date
            </label>
            <CardExpiryElement
              id="expDate"
              className="stripe-input"
              options={STRIPE_ELEMENT_OPTIONS}
            />
          </div>
          <div className="flex-1 font-normal">
            <label
              htmlFor="securityCode"
              className="text-dark text-xs opacity-75 hidden"
            >
              {' '}
              CVC
            </label>
            <CardCvcElement
              id="securityCode"
              className="stripe-input"
              options={STRIPE_ELEMENT_OPTIONS}
            />
          </div>
        </div>
      ) : (
        <div className="payment-summary mt-4 bg-offWhite rounded-xl p-4">
          <div className="font-normal text-dark flex flex-row justify-start items-center">
            <span className="text-dark mr-2">Card Added</span>
            <IoShieldCheckmark color="008000" size={16} />
          </div>
        </div>
      )}

      <div>
        <div className="flex items-center my-5">
          <input
            type="checkbox"
            id="billing-same-as-shipping"
            checked={isBillingSameAsShipping}
            onChange={() =>
              setIsBillingSameAsShipping(!isBillingSameAsShipping)
            }
          />
          <label
            htmlFor="billing-same-as-shipping"
            className="ml-2 text-sm text-dark"
          >
            Billing Address Same As Shipping Address?
          </label>
        </div>
        {isBillingSameAsShipping ? (
          <div className="mt-4 p-4 bg-offWhite rounded-xl">
            <div className="font-semibold text-dark">Shipping Address:</div>
            <div className="font-normal text-dark">
              {order?.shipping_address?.firstName}{' '}
              {order?.shipping_address?.lastName}
            </div>
            <div className="font-normal text-dark">
              {order?.shipping_address?.address}
            </div>
            <div className="font-normal text-dark">
              {order?.shipping_address?.city}, {order?.shipping_address?.state}{' '}
              {order?.shipping_address?.postalCode}
            </div>
          </div>
        ) : billingFormSubmitted ? (
          <div className="billing-address-summary mt-4">
            <div className="font-normal text-dark">Billing Address:</div>
            <div className="font-normal text-dark">
              {order?.billing_address?.firstName}{' '}
              {order?.billing_address?.lastName}
            </div>
            <div className="font-normal text-dark">
              {order?.billing_address?.address}
            </div>
            <div className="font-normal text-dark">
              {order?.billing_address?.city}, {order?.billing_address?.state}{' '}
              {order?.billing_address?.postalCode}
            </div>
          </div>
        ) : (
          <AddressForm
            formType="billing"
            initialData={null}
            onFormSubmit={handleBillingAddress}
          />
        )}
      </div>
      {Object.entries(formErrors).map(([key, error]) => (
        <div className="mt-5" key={key} style={{ color: 'red' }}>
          {error}
        </div>
      ))}
      {!paymentFormSubmitted && (
        <div className="flex justify-end mt-5">
          <button
            className="bg-black text-white p-2 rounded-lg"
            onClick={() => {
              handleSubmit();
            }}
          >
            Save And Continue
          </button>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
