import "./wishlist-page.css";
import { ProductCard } from "../../components";
// import { useWishlist } from "../../context/wishlist-context";
// import { useProduct } from "../../context/product-context";
// import { useUser } from "../../context/user-context";
import { useWishlist, useProduct, useUser } from "../../context";
import star from "../../assets/images/star.png";

const WishListPage = () => {
  const { productList } = useProduct();
  const { wishlistList } = useWishlist();
  const { encodedToken } = useUser();

  function check(it) {
    return wishlistList.some((item) => item._id === it._id);
  }

  const wishlistItems = productList.filter(check);

  return (
    <div className="wishlist-page">
      {encodedToken ? (
        wishlistItems.length > 0 ? (
          <h4 className="wishlist-count">
            Wishlist ({`${wishlistItems.length}`}items)
          </h4>
        ) : (
          <h4 className="wishlist-count">Wishlist is Empty</h4>
        )
      ) : (
        <h4 className="wishlist-count">Sign in to view your Wishlist items.</h4>
      )}
      <div className="wishlist-container">
        {encodedToken && wishlistItems.length === 0 && (
          <img className="no-product-img" src={star} />
        )}
        {wishlistItems.map(
          ({ _id, image, price, title, includeStock, originalPrice }) => (
            <ProductCard
              _id={_id}
              image={image}
              price={price}
              title={title}
              includeStock={includeStock}
              key={_id}
              originalPrice={originalPrice}
            />
          )
        )}
      </div>
    </div>
  );
};
export { WishListPage };
