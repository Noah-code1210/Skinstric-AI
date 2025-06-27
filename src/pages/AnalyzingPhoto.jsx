import React from "react";
import { useNavigate } from "react-router-dom";
import NavIntro from "../components/NavIntro";
import SpinningCircles from "../components/UI/SpinningCircles";
import LeftCircleImage from "../assets/LeftCircleImage.png";

function AnalyzingPhoto() {
  const navigate = useNavigate();

  function navToAnalysis() {
    setTimeout(() => {
      alert("Your image has been processed");
      navigate("/analysis");
    }, 3000);
  }

  return (
    <>
      <NavIntro />
      <div id="section" onLoad={navToAnalysis}>
        <div className="container">
          <div className="section__title">Analyzing Photo...</div>
          <div className="intro__info">
            <SpinningCircles />
            <div className="loading__img--wrapper">
              <img src={LeftCircleImage} alt="" className="loading__img" />
              <h2 className="loading__img--title">Analyzing Photo...</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AnalyzingPhoto;
