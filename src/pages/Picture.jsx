import React, { useEffect, useRef } from "react";
import NavIntro from "../components/NavIntro";
import SmallSpinningCircles from "../components/UI/SmallSpinningCircles";
import LeftCircleImage from "../assets/LeftCircleImage.png";
import RightCircleSpinning from "../assets/RightCircleSpinning.png";
import { Link } from "react-router-dom";
import BackArrowButton from "../assets/LandingButton.png";
import Line from "../assets/Line.png";

function Picture() {
  const inputRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const getWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing webcam: ", error);
      }
    };

    getWebcam();

    return () => {
      if (videoRef.current) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const onButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

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
              <input type="file" ref={inputRef} style={{ display: "none" }} />
              <img src={Line} alt="" className="line-right" />
              <button
                className="right__circle--img--button"
                onClick={onButtonClick}
              >
                <img
                  src={RightCircleSpinning}
                  alt=""
                  className="right__circle--img"
                />
              </button>
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
