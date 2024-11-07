import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="page-wrapper">
      <header className="header shadow header-fixed border-0">
        <div className="container">
          <div className="header-content">
            <div className="left-content">
              <Link to="/cart" className="back-btn">
              <FaChevronLeft />
              </Link>
              <h6 className="title">Add delivery address</h6>
            </div>
            <div className="mid-content"></div>
            <div className="right-content"></div>
          </div>
        </div>
      </header>
      {/* Header */}
      {/* Page Content Start */}
      <div className="page-content space-top p-b80">
        <div className="container">
          <h6 className="title font-w700 border-bottom pb-2 mb-3">
            Contact Details
          </h6>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Type Your Name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="phone">
              Mobile No.
            </label>
            <input
              type="number"
              id="phone"
              className="form-control"
              placeholder="Type Your mobile no."
            />
          </div>
          <h6 className="title font-w700 border-bottom pb-2 mb-3">Address</h6>
          <div className="mb-3">
            <label className="form-label" htmlFor="pin Code">
              Pin Code
            </label>
            <input
              type="text"
              id="pin"
              className="form-control"
              placeholder="Pin Code"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="address">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="form-control"
              placeholder="Address"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="location">
              Locality/Town
            </label>
            <input
              type="text"
              id="location"
              className="form-control"
              placeholder="Locality/Town"
            />
          </div>
          <div className="row gx-3">
            <div className="col-6">
              <div className="mb-3">
                <label className="form-label" htmlFor="City">
                  City/District
                </label>
                <input
                  type="text"
                  id="City"
                  className="form-control"
                  placeholder="City/District"
                />
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <label className="form-label" htmlFor="state">
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  className="form-control"
                  placeholder="State"
                />
              </div>
            </div>
          </div>
          <h6 className="title font-w700 border-bottom pb-2 mb-3">
            Save Address As
          </h6>
          <div className="confirm-address">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="confirmAddress"
                id="confirmAddress1"
              />
              <label className="form-check-label" htmlFor="confirmAddress1">
                Home
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="confirmAddress"
                id="confirmAddress2"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="confirmAddress2">
                Work
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* Page Content End */}
      {/* Footer Start */}
      <div className="footer fixed">
        <div className="container">
          <Link
            to="/payment"
            style={{ borderRadius: "0px" }}
            className="btn btn-success w-100"
          >
            Save Address
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
