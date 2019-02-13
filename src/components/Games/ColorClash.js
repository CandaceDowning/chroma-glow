import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import socketIOClient from 'socket.io-client'
import { getClash } from '../../ducks/reducer'

class ColorClash extends Component {
    constructor(){
        super()

        this.state ={
            endpoint:"http://localhost:4000",
            playerAns: false,
            playerCorrect: false,
            win: false,
            allAns: false
        }
    }

    send = () => {
        
    }

    answer = (ans, key) => {
        this.setState({playerAns: true})
        
        if(ans === key){
            this.setState({playerCorrect: true})
        }

        const socket = socketIOClient(this.state.endpoint)
        socket.emit('answer', this.state.playerAns, this.state.playerCorrect)

    }


    componentDidMount(){
        console.log(this.props.clash[0].question)
        console.log(this.props.clash[0].answer)
    }
    
    render(){
        // const socket = socketIOClient(this.state.endpoint);
    

        const right = Math.floor(Math.random()*17)
        const random1 = Math.floor(Math.random()*17)
        const random2 = Math.floor(Math.random()*17)

        const quest = this.props.clash[right].question
        const answer = this.props.clash[right].answer
        const wrong1 = this.props.clash[random1].answer
        const wrong2 =  this.props.clash[random2].answer

        return(
            <div className='main colorClash'>

                <h1 className='title'>Color Clash</h1>
                <h2 className='clashQuest'>{quest}</h2>
                <div>
                    <div>
                        <button><h4 className='clashAnswer'>{answer}</h4></button>
                        <button><h4 className='clashAnswer'>{wrong1}</h4></button>
                        <button><h4 className='clashAnswer'>{wrong2}</h4></button>
                    </div>

                    
                    
                </div>
                <Link to = '/games'><button className='btn backbtn'>Back to games landing</button></Link>
            </div>
        )
    }
}

const mapStateToProps = state => state
export default connect(
    mapStateToProps,
    {getClash}
) (ColorClash)