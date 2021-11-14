import './App.css';
import logoFull from "./logo-full.png";

import React from "react"
import {WebcamCapture} from './Webcam.jsx';

function App() {
  
  return (
    <div className="App">

      <div className="UI-container">
        <div className="leftUI">
          <img src={logoFull} className="sidelogo"/>
          <div className="keyInstr-container">
              <p>Hello</p>
          </div>
        </div>

        <div className="rightUI">
          <WebcamCapture />
        </div>
      </div>

    </div>
  );
}

export default App;
