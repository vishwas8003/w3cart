import React from "react";
import { FaRegClock } from "react-icons/fa";
import { FiArrowUpLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <>
      <div className="page-wrapper">
        <header className="header header-fixed">
          <div className="container">
            <div className="header-content">
              <div className="input-group search-input">
                <a href="javascript:void(0);" className="search-icon">
                  <i className="icon feather icon-search" />
                </a>
                <input
                  type="search"
                  placeholder="Search here..."
                  className="form-control main-in"
                />
              </div>
            </div>
          </div>
        </header>

        <div className="page-content space-top p-b50">
          <div className="container">
            <div className="recent-search-list" style={{ marginLeft: "-30px" }}>
              <ul>
                <li>
                  <a
                    href="product.html"
                    className="search-content"
                    style={{ textDecoration: "none" }}
                  >
                    <div className="product-search-list">
                      <FaRegClock
                        style={{ color: "#125948" }}
                        className="icon feather"
                      />
                      <span>boat earbuds</span>
                    </div>
                    <FiArrowUpLeft className="icon feather" />
                  </a>
                </li>
                <li>
                  <a href="product.html" className="search-content">
                    <div className="product-search-list">
                      <FaRegClock
                        style={{ color: "#125948" }}
                        className="icon feather"
                      />
                      <span>mobile phones</span>
                    </div>
                    <FiArrowUpLeft className="icon feather" />
                  </a>
                </li>
                <li>
                  <a href="product.html" className="search-content">
                    <div className="product-search-list">
                      <FaRegClock
                        style={{ color: "#125948" }}
                        className="icon feather"
                      />
                      <span>realme earphones</span>
                    </div>
                    <FiArrowUpLeft className="icon feather" />
                  </a>
                </li>
                <li>
                  <a href="product.html" className="search-content">
                    <div className="product-search-list">
                      <FaRegClock
                        style={{ color: "#125948" }}
                        className="icon feather"
                      />
                      <span>vivo t1 5g</span>
                    </div>
                    <FiArrowUpLeft className="icon feather" />
                  </a>
                </li>
                <li>
                  <a href="product.html" className="search-content">
                    <div className="product-search-list">
                      <FaRegClock
                        style={{ color: "#125948" }}
                        className="icon feather"
                      />
                      <span>vivo t1 5g</span>
                    </div>
                    <FiArrowUpLeft className="icon feather" />
                  </a>
                </li>
                <li>
                  <a href="product.html" className="search-content">
                    <div className="product-search-list">
                      <FaRegClock
                        style={{ color: "#125948" }}
                        className="icon feather"
                      />
                      <span>washing machine</span>
                    </div>
                    <FiArrowUpLeft className="icon feather" />
                  </a>
                </li>
                <li>
                  <a href="product.html" className="search-content">
                    <div className="product-search-list">
                      <FaRegClock
                        style={{ color: "#125948" }}
                        className="icon feather"
                      />
                      <span>Air conditioner</span>
                    </div>
                    <FiArrowUpLeft className="icon feather" />
                  </a>
                </li>
                <li>
                  <a href="product.html" className="search-content">
                    <div className="product-search-list">
                      <FaRegClock
                        style={{ color: "#125948" }}
                        className="icon feather"
                      />
                      <span>refrigerator</span>
                    </div>
                    <FiArrowUpLeft className="icon feather" />
                  </a>
                </li>
                <li>
                  <a href="product.html" className="search-content">
                    <div className="product-search-list">
                      <FaRegClock
                        style={{ color: "#125948" }}
                        className="icon feather"
                      />
                      <span>home theatre</span>
                    </div>
                    <FiArrowUpLeft className="icon feather" />
                  </a>
                </li>
                <li>
                  <a href="product.html" className="search-content">
                    <div className="product-search-list">
                      <FaRegClock
                        style={{ color: "#125948" }}
                        className="icon feather"
                      />
                      <span>boat earbuds</span>
                    </div>
                    <FiArrowUpLeft className="icon feather" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Page Content End */}
        <div className="footer fixed bg-white">
          <div className="container">
            <Link
                to="/"
              style={{ borderRadius: "0px" }}
              className="btn btn-outline-success back-btn btn-block"
            >
              GO Back!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
