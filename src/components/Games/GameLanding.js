import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { getPlayer, getFlash, getDecoy } from "../../ducks/reducer";
import Escape from "../Escape";
import clashCard from "../../images/clash_img_card.png"
import flashCard from "../../images/flash_img_card.png"
import calCard from "../../images/cal_img_card.png"

class GameLanding extends Component {
  //sets up player stats and game data
  componentDidMount() { 
      this.props.getFlash();
      this.props.getPlayer();
      this.props.getDecoy();
      console.log(this.props.player);

      if (!this.props.player.length) {
        return <Redirect push to="/" />;
      }
  }

  
  render() {
    return (
      <div className="main">
        {this.props.player.playername ? (
          <div className="gamelanding">
            <h1 className="nav-title">NAVIGATION</h1>

          <div className="nav-cards">
            <img src={clashCard} alt="clash game"/>
            <img src={flashCard} alt="flash game"/>
            <img src={calCard} alt="calibration game"/>
          </div>



            <div className="dash">
              <div className="leftbtn">
                <Link to="/player">
                  <button className="btn1" />
                </Link>
              </div>
              <div className="btn-key-screen">
                <div className="key-box">
                  <div className="key-holder">
                    <div className="btn1-key key" />
                    <p>COMMAND CONSOLE</p>
                  </div>
                  <div className="key-holder">
                    <div className="btn2-key key" />
                    <p>COLOR CLASH </p>
                  </div>
                  <div className="key-holder">
                    <div className="btn3-key key" />
                    <p>FLASH TRAINER</p>
                  </div>
                  <div className="key-holder">
                    <div className="btn4-key key" />
                    <p>SPECTRAL WAVE</p>
                  </div>
                </div>
              </div>
              <div className="rigthbtn">
                <div >
                  <Link to="/games/clashland">
                    <button className="btn2"/>
                  </Link>
                </div>

                <div className="bottombtn">
                  <Link to='/games/flashland'><button className="btn3" /></Link>
                  <Link to='/games/specwave'><button className="btn4" /></Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="start">
            <Escape />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  { getPlayer, getFlash, getDecoy }
)(GameLanding);
