import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import pic6 from "./../assets/pic6.jpg";
import pic7 from "./../assets/pic7.jpg";
import pic8 from "./../assets/pic8.jpg";
import userImage from "./../assets/user.png";
import { IoMdCut } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Cart = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => Math.max(prevCount - 1, 0));

  return (
    <>
      <div className="page-wrapper">
        <header className="header shadow header-fixed border-0">
          <div className="container">
            <div className="header-content">
              <div className="left-content">
                <a
                  style={{ textDecoration: "none" }}
                  href="javascript:void(0);"
                  className="back-btn"
                >
                  <FaChevronLeft />
                </a>
              </div>
              <div className="mid-content">
                <h6 className="title">Cart</h6>
              </div>
              <div className="right-content">
                <a href="javascript:void(0);">
                  <i className="icon feather icon-more-vertical-" />
                </a>
              </div>
            </div>
          </div>
        </header>
        {/* Header */}
        {/* Page Content Start */}
        <div className="page-content space-top p-b50">
          <div className="container">
            <div className="user-status m-b15">
              <div className="d-flex align-items-center">
                <div className="media media-35 rounded-circle me-2">
                  <img src={userImage} alt="" />
                </div>
                <h6 className="mb-0 font-14 font-w400">Delivery to Tushar</h6>
              </div>
              <h6 className="mb-0 font-14 font-w500 text-primary">
                <a
                  style={{ textDecoration: "none" }}
                  href="javascript:void(0);"
                  className="d-flex align-items-center"
                >
                  Ram krishan, puram
                  <i className="icon feather icon-chevron-down font-16" />
                </a>
              </h6>
            </div>
            <div className="cart-box">
              <div className="dz-media">
                <img src={pic6} alt="" />
              </div>
              <div className="cart-content">
                <h6 className="title mb-1">
                  <a
                    style={{ textDecoration: "none" }}
                    href="product-detail.html"
                  >
                    Peter England Casual
                  </a>
                </h6>
                <span className="font-12 brand-tag">
                  Peter Longline Pure Cotten Tshirt
                </span>
                <div
                  className="cart-footer"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100% !important",
                  }}
                >
                  <h6 className="price mb-0">
                    $158.15<del>$200.10</del>
                  </h6>
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      marginLeft: "0px !important",
                    }}
                  >
                    <button
                      onClick={decrement}
                      className="btn btn-outline-secondary"
                    >
                      -
                    </button>
                    <input
                      readOnly
                      className="stepper"
                      type="text"
                      value={count}
                      name="demo3"
                      style={{
                        width: "40px",
                        border: "0px",
                        paddingInline: "8px",
                      }}
                    />
                    <button
                      onClick={increment}
                      className="btn btn-outline-secondary"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="cart-box">
              <div className="dz-media">
                <img src={pic7} alt="" />
              </div>
              <div className="cart-content">
                <h6 className="title mb-1">
                  <a
                    style={{ textDecoration: "none" }}
                    href="product-detail.html"
                  >
                    Peter England Casual
                  </a>
                </h6>
                <span className="font-12 brand-tag">
                  Peter Longline Pure Cotten Tshirt
                </span>
                <div className="cart-footer">
                  <h6 className="price mb-0">
                    $158.15<del>$200.10</del>
                  </h6>
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      marginLeft: "0px !important",
                    }}
                  >
                    <button
                      onClick={decrement}
                      className="btn btn-outline-secondary"
                    >
                      -
                    </button>
                    <input
                      readOnly
                      className="stepper"
                      type="text"
                      value={count}
                      name="demo3"
                      style={{
                        width: "40px",
                        border: "0px",
                        paddingInline: "8px",
                      }}
                    />
                    <button
                      onClick={increment}
                      className="btn btn-outline-secondary"
                    >
                      +
                    </button>
                  </div>{" "}
                </div>
              </div>
            </div>
            <div className="cart-box">
              <div className="dz-media">
                <img src={pic8} alt="Product" />
              </div>
              <div className="cart-content">
                <h6 className="title mb-1">
                  <a
                    style={{ textDecoration: "none" }}
                    href="product-detail.html"
                  >
                    Peter England Casual
                  </a>
                </h6>
                <span className="font-12 brand-tag">
                  Peter Longline Pure Cotton Tshirt
                </span>
                <div className="cart-footer">
                  <h6 className="price mb-0">
                    $158.15 <del>$200.10</del>
                  </h6>
                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      marginLeft: "0px !important",
                    }}
                  >
                    <button
                      onClick={decrement}
                      className="btn btn-outline-secondary"
                    >
                      -
                    </button>
                    <input
                      readOnly
                      className="stepper"
                      type="text"
                      value={count}
                      name="demo3"
                      style={{
                        width: "40px",
                        border: "0px",
                        paddingInline: "8px",
                      }}
                    />
                    <button
                      onClick={increment}
                      className="btn btn-outline-secondary"
                    >
                      +
                    </button>
                  </div>{" "}
                </div>
              </div>
            </div>

            <p className="mb-1">Have a coupon code ? enter here</p>
            <div className="coupon-bx">
              <div className="icon icon-left">
                <IoMdCut />
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Offer Code"
              />
              <div className="icon icon-right">
                <IoIosArrowForward />
              </div>
            </div>
            <div className="view-cart mb-2">
              <ul style={{ paddingLeft: "0px" }}>
                <li>
                  <span className="name">Price :</span>
                  <span className="text-secondary font-w500">$135.2</span>
                </li>
                <li>
                  <span className="name">Tax :</span>
                  <span className="text-secondary font-w500">0.5%</span>
                </li>
                <li>
                  <span className="name">Delivery Fee :</span>
                  <span className="text-secondary font-w500">0.8%</span>
                </li>
                <div className="divider divider-dashed mt-0" />
                <li>
                  <span className="name">Total :</span>
                  <h4 className="price">$215.5</h4>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Page Content End */}
        {/* Footer Start */}
        <div className="footer fixed bg-white border-top">
          <div className="container py-2">
            <div className="total-cart">
              <div className="price-area">
                <h3 className="price text-secondary">$355.15</h3>
                <span>View price details</span>
              </div>
              <Link
                to="/checkout"
                style={{ borderRadius: "0px" }}
                className="btn btn-success"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
