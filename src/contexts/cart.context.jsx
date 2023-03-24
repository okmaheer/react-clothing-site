import { createContext, useState } from "react";
const addCartItem = (cartItems, productToAdd) => {
  const cartItem = cartItems.find(cartItem => {
    if(cartItem.id == productToAdd.id){
    return cartItem;
  }});
  if(cartItem) {
    const cartItem = cartItems.map(cartItem => {
      if(cartItem.id == productToAdd.id){ 
        
      return { ...cartItem, quantity: cartItem.quantity + 1 };
    }});
    return cartItem; 

  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
export const CartContext = createContext({ 
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (product) => {
    console.log(product)
    setCartItems(addCartItem(cartItems, product));
 
  };

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
