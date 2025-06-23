import React, { useEffect, useRef, useState } from "react";
import NavIntro from "../components/NavIntro";
import SmallSpinningCircles from "../components/UI/SmallSpinningCircles";
import LeftCircleImage from "../assets/LeftCircleImage.png";
import RightCircleSpinning from "../assets/RightCircleSpinning.png";
import { Link, useNavigate } from "react-router-dom";
import BackArrowButton from "../assets/LandingButton.png";
import Line from "../assets/Line.png";

function Picture() {
  const [openMenu, setOpenMenu] = useState(false);
  const [summaryButton, setSummaryButton] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  function runAlert() {
    alert("Your Image has been processed");
  }

  function navToCameraLoading() {
    navigate("/webcamLoading");
  }

  function navToAnalysis() {
    navigate("/analysis");
  }

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
          <div className="spinning__circles">
            <div className="left__spinning--circle">
              <SmallSpinningCircles />
              <div className="left__info">
                <img
                  src={LeftCircleImage}
                  alt=""
                  className="left__circle--img"
                  onClick={() => setOpenMenu(true)}
                />
                <img src={Line} alt="" className="line-left" />
                <h2 className="left__circle--title">
                  Allow A.I to scan your face
                </h2>
              </div>
              {openMenu && (
                <div className="webcam__menu">
                  <div className="menu__box">
                    <h2 className="menu__text">
                      Allow A.I. to access your camera?
                    </h2>
                    <div className="options">
                      <h3
                        className="deny__option"
                        onClick={() => setOpenMenu(false)}
                      >
                        Deny
                      </h3>
                      <h3
                        className="allow__option"
                        onClick={navToCameraLoading}
                      >
                        Allow
                      </h3>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="right__spinning--circle">
              <SmallSpinningCircles />
              <div className="right__info">
                <h2 className="right__circle--title">
                  Allow A.I to access gallery
                </h2>
                <input
                  type="file"
                  ref={inputRef}
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={() =>
                    setTimeout(() => {
                      runAlert();
                      if (runAlert) {
                        async function fetchImage() {
                          const response = await fetch(
                            "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
                            {
                              method: "POST",
                              headers: {
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify({
                                image: "Your Image",
                              }),
                            }
                          );
                          const results = await response.json();
                          localStorage.setItem(
                            "analysisResults",
                            JSON.stringify(results)
                          );
                          console.log(results);
                        }
                        fetchImage();
                      }
                      setSummaryButton(true);
                    }, 1000)
                  }
                />
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
                <img
                  src={BackArrowButton}
                  alt=""
                  className="back__arrow--img"
                />
                <div className="back__arrow--title">Back</div>
              </div>
            </Link>
            {summaryButton && (
              <div className="proceed__btn--wrapper" onClick={navToAnalysis}>
                <div className="proceed__arrow--title">Get Summary</div>
                <img
                  src={BackArrowButton}
                  alt=""
                  className="proceed__arrow--img"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Picture;
