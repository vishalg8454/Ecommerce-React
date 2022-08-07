import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import "mockman-js/dist/style.css";
import {
  Homepage,
  ProductPage,
  ProfilePage,
  CartPage,
  WishListPage,
  SignupPage,
} from "./routes";
import {Address,Orders} from "./components";
import { ProductProvider } from "./context/product-context";
import { UserProvider } from "./context/user-context";
import { ToastProvider } from "./context/toast-context";
// import { CartProvider } from "./context/cart-context";
import { WishlistProvider } from "./context/wishlist-context";
import { FilterProvider } from "./context/filter-context";
import {CartProvider} from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <UserProvider>
          <FilterProvider>
            <ProductProvider>
              <CartProvider>
                <WishlistProvider>
                  <Routes>
                    <Route path="/" element={<App />}>
                      <Route index element={<Homepage />} />
                      <Route path="shop" element={<ProductPage />} />
                      <Route path="profile" element={<ProfilePage />}>
                        <Route index path="address" element={<Address/>}/>
                        <Route  path="orders" element={<Orders/>}/>
                      </Route>
                      <Route path="cart" element={<CartPage />} />
                      <Route path="wishlist" element={<WishListPage />} />
                      <Route path="signup" element={<SignupPage />} />
                    </Route>
                    <Route path="mock" element={<Mockman />} />
                  </Routes>
                </WishlistProvider>
              </CartProvider>
            </ProductProvider>
          </FilterProvider>
        </UserProvider>
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
