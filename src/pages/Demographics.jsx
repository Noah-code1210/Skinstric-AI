import React from "react";
import NavAnalysis from "../components/NavAnalysis";

function Demographics() {
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
              <div className="race__box" tabIndex={1}>
                <h2 className="dynamic__race--title">
                  East Asian
                </h2>
                <h2 className="race__title">
                  Race
                </h2>
              </div>
              <div className="age__box" tabIndex={2}>
                <h2 className="dynamic__age--title">
                  20-29
                </h2>
                <h2 className="age__title">
                  Age
                </h2>
              </div>
              <div className="gender__box" tabIndex={3}>
                <h2 className="dynamic__gender--title">
                  Male
                </h2>
                <h2 className="gender__title">
                  Sex
                </h2>
              </div>
            </div>
            <div className="analysis__box">

            </div>
            <div className="races__box">

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Demographics;
