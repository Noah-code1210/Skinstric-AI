import React from "react";
import arrowButtons from "../assets/LandingButton.png"

function Landing() {
  return (
    <>
      <div id="landing">
        <div className="landing__container">
          <div className="landing__info">
            <div className="triangle__left"></div>
            <div className="discoverAI__wrapper">
              <img src={arrowButtons} alt="" className="left__arrow--img" />
              <h2 className="discoverAI__title">Discover A.I.</h2>
            </div>
            <h1 className="landing__title">
              Sophisticated
              <br />
              skincare
            </h1>
            <div className="triangle__right"></div>
            <div className="take-test__wrapper">
              <h2 className="take-test__title">Take Test</h2>
              <img src={arrowButtons} alt="" className="right__arrow--img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
