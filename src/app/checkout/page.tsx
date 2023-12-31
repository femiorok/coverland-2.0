'use client';

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useCartContext } from '@/providers/CartProvider';
import Image from 'next/image';
import { FormEvent } from 'react';
import Stripe from 'stripe';
import { loadStripe } from '@stripe/stripe-js';

function CheckoutPage() {
  const { cartItems, adjustItemQuantity, addToCart } = useCartContext();

  const redirectToCheckout = async () => {
    try {
      const stripe = await loadStripe(
        'pk_test_51IpdPcDnAldfe1ltf4k5zQnDXzzKVPt9uCzgy0MjbFgnLX15438kjiKmnz6F6R0kBh3QMorsQlafpNHjXq7niliI00erfiK6Xk' as string
      );

      if (!stripe) throw new Error('Stripe failed to initialize.');

      const checkoutResponse = await fetch('/api/checkout-sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cartItems }),
      });

      const { sessionId } = await checkoutResponse.json();
      const stripeError = await stripe.redirectToCheckout({ sessionId });

      if (stripeError) {
        console.error(stripeError);
      }
    } catch (error) {
      console.error(error);
    }
  };
  console.log(cartItems);
  return (
    <div>
      <h1 className="text-3xl font-bold">Pre-Checkout</h1>
      {cartItems.length === 0 && (
        <p className="text-xl w-full text-center h-20 mt-10">
          Your cart is empty.
        </p>
      )}
      {!!cartItems.length && (
        <>
          <Table className="mt-4">
            <TableCaption></TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="text-xl">Product</TableHead>
                <TableHead className="text-xl">QTY</TableHead>
                <TableHead className="text-xl hidden md:block">Price</TableHead>
                <TableHead className="text-right text-xl">Total</TableHead>
              </TableRow>
            </TableHeader>

            {cartItems.map((item) => {
              return (
                <TableBody key={item.sku}>
                  <TableRow>
                    <TableCell className="font-medium text-2xl flex flex-col justify-center ">
                      {`${item.make} ${item.product_name} - ${item.display_id} ${item.display_color}`}
                      <Image
                        src={item?.feature as string}
                        width={150}
                        height={150}
                        alt={`The image for a ${item.product_name} car cover`}
                      />
                    </TableCell>
                    <TableCell className="font-medium text-2xl">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => addToCart(item)}
                          className="text-lg w-8 h-8 rounded text-white bg-[#BE1B1B]"
                        >
                          +
                        </button>

                        <p>{item.quantity}</p>
                        <button
                          onClick={() =>
                            adjustItemQuantity(item.sku, item.quantity - 1)
                          }
                          className="text-lg w-8 h-8 rounded text-white bg-[#BE1B1B]"
                        >
                          -
                        </button>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium text-2xl hidden md:block">
                      {item.msrp}
                    </TableCell>
                    <TableCell className="text-right font-medium text-2xl">
                      {item.quantity * Number(item.msrp)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              );
            })}
          </Table>
          <div className="w-full my-10 flex justify-center">
            <Button
              variant={'default'}
              className="text-xl w-40 bg-[#BE1B1B]"
              onClick={redirectToCheckout}
            >
              Checkout
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default CheckoutPage;
