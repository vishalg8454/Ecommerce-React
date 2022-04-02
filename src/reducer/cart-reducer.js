import axios from "axios";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART": {
      console.log("inside set_cart");
      return { ...state, cartList: action.payload };
    }



    // case "INCREMENT_ITEM":{
    //   console.log("inside increment_item");
    //   (async () => {
    //     console.log("inside async");
    //     try {
    //       console.log("try block")
    //       const cartData = await axios.post(
    //         `/api/user/cart/${action.payload._id}`,
    //         {
    //           action: { type: "increment" },
    //         },
    //         {
    //           headers: {
    //             authorization: action.payload.encodedToken,
    //           },
    //         }
    //       );
    //       action.payload.dispatch({ type: "SET_CART", payload: cartData.data.cart });
    //     } catch (error) {
    //     }
    //   })();
    //   return {...state};
    // }



    default:
      return state;
  }
};
