import { useContext, createContext, useState } from "react";

const WishlistContext = createContext(null);

const useWishlist = () => useContext(WishlistContext);

const WishlistProvider = ({ children }) => {
  const [wishlistList, setWishlistList] = useState([]);

  return (
    <WishlistContext.Provider
      value={{ wishlistList, setWishlistList }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export { WishlistProvider, useWishlist };
