import { useContext, createContext, useState } from "react";

const WishlistContext = createContext(null);

const useWishlist = () => useContext(WishlistContext);

const WishlistProvider = ({ children }) => {
  const [wishlistList, setWishlistList] = useState([]);

  const resetFavorites = ()=>{
    setWishlistList([]);
  }

  return (
    <WishlistContext.Provider
      value={{ wishlistList, setWishlistList,resetFavorites }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export { WishlistProvider, useWishlist };
