import { createContext, useState, useEffect } from "react";
const addCartItem = (cartItems, productToAdd) => {
  const cartItem = cartItems.find((cartItem) => {
    if (cartItem.id === productToAdd.id) {
      return cartItem;
    }
    return;
  });
  if (cartItem) {
    const cartItem = cartItems.map((cartItem) => {
      if (cartItem.id === productToAdd.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    return cartItem;
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItems, product));
  };
  useEffect(() => {
    const newCartCount = cartItems.reduce((total,cartItem) => total+cartItem.quantity, 0);
    setCartCount(newCartCount)
  }, [cartItems]);
  
  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
