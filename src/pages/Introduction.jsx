import React from "react";
import NavIntro from "../components/NavIntro";
import BackArrowButton from "../assets/LandingButton.png";
import { Link } from "react-router-dom";
import Home from "./Home";

function Introduction() {
  return (
    <>
      <NavIntro />
      <div id="intro">
        <div className="container">
          <div className="intro__info">
            <div className="intro__title--wrapper">
              <h2 className="intro__title">To start analysis</h2>
            </div>
            <div className="square__wrapper">
              <div className="outer-square">
                <div className="middle-square">
                  <div className="inner-square"></div>
                </div>
              </div>
              <div className="input__wrapper">
                <h3 className="input__title">Click to type</h3>
                <input
                  type="text"
                  placeholder="Introduce Yourself"
                  className="input__bar"
                />
              </div>
            </div>
            <Link to="/">
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

export default Introduction;
