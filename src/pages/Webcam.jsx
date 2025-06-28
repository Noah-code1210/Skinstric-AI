import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import WhiteBackArrowButton from "../assets/WhiteBtn.png";
import TakePictureButton from "../assets/TakePicture.png";

function Webcam() {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const [showPicButton, setShowPicButton] = useState(true);
  const [greatShot, setGreatShot] = useState(false);
  const [hasPhoto, setHasPhoto] = useState(false);
  const [showWebcam, setShowWebcam] = useState(true);
  const navigate = useNavigate();

  function navIntoAnalyzingPhoto() {
    navigate("/analyzingPhoto");
  }

  function takePhoto() {
    const width = 1470;
    const height = 1100;

    let video = videoRef.current;
    let photo = photoRef.current;

    photo.width = width;
    photo.height = height;

    let ctx = photo.getContext("2d");
    ctx.drawImage(video, 0, 0, width, height);
    setHasPhoto(true);
    setShowPicButton(false);
    setGreatShot(true);
    setShowWebcam(false);
  }

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
        <>
          {showWebcam && (
            <div className="camera">
              <video
                ref={videoRef}
                autoPlay
                className="video"
                style={{ width: "100%" }}
              />
            </div>
          )}
          {showPicButton && (
            <div className="take__picture--wrapper">
              <h2 className="take__picture--title">Take Picture</h2>
              <img
                src={TakePictureButton}
                alt=""
                className="take__picture--img"
                onClick={() => takePhoto()}
              />
            </div>
          )}
          <div className={`results` + (hasPhoto ? "hasPhoto" : "")}>
            <canvas ref={photoRef} className="photo__results"></canvas>
            {greatShot && (
              <div className="results__box">
                <h2 className="results__question">Use This Photo?</h2>
                <div className="results__options">
                  <button
                    className="results__yes"
                    onClick={() =>
                      setTimeout(() => {
                        navIntoAnalyzingPhoto();
                        async function fetchImage() {
                          const response = await fetch(
                            "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseTwo",
                            {
                              method: "POST",
                              headers: {
                                "Content-Type": "application/json",
                              },
                              body: JSON.stringify({
                                image: "Your Image",
                              }),
                            }
                          );
                          const results = await response.json();
                          localStorage.setItem(
                            "analysisResults",
                            JSON.stringify(results)
                          );
                          console.log(results);
                        }
                        fetchImage();
                      }, 1000)
                    }
                  >
                    Yes
                  </button>
                  <Link to="/webcam">
                    <button className="results__retake">Retake Photo</button>
                  </Link>
                </div>
              </div>
            )}
          </div>
          {greatShot && <h2 className="after__pic">Great Shot!</h2>}
          {showWebcam && (
            <h2 className="tips__title">
              To get better results, make sure to have:
            </h2>
          )}
          {showWebcam && (
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
          )}
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
        </>
      </div>
    </>
  );
}

export default Webcam;
