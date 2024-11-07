import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/authcomponent/Register";
import Login from "./components/authcomponent/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "./Layout/Sidebar";
import Dashboard from "./components/Dashboard";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import Search from "./components/Search";
import Filter from "./components/Filter";
import Profile from "./components/authcomponent/Profile";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";
// import 'swiper/swiper-bundle.min.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Sidebar />}> */}
            <Route path="/" element={<Dashboard />} />
            <Route path="search" element={<Search />} />
            <Route path="cart" element={<Cart />} />
            <Route path="payment" element={<Payment />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="profile" element={<Profile />} />
            <Route path="filter" element={<Filter />} />
            <Route path="product" element={<Product />} />
            <Route path="product-detail" element={<ProductDetail />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
