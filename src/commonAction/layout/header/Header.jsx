import React from "react";
import Menu from "../../Nav/Menu";
// import Menu from "../../Nav/Nav";

function Header() {
  return (
    <>
      {/* -- ======= Header ======= -- */}
      <header id="header" className="header fixed-top d-flex align-items-center  py-3">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
          <img src="media/logo/logo-white.png" className="logo" alt="logo" />
          <Menu />
        </div>
      </header>
    </>
  );
}
export default Header;
