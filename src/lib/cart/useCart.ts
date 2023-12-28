// import { useState, useCallback } from 'react';

// const useCart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   const addItemToCart = useCallback((item) => {
//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find((i) => i.id === item.id);

//       if (existingItem) {
//         return prevItems.map((i) =>
//           i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//         );
//       } else {
//         return [...prevItems, { ...item, quantity: 1 }];
//       }
//     });
//   }, []);

//   const removeItemFromCart = useCallback((itemId) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
//   }, []);

//   const adjustItemQuantity = useCallback((itemId, quantity) => {
//     setCartItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === itemId ? { ...item, quantity } : item
//       )
//     );
//   }, []);

//   const getTotalPrice = useCallback(() => {
//     return cartItems.reduce(
//       (total, item) => total + item.price * item.quantity,
//       0
//     );
//   }, [cartItems]);

//   return {
//     cartItems,
//     addItemToCart,
//     removeItemFromCart,
//     adjustItemQuantity,
//     getTotalPrice,
//   };
// };

// export default useCart;
