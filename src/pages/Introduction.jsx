import React, { useEffect, useState } from "react";
import NavIntro from "../components/NavIntro";
import BackArrowButton from "../assets/LandingButton.png";
import { Link, useNavigate } from "react-router-dom";
import SpinningCircles from "../components/UI/SpinningCircles";
import axios from "axios";

function Introduction() {
  const [showProceed, setShowProceed] = useState(false);
  const navigate = useNavigate();

  function navIntoCity() {
    navigate("/city");
  }

  return (
    <>
      <NavIntro />
      <div id="section">
        <div className="container intro__container">
          <h2 className="section__title">To start analysis</h2>
          <div className="intro__info">
            <SpinningCircles />
            <div className="name__input">
              <div className="input__wrapper">
                <h3 className="input__title">Click to type</h3>
                <input
                  type="text"
                  placeholder="Introduce Yourself"
                  className="input__bar"
                  onChange={(event) => setShowProceed(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      navIntoCity();
                    }
                  }}
                />
              </div>
            </div>
          </div>
          <Link to="/">
            <div className="back__btn--wrapper">
              <img src={BackArrowButton} alt="" className="back__arrow--img" />
              <div className="back__arrow--title">Back</div>
            </div>
          </Link>
          <Link to="/city">
            {showProceed && (
              <div className="proceed__btn--wrapper">
                <div className="proceed__arrow--title">Proceed</div>
                <img
                  src={BackArrowButton}
                  alt=""
                  className="proceed__arrow--img"
                />
              </div>
            )}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Introduction;
