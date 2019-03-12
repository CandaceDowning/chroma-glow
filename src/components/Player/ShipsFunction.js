//holding delete account, reset calibration
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getPlayer, getFlash, getDecoy } from "../../ducks/reducer";
import Escape from "../Escape";
import DestructModal from "./DestructModal";
import scanCard from "../../images/scan_card.png";
import calResetCard from "../../images/cal_card.png";
import selfDestruct from "../../images/selfdestruct_card.png"

class ShipsFunctions extends Component {
    constructor() {
        super();
    
        this.state = {
          show: false
        };
      }

      toggleModal = e => {
        this.setState({ show: !this.state.show });
        console.log(this.props.player.id)
      };


  render() {
    return (
      <div className="main">
        {this.props.player.playername ? (
          <div className="gamelanding">
            <h1 className="ship-title">SHIPS FUNCTIONS</h1>
            
          <div className="nav-cards">
            <img src={scanCard} alt="clash game"/>
            <img src={calResetCard} alt="flash game"/>
            <img src={selfDestruct} alt="calibration game"/>
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
                    <p>SCAN FOR LIFEFORMS</p>
                  </div>
                  <div className="key-holder">
                    <div className="btn3-key key" />
                    <p>RESET CALIBRATION</p>
                  </div>
                  <div className="key-holder">
                    <div className="btn4-key key" />
                    <p>SELF DESTRUCT</p>
                  </div>
                </div>
              </div>
              <div className="rigthbtn">
                <div >
                  <Link to='/player/scanner'>
                    <button className="btn2" />
                  </Link>
                </div>

                <div className="bottombtn">
                  <Link to='/player/calreset'><button className="btn3"/></Link>
                  <button className="btn4" onClick={()=>this.toggleModal()} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="start">
            <Escape />
          </div>
        )}

        <div>
          <DestructModal show={this.state.show} toggle={this.toggleModal} />
        </div>


      </div>
    );
  }
}

const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  { getPlayer, getFlash, getDecoy }
)(ShipsFunctions);
