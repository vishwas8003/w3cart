import React from "react";
import discountPng from "./../assets/discount.png";
import cashPng from "./../assets/cash.png";
import payPng from "./../assets/pay.png";
import cardPng from "./../assets/card.png";
import walletPng from "./../assets/wallet.png";
import bankPng from "./../assets/bank.png";
import { LuGift } from "react-icons/lu";

import visaPng from "./../assets/visa.png";
import mastercardPng from "./../assets/mastercard.png";
import discoverdPng from "./../assets/discover.png";
import { IoIosArrowRoundBack } from "react-icons/io";

import bank1Png from "./../assets/bank1.svg";
import bank2Png from "./../assets/bank2.svg";
import bank3Png from "./../assets/bank3.svg";
import bank4Png from "./../assets/bank4.svg";
import bank5Png from "./../assets/bank5.svg";
import bank6Png from "./../assets/bank6.svg";
import bank7Png from "./../assets/bank7.svg";
import bank8Png from "./../assets/bank8.svg";

import { IoIosArrowRoundForward } from "react-icons/io";
// import { IoIosArrowRoundForward } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";

import card1Png from "./../assets/card (1).png";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <>
      <div className="page-wrapper">
        <header className="header shadow header-fixed border-0">
          <div className="container">
            <div className="header-content">
              <div className="left-content">
                <Link to="/checkout" className="back-btn">
                  <IoIosArrowBack />
                </Link>
                <h6 className="title">Payment</h6>
              </div>
              <div className="mid-content"></div>
              <div className="right-content"></div>
            </div>
          </div>
        </header>
        {/* Header */}
        {/* Page Content Start */}
        <div className="page-content space-top p-b50">
          <div className="container">
            <div className="title-bar justify-content-start">
              <span className="media media-20 me-2">
                <img src={discountPng} alt="/" />
              </span>
              <h6 className="mb-0 font-w700">Bank Offer</h6>
            </div>
            <div className="d-flex mb-3">
              <IoIosArrowRoundForward />
              <p className="mb-0">
                10% instant Savings on Citi Credit and Debit Cards on a min
                spend of Rs 3,0000. TCA
              </p>
            </div>
            <div
              className="accordion dz-accordion accordion-full"
              id="accordionExample"
            >
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <span className="media media-25 me-3">
                      <img src={cashPng} alt="/" />
                    </span>
                    Cash on Delivery(Cash/UPI)
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    Carry on your cash payment..
                    <br />
                    Thanx!
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <span className="media media-25 me-3">
                      <img src={cardPng} alt="/" />
                    </span>
                    Credit/Debit Card
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <small className="font-w600 mb-2 text-dark">
                      Saved Cards
                    </small>
                    {/* Card Select */}
                    <div className="d-flex align-items-center mb-3">
                      <button
                        type="button"
                        className="dz-modal-btn text-dark"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModalCenter"
                      >
                        Add Card +
                      </button>
                      {/* Card Select */}
                      <div
                        className="short-tag style-4"
                        role="group"
                        aria-label="radio toggle button"
                      >
                        <div className="clearfix">
                          <input
                            type="radio"
                            className="btn-check"
                            name="btnradio"
                            id="btnradio1"
                            defaultChecked
                          />
                          <label
                            className="btn ms-2 mb-0 tag-btn"
                            htmlFor="btnradio1"
                          >
                            <img src={visaPng} alt="" />
                          </label>
                        </div>
                        <div className="clearfix">
                          <input
                            type="radio"
                            className="btn-check"
                            name="btnradio"
                            id="btnradio2"
                          />
                          <label
                            className="btn mb-0 tag-btn"
                            htmlFor="btnradio2"
                          >
                            <img src={mastercardPng} alt="" />
                          </label>
                        </div>
                        <div className="clearfix">
                          <input
                            type="radio"
                            className="btn-check"
                            name="btnradio"
                            id="btnradio3"
                          />
                          <label
                            className="btn mb-0 me-0 tag-btn"
                            htmlFor="btnradio3"
                          >
                            <img src={discoverdPng} alt="" />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="payment-card">
                      <div className="card-media">
                        <img src={card1Png} alt />
                      </div>
                      <div className="card-info">
                        <div className="clearfix">
                          <h5 className="card-name">Credit Card</h5>
                          <p className="card-number">4532 **** **** ****</p>
                        </div>
                        <div className="bottom-info">
                          <p>04 / 25</p>
                          <p>KEVIN HARD</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <span className="media media-25 me-3">
                      <img src={payPng} alt="/" />
                    </span>
                    Google Pay/Phone Pay/BHIM UPI
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body pt-0">
                    <div className="form">
                      <div className="form-item">
                        <label className="form-label">Link via UPI</label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Enter your UPI ID"
                          autoComplete="off"
                          required
                        />
                      </div>
                      <a
                        href="javascrpit:void(0);"
                        style={{ borderRadius: "0px" }}
                        className="btn btn-success btn-block"
                      >
                        Continue
                      </a>
                      <div className="d-flex align-items-center mt-3">
                        <i className="fa-solid fa-shield me-3 text-dark" />
                        <p className="info-line">
                          Your UPI ID Will be encrypted and is 100% safe with
                          us.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    <span className="media media-25 me-3">
                      <img src={walletPng} alt="/" />
                    </span>
                    Payments/Wallet
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body pt-0">
                    <div className="mb-3">
                      <label className="form-label">Link Your Wallet</label>
                      <input
                        type="number"
                        className="form-control"
                        autoComplete="off"
                        required
                        placeholder={+91}
                      />
                    </div>
                    <a
                      href="javascript:void(0);"
                      style={{ borderRadius: "0px" }}
                      className="btn btn-success btn-block"
                    >
                      Continue
                    </a>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    <span className="media media-25 me-3">
                      <img src={bankPng} alt="/" />
                    </span>
                    Netbanking
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <button
                      style={{ borderRadius: "0px" }}
                      className="btn btn-outline-success w-100"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight"
                      aria-controls="offcanvasRight"
                    >
                      Netbannking
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="coupon-bx style-2 mb-3"
              href="javascript:void(0);"
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              {/* <i className="fa-solid fa-gift me-3" /> */}
              <LuGift style={{ color: "#125948" }} />

              <span className="title font-w500" style={{ marginLeft: "10px" }}>
                Have a Gift Card?
              </span>
              <span className="ms-auto font-w600" style={{ color: "#125948" }}>
                Apply
              </span>
            </a>
            <div className="view-cart style-2">
              <h6 className="title border-bottom pb-2">Price Title(1 item)</h6>
              <ul style={{ paddingLeft: "0px" }}>
                <li>
                  <span className="name">Total MRP</span>
                  <span className="font-w500">1599</span>
                </li>
                <li>
                  <span className="name">Discount on MRP</span>
                  <span className="font-w500">-640</span>
                </li>
                <li>
                  <span className="name">Coupon Discount</span>
                  <span className="font-w500">-200</span>
                </li>
                <div className="divider style-2 mt-0" />
                <li>
                  <span className="name">Total Amount</span>
                  <h4 className="price">759</h4>
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
                <h5 className="price text-secondary">$759</h5>
                <span>View Details</span>
              </div>
              <Link
                to="/tracking-order"
                style={{ borderRadius: "0px" }}
                className="btn btn-success w-100"
              >
                Pay now
              </Link>
            </div>
          </div>
        </div>
        {/* Footer End */}
        {/* Add Card Modal */}
        <div className="modal fade" id="exampleModalCenter">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content rounded-0">
              <div className="modal-header border-0 pb-0">
                <h5 className="modal-title font-w700">ADD CARD</h5>
                <button className="btn-close" data-bs-dismiss="modal">
                  <i className="fa-solid fa-xmark" />
                </button>
              </div>
              <div className="modal-body">
                <p>
                  Please ensure your card can be used for online transactions
                </p>
                <div className="form">
                  <div className="form-item">
                    <label className="form-label">Card holder Name</label>
                    <input
                      type="text"
                      className="form-control"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="form-item">
                    <label className="form-label">Card Number</label>
                    <input
                      type="number"
                      className="form-control"
                      autoComplete="off"
                      placeholder="**** **** **** ****"
                      required
                    />
                  </div>
                  <div className="row gx-3">
                    <div className="form-item col-6">
                      <label className="form-label">Expiry Date</label>
                      <input
                        type="date"
                        className="form-control"
                        autoComplete="off"
                        defaultValue="MM / YY"
                        required
                      />
                    </div>
                    <div className="form-item col-6">
                      <label className="form-label">Security Code</label>
                      <input
                        type="password"
                        className="form-control"
                        autoComplete="off"
                        placeholder="CVV"
                        required
                      />
                    </div>
                  </div>
                </div>
                <a
                  href="javascript:void(0);"
                  style={{ borderRadius: "0px" }}
                  className="btn btn-success d-block"
                  data-bs-dismiss="modal"
                >
                  Added
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Add Card Modal */}
        {/* NET BANKING OFFCANVAS */}
        <div
          className="offcanvas offcanvas-end add-bank"
          tabIndex={-1}
          id="offcanvasRight"
        >
          <div className="container p-0">
            <div className="offcanvas-header">
              <div
                className="input-group search-input"
                style={{ display: "flex", alignItems: "center" }}
              >
                <a
                  style={{ marginBottom: "6px" }}
                  href="javascript:void(0);"
                  className="search-icon"
                >
                  <CiSearch style={{ color: "#125948" }} />
                </a>
                <input
                  type="search"
                  placeholder="Search by bank name"
                  className="form-control"
                />
              </div>
            </div>
            <div className="offcanvas-body">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Popular Banks</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-4">
                      <a href="javascript:void(0):" className="media media-50">
                        <img src={bank1Png} alt="" />
                      </a>
                    </div>
                    <div className="col-4">
                      <a href="javascript:void(0):" className="media media-50">
                        <img src={bank2Png} alt="" />
                      </a>
                    </div>
                    <div className="col-4">
                      <a href="javascript:void(0):" className="media media-50">
                        <img src={bank3Png} alt="" />
                      </a>
                    </div>
                    <div className="col-4">
                      <a href="javascript:void(0):" className="media media-50">
                        <img src={bank4Png} alt="" />
                      </a>
                    </div>
                    <div className="col-4">
                      <a href="javascript:void(0):" className="media media-50">
                        <img src={bank5Png} alt="" />
                      </a>
                    </div>
                    <div className="col-4">
                      <a href="javascript:void(0):" className="media media-50">
                        <img src={bank6Png} alt="" />
                      </a>
                    </div>
                    <div className="col-4">
                      <a href="javascript:void(0):" className="media media-50">
                        <img src={bank7Png} alt="" />
                      </a>
                    </div>
                    <div className="col-4">
                      <a href="javascript:void(0):" className="media media-50">
                        <img src={bank8Png} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <h5 className="title-bar">All Banks</h5>
              <ul className="item-list mb-3" style={{ paddingLeft: "0px" }}>
                <li className="list">
                  <a className="bank-detail" href="javascript:void(0);">
                    <IoIosArrowRoundForward />
                    Bank Of india
                  </a>
                </li>
                <li className="list">
                  <a className="bank-detail" href="javascript:void(0);">
                    <IoIosArrowRoundForward />
                    Bank Of Maharasthra
                  </a>
                </li>
                <li className="list">
                  <a href="javascript:void(0);" className="bank-detail">
                    <IoIosArrowRoundForward />
                    Canara Bank
                  </a>
                </li>
                <li className="list">
                  <a href="javascript:void(0);" className="bank-detail">
                    <IoIosArrowRoundForward />
                    HDFC Bank
                  </a>
                </li>
                <li className="list">
                  <a href="javascript:void(0);" className="bank-detail">
                    <IoIosArrowRoundForward />
                    IDFC Bank
                  </a>
                </li>
                <li className="list">
                  <a href="javascript:void(0);" className="bank-detail">
                    <IoIosArrowRoundForward />
                    Catholic Syrian Bank
                  </a>
                </li>
                <li className="list">
                  <a href="javascript:void(0);" className="bank-detail">
                    <IoIosArrowRoundForward />
                    Catholic Syrian Bank
                  </a>
                </li>
                <li className="list">
                  <a href="javascript:void(0);" className="bank-detail">
                    <IoIosArrowRoundForward />
                    Central Bank of India
                  </a>
                </li>
                <li className="list">
                  <a href="javascript:void(0);" className="bank-detail">
                    <IoIosArrowRoundForward />
                    City Union Bank
                  </a>
                </li>
                <li className="list">
                  <a href="javascript:void(0);" className="bank-detail">
                    <IoIosArrowRoundForward />
                    Corporation Bank
                  </a>
                </li>
                <li className="list">
                  <a href="javascript:void(0);" className="bank-detail">
                    <IoIosArrowRoundForward />
                    Cosmos Bank
                  </a>
                </li>
              </ul>
              <button
                type="button"
                style={{ borderRadius: "0px" }}
                className="btn btn-outline-success d-block w-100 mt-auto"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                <i className="icon feather icon-arrow-left mt-1 me-2" />
                <IoIosArrowRoundBack />
                <span className="title">Return</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
