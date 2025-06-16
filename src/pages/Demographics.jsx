import React, { useState } from "react";
import NavAnalysis from "../components/NavAnalysis";
import { Link, useNavigate } from "react-router-dom";
import BackArrowButton from "../assets/LandingButton.png";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Demographics({ percentage }) {
  const [showAge, setShowAge] = useState(false);
  const [showRace, setShowRace] = useState(true);
  const [showSex, setShowSex] = useState(false);
  const [showRacePercentage, setShowRacePercentage] = useState(true);
  const [showAgePercentage, setShowAgePercentage] = useState(false);
  const [showSexPrecentage, setShowSexPrecentage] = useState(false);
  const [showEastAsian, setShowEastAsian] = useState(false);
  const [showWhite, setShowWhite] = useState(false);
  const [showBlack, setShowBlack] = useState(false);
  const [showSouthAsian, setShowSouthAsian] = useState(false);
  const [showLatinoHispanic, setShowLatinoHispanic] = useState(false);
  const [showSouthEastAsian, setShowSouthEastAsian] = useState(false);
  const [showMiddleEastern, setShowMiddleEastern] = useState(false);

  function resetCategory() {
    setShowRace(false);
    setShowAge(false);
    setShowSex(false);
    setShowAgePercentage(false);
    setShowRacePercentage(false);
    setShowSexPrecentage(false);
    resetSpecificRace(true)
  }

  function handleRaceCLick() {
    resetCategory(true);
    setShowRace(true);
    setShowRacePercentage(true)
  }

  function handleAgeCLick() {
    resetCategory(true);
    setShowAge(true);
    setShowAgePercentage(true)
  }

  function handleSexClick() {
    resetCategory(true)
    setShowSex(true)
    setShowSexPrecentage(true)
  }

  function resetSpecificRace() {
    setShowEastAsian(false);
    setShowWhite(false);
    setShowRace(false);
    setShowBlack(false)
    setShowSouthAsian(false)
    setShowLatinoHispanic(false)
    setShowSouthEastAsian(false)
    setShowMiddleEastern(false)
  }

  function handleEastAsianClick() {
    resetSpecificRace(true);
    setShowEastAsian(true);
  }

  function handleWhiteClick() {
    resetSpecificRace(true);
    setShowWhite(true);
  }

  function handleBlackClick() {
    resetSpecificRace(true)
    setShowBlack(true)
  }

  function handleSouthAsianClick() {
    resetSpecificRace(true)
    setShowSouthAsian(true)
  }

  function handleLatinoHispanicClick() {
    resetSpecificRace(true)
    setShowLatinoHispanic(true)
  }

  function handleSouthEastAsianClick() {
    resetSpecificRace(true)
    setShowSouthEastAsian(true)
  }

  function handleMiddleEasternClick() {
    resetSpecificRace(true)
    setShowMiddleEastern(true)
  }

  return (
    <>
      <NavAnalysis />
      <div id="section">
        <div className="container">
          <div className="demo__nav">
            <div className="section__title analysis__section--title">
              A.I. Analysis
            </div>
            <div className="section__large--title">Demographics</div>
            <div className="section__sub-title">Predicted Race & Age</div>
          </div>
          <div className="demo__info">
            <div className="category__boxes">
              <div className="race__box" tabIndex={1} onClick={handleRaceCLick}>
                <h2 className="dynamic__race--title">East Asian</h2>
                <h2 className="race__title">Race</h2>
              </div>
              <div className="age__box" tabIndex={2} onClick={handleAgeCLick}>
                <h2 className="dynamic__age--title">20-29</h2>
                <h2 className="age__title">Age</h2>
              </div>
              <div
                className="gender__box"
                tabIndex={3}
                onClick={handleSexClick}
              >
                <h2 className="dynamic__gender--title">Male</h2>
                <h2 className="gender__title">Sex</h2>
              </div>
            </div>
            {showRace && (
              <div className="analysis__box race__analysis--box">
                <h2 className="analysis__box--title">East Asian</h2>
                <div className="progress__bar">
                  <CircularProgressbar
                    value={percentage}
                    text={`96%`}
                    strokeWidth={1}
                    styles={buildStyles({
                      textSize: "12px",
                      textColor: "black",
                      pathColor: "black",
                    })}
                  />
                </div>
              </div>
            )}
            {showEastAsian && (
              <div className="analysis__box race__analysis--box">
                <h2 className="analysis__box--title">East Asian</h2>
                <div className="progress__bar">
                  <CircularProgressbar
                    value={percentage}
                    text={`96%`}
                    strokeWidth={1}
                    styles={buildStyles({
                      textSize: "12px",
                      textColor: "black",
                      pathColor: "black",
                    })}
                  />
                </div>
              </div>
            )}
            {showWhite && (
              <div className="analysis__box race__analysis--box">
                <h2 className="analysis__box--title">White</h2>
                <div className="progress__bar">
                  <CircularProgressbar
                    value={percentage}
                    text={`6%`}
                    strokeWidth={1}
                    styles={buildStyles({
                      textSize: "12px",
                      textColor: "black",
                      pathColor: "black",
                    })}
                  />
                </div>
              </div>
            )}
            {showBlack && (
              <div className="analysis__box race__analysis--box">
                <h2 className="analysis__box--title">Black</h2>
                <div className="progress__bar">
                  <CircularProgressbar
                    value={percentage}
                    text={`3%`}
                    strokeWidth={1}
                    styles={buildStyles({
                      textSize: "12px",
                      textColor: "black",
                      pathColor: "black",
                    })}
                  />
                </div>
              </div>
            )}
            {showSouthAsian && (
              <div className="analysis__box race__analysis--box">
                <h2 className="analysis__box--title">South Asian</h2>
                <div className="progress__bar">
                  <CircularProgressbar
                    value={percentage}
                    text={`2%`}
                    strokeWidth={1}
                    styles={buildStyles({
                      textSize: "12px",
                      textColor: "black",
                      pathColor: "black",
                    })}
                  />
                </div>
              </div>
            )}
            {showLatinoHispanic && (
              <div className="analysis__box race__analysis--box">
                <h2 className="analysis__box--title">Latino Hispanic</h2>
                <div className="progress__bar">
                  <CircularProgressbar
                    value={percentage}
                    text={`0%`}
                    strokeWidth={1}
                    styles={buildStyles({
                      textSize: "12px",
                      textColor: "black",
                      pathColor: "black",
                    })}
                  />
                </div>
              </div>
            )}
            {showSouthEastAsian && (
              <div className="analysis__box race__analysis--box">
                <h2 className="analysis__box--title">South East Asian</h2>
                <div className="progress__bar">
                  <CircularProgressbar
                    value={percentage}
                    text={`0%`}
                    strokeWidth={1}
                    styles={buildStyles({
                      textSize: "12px",
                      textColor: "black",
                      pathColor: "black",
                    })}
                  />
                </div>
              </div>
            )}
            {showMiddleEastern && (
              <div className="analysis__box race__analysis--box">
                <h2 className="analysis__box--title">Middle Eastern</h2>
                <div className="progress__bar">
                  <CircularProgressbar
                    value={percentage}
                    text={`0%`}
                    strokeWidth={1}
                    styles={buildStyles({
                      textSize: "12px",
                      textColor: "black",
                      pathColor: "black",
                    })}
                  />
                </div>
              </div>
            )}
            {showAge && (
              <div className="analysis__box age__analysis--box">
                <h2 className="analysis__box--title">20-29 y.o.</h2>
                <div className="progress__bar">
                  <CircularProgressbar
                    value={percentage}
                    text={`54%`}
                    strokeWidth={1}
                    styles={buildStyles({
                      textSize: "12px",
                      textColor: "black",
                      pathColor: "black",
                    })}
                  />
                </div>
              </div>
            )}
            {showSex && (
              <div className="analysis__box sex__analysis--box">
                <h2 className="analysis__box--title gender__box--title">
                  MALE
                </h2>
                <div className="progress__bar">
                  <CircularProgressbar
                    value={percentage}
                    text={`100%`}
                    strokeWidth={1}
                    styles={buildStyles({
                      textSize: "12px",
                      textColor: "black",
                      pathColor: "black",
                    })}
                  />
                </div>
              </div>
            )}
            {showRacePercentage && (
              <div className="races__box">
                <div className="races__titles">
                  <h2 className="main__title">Race</h2>
                  <h2 className="secondary__title">A.I. Confidence</h2>
                </div>
                <div
                  className="race__percentage--slots"
                  onClick={handleEastAsianClick}
                  tabIndex={1}
                >
                  <div className="diamond black__diamond"></div>
                  <div className="race__percentages">
                    <h2 className="race__percentage--title">East Asian</h2>
                    <h2 className="percentages">96%</h2>
                  </div>
                </div>
                <div
                  className="race__percentage--slots"
                  onClick={handleWhiteClick}
                  tabIndex={2}
                >
                  <div className="diamond black__diamond"></div>
                  <div className="race__percentages">
                    <h2 className="race__percentage--title">White</h2>
                    <h2 className="percentages">6%</h2>
                  </div>
                </div>
                <div className="race__percentage--slots" onClick={handleBlackClick} tabIndex={3}>
                  <div className="diamond black__diamond"></div>
                  <div className="race__percentages">
                    <h2 className="race__percentage--title">Black</h2>
                    <h2 className="percentages">3%</h2>
                  </div>
                </div>
                <div className="race__percentage--slots" onClick={handleSouthAsianClick} tabIndex={4}>
                  <div className="diamond black__diamond"></div>
                  <div className="race__percentages">
                    <h2 className="race__percentage--title">South Asian</h2>
                    <h2 className="percentages">2%</h2>
                  </div>
                </div>
                <div className="race__percentage--slots" onClick={handleLatinoHispanicClick} tabIndex={5}>
                  <div className="diamond black__diamond"></div>
                  <div className="race__percentages">
                    <h2 className="race__percentage--title">Latino Hispanic</h2>
                    <h2 className="percentages">0%</h2>
                  </div>
                </div>
                <div className="race__percentage--slots" onClick={handleSouthEastAsianClick} tabIndex={6}>
                  <div className="diamond black__diamond"></div>
                  <div className="race__percentages">
                    <h2 className="race__percentage--title">
                      South East Asian
                    </h2>
                    <h2 className="percentages">0%</h2>
                  </div>
                </div>
                <div className="race__percentage--slots" onClick={handleMiddleEasternClick} tabIndex={7}>
                  <div className="diamond black__diamond"></div>
                  <div className="race__percentages">
                    <h2 className="race__percentage--title">Middle Eastern</h2>
                    <h2 className="percentages">0%</h2>
                  </div>
                </div>
              </div>
            )}
            {showAgePercentage && (
              <div className="races__box ages__box">
                <div className="races__titles">
                  <h2 className="main__title">Age</h2>
                  <h2 className="secondary__title">A.I. Confidence</h2>
                </div>
                <div className="race__percentage--slots" tabIndex={1}>
                  <div className="diamond black__diamond"></div>
                  <div className="race__percentages">
                    <h2 className="age__percentage--titles">0-2</h2>
                    <h2 className="percentages">5%</h2>
                  </div>
                </div>
                <div className="race__percentage--slots" tabIndex={2}>
                  <div className="diamond black__diamond"></div>
                  <div className="race__percentages">
                    <h2 className="age__percentage--titles">3-9</h2>
                    <h2 className="percentages">13%</h2>
                  </div>
                </div>
                <div className="race__percentage--slots" tabIndex={3}>
                  <div className="diamond black__diamond"></div>
                  <div className="race__percentages">
                    <h2 className="age__percentage--titles">10-19</h2>
                    <h2 className="percentages">50%</h2>
                  </div>
                </div>
                <div className="race__percentage--slots" tabIndex={4}>
                  <div className="diamond black__diamond"></div>
                  <div className="race__percentages">
                    <h2 className="age__percentage--titles">20-29</h2>
                    <h2 className="percentages">1%</h2>
                  </div>
                </div>
                <div className="race__percentage--slots" tabIndex={5}>
                  <div className="diamond black__diamond"></div>
                  <div className="race__percentages">
                    <h2 className="age__percentage--titles">30-39</h2>
                    <h2 className="percentages">0%</h2>
                  </div>
                </div>
                <div className="race__percentage--slots" tabIndex={6}>
                  <div className="diamond black__diamond"></div>
                  <div className="race__percentages">
                    <h2 className="age__percentage--titles">40-49</h2>
                    <h2 className="percentages">0%</h2>
                  </div>
                </div>
                <div className="race__percentage--slots" tabIndex={7}>
                  <div className="diamond black__diamond"></div>
                  <div className="race__percentages">
                    <h2 className="age__percentage--titles">50-59</h2>
                    <h2 className="percentages">0%</h2>
                  </div>
                </div>
                <div className="race__percentage--slots" tabIndex={8}>
                  <div className="diamond black__diamond"></div>
                  <div className="race__percentages">
                    <h2 className="age__percentage--titles">60-69</h2>
                    <h2 className="percentages">0%</h2>
                  </div>
                </div>
                <div className="race__percentage--slots" tabIndex={9}>
                  <div className="diamond black__diamond"></div>
                  <div className="race__percentages">
                    <h2 className="age__percentage--titles">70+</h2>
                    <h2 className="percentages">0%</h2>
                  </div>
                </div>
              </div>
            )}
            {showSexPrecentage && (
              <div className="races__box genders__box">
                <div className="races__titles">
                  <h2 className="main__title">Sex</h2>
                  <h2 className="secondary__title">A.I. Confidence</h2>
                </div>
                <div className="race__percentage--slots" tabIndex={1}>
                  <div className="diamond black__diamond"></div>
                  <div className="race__percentages">
                    <h2 className="age__percentage--titles">MALE</h2>
                    <h2 className="percentages">100%</h2>
                  </div>
                </div>
                <div className="race__percentage--slots" tabIndex={2}>
                  <div className="diamond black__diamond"></div>
                  <div className="race__percentages">
                    <h2 className="age__percentage--titles">FEMALE</h2>
                    <h2 className="percentages">0%</h2>
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link to="/analysis">
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

export default Demographics;
