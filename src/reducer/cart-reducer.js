import axios from "axios";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART": {
      console.log("inside set_cart");
      return { ...state, cartList: action.payload };
    }

    default:
      return state;
  }
};
