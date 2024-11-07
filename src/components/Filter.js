import React from "react";
import filterData from "./filterData";
import FilterOption from "./FilterOption";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

const Filter = () => {
  return (
    <div className="page-wrapper">
      <header className="header shadow header-fixed border-0">
        <div className="container">
          <div className="header-content">
            <div className="left-content">
              <Link to="/product" className="back-btn">
                <FaChevronLeft />
              </Link>
              <h6 className="title">Filter</h6>
            </div>
          </div>
        </div>
      </header>

      <div className="page-content space-top p-b70">
        <div className="container p-0">
          <div className="d-flex align-items-start dz-filter">
            <div
              className="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              {filterData?.map((filter, index) => (
                <button
                  key={index}
                  className={`nav-link ${index === 0 ? "active" : ""}`}
                  id={`v-pills-filter-tab${index}`}
                  data-bs-toggle="pill"
                  data-bs-target={`#v-pills-filter${index}`}
                  type="button"
                  role="tab"
                  aria-controls={`v-pills-filter${index}`}
                  aria-selected={index === 0}
                >
                  {filter.title}
                </button>
              ))}
            </div>
            <div className="tab-content" id="v-pills-tabContent">
              {filterData.map((filter, index) => (
                <div
                  key={index}
                  className={`tab-pane fade ${
                    index === 0 ? "show active" : ""
                  }`}
                  id={`v-pills-filter${index}`}
                  role="tabpanel"
                  aria-labelledby={`v-pills-filter-tab${index}`}
                  tabIndex={0}
                >
                  {filter.options?.map((option) => (
                    <FilterOption
                      key={option.id}
                      label={option.label}
                      id={option.id}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer fixed bg-white border-top">
        <div className="container py-2">
          <div className="total-cart">
            <div className="price-area">
              <h5 className="price" style={{ color: "black" }}>
                16,020
              </h5>
              <span>products found</span>
            </div>
            <Link
              to="/product"
              style={{ borderRadius: "0px" }}
              className="btn btn-success w-100"
            >
              Apply
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
