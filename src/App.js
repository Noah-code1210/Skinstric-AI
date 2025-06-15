import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import City from "./pages/City";
import Picture from "./pages/Picture";
import Webcam from "./pages/Webcam";
import Analysis from "./pages/Analysis";
import Demographics from "./pages/Demographics";
import WebcamLoading from "./pages/WebcamLoading";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/city" element={<City />} />
          <Route path="/picture" element={<Picture />} />
          <Route path="/webcam" element={<Webcam />} />
          <Route path="/webcamLoading" element={<WebcamLoading />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/demographics" element={<Demographics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
