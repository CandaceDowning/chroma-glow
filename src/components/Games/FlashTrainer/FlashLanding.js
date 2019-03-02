import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getFlash } from "../../../ducks/reducer";

class FlashLanding extends Component{



    render(){
        return(
            <div className="main">
                <h1 className="flash-title">FLASH TRAINER</h1>
                <p className="flash-subtitle">PREPARE YOURSELF FOR THE CLASH! INCREASE YOUR KNOWLEDGE AND YOUR LUCK!</p>

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
                    <p>START FLASH</p>
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
                    <Link to="/games/flash"><button className="btn2"/></Link>
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

const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  { getFlash }
)(FlashLanding);