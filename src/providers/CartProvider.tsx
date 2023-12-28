// import React, { createContext, useContext } from 'react';
// import useCart from '@/lib/cart/useCart';

// const defaultCartValue = {
//   cartItems: [],
//   addItemToCart: () => {},
//   removeItemFromCart: () => {},
//   adjustItemQuantity: () => {},
//   getTotalPrice: () => 0,
// };

// const CartContext = createContext(defaultCartValue);

// // Step 2: Create the Provider Component
// const CartProvider = ({ children }) => {
//   const cart = useCart();

//   return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
// };

// // Hook to use cart context
// const useCartContext = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error('useCartContext must be used within a CartProvider');
//   }
//   return context;
// };

// export { CartProvider, useCartContext };
