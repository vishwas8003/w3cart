import React from "react";
import pic4 from "./../assets/pic4.png";
import pic41 from "./../assets/pic4 (1).png";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  return (
    <>
      {/* Header */}
      <header className="header shadow header-fixed border-0">
        <div className="container">
          <div className="header-content">
            <div className="left-content">
              <a href="/product"  className="back-btn">
                {/* <i className="icon feather icon-chevron-left" /> */}
                <FaChevronLeft/>
              </a>
            </div>
            <div className="mid-content">
              <h6 className="title">Product Detail</h6>
            </div>
            <div className="right-content">
              <a href="/product" className="item-bookmark">
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
          </div>
        </div>
      </header>
      {/* Header */}

      <div className="page-content space-top p-b50">
        <div className="container p-0">
          <div className="dz-product-preview">
            <div className="swiper product-detail-swiper-2">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="dz-media">
                    <img src={pic4} alt="" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="dz-media">
                    <img src={pic41} alt="" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="dz-media">
                    <img src={pic4} alt="" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="dz-media">
                    <img src={pic41} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div thumbsslider className="swiper product-detail-swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="dz-media">
                    <img src={pic4} alt="" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="dz-media">
                    <img src={pic41} alt="" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="dz-media">
                    <img src={pic4} alt="" />
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="dz-media">
                    <img src={pic41} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="dz-product-detail">
              <div className="detail-content">
                <span className="brand-tag">Jackets</span>
                <h5>Men Black Grey Allover Printed Round Neck T-Shirt</h5>
              </div>
              <div className="dz-review-meta mb-3">
                <h4 className="price">$45.15</h4>
                <h6 className="review">
                  <i className="fa-solid fa-star me-1" />
                  4.5 <span>(2.6k review)</span>
                </h6>
              </div>
              <div className="d-flex align-items-center mb-4">
                <h6 className="mb-0 me-4">Size:</h6>
                <div className="btn-group product-size mb-0">
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnsize1"
                    id="btnradio11"
                    defaultChecked
                  />
                  <label className="btn" htmlFor="btnradio11">
                    S
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnsize1"
                    id="btnradio12"
                  />
                  <label className="btn" htmlFor="btnradio12">
                    M
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnsize1"
                    id="btnradio13"
                  />
                  <label className="btn" htmlFor="btnradio13">
                    L
                  </label>
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnsize1"
                    id="btnradio14"
                  />
                  <label className="btn" htmlFor="btnradio14">
                    XL
                  </label>
                </div>
              </div>
              <div className="meta-content d-flex align-items-center">
                <h6 className="mb-0 me-4">Color:</h6>
                <div className="d-flex align-items-center color-filter">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="radioNoLabel"
                      id="radioNoLabel1"
                      defaultValue="#24262B"
                      aria-label="..."
                      defaultChecked
                    />
                    <span />
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="radioNoLabel"
                      id="radioNoLabel2"
                      defaultValue="#8CB2D1"
                      aria-label="..."
                    />
                    <span />
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="radioNoLabel"
                      id="radioNoLabel3"
                      defaultValue="#0D775E"
                      aria-label="..."
                    />
                    <span />
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="radioNoLabel"
                      id="radioNoLabel4"
                      defaultValue="#C7D1CF"
                      aria-label="..."
                    />
                    <span />
                  </div>
                </div>
              </div>
              <h6>Description:</h6>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humor.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer fixed bg-white border-top">
        <div className="container py-2">
          <div className="total-cart">
            <div className="price-area">
              <span>Price</span>
              <h3 className="price">$45.15</h3>
            </div>
            <Link to="/cart" className="btn btn-success" style={{borderRadius:"0px"}}>
              Add Cart
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
