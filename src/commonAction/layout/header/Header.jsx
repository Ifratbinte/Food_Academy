import React from "react";
import Menu from "../../Nav/Menu";

function Header() {
  return (
    <>
      {/* -- ======= Header ======= -- */}
      <header id="header" className="header fixed-top d-flex align-items-center header-bg py-3">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
          <img src="media/logo/logo-white.png" className="logo" alt="logo" />
          <Menu />
          <a href="#book-a-table" className="book-a-table-btn scrollto d-none d-lg-flex">
            Book a table
          </a>
        </div>
      </header>
    </>
  );
}
export default Header;