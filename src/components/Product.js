import React from "react";
import pic4 from "./../assets/pic4.png";
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.min.css';
import { BsSortDownAlt } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaChevronLeft } from "react-icons/fa";

// Import modules directly from 'swiper/modules'
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <>
      <header className="header shadow header-fixed border-0">
        <div className="container">
          <div className="header-content">
            <div className="left-content">
              <a href="/" className="back-btn">
                {/* <i className="icon feather icon-chevron-left" /> */}
                <FaChevronLeft />
              </a>
              <h6 className="title">Products</h6>
            </div>
            <div className="mid-content"></div>
            <div className="right-content"></div>
          </div>
        </div>
      </header>

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
          <div class="swiper filter-swiper">
            <div
              class="swiper-wrapper"
              style={{ display: "flex", gap: "10px" }}
            >
              <div class="swiper-slide">
                <a
                  style={{ textDecoration: "none" }}
                  href="javascript:void(0);"
                  class="filter-btn"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasBottom1"
                  aria-controls="offcanvasBottom1"
                >
                  <BsSortDownAlt />
                  <span>Sort By</span>
                  <i class="icon feather icon-chevron-down"></i>
                </a>
              </div>
              <div class="swiper-slide">
                <Link
                  to="/filter"
                  style={{ textDecoration: "none" }}
                  class="filter-btn"
                >
                  <FiFilter />
                  <span>Filter</span>
                </Link>
              </div>
              <div class="swiper-slide">
                <a
                  style={{ textDecoration: "none" }}
                  href="javascript:void(0);"
                  class="filter-btn"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasBottom2"
                  aria-controls="offcanvasBottom2"
                >
                  <span>Brand</span>
                  <RiArrowDropDownLine />
                </a>
              </div>
              <div class="swiper-slide">
                <a
                  style={{ textDecoration: "none" }}
                  href="javascript:void(0);"
                  class="filter-btn"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasBottom3"
                  aria-controls="offcanvasBottom3"
                >
                  <span>Discount</span>
                  <RiArrowDropDownLine />
                </a>
              </div>
            </div>
          </div>

          {/* <div className="swiper category-swiper">
            <div
              // className="swiper-wrapper"
              style={{ display: "flex", gap: "10px", overflow: "scroll" }}
            >
              <div className="swiper-slide">
                <span
                  className="category-btn"
                  style={{
                    display: "flex",
                    gap: "2px",
                    fontSize: "14px",
                    color: "black",
                  }}
                >
                  <BsSortDownAlt />
                  <span>Sort By</span>
                </span>
              </div>
              <div className="swiper-slide">
                <span
                  className="category-btn"
                  style={{
                    display: "flex",
                    gap: "2px",
                    fontSize: "14px",
                    color: "black",
                  }}
                >
                  <FiFilter />
                  <span>Filter</span>
                </span>
              </div>
              <div className="swiper-slide">
                <span
                  className="category-btn"
                  style={{
                    display: "flex",
                    gap: "2px",
                    fontSize: "14px",
                    color: "black",
                  }}
                >
                  <span>Brand</span>
                  <RiArrowDropDownLine />
                </span>
              </div>
              <div className="swiper-slide">
                <span
                  className="category-btn"
                  style={{
                    display: "flex",
                    gap: "2px",
                    fontSize: "14px",
                    color: "black",
                  }}
                >
                  <span>Discount</span>
                  <RiArrowDropDownLine />
                </span>
              </div>
            </div>
          </div> */}

          <div className="container">
            <div className="row g-3">
              <div className="col-6">
                <div className="shop-card">
                  <div className="dz-media">
                    <a
                      href="/product-detail"
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
                        href="/product-detail"
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
                      href="/product-detail"
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
                        href="/product-detail"
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
                      href="/product-detail"
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
                        href="/product-detail"
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
                      href="/product-detail"
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
                        href="/product-detail"
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
                      href="/product-detail"
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
                        href="/product-detail"
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
                      href="/product-detail"
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
                        href="/product-detail"
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
                      href="/product-detail"
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
                        href="/product-detail"
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
                      href="/product-detail"
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
                        href="/product-detail"
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
                      href="/product-detail"
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
                        href="/product-detail"
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
                      href="/product-detail"
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
                        href="/product-detail"
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
                      href="/product-detail"
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
                        href="/product-detail"
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
                      href="/product-detail"
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
                        href="/product-detail"
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
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              className="trending-swiper p-lr15"
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 },
                640: { slidesPerView: 2, spaceBetween: 10 },
                1024: { slidesPerView: 3, spaceBetween: 20 },
              }}
            >
              {[1, 2, 3, 4].map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="shop-card style-2">
                    <div className="dz-media">
                      <a
                        href="/product-detail"
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
                          href="/product-detail"
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
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Shop Section End */}
        </div>

        <div
          className="offcanvas offcanvas-bottom dz-filter-canvas"
          tabIndex={-1}
          id="offcanvasBottom2"
          aria-labelledby="offcanvasBottomLabel2"
        >
          {/* <button
            type="button"
            className="btn-close drage-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          /> */}
          <div
            className=""
            style={{ display: "flex", padding: "10px", gap: "10px" }}
          >
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i className="icon feather icon-x" />
            </button>
            <h6 className="offcanvas-title" id="offcanvasBottomLabel2">
              Filters
            </h6>
          </div>
          <div className="offcanvas-body">
            <div className="filter-content">
              <div className="form-check" style={{ display: "flex" }}>
                <label className="form-check-label" htmlFor="brand1">
                  Roadstar
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="brand1"
                />
              </div>
              <div className="form-check" style={{ display: "flex" }}>
                <label className="form-check-label" htmlFor="brand2">
                  Peter England
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="brand2"
                />
              </div>
              <div className="form-check" style={{ display: "flex" }}>
                <label className="form-check-label" htmlFor="brand3">
                  Flying Machine
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="brand3"
                />
              </div>
              <div className="form-check" style={{ display: "flex" }}>
                <label className="form-check-label" htmlFor="brand4">
                  killer
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="brand4"
                />
              </div>
              <div className="form-check" style={{ display: "flex" }}>
                <label className="form-check-label" htmlFor="brand5">
                  Levi's
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="brand5"
                />
              </div>
              <div className="form-check" style={{ display: "flex" }}>
                <label className="form-check-label" htmlFor="brand6">
                  Puma
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="brand6"
                />
              </div>
              <div className="form-check" style={{ display: "flex" }}>
                <label className="form-check-label" htmlFor="brand7">
                  Wildcraft
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="brand7"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="offcanvas offcanvas-bottom dz-filter-canvas"
        tabIndex={-1}
        id="offcanvasBottom1"
        aria-labelledby="offcanvasBottomLabel1"
      >
        {/* <button
          type="button"
          className="btn-close drage-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        /> */}
        <div
          className=""
          style={{ display: "flex", alignItems: "center", gap: "20px" }}
        >
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="icon feather icon-x" />
          </button>
          <h6 className="offcanvas-title" id="offcanvasBottomLabel1">
            Filters
          </h6>
        </div>
        <div className="offcanvas-body">
          <div className="form-check" style={{ display: "flex" }}>
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              What's new
            </label>
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
          </div>
          <div className="form-check" style={{ display: "flex" }}>
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Price - high to low
            </label>
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
          </div>
          <div className="form-check" style={{ display: "flex" }}>
            <label className="form-check-label" htmlFor="flexRadioDefault3">
              Price - low to high
            </label>
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault3"
            />
          </div>
          <div className="form-check" style={{ display: "flex" }}>
            <label className="form-check-label" htmlFor="flexRadioDefault4">
              Popularity
            </label>
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault4"
            />
          </div>
          <div className="form-check" style={{ display: "flex" }}>
            <label className="form-check-label" htmlFor="flexRadioDefault5">
              Discount
            </label>
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault5"
            />
          </div>
        </div>
      </div>
      <div
        className="offcanvas offcanvas-bottom dz-filter-canvas"
        tabIndex={-1}
        id="offcanvasBottom3"
        aria-labelledby="offcanvasBottomLabel3"
      >
        {/* <button
          type="button"
          className="btn-close drage-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        /> */}
        <div style={{display:"flex", gap:"20px", padding:"10px"}}>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="icon feather icon-x" />
          </button>
          <h6 className="offcanvas-title" id="offcanvasBottomLabel3">
            Filters
          </h6>
        </div>
        <div className="offcanvas-body">
          <div className="form-check" style={{display:"flex"}}>
            <label className="form-check-label" htmlFor="item1">
              30% or more
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              id="item1"
            />
          </div>
          <div className="form-check" style={{display:"flex"}}>
            <label className="form-check-label" htmlFor="item2">
              40% or more
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              id="item2"
            />
          </div>
          <div className="form-check" style={{display:"flex"}}>
            <label className="form-check-label" htmlFor="item3">
              50% or more
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              id="item3"
            />
          </div>
          <div className="form-check" style={{display:"flex"}}>
            <label className="form-check-label" htmlFor="item4">
              60% or more
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              id="item4"
            />
          </div>
          <div className="form-check" style={{display:"flex"}}>
            <label className="form-check-label" htmlFor="item5">
              70% or more
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              defaultValue
              id="item5"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
