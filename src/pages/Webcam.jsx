import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import WhiteBackArrowButton from "../assets/WhiteBtn.png";
import NavIntro from "../components/NavIntro";
import TakePictureButton from "../assets/TakePicture.png";

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
      <div className="webcam">
        <div className="camera">
          <video
            ref={videoRef}
            autoPlay
            className="video"
            style={{ width: "100%" }}
          />
        </div>
        <div className="take__picture--wrapper">
          <h2 className="take__picture--title">
            Take Picture
          </h2>
          <img src={TakePictureButton} alt="" className="take__picture--img" />
        </div>
        <h2 className="tips__title">
          To get better results, make sure to have:
        </h2>
        <div className="picture__tips">
          <div className="expression__tip">
            <div className="diamond"></div>
            <h2 className="expression__title">Neutral expression</h2>
          </div>
          <div className="pose__tip">
            <div className="diamond"></div>
            <h2 className="pose__title">Frontal Pose</h2>
          </div>
          <div className="lighting__tip">
            <div className="diamond"></div>
            <h2 className="lighting__title">Adequate Lighting</h2>
          </div>
        </div>
        <Link to="/picture">
          <div className="back__btn--wrapper webcam__back--btn">
            <img
              src={WhiteBackArrowButton}
              alt=""
              className="back__arrow--img webcam__back--btn--img"
            />
            <div className="back__arrow--title webcam__back--btn--title">
              Back
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Webcam;
