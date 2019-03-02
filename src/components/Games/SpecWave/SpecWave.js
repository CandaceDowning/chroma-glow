import React, { Component } from 'react';
import { Link } from "react-router-dom";

class SpecWave extends Component{

    render(){
        return(
            <div className="main">
                <h1 className="cal-title">CALIBRATE SPECTRAL WAVE</h1>
                <p className="cal-subtitle">INCREASE YOUR COLOR ACCUITY AND YOUR CHANCES FOR A SUCCESSFUL CLASH!</p>

                <div className="dash">
              <div className="leftbtn">
                <Link to="/games">
                  <button className="btn1" />
                </Link>
              </div>
              <div className="btn-key-screen">
                <div className="key-box">
                  <div className="key-holder">
                    <div className="btn1-key key" />
                    <p>NAVIGATION</p>
                  </div>
                  <div className="key-holder">
                    <div className="btn2-key key" />
                    <p>CALIBRATE</p>
                  </div>
                  <div className="key-holder">
                    <div className="btn3-key key" />
                    <p></p>
                  </div>
                  <div className="key-holder">
                    <div className="btn4-key key" />
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="rigthbtn">
                <div >
                    <Link to="/games/calibrate"><button className="btn2"/></Link>
                </div>

                <div className="bottombtn">
                  <button className="btn3" />
                  <button className="btn4" />
                </div>
              </div>
            </div>
            </div>
        )
    }



}

export default SpecWave