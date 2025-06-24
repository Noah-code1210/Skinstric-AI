import React, { useEffect, useState, useMemo } from "react";
import NavAnalysis from "../components/NavAnalysis";
import { Link } from "react-router-dom";
import BackArrowButton from "../assets/LandingButton.png";
import CircularProgressBar from "../components/UI/CircularProgressBar";

function Demographics() {
  const [analysisResult, setAnalysisResults] = useState(null);
  const [activeSection, setActiveSection] = useState("race"); // Default to 'race'
  // New state to track the selected item within the active section
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  useEffect(() => {
    const storedResult = localStorage.getItem("analysisResults");
    if (storedResult) {
      try {
        const parsedResult = JSON.parse(storedResult);
        if (parsedResult.data) {
          setAnalysisResults(parsedResult.data);
          // Set initial activeSection based on available data, or default
          if (parsedResult.data.race) {
            setActiveSection("race");
            // Set initial selectedSubCategory for 'race' to its highest confidence item
            const highestRace = getHighestConfidence(
              "race",
              parsedResult.data
            )[0];
            setSelectedSubCategory(highestRace);
          } else if (parsedResult.data.age) {
            setActiveSection("age");
            const highestAge = getHighestConfidence(
              "age",
              parsedResult.data
            )[0];
            setSelectedSubCategory(highestAge);
          } else if (parsedResult.data.gender) {
            setActiveSection("gender");
            const highestGender = getHighestConfidence(
              "gender",
              parsedResult.data
            )[0];
            setSelectedSubCategory(highestGender);
          }
        }
      } catch (error) {
        console.error("Error parsing analysis result:", error);
      }
    }
  }, []);

  // Modified getHighestConfidence to optionally take data directly for initial setting
  const getHighestConfidence = (category, data = analysisResult) => {
    if (!data || !data[category]) {
      return ["", 0]; // Default empty array with 0 confidence
    }
    const entries = Object.entries(data[category]);
    if (entries.length === 0) {
      return ["", 0]; // Handle empty object for category
    }
    return entries.reduce((a, b) => (a[1] > b[1] ? a : b));
  };

  const getSortedConfidenceData = (category) => {
    if (!analysisResult || !analysisResult[category]) {
      return [];
    }
    return Object.entries(analysisResult[category]).sort((a, b) => b[1] - a[1]);
  };

  // Function to get the data for the currently displayed item in the main progress bar
  const getCurrentDisplayData = () => {
    if (!analysisResult || !activeSection) {
      return { name: "N/A", percentage: 0 };
    }

    // Prioritize selectedSubCategory if it exists and is valid within the activeSection
    if (
      selectedSubCategory &&
      analysisResult[activeSection] &&
      analysisResult[activeSection][selectedSubCategory] !== undefined
    ) {
      const value = analysisResult[activeSection][selectedSubCategory];
      return { name: selectedSubCategory, percentage: value };
    } else {
      // Fallback to highest confidence if no specific sub-category is selected
      // or if the selected one is not found for the active section
      const [name, value] = getHighestConfidence(activeSection);
      return { name, percentage: value };
    }
  };

  // Helper to handle category clicks (Race, Age, Gender boxes)
  const handleCategoryClick = (category) => {
    setActiveSection(category);
    // When the category changes, reset selectedSubCategory to the highest confidence item
    if (analysisResult && analysisResult[category]) {
      const highest = getHighestConfidence(category)[0];
      setSelectedSubCategory(highest);
    } else {
      setSelectedSubCategory(null);
    }
  };

  const currentDisplay = getCurrentDisplayData(); // Call it here to get the latest data

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
                  onClick={() => handleCategoryClick(section)}
                >
                  <h4 className="specific__category--titles">
                    {section.toUpperCase()}
                  </h4>
                  {/* Display highest confidence for the top boxes */}
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
              <h2 className="analysis__box--title">
                {/* Use currentDisplay.name and handle formatting (e.g., for Age numbers) */}
                {currentDisplay.name
                  ? activeSection === "age"
                    ? currentDisplay.name // Age might be a number/range like "70+"
                    : currentDisplay.name.toUpperCase()
                  : "N/A"}
              </h2>
              <div className="progress__bar">
                {analysisResult ? (
                  <CircularProgressBar
                    percentage={(currentDisplay.percentage * 100).toFixed(0)}
                    size="large"
                    color="black"
                  />
                ) : (
                  <p className="text-sm">Loading...</p>
                )}
              </div>
            </div>
            <div className="races__box">
              <div className="races__titles">
                <h2 className="main__title">
                  {activeSection.charAt(0).toUpperCase() +
                    activeSection.slice(1)}
                </h2>
                <h2 className="secondary__title">A.I. Confidence</h2>
              </div>
              {analysisResult ? (
                getSortedConfidenceData(activeSection).map(([key, value]) => (
                  <div
                    key={key}
                    className={`race__percentage--slots ${
                      selectedSubCategory === key
                        ? "bg-black text-white"
                        : "bg-white"
                    }`}
                    onClick={() => setSelectedSubCategory(key)} // This updates selectedSubCategory
                  >
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
            <div className="back__btn--wrapper demographics__btn--wrapper">
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
