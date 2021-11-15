
import React, { useState, useEffect } from 'react';
import Webcam from "react-webcam";

const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 1920,
    height: 1080,
    facingMode: "user"
};

export const WebcamCapture = () => {
    
    const [image,setImage]=useState('');
    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
        () => {
            
        const imageSrc = webcamRef.current.getScreenshot();
        console.log(imageSrc);
    });

    useEffect(() => {
        const handleKey = (event) => {
            switch (event.key) {
                case ' ':
                    capture();
                    break;
                case 'q':
                    console.log("Bruh");
                    break;
            }
        };
        window.addEventListener('keydown', handleKey);
    
        return () => {
          window.removeEventListener('keydown', handleKey);
        };
    }, []);

    return (
        <div className="webcam-container">
            <div className="webcam-img">
                {image == '' ? <Webcam
                    audio={false}
                    ref={webcamRef}
                    width={"100%"}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                    className="webcam-feed"
                /> : <img src={image} />}
            </div>

                <button onClick={(e) => {
                    e.preventDefault();
                    setInterval(function(){capture();}, 100);
                }}>Capture</button>

            <div className="subtitles-container">
                <p>The University of British Columbia</p>
            </div>
        </div>
    );
};