import { useEffect, useState } from "react";
import "./product-page.css";
import { useProduct, useFilter } from "../../context";
// import { useProduct } from "../../context/product-context";
// import { useFilter } from "../../context/filter-context";
import { Filter, ProductCard } from "../../components";
import {
  getFilteredProductsByCategory,
  getProductFilteredByStock,
  sortProducts,
  getFilteredProductsByRating,
} from "../../utils";
// import { getFilteredProductsByCategory } from "../../utils/filter-products";
// import { getProductFilteredByStock } from "../../utils/include-products";
// import { sortProducts } from "../../utils/sort-products";
// import { getFilteredProductsByRating } from "../../utils/rating-filter";
import noProduct from "../../assets/images/noProduct.png";
import { useSearchParams } from "react-router-dom";

const ProductPage = () => {
  let [searchParams] = useSearchParams();
  let searchQuery = searchParams.get("search");

  let { productList } = useProduct();
  const { state, dispatch } = useFilter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.title = "BookStock | Shop";
  }, []);

  if (searchQuery && searchQuery.length > 0) {
    productList = productList.filter(
      (item) =>
        item.title.toLowerCase().search(searchQuery.toLowerCase()) !== -1
    );
  }

  const includedProductsByStock = getProductFilteredByStock(productList, state);

  const filteredProductsByCategory = getFilteredProductsByCategory(
    includedProductsByStock,
    state
  );

  const filteredProductsByRating = getFilteredProductsByRating(
    filteredProductsByCategory,
    state
  );

  const sortedProducts = sortProducts(filteredProductsByRating, state);

  const finalProducts = sortedProducts;

  return (
    <div className="product-page">
      <div className="filter mobile">
        {open && (
          <div className="close-btn-flex">
            <button className="close-btn" onClick={() => setOpen(!open)}>
              <i className="fas fa-times"></i>
            </button>
            <button
              className="btn-underline"
              onClick={() => dispatch({ type: "RESET" })}
            >
              Clear
            </button>
          </div>
        )}
        {!open && (
          <div className="close-btn-flex">
            <button className="close-btn" onClick={() => setOpen(!open)}>
              <i className="fas fa-filter"></i>
            </button>
          </div>
        )}
        {open && <Filter state={state} dispatch={dispatch} />}
      </div>
      <div className="filter web">
        <button
          className="btn-underline"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Clear
        </button>
        <Filter state={state} dispatch={dispatch} />
      </div>
      <main className="main">
        {finalProducts.length === 0 && (
          <div className="no-product">
            <img className="no-product-img" src={noProduct} />
            No products found
          </div>
        )}
        {finalProducts.map((product) => {
          return (
            <ProductCard
              key={product._id}
              price={product.price}
              title={product.title}
              image={product.image}
              includeStock={product.includeStock}
              _id={product._id}
              originalPrice={product.originalPrice}
              rating={product.rating}
            />
          );
        })}
      </main>
    </div>
  );
};
export { ProductPage };
