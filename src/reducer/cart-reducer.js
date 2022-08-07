export const cartReducer = (state, action) => {
  switch (action.type) {
    case "SET_CART": {
      return { ...state, cartList: action.payload };
    }
    case "RESET": {
      return { ...state, cartList: [] };
    }
    default:
      return state;
  }
};
