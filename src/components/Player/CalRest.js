import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { calReset } from "../../ducks/reducer";
import Escape from '../Escape'

class CalReset extends Component {


    reset = () =>{
        this.props.calReset(this.props.player.id)
    }
  
  render() {
    return (
      <div className="main">
        {this.props.player.playername ? (
          <div className="gamelanding">
            <h1 className="start">ARE YOU SURE</h1>
            <h1 className="start"> YOU WANT TO RESET YOUR SCANNER CALIBRATION?</h1>


{/* dasboard template */}

            <div className="dash">
              <div className="leftbtn">
                <Link to="/player/ship">
                  <button className="btn1"/>
                </Link>
              </div>
              <div className="btn-key-screen">
                <div className="key-box">
                  <div className="key-holder">
                    <div className="btn1-key key" />
                    <p>SHIPS FUNCTIONS</p>
                  </div>
                  <div className="key-holder">
                    <div className="btn2-key key" />
                    <p>RESET</p>
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
                  <Link to="/player/ship">
                    <button className="btn2" onClick={this.reset}/>
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
  { calReset }
)(CalReset);
