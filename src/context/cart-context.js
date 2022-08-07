import { useContext, createContext, useReducer, useEffect } from "react";
import { cartReducer } from "../reducer/cart-reducer";
import { useUser } from "../context/user-context";
// import {useUser} from "../context";
import axios from "axios";

const CartContext = createContext(null);

const useCart = () => useContext(CartContext);

const initialState = {
  cartList: [],
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const { encodedToken } = useUser();

  const resetCart = () => {
    const asyncCall = async () => {
      try {
        const cartData = await axios.delete("/api/user/cart", {
          headers: {
            authorization: encodedToken,
          },
        });
        dispatch({ type: "SET_CART", payload: cartData.data.cart });
      } catch (error) {
        console.log(error);
      }
    };
    asyncCall();
  };

  return (
    <CartContext.Provider value={{ state, dispatch, resetCart }}>
      {children}
    </CartContext.Provider>
  );
};
export { useCart, CartProvider };
