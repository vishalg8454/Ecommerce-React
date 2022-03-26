import "./product-page.css";
import { Filter, ProductCard } from "../../components";
import { useProduct } from "../../context/product-context";
import { useReducer } from "react";
import { useEffect, useState } from "react";
import { filterProducts } from "../../utils/filter-products";
import { includeProducts } from "../../utils/include-products";
import { sortProducts } from "../../utils/sort-products";
import { filterReducer } from "../../reducer/filter-reducer";

const ProductPage = () => {
  const { productList } = useProduct();

  useEffect(()=>{
    document.title = "BookStock | Shop"
  },[])

  const [state, dispatch] = useReducer(filterReducer, {
    sortBy: "",
    includeOutOfStock: false,
    fiction: false,
    scifi: false,
    novel: false,
    selfhelp: false,
    biography: false,
    comic: false,
  });

  const includedProducts = includeProducts(productList,state);
  console.log(includedProducts);

  const filteredProducts = filterProducts(includedProducts,state);
  console.log("filter",filteredProducts);
  
  const sortedProducts = sortProducts(filteredProducts,state);
  console.log("sorted",sortedProducts);

  const finalProducts = sortedProducts;

  return (
    <div className="product-page">
      <Filter className="filter" state={state} dispatch={dispatch}/>
      <main className="main">
        {finalProducts.map((product) => {
          return (
            <ProductCard key={product._id}
              price={product.price}
              title={product.title}
              image={product.image}
              includeStock={product.includeStock}
            />
          );
        })}
      </main>
    </div>
  );
};
export { ProductPage };
