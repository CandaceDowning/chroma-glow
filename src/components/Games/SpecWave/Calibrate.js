import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import tinygradient from 'tinygradient'
import tinycolor from 'tinycolor2'

class Calibrate extends Component{

    constructor(props){
        super(props)

        this.state = {
            level: props.player.level
        }
    }


    endCal = () =>{

    }
    render(){
        let level= this.state.level
        const colorOne= tinycolor.random().toRgb()
        const colorTwo= tinycolor.random().toRgb()
        const gradient = tinygradient(colorOne, colorTwo).rgb(level)
        console.log(gradient)
        const arr= gradient.map((el,i)=>{
          let style = { backgroundColor: `rgb(${el._r}, ${el._g}, ${el._b})`}
          return(
            
            <div className="wave" style={style} key={i}>
              
            </div>
          )
        })
        return(
            <div className="outer">
                <div className="display">
                    {arr}
                </div>
                <div className='control'>
                <div className='btnpanel'>
                    <p>VERFIY</p>
                    <Link to='/games/specwave'><div className="calbtn1"></div></Link>
                </div>
                <div className='btnpanel'>
                    <p>NEW WAVE</p>
                    <div className="calbtn2"></div>
                </div>
                
                {/* <div className="light l1"></div> */}
                <div className="light l2"></div>
                <div className="light l3"></div>
                </div>
            </div>
        )
    }



}

const mapStateToProps = state => state;
export default connect(
  mapStateToProps)(Calibrate);