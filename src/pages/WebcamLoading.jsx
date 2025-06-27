import React from "react";
import SpinningCircles from "../components/UI/SpinningCircles";
import NavIntro from "../components/NavIntro";
import LeftCircleImage from "../assets/LeftCircleImage.png";
import { useNavigate } from "react-router-dom";

function WebcamLoading() {
  const navigate = useNavigate();

  function navToCamera() {
    setTimeout(() => {
      navigate("/webcam");
    }, 4500);
  }

  return (
    <>
      <NavIntro />
      <div id="section" onLoad={navToCamera}>
        <div className="container">
          <div className="section__title">Webcam Loading...</div>
          <div className="intro__info">
            <SpinningCircles />
            <div className="loading__img--wrapper">
              <img src={LeftCircleImage} alt="" className="loading__img" />
              <h2 className="loading__img--title">Loading Camera...</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WebcamLoading;
