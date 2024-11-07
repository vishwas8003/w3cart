import React from "react";
import Menubar from "../../Layout/Menubar";
import userProfile from "./../../assets/user-profile.jpg";
import { LuPackage } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { LuGift } from "react-icons/lu";
import { MdOutlineHeadphones } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";
import { FiType } from "react-icons/fi";
import { FaRegBell } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { LuPen } from "react-icons/lu";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <div>
        <header className="header shadow header-fixed border-0">
          <div className="container">
            <div className="header-content">
              <div className="left-content">
                <Link to="/" className="back-btn">
                  <IoIosArrowBack />
                </Link>
              </div>
              <div className="mid-content">
                <h6 className="title">Profile</h6>
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
        <div className="page-content space-top">
          <div className="container">
            <div className="profile-area">
              <div className="main-profile">
                <div className="media media-60 me-3 rounded-circle">
                  <img src={userProfile} alt="profile-image" />
                </div>
                <div className="profile-detail">
                  <h6 className="name">Thomas Djono</h6>
                  <span className="font-12">ID 02123141</span>
                </div>
                <a href="edit-profile.html" className="edit-profile">
                  <LuPen />
                </a>
              </div>
              <div className="content-box">
                <ul style={{ paddingLeft: "0px" }} className="row g-2">
                  <li className="col-6">
                    <a href="order.html" style={{ textDecoration: "none" }}>
                      <div className="dz-icon-box">
                        <LuPackage style={{ color: "#125948" }} />
                      </div>
                      <span>Order</span>
                    </a>
                  </li>
                  <li className="col-6">
                    <a href="wishlist.html" style={{ textDecoration: "none" }}>
                      <div className="dz-icon-box">
                        <FaRegHeart style={{ color: "#125948" }} />
                      </div>
                      <span>Wishlist</span>
                    </a>
                  </li>
                  <li className="col-6">
                    <a href="coupon.html" style={{ textDecoration: "none" }}>
                      <div className="dz-icon-box">
                        <LuGift style={{ color: "#125948" }} />
                      </div>
                      <span>Coupons</span>
                    </a>
                  </li>
                  <li className="col-6">
                    <a
                      href="javascript:void(0);"
                      style={{ textDecoration: "none" }}
                    >
                      <div className="dz-icon-box">
                        <MdOutlineHeadphones style={{ color: "#125948" }} />
                      </div>
                      <span>Help Center</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="title-bar">
                <h6 className="title mb-0 font-w700">Account Settings</h6>
              </div>
              <div className="dz-list style-1">
                <ul style={{ paddingLeft: "0px" }}>
                  <li>
                    <a
                      href="edit-profile.html"
                      style={{
                        textDecoration: "none",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                      className="item-content item-link"
                    >
                      <div style={{ display: "flex" }}>
                        <div className="profile-dz-icon">
                          <FaRegUser size={10} style={{ color: "gray" }} />
                        </div>
                        <div className="dz-inner">
                          <span className="title">Edit Profile</span>
                        </div>
                      </div>
                      <IoIosArrowForward />
                    </a>
                  </li>
                  <li>
                    <a
                      href="address.html"
                      style={{
                        textDecoration: "none",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                      className="item-content item-link"
                    >
                      <div style={{ display: "flex" }}>
                        <div className="profile-dz-icon">
                          <LuMapPin />
                        </div>
                        <div className="dz-inner">
                          <span className="title">Saved Addresses</span>
                        </div>
                      </div>
                      <IoIosArrowForward />
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:void(0);"
                      className="item-content item-link"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasLang"
                      aria-controls="offcanvasLang"
                      style={{
                        textDecoration: "none",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ display: "flex" }}>
                        <div className="profile-dz-icon">
                          <FiType />
                        </div>
                        <div className="dz-inner">
                          <span className="title select-lang">
                            Select Language
                          </span>
                        </div>
                      </div>
                      <IoIosArrowForward />
                    </a>
                  </li>
                  <li>
                    <a
                      style={{
                        textDecoration: "none",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                      href="javascript:void(0);"
                      className="item-content item-link"
                    >
                      <div style={{ display: "flex" }}>
                        <div className="profile-dz-icon">
                          <FaRegBell />
                        </div>
                        <div className="dz-inner me-2">
                          <span className="title">Notification Setting</span>
                        </div>
                        <div className="badge badge-primary">5</div>
                      </div>
                      <IoIosArrowForward />
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/login"
                      style={{
                        textDecoration: "none",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                      className="item-content item-link"
                    >
                      <div style={{ display: "flex" }}>
                        <div className="profile-dz-icon">
                          <MdLogout />
                        </div>
                        <div className="dz-inner">
                          <span className="title">Log Out</span>
                        </div>
                      </div>
                      <IoIosArrowForward />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Page Content End */}
        {/* Menubar */}
        <Menubar />
        {/* Menubar */}
        {/* langauage picker */}
        <div
          className="offcanvas offcanvas-bottom m-3 rounded"
          tabIndex={-1}
          id="offcanvasLang"
        >
          <div className="offcanvas-header border-0 pb-0">
            <h5 className="offcanvas-title" id="offcanvasExampleLabel">
              Language
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
          <div className="offcanvas-body small">
            <div className="dz-list">
              <ul className="mb-2 confirm-lang">
                <li data-lang="indian">
                  <a
                    href="javascript:void(0);"
                    className="item-content py-2 item-link"
                  >
                    <div className="media media-30 me-3">
                      <img src="assets/images/flags/india.svg" alt="/" />
                    </div>
                    <div className="dz-inner">
                      <span className="title">Indian</span>
                    </div>
                  </a>
                </li>
                <li data-lang="English">
                  <a
                    href="javascript:void(0);"
                    className="item-content py-2 item-link"
                  >
                    <div className="media media-30 me-3">
                      <img
                        src="assets/images/flags/united-states.svg"
                        alt="/"
                      />
                    </div>
                    <div className="dz-inner">
                      <span className="title">English</span>
                    </div>
                  </a>
                </li>
                <li data-lang="German">
                  <a
                    href="javascript:void(0);"
                    className="item-content py-2 item-link"
                  >
                    <div className="media media-30 me-3">
                      <img src="assets/images/flags/germany.svg" alt="/" />
                    </div>
                    <div className="dz-inner">
                      <span className="title">German</span>
                    </div>
                  </a>
                </li>
                <li data-lang="Italian">
                  <a
                    href="javascript:void(0);"
                    className="item-content py-2 item-link"
                  >
                    <div className="media media-30 me-3">
                      <img src="assets/images/flags/italy.svg" alt="/" />
                    </div>
                    <div className="dz-inner">
                      <span className="title">Italian</span>
                    </div>
                  </a>
                </li>
                <li className="border-0" data-lang="Spainsh">
                  <a
                    href="javascript:void(0);"
                    className="item-content py-2 item-link"
                  >
                    <div className="media media-30 me-3">
                      <img src="assets/images/flags/spain.svg" alt="/" />
                    </div>
                    <div className="dz-inner">
                      <span className="title">Spainsh</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
