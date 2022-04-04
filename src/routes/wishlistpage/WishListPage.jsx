import "./wishlist-page.css";
import { ProductCard } from "../../components";
import { useWishlist } from "../../context/wishlist-context";
import { useProduct } from "../../context/product-context";
import { useUser } from "../../context/user-context";

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
        <h4 className="wishlist-count">
          Cart ({`${wishlistItems.length}`}items)
        </h4>
      ) : (
        <h4 className="wishlist-count">Sign in to view your Wishlist items.</h4>
      )}
      <div className="wishlist-container">
        {wishlistItems.map(({ _id, image, price, title, includeStock }) => (
          <ProductCard
            _id={_id}
            image={image}
            price={price}
            title={title}
            includeStock={includeStock}
            key={_id}
          />
        ))}
      </div>
    </div>
  );
};
export { WishListPage };
