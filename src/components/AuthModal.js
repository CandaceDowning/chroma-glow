import React, { Component } from "react";
import { connect } from 'react-redux';
import { login, signup } from '../ducks/auth_reducer'


//this modal will allow user to log in or sign up
class AuthModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playername: '',
            password: ''
        }
    }

    //sets state to form input
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    //makes call to log user in and start session
    handleLogin = e => {
        e.preventDefault();
        this.props.login(this.state.playername, this.state.password)
        this.props.toggleModal()
    }

    //makes call to enter player into db and start session
    handleSignup = e => {
        e.preventDefault();
        this.props.signup(this.state.playername, this.state.password)
        this.props.toggleModal()
    }


    render() {
        if (!this.props.show) {
            return null;
        }
        
        const showHideClassname = this.props.show ? 'modal display-block' : 'modal display-none'
        return (
            
            <div className={showHideClassname}>
                <section className = 'modal-main'>
                <form onSubmit={this.handleLogin}>
                    <input
                        value={this.state.playername}
                        name='playername'
                        placeholder='playername'
                        onChange={this.handleChange} />
                    <input
                        value={this.state.password}
                        name='password'
                        placeholder='password'
                        onChange={this.handleChange} />
                </form>
                <button
                    onClick={this.handleLogin}>Log in</button>
                <button
                    onClick={this.handleSignup}>Sign up</button>
                <button
                    onClick={this.props.toggleModal}>Cancel</button>
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => state
export default connect(
    mapStateToProps,
    {login, signup}
) (AuthModal)