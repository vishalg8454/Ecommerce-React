export const getProductFilteredByStock = (
  productList,
  { includeOutOfStock }
) => {
  if (includeOutOfStock === true) return productList;
  return productList.filter((item) => item.includeStock === true);
};
