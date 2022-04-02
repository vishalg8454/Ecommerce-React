import { useContext, createContext, useReducer } from "react";
import { cartReducer } from "../reducer/cart-reducer";

const CartContext = createContext(null);

const useCart = () => useContext(CartContext);

const initialState = {
  cartList: [],
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
export { useCart, CartProvider };
