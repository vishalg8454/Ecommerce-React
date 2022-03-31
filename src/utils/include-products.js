export const includeProducts = (productList, { includeOutOfStock }) => {
  if (includeOutOfStock === true) return productList;
  return productList.filter((item) => item.includeStock === true);
};
