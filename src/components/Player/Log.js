import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import DonateEmail from './DonateEmail'

class Log extends Component{

    constructor(props){
        super(props)

        this.state={
            email: false
        }

    }


    checkEmail = () =>{
        this.setState({email: true})
    }
    render(){
        return(
            <div className="outer">
                <div className="display">

                {!this.state.email?

                    <div className='email-box'>

                        <div className="email-title"><h1>PENDING MESSAGES</h1></div>

                        <div className="email-line">
                            <p className="from">SPACE ORPHANS GUILD:</p>
                            <p className='subject'> HELLO {this.props.player.playername.toUpperCase()}, HAVE YOU DONATED LATELY?</p>
                        </div>


                    </div>

                    :
                    <DonateEmail/>
                }

                



                </div>
                <div className='control'>
                <div className='btnpanel'>
                    <p>POWER</p>
                    <Link to='/player'><div className="calbtn1"></div></Link>
                </div>
                <div className='btnpanel'>
                    <p>MESSAGES</p>
                    <div className="calbtn2" onClick={this.checkEmail}></div>
                </div>

                <div className="light l2"></div>
                <div className="light l3"></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state;
export default connect(
  mapStateToProps)(Log);