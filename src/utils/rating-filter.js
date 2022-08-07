export const getFilteredProductsByRating = (productList, state) => {
  return productList.filter((item) => item.rating >= state.rating);
};
