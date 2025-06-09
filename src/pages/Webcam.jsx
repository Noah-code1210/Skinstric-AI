import React from "react";

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
        <video ref={videoRef} autoPlay style={{ width: "100%" }} />
      </div>
    </>
  );
}

export default Webcam;
