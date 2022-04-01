import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import "mockman-js/dist/style.css";
import { Homepage, ProductPage, LoginPage, CartPage } from "./routes";
import { ProductProvider } from "./context/product-context";
import { UserProvider } from "./context/user-context";
import { ToastProvider } from "./context/toast-context";
import { CartProvider } from "./context/cart-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <UserProvider>
          <ProductProvider>
            <CartProvider>
              <Routes>
                <Route path="/" element={<App />}>
                  <Route index element={<Homepage />} />
                  <Route path="shop" element={<ProductPage />} />
                  <Route path="login" element={<LoginPage />} />
                  <Route path="cart" element={<CartPage />} />
                </Route>
                <Route path="mock" element={<Mockman />} />
              </Routes>
            </CartProvider>
          </ProductProvider>
        </UserProvider>
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
