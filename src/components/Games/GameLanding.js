import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getClash, getPlayer } from '../../ducks/reducer'

class GameLanding extends Component {

    componentDidMount(){
        this.props.getClash()
        // console.log(this.props)
        this.props.getPlayer()
        // console.log(this.props.player)
    }

    render(){
        return(
            <div className='main'>

                {this.props.player ? 
                
                <div className='gamelanding'>
                    <h1 className='title'>
                       Games Go Here 
                    </h1> 

                    <Link to='/player'><button className='btn statsbtn'>Leaderboard</button></Link>
                    <Link to='/games/colorclash'><button className='btn clashbtn'>ColorClash</button></Link>
    
                </div>

                : <div className='trespass'>
                    <h1>Your are tresspassing!</h1>
                    <Link to = '/'><button className='btn escapebtn'>Escape</button></Link>
                    </div>}
            </div>
        )
    }
}

const mapStateToProps = state => state
export default connect(
    mapStateToProps,
    {getClash, getPlayer}
) (GameLanding)