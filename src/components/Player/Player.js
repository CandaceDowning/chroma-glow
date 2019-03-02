import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { getPlayer, logout, getRank, getStats, getDonate } from "../../ducks/reducer";
import Escape from "../Escape";


class Player extends Component {
  componentDidMount() {
    this.props.getPlayer();
    this.props.getRank();
    this.props.getStats();
    this.props.getDonate()

    if (!this.props.player.length) {
      return <Redirect push to="/" />;
    }
  }

  render() {
    return (
      <div className="main">

        {this.props.player.playername ? (
          <div>
    
            <div>

              <h1 className="player-title">
                {this.props.player.playername.toUpperCase()}'S COMMAND CONSOLE
              </h1>
 
              <div className='stats'>
                <div className="salvage">
                  <h3>HIGHEST</h3>
                  <h3>SALVAGE:</h3> 
                  <p >{this.props.player.score}</p>
                </div>
                <div className="salvage">
                  <h3>CALIBRATION</h3>
                  <h3>LEVEL:</h3> 
                  <p >{this.props.player.level}</p>
                </div>
                <div className="salvage">
                    <h3>DONATED</h3>
                    <h3>SALVAGE:</h3> 
                    <p >{this.props.player.donation}</p>
                </div>
              </div>              
            </div> 
            
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
                    <p>DOCK THE SHIP</p>
                  </div>
                  <div className="key-holder">
                    <div className="btn3-key key" />
                    <p>PERSONAL LOG</p>
                  </div>
                  <div className="key-holder">
                    <div className="btn4-key key" />
                    <p>SHIPS FUNCTIONS</p>
                  </div>
                </div>
              </div>
              <div className="rigthbtn">
                <div >
                    <Link to = '/'><button className="btn2" onClick={this.props.logout}/></Link>
                </div>

                <div className="bottombtn">
                  <Link to='/player/log'><button className="btn3" /></Link>
                  <Link to="/player/ship">
                  <button className="btn4"/>
                </Link>
                </div>
              </div>
            </div>

          </div>
        ) : (
          <Escape />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps,
  { getPlayer, logout, getRank, getStats, getDonate }
)(Player);
