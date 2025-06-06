import React from "react";
import NavIntro from "../components/NavIntro";
import SmallSpinningCircles from "../components/UI/SmallSpinningCircles";
import LeftCircleImage from "../assets/LeftCircleImage.png";
import RightCircleSpinning from "../assets/RightCircleSpinning.png";
import { Link } from "react-router-dom";
import BackArrowButton from "../assets/LandingButton.png";
import Line from "../assets/Line.png"

function Picture() {
  return (
    <>
      <NavIntro />
      <div id="section">
        <div className="container">
          <div className="section__title">To start analysis</div>
          <div className="left__spinning--circle">
            <SmallSpinningCircles />
            <div className="left__info">
              <img src={LeftCircleImage} alt="" className="left__circle--img" />
              <img src={Line} alt="" className="line-left" />
              <h2 className="left__circle--title">
                Allow A.I to scan your face
              </h2>
            </div>
          </div>
          <div className="right__spinning--circle">
            <SmallSpinningCircles />
            <div className="right__info">
              <h2 className="right__circle--title">
                Allow A.I to access gallery
              </h2>
              <img src={Line} alt="" className="line-right" />
              <img
                src={RightCircleSpinning}
                alt=""
                className="right__circle--img"
              />
            </div>
          </div>
          <Link to="/introduction">
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

export default Picture;
