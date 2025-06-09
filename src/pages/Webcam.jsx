import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import BackArrowButton from "../assets/LandingButton.png";
import NavIntro from "../components/NavIntro";


function Webcam() {
  const videoRef = useRef(null);

  useEffect(() => {
    const getWebcam = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing webcam: ", error);
      }
    };

    getWebcam();

    return () => {
      if (videoRef.current) {
        videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <>
    <NavIntro />
    
      <div className="webcam">
      <Link to="/picture">
            <div className="back__btn--wrapper webcam__back--btn">
              <img src={BackArrowButton} alt="" className="back__arrow--img webcam__back--btn--img" />
              <div className="back__arrow--title webcam__back--btn--title">Back</div>
            </div>
          </Link>
        <video ref={videoRef} autoPlay className="video" style={{ width: "100%" }} />
      </div>
    </>
  );
}

export default Webcam;
