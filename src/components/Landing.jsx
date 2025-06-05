import React, { useState } from "react";
import arrowButtons from "../assets/LandingButton.png";
import { Link, useNavigate } from "react-router-dom";
import Introduction from "../pages/Introduction";

function Landing() {
  const [hideDiscover, setHideDiscover] = useState(false);
  const [hideTest, setHideTest] = useState(false);
  const navigate = useNavigate()
  
  function navToIntro() {
    navigate("/introduction")
  }

  return (
    <>
      <div id="landing">
        <div className="landing__container">
          <div className="landing__info">
            <div
              className={`triangle__left ${hideDiscover ? "hide" : ""}`}
            ></div>
            <div
              className={`discoverAI__wrapper ${hideDiscover ? "hide" : ""}`}
              onMouseEnter={() => setHideTest(true)}
              onMouseLeave={() => setHideTest(false)}
            >
              <img src={arrowButtons} alt="" className="left__arrow--img" />
              <h2 className="discoverAI__title">Discover A.I.</h2>
            </div>
            <div className="landing__title--wrapper">
              <h1
                className={`landing__title--top ${
                  hideDiscover ? "right" : ""
                } ${hideTest ? "left" : ""}`}
              >
                Sophisticated
              </h1>
              <h1
                className={`landing__title--bottom ${
                  hideDiscover ? "right" : ""
                } ${hideTest ? "left" : ""}`}
              >
                skincare
              </h1>
              <div
                className={`triangle__right ${hideTest ? "hide" : ""}`}
              ></div>
            </div>
              <div
                className={`take-test__wrapper ${hideTest ? "hide" : ""}`}
                onMouseEnter={() => setHideDiscover(true)}
                onMouseLeave={() => setHideDiscover(false)}
                onClick={() => navToIntro()}>
                <h2 className="take-test__title">Take Test</h2>
                <img src={arrowButtons} alt="" className="right__arrow--img" />
              </div>
            <p className="company__description">
              Skinstric developed an A.I. That creates a highly-personalized
              routine tailored to what your skin needs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
