import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePlayer, } from "../../ducks/reducer";
import { withRouter, Link} from "react-router-dom";

//this modal will allow user to log in or sign up
class DestructModal extends Component {


  handleDelete = e => {
    e.preventDefault();
    this.props.deletePlayer(this.props.player.id)
    .then(res => {
      if (res) {
        this.props.history.push("/");
      }
    })
  };

  render() {
    if (!this.props.show) {
      return null;
    }

    const showHideClassname = this.props.show
      ? "modalmain modalblock"
      : "modalmain modalnone";
    return (
      <div className={showHideClassname}>
        <div className="destructmodal">

          <h1 className= "destruct-title"> 
          ARE YOU SURE YOU WANT TO BLOW UP THE SHIP 
          AND DELETE YOUR EXISTENCE IN THE CLASH?
          </h1>

          <div className='destruct-dash'>
            <div className='destructbtnbox'>
            <div className="deletebtn" onClick={this.handleDelete}/>
              <p className='destruct-label'>BLOW<br></br> IT UP</p>
            </div>

            <div className='destructbtnbox'>
              <div className="backbtn" onClick={this.props.toggle}/>
              <p className='destruct-label'>STAND<br></br> DOWN</p>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;
export default withRouter(
  connect(
    mapStateToProps,
    { deletePlayer }
  )(DestructModal)
);
