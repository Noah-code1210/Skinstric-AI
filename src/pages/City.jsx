import React, { useEffect, useState } from "react";
import NavIntro from "../components/NavIntro";
import SpinningCircles from "../components/UI/SpinningCircles";
import { Link, useNavigate } from "react-router-dom";
import BackArrowButton from "../assets/LandingButton.png";

function City() {
  const [showProceed, setShowProceed] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function navInto() {
    navigate("/picture");
  }

  return (
    <>
      <NavIntro />
      <div id="section">
        <div className="container">
          <div className="city__info">
            <h2 className="section__title">To start analysis</h2>
            <SpinningCircles />
            {loading ? (
              <div className="loading__state">
                <div className="loading__state--title">
                  Processing Submission
                </div>
                <div className="loading__dots">
                  <div className="left__dot">.</div>
                  <div className="middle__dot">.</div>
                  <div className="right__dot">.</div>
                </div>
              </div>
            ) : (
              <div className="input__wrapper">
                <h3 className="input__title">Click to type</h3>
                <input
                  type="text"
                  placeholder="Your City Name"
                  className="input__bar"
                  onChange={(event) => setShowProceed(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      setLoading(true);
                      setTimeout(() => {
                        setLoading(false);
                        navInto();
                      }, 3000);
                    }
                  }}
                />
              </div>
            )}
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
          </div>
        </div>
      </div>
    </>
  );
}

export default City;
