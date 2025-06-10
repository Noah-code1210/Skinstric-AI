import React from "react";
import NavAnalysis from "../components/NavAnalysis";
import StationaryCircles from "../components/UI/StationaryCircles";
import BackArrowButton from "../assets/LandingButton.png";
import { Link, useNavigate } from "react-router-dom";

function Analysis() {
  const navigate = useNavigate()

  function navToDemo() {
    navigate("/demographics")
  }


  return (
    <>
      <NavAnalysis />
      <div id="section">
        <div className="container">
          <div className="section__title analysis__section--title">
            A.I. Analysis
          </div>
          <div className="section__sub-title">
            A.I. has estimated the following.
            <br />
            Fix estimated information if needed.
          </div>
          <StationaryCircles />
          <div className="box__wrapper">
              <div className="demographic__box" onClick={navToDemo}>
                <h2 className="demographic__title">Demographics</h2>
              </div>
            <div className="skin-type__box">
              <h2 className="skin-type__title">Skin Type Details</h2>
            </div>
            <div className="weather__box">
              <h2 className="weather__title">Weather</h2>
            </div>
            <div className="cosmetic__concerns--box">
              <h2 className="cosmetic__title">Cosmetic Concerns</h2>
            </div>
          </div>
          <Link to="/picture">
            <div className="back__btn--wrapper">
              <img src={BackArrowButton} alt="" className="back__arrow--img" />
              <div className="back__arrow--title">Back</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Analysis;
