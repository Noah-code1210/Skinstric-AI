import React from "react";
import NavIntro from "../components/NavIntro";
import SpinningCircles from "../components/UI/SpinningCircles";
import { Link } from "react-router-dom";
import BackArrowButton from "../assets/LandingButton.png";


function City() {
  return (
    <>
      <NavIntro />
      <div id="city">
        <div className="container">
          <div className="city__info">
            <h2 className="city__title">To start analysis</h2>
            <SpinningCircles />
            <div className="input__wrapper">
              <h3 className="input__title">Click to type</h3>
              <input
                type="text"
                placeholder="Your City Name"
                className="input__bar"
              />
            </div>
            <Link to="/introduction">
              <div className="back__btn--wrapper">
                <img
                  src={BackArrowButton}
                  alt=""
                  className="back__arrow--img"
                />
                <div className="back__arrow--title">Back</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default City;
