import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { getClash, getPlayer } from "../../ducks/reducer";

class GameLanding extends Component {
  componentDidMount() {
    this.props.getClash();
    console.log(this.props);
    this.props.getPlayer();
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
            <h1 className="title">NAVIGATION</h1>
          </div>
        ) : (
          <div className="start">
            <h1>You are tresspassing!</h1>
            <Link to="/">
              <button className="btn escapebtn">Escape</button>
            </Link>
          </div>
        )}

        <div className="dash">
          <div className="btn1">
            <Link to="/player">
              <button />
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
                <p>SPECTRAL ANALYSIS</p>
              </div>
            </div>
          </div>

          <div className="rigthbtn">
            <div className="btn2">
              <Link to="/games/clash">
                <button />
              </Link>
            </div>

            <div className="bottombtn">
              <button className="btn3" />
              <button className="btn4" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  { getClash, getPlayer }
)(GameLanding);
