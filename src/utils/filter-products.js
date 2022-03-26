export const filterProducts = (
  productList,
  { fiction, scifi, novel, selfhelp, biography, comic }
) => {
  let filteredProduct = [];
  if (fiction === true)
    filteredProduct = [
      ...filteredProduct,
      ...productList.filter((item) => item.categoryName === "fiction"),
    ];
  if (scifi === true)
    filteredProduct = [
      ...filteredProduct,
      ...productList.filter((item) => item.categoryName === "scifi"),
    ];
  if (novel === true)
    filteredProduct = [
      ...filteredProduct,
      ...productList.filter((item) => item.categoryName === "novel"),
    ];
  if (selfhelp === true)
    filteredProduct = [
      ...filteredProduct,
      ...productList.filter((item) => item.categoryName === "selfhelp"),
    ];
  if (biography === true)
    filteredProduct = [
      ...filteredProduct,
      ...productList.filter((item) => item.categoryName === "biography"),
    ];
  if (comic === true)
    filteredProduct = [
      ...filteredProduct,
      ...productList.filter((item) => item.categoryName === "comic"),
    ];
  if (filteredProduct.length === 0) return productList;
  return filteredProduct;
};
