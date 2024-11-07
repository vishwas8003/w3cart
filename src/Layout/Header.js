import React, { useState } from "react";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  console.log("isSidebarOpenisSidebarOpenisSidebarOpenisSidebarOpen",isSidebarOpen)

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="header shadow header-fixed border-0">
        <div className="container">
          <div className="header-content">
            <div className="left-content">
              <a href="javascript:void(0);" className="menu-toggler" onClick={toggleSidebar}>
                <i className="icon feather icon-menu"  onClick={toggleSidebar}></i>
              </a>
            </div>
            <div className="mid-content header-logo">
              <a href="index.html">
                <img
                  className="logo app-logo"
                  src="assets/images/logos/light/logo1.svg"
                  alt="logo"
                />
              </a>
            </div>
            <div className="right-content">
              <a href="search.html" className="search-icon">
                <i className="icon feather icon-search"></i>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className={`dark-overlay ${isSidebarOpen ? "active" : ""}`} onClick={toggleSidebar}></div>

      <div
        className={`sidebar ${isSidebarOpen ? "open" : ""}`}
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
        {/* Sidebar navigation links */}
        <ul className="nav navbar-nav">
          <li>
            <a className="nav-link active" href="index.html">
              <span className="dz-icon">
                <i className="icon feather icon-home" />
              </span>
              <span>Home</span>
            </a>
          </li>
          {/* Add other nav items here */}
        </ul>
        {/* Additional sidebar content */}
        <div className="sidebar-bottom">
          {/* Theme and Dark Mode settings */}
          <ul className="app-setting">
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
    </>
  );
};

export default Header;
