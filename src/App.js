import './App.css';
import logoFull from "./logo-full.png";

import React from "react"
import {WebcamCapture} from './Webcam.jsx';

import * as BiIcons from "react-icons/bi"

function App() {
  
  return (
    <div className="App">

      <div className="UI-container">
        <div className="leftUI">
          <img src={logoFull} className="sidelogo"/>
          <div className="keyInstr-container">
            <br/><p>Key Commands</p>
            <div className="instr-group">
              <div className="instruction">
                <div className="instr-btt"><BiIcons.BiSpaceBar size={20}/></div>
                <p className="px12">Screenshot & Play</p>
              </div>
              <div className="instruction">
                <div className="instr-btt"><BiIcons.BiChevronLeft size={20}/></div>
                <p className="px12">Back 5s</p>
              </div>
              <div className="instruction">
                <div className="instr-btt"><BiIcons.BiChevronRight size={20}/></div>
                <p className="px12">Forward 5s</p>
              </div>
            </div>
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
