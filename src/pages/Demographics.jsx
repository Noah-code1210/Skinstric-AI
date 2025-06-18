import React, { useEffect, useState } from "react";
import NavAnalysis from "../components/NavAnalysis";
import { Link } from "react-router-dom";
import BackArrowButton from "../assets/LandingButton.png";
import CircularProgressBar from "../components/UI/CircularProgressBar";

function Demographics({ value }) {
  const [analysisResult, setAnalysisResults] = useState(null);
  const [activeSection, setActiveSection] = useState("race");

  useEffect(() => {
    const storedResult = localStorage.getItem("analysisResults");
    if (storedResult) {
      try {
        const parsedResult = JSON.parse(storedResult);
        parsedResult.data && setAnalysisResults(parsedResult.data);
      } catch (error) {
        console.error("Error parsing analysis result:", error);
      }
    }
  }, []);

  const getHighestConfidence = (category) => {
    if (!analysisResult) return [["", 0]];
    return Object.entries(analysisResult[category]).reduce((a, b) =>
      a[1] > b[1] ? a : b
    );
  };

  const getSortedConfidenceData = (category) => {
    if (!analysisResult || !analysisResult[category]) return [];
    return Object.entries(analysisResult[category]).sort((a, b) => b[1] - a[1]);
  };

  return (
    <>
      <NavAnalysis />
      <div id="section">
        <div className="container">
          <div className="demo__nav">
            <div className="section__title analysis__section--title">
              A.I. Analysis
            </div>
            <h1 className="section__large--title">Demographics</h1>
            <h2 className="section__sub-title">Predicted Race & Age</h2>
          </div>
          <div className="demo__info">
            <div className="category__boxes">
              {["race", "age", "gender"].map((section) => (
                <div
                  key={section}
                  className={`category__titles ${
                    activeSection === section
                      ? "bg-black text-white"
                      : "bg-white"
                  }`}
                  onClick={() => setActiveSection(section)}
                >
                  <h4 className="specific__category--titles">
                    {section.toUpperCase()}
                  </h4>
                  {analysisResult ? (
                    <p className="text-xs">
                      {section === "age"
                        ? getHighestConfidence(section)[0]
                        : getHighestConfidence(section)[0].toUpperCase()}
                    </p>
                  ) : (
                    <p className="text-xs">Loading...</p>
                  )}
                </div>
              ))}
            </div>
            <div className="analysis__box race__analysis--box">
              <h2 className="analysis__box--title">East Asian</h2>
              <div className="progress__bar">
                <CircularProgressBar
                  percentage={(
                    getHighestConfidence(activeSection)[1] * 100
                  ).toFixed(0)}
                  size="large"
                  color="black"
                />
              </div>
            </div>
            <div className="races__box">
              <div className="races__titles">
                <h2 className="main__title">Race</h2>
                <h2 className="secondary__title">A.I. Confidence</h2>
              </div>
              {analysisResult ? (
                  getSortedConfidenceData(activeSection).map(([key, value]) => (
                    <div key={key} className="race__percentage--slots">
                      <div className="black__diamond"></div>
                      <span className="w-20 truncate">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </span>
                      <div className="percentage__wrapping">
                        <div
                          className="percentages__styling"
                          style={{ width: `${(value * 100).toFixed(2)}%` }}
                        />
                      </div>
                      <span className="percentages">
                        {(value * 100).toFixed(1)}%
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-sm">Loading...</p>
                )}
            </div>
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
