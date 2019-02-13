import React, { Component } from "react";
import { connect } from 'react-redux';
import { login, signup } from '../ducks/reducer'
import { withRouter } from 'react-router-dom'


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
        this.props.login(this.state.playername, this.state.password).then(res=>{
            if(res.value.data){
                this.props.history.push('/games')}
            })
    }

    //makes call to enter player into db and start session
    handleSignup = e => {
        e.preventDefault();
        this.props.signup(this.state.playername, this.state.password).then(res=>{
            if(res.value.data){
                this.props.history.push('/games')}
            })
    }


    render() {
        if (!this.props.show) {
            return null;
        }
        
        const showHideClassname = this.props.show ? 'modalmain modalblock' : 'modalmain modalnone'
        return (
            
            <div className={showHideClassname}>
                <section className = 'authmodal'>
                <form className='authform' onSubmit={this.handleLogin}>
                    <input className='modalinput' 
                        value={this.state.playername}
                        name='playername'
                        placeholder='playername'
                        onChange={this.handleChange} />
                    <input className='modalinput'
                        value={this.state.password}
                        name='password'
                        placeholder='password'
                        onChange={this.handleChange} />
                </form>
                <div>
                <button className='btn modalbtn'
                    onClick={this.handleLogin}>Log in</button>
                <button className='btn modalbtn'
                    onClick={this.handleSignup}>Sign up</button>
                <button className='btn modalbtn'
                    onClick={this.props.toggleModal}>Cancel</button>
                </div>    
                </section>
            </div>
        );
    }
}

const mapStateToProps = state => state
export default withRouter( connect(
    mapStateToProps,
    {login, signup}
) (AuthModal)) 