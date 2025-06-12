import React, { useEffect, useState } from "react";
import NavIntro from "../components/NavIntro";
import SpinningCircles from "../components/UI/SpinningCircles";
import { Link, useNavigate } from "react-router-dom";
import BackArrowButton from "../assets/LandingButton.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function City() {
  const [showProceed, setShowProceed] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [showInput, setShowInput] = useState(true);

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
              <>
                {success && (
                  <div className="success__state">
                    <h2 className="success__state--title">Thank you!</h2>
                    <p className="success__state--para">
                      Your name and location have been added
                    </p>
                  </div>
                )}
                { showInput && <div className="input__wrapper">
                  <h3 className="input__title">Click to type</h3>
                  <input
                    type="text"
                    placeholder="Your City Name"
                    className="input__bar"
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        setLoading(true);
                        async function fetchLocation() {
                          const response = await fetch(
                            "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne",
                            {
                              method: "POST",
                              headers: {
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify({
                                name: "Your Name",
                                location: "Your Location",
                              }),
                            }
                          );
                          const data = await response.json();
                          console.log(data);
                          setTimeout(() => {
                            setLoading(false);
                            setShowInput(false);
                            setSuccess(true);
                            setShowProceed(true);
                          }, 3000);
                        }
                        fetchLocation();
                      }
                    }}
                  />
                </div>}
              </>
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
              <div className="proceed__btn--wrapper" onClick={navInto}>
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
