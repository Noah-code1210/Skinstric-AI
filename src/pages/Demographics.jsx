import React, { useEffect, useState } from "react";
import NavAnalysis from "../components/NavAnalysis";
import { Link, useNavigate } from "react-router-dom";
import BackArrowButton from "../assets/LandingButton.png";
import CircularProgressBar from "../components/UI/CircularProgressBar";
import axios from "axios";

function Demographics() {
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
  const [show02, setShow02] = useState(false);
  const [show39, setShow39] = useState(false);
  const [show1019, setShow1019] = useState(false);
  const [show2029, setShow2029] = useState(false);
  const [show3039, setShow3039] = useState(false);
  const [show4049, setShow4049] = useState(false);
  const [show5059, setShow5059] = useState(false);
  const [show6069, setShow6069] = useState(false);
  const [show70, setShow70] = useState(false);
  const [showMale, setShowMale] = useState(false);
  const [showFemale, setShowFemale] = useState(false);

  function resetCategory() {
    setShowRace(false);
    setShowAge(false);
    setShowSex(false);
    setShowAgePercentage(false);
    setShowRacePercentage(false);
    setShowSexPrecentage(false);
    resetSpecificRace(true);
    resetSpecificGender(true);
  }

  function handleRaceCLick() {
    resetCategory(true);
    setShowRace(true);
    setShowRacePercentage(true);
    resetSpecificAge(true);
  }

  function handleAgeCLick() {
    resetCategory(true);
    resetSpecificAge(true);
    setShowAge(true);
    setShowAgePercentage(true);
  }

  function handleSexClick() {
    resetCategory(true);
    setShowSex(true);
    setShowSexPrecentage(true);
    resetSpecificAge(true);
  }

  function resetSpecificRace() {
    setShowEastAsian(false);
    setShowWhite(false);
    setShowRace(false);
    setShowBlack(false);
    setShowSouthAsian(false);
    setShowLatinoHispanic(false);
    setShowSouthEastAsian(false);
    setShowMiddleEastern(false);
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
    resetSpecificRace(true);
    setShowBlack(true);
  }

  function handleSouthAsianClick() {
    resetSpecificRace(true);
    setShowSouthAsian(true);
  }

  function handleLatinoHispanicClick() {
    resetSpecificRace(true);
    setShowLatinoHispanic(true);
  }

  function handleSouthEastAsianClick() {
    resetSpecificRace(true);
    setShowSouthEastAsian(true);
  }

  function handleMiddleEasternClick() {
    resetSpecificRace(true);
    setShowMiddleEastern(true);
  }

  function resetSpecificAge() {
    setShowAge(false);
    setShow02(false);
    setShow1019(false);
    setShow2029(false);
    setShow3039(false);
    setShow4049(false);
    setShow5059(false);
    setShow6069(false);
    setShow70(false);
  }

  function handle02Click() {
    resetSpecificAge(true);
    setShow02(true);
  }

  function handle39click() {
    resetSpecificAge(true);
    setShow39(true);
  }

  function handle1019click() {
    resetSpecificAge(true);
    setShow1019(true);
  }

  function handle2029click() {
    resetSpecificAge(true);
    setShow2029(true);
  }

  function handle3039click() {
    resetSpecificAge(true);
    setShow3039(true);
  }

  function handle4049click() {
    resetSpecificAge(true);
    setShow4049(true);
  }

  function handle5059click() {
    resetSpecificAge(true);
    setShow5059(true);
  }

  function handle6069click() {
    resetSpecificAge(true);
    setShow6069(true);
  }

  function handle70click() {
    resetSpecificAge(true);
    setShow70(true);
  }

  function resetSpecificGender() {
    setShowSex(false);
    setShowMale(false);
    setShowFemale(false);
  }

  function handleMaleClick() {
    resetSpecificGender(true);
    setShowMale(true);
  }

  function handleFemaleClick() {
    resetSpecificGender(true);
    setShowFemale(true);
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
                  <CircularProgressBar
                    percentage={96}
                    size="large"
                    color="black"
                  />
                </div>
              </div>
            )}
            {showEastAsian && (
              <div className="analysis__box race__analysis--box">
                <h2 className="analysis__box--title">East Asian</h2>
                <div className="progress__bar">
                  <CircularProgressBar
                    percentage={96}
                    size="large"
                    color="black"
                  />
                </div>
              </div>
            )}
            {showWhite && (
              <div className="analysis__box race__analysis--box">
                <h2 className="analysis__box--title">White</h2>
                <div className="progress__bar">
                  <CircularProgressBar
                    percentage={6}
                    size="large"
                    color="black"
                  />
                </div>
              </div>
            )}
            {showBlack && (
              <div className="analysis__box race__analysis--box">
                <h2 className="analysis__box--title">Black</h2>
                <div className="progress__bar">
                  <CircularProgressBar
                    percentage={3}
                    size="large"
                    color="black"
                  />
                </div>
              </div>
            )}
            {showSouthAsian && (
              <div className="analysis__box race__analysis--box">
                <h2 className="analysis__box--title">South Asian</h2>
                <div className="progress__bar">
                  <CircularProgressBar
                    percentage={2}
                    size="large"
                    color="black"
                  />
                </div>
              </div>
            )}
            {showLatinoHispanic && (
              <div className="analysis__box race__analysis--box">
                <h2 className="analysis__box--title">Latino Hispanic</h2>
                <div className="progress__bar">
                  <CircularProgressBar
                    percentage={0}
                    size="large"
                    color="black"
                  />
                </div>
              </div>
            )}
            {showSouthEastAsian && (
              <div className="analysis__box race__analysis--box">
                <h2 className="analysis__box--title">South East Asian</h2>
                <div className="progress__bar">
                  <CircularProgressBar
                    percentage={0}
                    size="large"
                    color="black"
                  />
                </div>
              </div>
            )}
            {showMiddleEastern && (
              <div className="analysis__box race__analysis--box">
                <h2 className="analysis__box--title">Middle Eastern</h2>
                <div className="progress__bar">
                  <CircularProgressBar
                    percentage={0}
                    size="large"
                    color="black"
                  />
                </div>
              </div>
            )}
            {showAge && (
              <div className="analysis__box age__analysis--box">
                <h2 className="analysis__box--title">20-29 y.o.</h2>
                <div className="progress__bar">
                  <CircularProgressBar
                    percentage={1}
                    size="large"
                    color="black"
                  />
                </div>
              </div>
            )}
            {show02 && (
              <div className="analysis__box age__analysis--box">
                <h2 className="analysis__box--title">0-2 y.o.</h2>
                <div className="progress__bar">
                  <CircularProgressBar
                    percentage={5}
                    size="large"
                    color="black"
                  />
                </div>
              </div>
            )}
            {show39 && (
              <div className="analysis__box age__analysis--box">
                <h2 className="analysis__box--title">3-9 y.o.</h2>
                <div className="progress__bar">
                  <CircularProgressBar
                    percentage={13}
                    size="large"
                    color="black"
                  />
                </div>
              </div>
            )}
            {show1019 && (
              <div className="analysis__box age__analysis--box">
                <h2 className="analysis__box--title">10-19 y.o.</h2>
                <div className="progress__bar">
                  <CircularProgressBar
                    percentage={50}
                    size="large"
                    color="black"
                  />
                </div>
              </div>
            )}
            {show2029 && (
              <div className="analysis__box age__analysis--box">
                <h2 className="analysis__box--title">20-29 y.o.</h2>
                <div className="progress__bar">
                  <CircularProgressBar
                    percentage={1}
                    size="large"
                    color="black"
                  />
                </div>
              </div>
            )}
            {show3039 && (
              <div className="analysis__box age__analysis--box">
                <h2 className="analysis__box--title">30-39 y.o.</h2>
                <div className="progress__bar">
                  <CircularProgressBar
                    percentage={0}
                    size="large"
                    color="black"
                  />
                </div>
              </div>
            )}
            {show4049 && (
              <div className="analysis__box age__analysis--box">
                <h2 className="analysis__box--title">40-49 y.o.</h2>
                <div className="progress__bar">
                  <CircularProgressBar
                    percentage={0}
                    size="large"
                    color="black"
                  />
                </div>
              </div>
            )}
            {show5059 && (
              <div className="analysis__box age__analysis--box">
                <h2 className="analysis__box--title">50-59 y.o.</h2>
                <div className="progress__bar">
                  <CircularProgressBar
                    percentage={0}
                    size="large"
                    color="black"
                  />
                </div>
              </div>
            )}
            {show6069 && (
              <div className="analysis__box age__analysis--box">
                <h2 className="analysis__box--title">60-69 y.o.</h2>
                <div className="progress__bar">
                  <CircularProgressBar
                    percentage={0}
                    size="large"
                    color="black"
                  />
                </div>
              </div>
            )}
            {show70 && (
              <div className="analysis__box age__analysis--box">
                <h2 className="analysis__box--title">70+ y.o.</h2>
                <div className="progress__bar">
                  <CircularProgressBar
                    percentage={0}
                    size="large"
                    color="black"
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
                  <CircularProgressBar
                    percentage={100}
                    size="large"
                    color="black"
                  />
                </div>
              </div>
            )}
            {showMale && (
              <div className="analysis__box sex__analysis--box">
                <h2 className="analysis__box--title gender__box--title">
                  MALE
                </h2>
                <div className="progress__bar">
                  <CircularProgressBar
                    percentage={100}
                    size="large"
                    color="black"
                  />
                </div>
              </div>
            )}
            {showFemale && (
              <div className="analysis__box sex__analysis--box">
                <h2 className="analysis__box--title gender__box--title">
                  FEMALE
                </h2>
                <div className="progress__bar">
                  <CircularProgressBar
                    percentage={0}
                    size="large"
                    color="black"
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
                <div
                  className="race__percentage--slots"
                  onClick={handleBlackClick}
                  tabIndex={3}
                >
                  <div className="diamond black__diamond"></div>
                  <div className="race__percentages">
                    <h2 className="race__percentage--title">Black</h2>
                    <h2 className="percentages">3%</h2>
                  </div>
                </div>
                <div
                  className="race__percentage--slots"
                  onClick={handleSouthAsianClick}
                  tabIndex={4}
                >
                  <div className="diamond black__diamond"></div>
                  <div className="race__percentages">
                    <h2 className="race__percentage--title">South Asian</h2>
                    <h2 className="percentages">2%</h2>
                  </div>
                </div>
                <div
                  className="race__percentage--slots"
                  onClick={handleLatinoHispanicClick}
                  tabIndex={5}
                >
                  <div className="diamond black__diamond"></div>
                  <div className="race__percentages">
                    <h2 className="race__percentage--title">Latino Hispanic</h2>
                    <h2 className="percentages">0%</h2>
                  </div>
                </div>
                <div
                  className="race__percentage--slots"
                  onClick={handleSouthEastAsianClick}
                  tabIndex={6}
                >
                  <div className="diamond black__diamond"></div>
                  <div className="race__percentages">
                    <h2 className="race__percentage--title">
                      South East Asian
                    </h2>
                    <h2 className="percentages">0%</h2>
                  </div>
                </div>
                <div
                  className="race__percentage--slots"
                  onClick={handleMiddleEasternClick}
                  tabIndex={7}
                >
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
                <div
                  className="race__percentage--slots"
                  onClick={handle02Click}
                  tabIndex={1}
                >
                  <div className="diamond black__diamond"></div>
                  <div className="race__percentages">
                    <h2 className="age__percentage--titles">0-2</h2>
                    <h2 className="percentages">5%</h2>
                  </div>
                </div>
                <div
                  className="race__percentage--slots"
                  onClick={handle39click}
                  tabIndex={2}
                >
                  <div className="diamond black__diamond"></div>
                  <div className="race__percentages">
                    <h2 className="age__percentage--titles">3-9</h2>
                    <h2 className="percentages">13%</h2>
                  </div>
                </div>
                <div
                  className="race__percentage--slots"
                  onClick={handle1019click}
                  tabIndex={3}
                >
                  <div className="diamond black__diamond"></div>
                  <div className="race__percentages">
                    <h2 className="age__percentage--titles">10-19</h2>
                    <h2 className="percentages">50%</h2>
                  </div>
                </div>
                <div
                  className="race__percentage--slots"
                  onClick={handle2029click}
                  tabIndex={4}
                >
                  <div className="diamond black__diamond"></div>
                  <div className="race__percentages">
                    <h2 className="age__percentage--titles">20-29</h2>
                    <h2 className="percentages">1%</h2>
                  </div>
                </div>
                <div
                  className="race__percentage--slots"
                  onClick={handle3039click}
                  tabIndex={5}
                >
                  <div className="diamond black__diamond"></div>
                  <div className="race__percentages">
                    <h2 className="age__percentage--titles">30-39</h2>
                    <h2 className="percentages">0%</h2>
                  </div>
                </div>
                <div
                  className="race__percentage--slots"
                  onClick={handle4049click}
                  tabIndex={6}
                >
                  <div className="diamond black__diamond"></div>
                  <div className="race__percentages">
                    <h2 className="age__percentage--titles">40-49</h2>
                    <h2 className="percentages">0%</h2>
                  </div>
                </div>
                <div
                  className="race__percentage--slots"
                  onClick={handle5059click}
                  tabIndex={7}
                >
                  <div className="diamond black__diamond"></div>
                  <div className="race__percentages">
                    <h2 className="age__percentage--titles">50-59</h2>
                    <h2 className="percentages">0%</h2>
                  </div>
                </div>
                <div
                  className="race__percentage--slots"
                  onClick={handle6069click}
                  tabIndex={8}
                >
                  <div className="diamond black__diamond"></div>
                  <div className="race__percentages">
                    <h2 className="age__percentage--titles">60-69</h2>
                    <h2 className="percentages">0%</h2>
                  </div>
                </div>
                <div
                  className="race__percentage--slots"
                  onClick={handle70click}
                  tabIndex={9}
                >
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
                <div
                  className="race__percentage--slots"
                  onClick={handleMaleClick}
                  tabIndex={1}
                >
                  <div className="diamond black__diamond"></div>
                  <div className="race__percentages">
                    <h2 className="age__percentage--titles">MALE</h2>
                    <h2 className="percentages">100%</h2>
                  </div>
                </div>
                <div
                  className="race__percentage--slots"
                  onClick={handleFemaleClick}
                  tabIndex={2}
                >
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
