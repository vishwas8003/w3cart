import React from "react";
import { RiShoppingBag3Fill } from "react-icons/ri";
import menuShapeDark from "./../assets/menu-shape-dark.svg";
import menuShapelight from "./../assets/menu-shape-light.svg";
import { CiHome } from "react-icons/ci";
import { TbCategory } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

const Menubar = () => {
  return (
    <>
      <div className="menubar-area footer-fixed rounded-0">
        <div className="toolbar-inner menubar-nav">
          <a href="index.html" className="nav-link active">
            <CiHome />
            <span>Home</span>
          </a>
          <a href="category.html" className="nav-link">
            <TbCategory />
            <span>Categories</span>
          </a>
          <a href="cart.html" className="nav-link cart-handle">
            <div className="hexad-menu">
              <img src={menuShapeDark} className="shape-dark" alt="" />
              <img src={menuShapelight} className="shape-light" alt="" />
              <RiShoppingBag3Fill
                style={{ position: "relative", bottom: "42px" }}
              />
            </div>
          </a>
          <a href="wishlist.html" className="nav-link">
            <CiHeart />
            <span>Wishlist</span>
          </a>
          <Link to="/profile" className="nav-link">
            <CiUser />
            <span>Profile</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menubar;
