import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(){
        super()

        this.state = {
            time: {},
            seconds: 20
        }

        this.timer = 0;
    }

    timeCalc = (secs) => {
        let hours = Math.floor(secs / (60 * 60))

        let minDiv = secs % (60 * 60)
        let min = Math.floor(minDiv % 60)

        let secDiv = minDiv % 60
        let seconds =  Math.ceil(secDiv)

        let clock = {
            "h": hours,
            "m": min,
            "s": sec
        }
        return clock
    }

    componentDidMount(){
        let timeRem = this.timeCalc(this.state.seconds)
        this.setState({
            time: timeRem
        })
        this.startTime()
    }

    startTime = () => {
        if(this.timer == 0) {
            this.timer = setInterval(this.count, 1000)
        }
    }

    count = () => {
        let seconds = this.state.seconds -1
        this.setState({
            time: this.timeCalc(seconds),
            seconds: seconds
        })

        if (seconds === 0)
        clearInterval(this.timer)
    }

    render(){
        return(
            <div>
                Seconds left: {this.state.time.s}
            </div>
        )
    }

}