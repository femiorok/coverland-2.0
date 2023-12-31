'use client';

import { useCartContext } from '@/providers/CartProvider';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { TCartItems } from '@/lib/cart/useCart';
import Image from 'next/image';
import Link from 'next/link';

function Cart() {
  const { cartItems } = useCartContext();
  const cartColor = cartItems.length > 0 ? '#BE1B1B' : '#000000';

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <ShoppingCart
            size={32}
            color={cartColor}
            className="hover:cursor-pointer"
          />
        </SheetTrigger>
        {cartItems.length > 0 && (
          <span className="relative flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BE1B1B] opacity-75"></span>
            <span className="relative inline-flex justify-center items-center rounded-full h-4 w-4 bg-[#BE1B1B] text-white text-xs">
              {cartItems.length}
            </span>
          </span>
        )}
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Your Cart</SheetTitle>
            <SheetDescription>
              Ready to checkout? Click the button below
            </SheetDescription>
          </SheetHeader>
          {cartItems.map((item) => {
            return <CartLineItem key={item.sku} item={item} />;
          })}
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit" className="w-full mt-10" asChild>
                <Link href="/checkout">Checkout</Link>
              </Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}

const CartLineItem = ({ item }: { item: TCartItems }) => {
  console.log(item);
  return (
    <Card>
      <CardHeader>
        <CardTitle>{item.product_name}</CardTitle>
        <CardDescription>
          {item.display_color} {item.product_name}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={item.feature as string}
          alt={item.product_name as string}
          width={150}
          height={150}
        />
        <p>${item.msrp}</p>
      </CardContent>
      <CardFooter>{/* <p>Card Footer</p> */}</CardFooter>
    </Card>
  );
};

export default Cart;
