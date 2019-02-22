import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { getPlayer, logout } from "../../ducks/reducer";
import Escape from "../Escape";

class Player extends Component {
  componentDidMount() {
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
          <div>
            
            
            <div>

              <h1 className="player-title">
                {this.props.player.playername}'S COMMAND CONSOLE
              </h1>

              <div className="salvage">
                <h3>TOP SALVAGE COUNT:</h3> 
                <p >{this.props.player.score}</p>
              </div>


            </div>

            
{/* still needs other elements like chart js stats and options to delete account and change theme  */}





            <div className="dash">
              <div className="btn1">
                <Link to="/">
                  <button onClick={this.props.logout} />
                </Link>
              </div>
              <div className="btn-key-screen">
                <div className="key-box">
                  <div className="key-holder">
                    <div className="btn1-key key" />
                    <p>LOG OUT</p>
                  </div>
                  <div className="key-holder">
                    <div className="btn2-key key" />
                    <p>NAVIGATION</p>
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
                <div className="btn2">
                  <Link to="/games">
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
  { getPlayer, logout }
)(Player);
