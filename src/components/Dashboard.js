import React, { useState } from "react";
import pic4 from "./../assets/pic4.png";
import w3cartlogo from "./../assets/w3cart.png";
import userProfile from "./../assets/user-profile.jpg";
import bg3 from "./../assets/bg3.png";
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.min.css';
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { PiArrowsClockwiseLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { PiListDashes } from "react-icons/pi";
import { IoBookOutline } from "react-icons/io5";
import { RxComponent2 } from "react-icons/rx";
import { FiLayers } from "react-icons/fi";
import { CiHome } from "react-icons/ci";
import { MdLogout } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";

// Import modules directly from 'swiper/modules'
import { Navigation, Pagination ,Autoplay} from "swiper/modules";
import Menubar from "../Layout/Menubar";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";




const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  console.log(
    "isSidebarOpenisSidebarOpenisSidebarOpenisSidebarOpen",
    isSidebarOpen
  );

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="header shadow header-fixed border-0">
        <div className="container">
          <div className="header-content">
            <div className="left-content">
              <a
                href="javascript:void(0);"
                className="menu-toggler"
                onClick={toggleSidebar}
              >
                <IoMenu />
              </a>
            </div>
            <div className="mid-content header-logo">
              <a href="index.html">
                <img className="logo app-logo" src={w3cartlogo} alt="logo" />
                {/* <img class="logo-dark" src="assets/images/svg/logo.svg" alt="logo">
							<img class="logo-light" src="assets/images/svg/logo-white.svg" alt="logo"> */}
              </a>
            </div>
            <div className="right-content">
              <Link to="/search" className="search-icon">
                <CiSearch style={{ color: "black" }} />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`dark-overlay ${isSidebarOpen ? "active" : ""}`}
        onClick={toggleSidebar}
      ></div>
      <div
        className={`sidebar ${isSidebarOpen ? "open" : ""}`}
        style={{ backgroundImage: `url(${bg3})` }}
      >
        <a href="profile.html" className="author-box" style={{textDecoration:"none"}}>
          <div className="dz-media">
            <img src={userProfile} alt="author-image" />
          </div>
          <div className="dz-info">
            <h5 className="name" style={{fontSize:"16px", color:"black"}}>John Doe</h5>
            <span style={{fontSize:"14px", color:"#125948"}}>example@gmail.com</span>
          </div>
        </a>
        {/* Sidebar navigation links */}
        <ul className="nav navbar-nav">
          <li>
            <a className="nav-link active" href="index.html">
              <span className="sidebar-dz-icon">
                <CiHome />
              </span>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="product-list.html">
              <span className="sidebar-dz-icon">
                <FiLayers />
              </span>
              <span>Products</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="components.html">
              <span className="sidebar-dz-icon">
                <RxComponent2 />
              </span>
              <span>Components</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="pages.html">
              <span className="sidebar-dz-icon">
                <IoBookOutline />
              </span>
              <span>Pages</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="featured.html">
              <span className="sidebar-dz-icon">
                <PiListDashes />
              </span>
              <span>Featured</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="wishlist.html">
              <span className="sidebar-dz-icon">
                <CiHeart />
              </span>
              <span>Wishlist</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="order.html">
              <span className="sidebar-dz-icon">
                <PiArrowsClockwiseLight />
              </span>
              <span>Orders</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="cart.html">
              <span className="sidebar-dz-icon">
                <BsCart2 />
              </span>
              <span>My Cart</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="profile.html">
              <span className="sidebar-dz-icon">
                <CiUser />
              </span>
              <span>Profile</span>
            </a>
          </li>
          <li>
            <a className="nav-link" href="welcome.html">
              <span className="sidebar-dz-icon">
                <MdLogout />
              </span>
              <span>Logout</span>
            </a>
          </li>
        </ul>
        <div className="sidebar-bottom">
          <ul className="app-setting">
            {/* <li className="nav-color pb-2">
              <a
                href="javascript:void(0);"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasBottom"
                aria-controls="offcanvasBottom"
              >
                <span className="dz-icon">
                  <svg
                    className="color-plate"
                    width={20}
                    height={20}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.725.787a9.325 9.325 0 0 1 	8.425 7.65 2.35 2.35 0 0 1-.625 2.275 1.662 1.662 0 0 1-1.863.188c-.462-.225-.812-.6-1.25-.788a4.238 4.238 0 0 0-4.5.725A3.751 3.751 0 0 0 10 14.825c.237.725.75 1.25 1.012 1.987a1.713 1.713 0 0 1-.762 2.063 3.312 3.312 0 0 1-2.5.125A9.262 9.262 0 0 1 3.125 3.837a9.2 9.2 0 0 1 7.6-3.05zM2.162 11.6A8.112 8.112 0 0 0 8 17.85c.487.125 1.25.3 1.6 0 .35-.3.15-.9-.125-1.25a4.674 4.674 0 0 1-.725-1.388A5 5 0 0 1 10 9.925a5.187 5.187 0 0 1 3.6-1.4 5.063 5.063 0 0 1 3.137 1.025.887.887 0 0 0 .95.225c.4-.213.338-.75.263-1.125a8.413 8.413 0 0 0-1.963-3.95 8.087 8.087 0 0 0-11.937 0 8.075 8.075 0 0 0-1.9 6.9h.012z" />
                    <path d="M14.313 4.862a1.575 1.575 0 1 1 .024 3.15 1.575 1.575 0 0 1-.024-3.15zm0 2.2a.637.637 0 1 0 0-1.274.637.637 0 0 0 0 1.274zm-4.075-4.075a1.575 1.575 0 1 1 0 3.15 1.575 1.575 0 0 1 0-3.15zm0 2.2a.637.637 0 1 0 0-1.274.637.637 0 0 0 0 1.274zM6.25 7.925a1.575 1.575 0 1 1 .025-3.15 1.575 1.575 0 0 1-.025 3.15zm0-2.2A.637.637 0 1 0 6.25 7a.637.637 0 0 0 0-1.275zm.125 4.675a1.575 1.575 0 1 1-3.15 0 1.575 1.575 0 0 1 3.15 0zm-2.2 0a.638.638 0 1 0 1.275 0 .638.638 0 0 0-1.275 0zm2.075 2.387a1.575 1.575 0 1 1 0 3.151 1.575 1.575 0 0 1 0-3.15zm0 2.213a.638.638 0 1 0 0-1.276.638.638 0 0 0 0 1.276z" />
                  </svg>
                </span>
                <span>Color Theme</span>
                <div className="color-active ms-auto">
                  <span>Active</span>
                  <div className="current-color" />
                </div>
              </a>
            </li> */}
            <li>
              <a className="mode" href="javascript:void(0);" style={{textDecoration:"none"}}>
                <span className="sidebar-dz-icon">
                  <FaRegMoon size={24}/>
                </span>
                <span>Dark Mode</span>
                <div className="custom-switch">
                  <input
                    type="checkbox"
                    className="switch-input theme-btn"
                    id="toggle-dark-menu"
                  />
                  <label
                    className="custom-switch-label"
                    htmlFor="toggle-dark-menu"
                  />
                </div>
              </a>
            </li>
          </ul>
          <div className="app-info">
            <h6 className="name">W3Cart Fashion Store</h6>
            <span className="ver-info">App Version 1.0</span>
          </div>
        </div>
      </div>

      <div className="page-content space-top p-b80">
        <div className="container p-0">
          {/* Banner */}
          {/* <div className="dz-banner">
            <div className="swiper banner-swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div
                    className="banner-bg"
                    style={{
                      backgroundImage: 'url("assets/images/banner/pic1.png")',
                    }}
                  />
                  <div className="banner-content">
                    <span className="font-w500">#FASHION DAY</span>
                    <h2 className="offer">35% Off</h2>
                    <p>Discover our latest Products</p>
                    <a href="product.html" className="btn btn-primary btn-sm">
                      Shop Now
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div
                    className="banner-bg"
                    style={{
                      backgroundImage: 'url("assets/images/banner/pic2.png")',
                    }}
                  />
                  <div className="banner-content content-right">
                    <span className="font-w500">#WINTER SALE</span>
                    <h2 className="offer">35% Off</h2>
                    <p>Discover our latest Products</p>
                    <a href="product.html" className="btn btn-primary btn-sm">
                      Shop Now
                    </a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div
                    className="banner-bg"
                    style={{
                      backgroundImage: 'url("assets/images/banner/pic3.png")',
                    }}
                  />
                  <div className="banner-content">
                    <span className="font-w500">#FASHION DAY</span>
                    <h2 className="offer">35% Off</h2>
                    <p>Discover our latest Products</p>
                    <a href="product.html" className="btn btn-primary btn-sm">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination style-2" />
            </div>
          </div> */}
          {/* Banner End */}
          {/* Catagory Start */}
          <div className="swiper category-swiper">
            <div
              className="swiper-wrapper"
              style={{ display: "flex", gap: "5px", overflow: "scroll" }}
            >
              <div className="swiper-slide">
                <span className="category-btn">All</span>
              </div>
              <div className="swiper-slide">
                <span className="category-btn">Men</span>
              </div>
              <div className="swiper-slide">
                <span className="category-btn">T-Shirt</span>
              </div>
              <div className="swiper-slide">
                <span className="category-btn">Women</span>
              </div>
              <div className="swiper-slide">
                <span className="category-btn">Winter</span>
              </div>
            </div>
          </div>
          {/* Catagory End */}
          <div className="title-bar container mb-0 pb-0">
            <h5 className="title font-w800 mb-0">Most Popular</h5>
            <a href="/product">See more</a>
          </div>
          {/* Shop Section Strat */}
          <div className="container">
            <div className="row g-3">
              <div className="col-6">
                <div className="shop-card">
                  <div className="dz-media">
                    <a
                      href="product-detail.html"
                      style={{ textDecoration: "none" }}
                    >
                      <img src={pic4} alt="image" />
                    </a>
                    <a href="javascript:void(0);" className="item-bookmark">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-heart"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </a>
                  </div>
                  <div className="dz-content">
                    <span className="font-12">T-Shirt</span>
                    <h6 className="title">
                      <a
                        href="product-detail.html"
                        style={{ textDecoration: "none" }}
                      >
                        Men Black Grey Allover Printed Round Neck ...
                      </a>
                    </h6>
                    <h6 className="price">
                      $25.15<del>$30.15</del>
                    </h6>
                  </div>
                  <div className="product-tag">
                    <span className="badge badge-secondary">32% off</span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="shop-card">
                  <div className="dz-media">
                    <a
                      href="product-detail.html"
                      style={{ textDecoration: "none" }}
                    >
                      <img src={pic4} alt="image" />
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="item-bookmark active"
                    >
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-heart"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </a>
                  </div>
                  <div className="dz-content">
                    <span className="font-12">Jacket</span>
                    <h6 className="title">
                      <a
                        href="product-detail.html"
                        style={{ textDecoration: "none" }}
                      >
                        Men Black Grey Allover Printed Round Neck ...
                      </a>
                    </h6>
                    <h6 className="price">
                      $18.50<del>$25.13</del>
                    </h6>
                  </div>
                  <div className="product-tag">
                    <span className="badge badge-primary">SALE</span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="shop-card">
                  <div className="dz-media">
                    <a
                      href="product-detail.html"
                      style={{ textDecoration: "none" }}
                    >
                      <img src={pic4} alt="image" />
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="item-bookmark active"
                    >
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-heart"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </a>
                  </div>
                  <div className="dz-content">
                    <span className="font-12">T-Shirt</span>
                    <h6 className="title">
                      <a
                        href="product-detail.html"
                        style={{ textDecoration: "none" }}
                      >
                        Men Black Grey Allover Printed Round Neck ...
                      </a>
                    </h6>
                    <h6 className="price">
                      $20.15<del>$40.55</del>
                    </h6>
                  </div>
                  <div className="product-tag">
                    <span className="badge badge-secondary">32% off</span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="shop-card">
                  <div className="dz-media">
                    <a
                      href="product-detail.html"
                      style={{ textDecoration: "none" }}
                    >
                      <img src={pic4} alt="image" />
                    </a>
                    <a href="javascript:void(0);" className="item-bookmark">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-heart"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </a>
                  </div>
                  <div className="dz-content">
                    <span className="font-12">Jacket</span>
                    <h6 className="title">
                      <a
                        href="product-detail.html"
                        style={{ textDecoration: "none" }}
                      >
                        Men Black Grey Allover Printed Round Neck ...
                      </a>
                    </h6>
                    <h6 className="price">
                      $25.15<del>$30.15</del>
                    </h6>
                  </div>
                  <div className="product-tag">
                    <span className="badge badge-secondary">32% off</span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="shop-card">
                  <div className="dz-media">
                    <a
                      href="product-detail.html"
                      style={{ textDecoration: "none" }}
                    >
                      <img src={pic4} alt="image" />
                    </a>
                    <a href="javascript:void(0);" className="item-bookmark">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-heart"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </a>
                  </div>
                  <div className="dz-content">
                    <span className="font-12">Jacket</span>
                    <h6 className="title">
                      <a
                        href="product-detail.html"
                        style={{ textDecoration: "none" }}
                      >
                        Men Black Grey Allover Printed Round Neck ...
                      </a>
                    </h6>
                    <h6 className="price">
                      $25.15<del>$30.15</del>
                    </h6>
                  </div>
                  <div className="product-tag">
                    <span className="badge badge-secondary">32% off</span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="shop-card">
                  <div className="dz-media">
                    <a
                      href="product-detail.html"
                      style={{ textDecoration: "none" }}
                    >
                      <img src={pic4} alt="image" />
                    </a>
                    <a href="javascript:void(0);" className="item-bookmark">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-heart"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </a>
                  </div>
                  <div className="dz-content">
                    <span className="font-12">T-Shirt</span>
                    <h6 className="title">
                      <a
                        href="product-detail.html"
                        style={{ textDecoration: "none" }}
                      >
                        Men Black Grey Allover Printed Round Neck ...
                      </a>
                    </h6>
                    <h6 className="price">
                      $20.15<del>$40.55</del>
                    </h6>
                  </div>
                  <div className="product-tag">
                    <span className="badge badge-secondary">32% off</span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="shop-card">
                  <div className="dz-media">
                    <a
                      href="product-detail.html"
                      style={{ textDecoration: "none" }}
                    >
                      <img src={pic4} alt="image" />
                    </a>
                    <a href="javascript:void(0);" className="item-bookmark">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-heart"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </a>
                  </div>
                  <div className="dz-content">
                    <span className="font-12">T-Shirt</span>
                    <h6 className="title">
                      <a
                        href="product-detail.html"
                        style={{ textDecoration: "none" }}
                      >
                        Men Black Grey Allover Printed Round Neck ...
                      </a>
                    </h6>
                    <h6 className="price">
                      $25.15<del>$30.15</del>
                    </h6>
                  </div>
                  <div className="product-tag">
                    <span className="badge badge-secondary">32% off</span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="shop-card">
                  <div className="dz-media">
                    <a
                      href="product-detail.html"
                      style={{ textDecoration: "none" }}
                    >
                      <img src={pic4} alt="image" />
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="item-bookmark active"
                    >
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-heart"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </a>
                  </div>
                  <div className="dz-content">
                    <span className="font-12">Jacket</span>
                    <h6 className="title">
                      <a
                        href="product-detail.html"
                        style={{ textDecoration: "none" }}
                      >
                        Men Black Grey Allover Printed Round Neck ...
                      </a>
                    </h6>
                    <h6 className="price">
                      $18.50<del>$25.13</del>
                    </h6>
                  </div>
                  <div className="product-tag">
                    <span className="badge badge-primary">SALE</span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="shop-card">
                  <div className="dz-media">
                    <a
                      href="product-detail.html"
                      style={{ textDecoration: "none" }}
                    >
                      <img src={pic4} alt="image" />
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="item-bookmark active"
                    >
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-heart"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </a>
                  </div>
                  <div className="dz-content">
                    <span className="font-12">T-Shirt</span>
                    <h6 className="title">
                      <a
                        href="product-detail.html"
                        style={{ textDecoration: "none" }}
                      >
                        Men Black Grey Allover Printed Round Neck ...
                      </a>
                    </h6>
                    <h6 className="price">
                      $20.15<del>$40.55</del>
                    </h6>
                  </div>
                  <div className="product-tag">
                    <span className="badge badge-secondary">32% off</span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="shop-card">
                  <div className="dz-media">
                    <a
                      href="product-detail.html"
                      style={{ textDecoration: "none" }}
                    >
                      <img src={pic4} alt="image" />
                    </a>
                    <a href="javascript:void(0);" className="item-bookmark">
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-heart"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </a>
                  </div>
                  <div className="dz-content">
                    <span className="font-12">T-Shirt</span>
                    <h6 className="title">
                      <a
                        href="product-detail.html"
                        style={{ textDecoration: "none" }}
                      >
                        Men Black Grey Allover Printed Round Neck ...
                      </a>
                    </h6>
                    <h6 className="price">
                      $25.15<del>$30.15</del>
                    </h6>
                  </div>
                  <div className="product-tag">
                    <span className="badge badge-secondary">32% off</span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="shop-card">
                  <div className="dz-media">
                    <a
                      href="product-detail.html"
                      style={{ textDecoration: "none" }}
                    >
                      <img src={pic4} alt="image" />
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="item-bookmark active"
                    >
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-heart"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </a>
                  </div>
                  <div className="dz-content">
                    <span className="font-12">Jacket</span>
                    <h6 className="title">
                      <a
                        href="product-detail.html"
                        style={{ textDecoration: "none" }}
                      >
                        Men Black Grey Allover Printed Round Neck ...
                      </a>
                    </h6>
                    <h6 className="price">
                      $18.50<del>$25.13</del>
                    </h6>
                  </div>
                  <div className="product-tag">
                    <span className="badge badge-primary">SALE</span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="shop-card">
                  <div className="dz-media">
                    <a
                      href="product-detail.html"
                      style={{ textDecoration: "none" }}
                    >
                      <img src={pic4} alt="image" />
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="item-bookmark active"
                    >
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-heart"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </a>
                  </div>
                  <div className="dz-content">
                    <span className="font-12">T-Shirt</span>
                    <h6 className="title">
                      <a
                        href="product-detail.html"
                        style={{ textDecoration: "none" }}
                      >
                        Men Black Grey Allover Printed Round Neck ...
                      </a>
                    </h6>
                    <h6 className="price">
                      $20.15<del>$40.55</del>
                    </h6>
                  </div>
                  <div className="product-tag">
                    <span className="badge badge-secondary">32% off</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Shop Section End */}
          <div>
            <div className="title-bar container my-0">
              <h5 className="title font-w800 mb-0">Trending Now</h5>
              <a href="product.html">See more</a>
            </div>

            {/* Swiper Carousel */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000, // Slide delay in milliseconds (3 seconds)
                disableOnInteraction: false, // Keeps autoplay active even when the user interacts
              }}
              className="trending-swiper p-lr15"
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 },
                640: { slidesPerView: 2, spaceBetween: 10 },
                1024: { slidesPerView: 3, spaceBetween: 20 },
              }}
            >
              {[1, 2, 3, 4].map((_, index) => (
                <SwiperSlide key={index}>
                  <div class="swiper trending-swiper p-lr15">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide" style={{padding:"20px"}}>
                        <div className="shop-card style-2">
                          <div className="dz-media">
                            <a
                              href="product-detail.html"
                              style={{ textDecoration: "none" }}
                            >
                              <img src={pic4} alt="product" />
                            </a>
                            <div className="product-tag">
                              <span className="review me-2">
                                <i className="fa-solid fa-star" /> 4.5
                              </span>
                              <span className="total">2547</span>
                            </div>
                          </div>
                          <div className="dz-content">
                            <span className="font-12">T-Shirt</span>
                            <h6 className="title">
                              <a
                                href="product-detail.html"
                                style={{ textDecoration: "none" }}
                              >
                                Men Black Grey Allover Printed Round ...
                              </a>
                            </h6>
                            <h6 className="price">
                              $18.50 <del>$25.13</del>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Shop Section End */}
        </div>
      </div>
      <Menubar />
    </>
  );
};

export default Dashboard;
