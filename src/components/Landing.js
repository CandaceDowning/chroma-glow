import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import AuthModal from "./AuthModal";

class Landing extends Component {
  constructor() {
    super();

    this.state = {
      show: false
    };
  }

  toggleModal = e => {
    this.setState({ show: !this.state.show });
  };


  render() {
    if (this.props.player.length) {
      return <Redirect push to="/games" />;
      console.log(this.props.player.length)
    }

    return (
      <div className="main">


        <h1 className="main-title">CHROMA-GLOW</h1>

        {this.state.show ? null : (
          <p className='start'>PRESS START</p>
        )}

        <div className="dash">

          <div className="leftbtn">
            <button className='btn1 btn1active' onClick={this.toggleModal}/>
          </div>

          <div className='btn-key-screen'>
            <div className='key-box'>
            <div className='key-holder'><div className='btn1-key key'></div><p>START</p></div>
            <div className='key-holder'><div className='btn2-key key'></div><p> </p></div>
            <div className='key-holder'><div className='btn3-key key'></div><p> </p></div>
            <div className='key-holder'><div className='btn4-key key'></div><p> </p></div>
            </div>
          </div>

          <div className="rigthbtn">
            <div>
              <button className='btn2'/>
            </div>

            <div className="bottombtn">
              <button className="btn3 butt3" />
              <button className="btn4 butt4" />
            </div>
          </div>
        </div>


        <div>
          <AuthModal show={this.state.show} handleChange={this.handleChange} toggleModal={this.toggleModal} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => state;
export default connect(mapStateToProps)(Landing);
