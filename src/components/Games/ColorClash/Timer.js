import React, { Component } from 'react'

export default class Timer extends Component {
    _isMounted=false;

    constructor(props){
        super(props)

        this.state = {
            time: 20
        }
    }


    componentDidMount(){
    this._isMounted= true;
    }

    componentWillUnmount(){
        this._isMounted = false;
        this.props.stopTime(this.state.time)
    }


    render(){
    setTimeout(()=>{
       if(this.state.time>0 && this._isMounted){
           this.setState({time: (this.state.time - 0.01).toFixed(2)})
       }
    }, 10)
   
    return(
        <div className="timer">
            {this.state.time}
        </div>
    )
}
  
}