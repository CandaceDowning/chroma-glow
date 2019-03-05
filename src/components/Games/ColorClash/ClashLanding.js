import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getFlash, getDecoy } from "../../../ducks/reducer";

class ClashLanding extends Component{


  componentDidMount() {
    // this.props.getDecoy();
    console.log(this.props);
  }

    
    render(){
        return(
            <div className="main">
                <h1 className="clash-title">THE CLASH ZONE</h1>
                <p className="clash-subtitle">A BATTLE OF WITS AND A RACE AGAINST TIME. BE SWIFT AND BE CORRECT TO REAP THE REWARDS OF SALVAGE AND INCREASE YOUR LUCK!</p>

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
                    <p>START CLASH</p>
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
                    <Link to="/games/clash"><button className="btn2"/></Link>
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
  { getFlash, getDecoy }
)(ClashLanding);