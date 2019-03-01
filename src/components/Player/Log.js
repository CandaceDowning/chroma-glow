import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Log extends Component{

    constructor(props){
        super(props)

    }


    endCal = () =>{

    }
    render(){
        return(
            <div className="outer">
                <div className="display">


                <h3>testing</h3>



                </div>
                <div className='control'>
                <div className='btnpanel'>
                    <p>POWER</p>
                    <Link to='/player'><div className="calbtn1"></div></Link>
                </div>
                <div className='btnpanel'>
                    <p>MESSAGES</p>
                    <div className="calbtn2"></div>
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