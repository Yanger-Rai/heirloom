import React from "react";
import "./NavigationBar.css";

const NavBar = () => {
  return (
    <>
      <div className="navMain prevent-select">
        <div className="nav">
          <a href="">MENU</a>
          <a href="">ABOUT US</a>
        </div>
        <div className="nav">
          <a href="">ACCOUNT</a>
          <a href="">CART</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
