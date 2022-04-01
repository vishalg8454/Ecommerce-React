import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import "mockman-js/dist/style.css";
import { Homepage, ProductPage, LoginPage } from "./routes";
import { ProductProvider } from "./context/product-context";
import { UserProvider } from "./context/user-context";
import { ToastProvider } from "./context/toast-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ToastProvider>
      <UserProvider>
        
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Homepage />} />
              <Route
                path="shop"
                element={
                  <ProductProvider>
                    <ProductPage />
                  </ProductProvider>
                }
              />
              <Route path="login" element={<LoginPage />} />
            </Route>
            <Route path="mock" element={<Mockman />} />
          </Routes>
          </UserProvider>
        </ToastProvider>
      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
