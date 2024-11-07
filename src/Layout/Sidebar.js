import React, { useState } from "react";


const Sidebar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <>
      <div>
        <div className="dark-overlay" />
        <div
          className="sidebar"
          style={{ backgroundImage: 'url("assets/images/background/bg3.png")' }}
        >
          <a href="profile.html" className="author-box">
            <div className="dz-media">
              <img src="assets/images/user-profile.jpg" alt="author-image" />
            </div>
            <div className="dz-info">
              <h5 className="name">John Doe</h5>
              <span>example@gmail.com</span>
            </div>
          </a>
          <ul className="nav navbar-nav">
            <li>
              <a className="nav-link active" href="index.html">
                <span className="dz-icon">
                  <i className="icon feather icon-home" />
                </span>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a className="nav-link" href="product-list.html">
                <span className="dz-icon">
                  <i className="icon feather icon-layers" />
                </span>
                <span>Products</span>
              </a>
            </li>
            <li>
              <a className="nav-link" href="components.html">
                <span className="dz-icon">
                  <i className="icon feather icon-grid" />
                </span>
                <span>Components</span>
              </a>
            </li>
            <li>
              <a className="nav-link" href="pages.html">
                <span className="dz-icon">
                  <i className="icon feather icon-book-open" />
                </span>
                <span>Pages</span>
              </a>
            </li>
            <li>
              <a className="nav-link" href="featured.html">
                <span className="dz-icon">
                  <i className="icon feather icon-list" />
                </span>
                <span>Featured</span>
              </a>
            </li>
            <li>
              <a className="nav-link" href="wishlist.html">
                <span className="dz-icon">
                  <i className="icon feather icon-heart" />
                </span>
                <span>Wishlist</span>
              </a>
            </li>
            <li>
              <a className="nav-link" href="order.html">
                <span className="dz-icon">
                  <i className="icon feather icon-repeat" />
                </span>
                <span>Orders</span>
              </a>
            </li>
            <li>
              <a className="nav-link" href="cart.html">
                <span className="dz-icon">
                  <i className="icon feather icon-shopping-cart" />
                </span>
                <span>My Cart</span>
              </a>
            </li>
            <li>
              <a className="nav-link" href="profile.html">
                <span className="dz-icon">
                  <i className="icon feather icon-user" />
                </span>
                <span>Profile</span>
              </a>
            </li>
            <li>
              <a className="nav-link" href="welcome.html">
                <span className="dz-icon">
                  <i className="icon feather icon-log-out" />
                </span>
                <span>Logout</span>
              </a>
            </li>
          </ul>
          <div className="sidebar-bottom">
            <ul className="app-setting">
              <li className="nav-color pb-2">
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
              </li>
              <li>
                <a className="mode" href="javascript:void(0);">
                  <span className="dz-icon">
                    <i className="icon feather icon-moon" />
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
      </div>
    </>
  );
};

export default Sidebar;
