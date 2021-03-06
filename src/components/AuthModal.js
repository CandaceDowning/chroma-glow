import React, { Component } from "react";
import { connect } from "react-redux";
import { login, signup } from "../ducks/reducer";
import { withRouter } from "react-router-dom";

//this modal will allow user to log in or sign up
class AuthModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playername: "",
      password: ""
    };
  }

  //sets state to form input
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //makes call to log user in and start session
  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state.playername, this.state.password).then(res => {
      if (res.value.data) {
        this.props.history.push("/games");
      }
    })

  };

  //makes call to enter player into db and start session
  handleSignup = e => {
    e.preventDefault();
    let luck = Math.random()+1
    this.props.signup(this.state.playername, this.state.password, luck)
      .then(res => {
        if (res.value.data) {
          this.props.history.push("/games");
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
        <section className="authmodal">
        <p className = 'auth-title'>PREPARE YOURSELF</p>
          <form className="authform" onSubmit={this.handleLogin}>
            <div className='cursor'>
            <input
              className="modalinput"
              value={this.state.playername}
              name="playername"
              type='text'
              required
              placeholder="DESIGNATION"
              onChange={this.handleChange}
            /></div>
            <div className='cursor'>
            <input
              className="modalinput"
              required
              type='password'
              value={this.state.password}
              name="password"
              placeholder="PASSWORD"
              onChange={this.handleChange}
            /></div>
          </form>
          
          <div className='auth-dash'>
            <div className='authbtnbox'>
            <div className="modalbtn" onClick={this.handleLogin}/>
            <p className='auth-label'>LOG-IN</p>
            </div>
            
            <div className='authbtnbox'>
            <div className="modalbtn" onClick={this.handleSignup}/>
            <p className='auth-label'>SIGN-UP</p>
            </div>
            
            <div className='authbtnbox'>
            <div className="modalbtn" onClick={this.props.toggleModal}/>
            <p className='auth-label'>GIVE-UP</p>
            </div>
          </div>

        </section>
      </div>
    );
  }
}

const mapStateToProps = state => state;
export default withRouter(
  connect(
    mapStateToProps,
    { login, signup }
  )(AuthModal)
);
