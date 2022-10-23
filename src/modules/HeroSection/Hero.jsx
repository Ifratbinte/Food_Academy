import React from "react";

function Hero() {
  return (
    <>
      <section id="hero" class="hero d-flex align-items-center justify-content-center header-bg">
        <div className="container">
          <div className="hero-content">
            <h1 className="title fs-70px">Education Learning Courses</h1>
            <ul className="pair-buttons">
              <li className="btn fa-btn-outline-primary">About Us</li>
              <li className="btn fa-btn-primary ms-2">Courses</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
