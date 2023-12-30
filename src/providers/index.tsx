'use client';

import DataProvider from './DataProvider';
import { CartProvider } from './CartProvider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DataProvider>
        <CartProvider>{children}</CartProvider>
      </DataProvider>
    </>
  );
}
