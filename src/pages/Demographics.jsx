import React from 'react'
import NavAnalysis from '../components/NavAnalysis'

function Demographics() {
  return (
    <>
    <NavAnalysis />
      <div id="section">
        <div className="container">
          <div className="section__title analysis__section--title">
            A.I. Analysis
          </div>
          <div className="section__large--title">
            Demographics
          </div>
          <div className="section__sub-title">
            Predicted Race & Age
          </div>
        </div>
      </div>
    </>
  )
}

export default Demographics
