import logo from './logo.svg';
import './App.css';

import React from "react"
import Webcam from "react-webcam";
import {WebcamCapture} from './Webcam.jsx';

function App() {
  
  return (
    <div className="App">
      <div className="UI-container">
        <div className="keyInstr-container">
          <p>Hello</p>
        </div>

        <WebcamCapture />


        <div className="subtitles-container">
          <p>The University of British Columbia</p>
        </div>
      </div>
    </div>
  );
}

export default App;
