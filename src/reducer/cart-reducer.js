export const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART": {
      return { ...state, cartList: action.payload };
    }
    default:
      return state;
  }
};
