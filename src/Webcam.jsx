import React, { useState, useEffect } from 'react';
import Webcam from "react-webcam";
import axios from "axios";

const WebcamComponent = () => <Webcam />;

const videoConstraints = {
    width: 1920,
    height: 1080,
    facingMode: "user"
};

export const WebcamCapture = () => {

    const [image, setImage] = useState('');
    const webcamRef = React.useRef(null);

    const [text, setText] = useState(null);

    const capture = React.useCallback(
        () => {

            // POST request using axios inside useEffect React hook
            // const article = { title: 'React Hooks POST Request Example' };
            // axios.post('https://reqres.in/api/articles', article)
            //     .then(response => setArticleId(response.data.id));
            async function wrap() {
                try {
                    var imageSrc = webcamRef.current.getScreenshot();
                    const cutString = imageSrc.substring(23)
                    console.log(cutString);
                    const ans = await axios.post("http://localhost:3001/", {
                        data: `${cutString}`
                    })
                    return ans;
                } catch (e) {
                    console.log(e);
                    throw (e);
                }
            }

            wrap().then(result => {
                setText(result.data);
            }).catch(err => {
                console.log(err);
            })
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
                setInterval(function () { capture(); }, 100);
            }}>Capture</button>

            <div className="subtitles-container">
                <p>{text}</p>
            </div>
        </div>
    );
};