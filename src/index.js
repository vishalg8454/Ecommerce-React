import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mockman from "mockman-js";
import "mockman-js/dist/style.css";
import {Homepage,ProductPage} from "./routes"

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Homepage />}/>
          <Route path="shop" element={<ProductPage />}/>
        </Route>
        <Route path="mock" element={<Mockman />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
