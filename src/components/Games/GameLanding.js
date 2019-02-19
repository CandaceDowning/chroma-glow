import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { getClash, getPlayer } from '../../ducks/reducer'

class GameLanding extends Component {

    componentDidMount(){
        this.props.getClash()
        console.log(this.props)
        this.props.getPlayer()
        console.log(this.props.player) 
        if(!this.props.player.length){
            return <Redirect push to='/'/>
        }
    }

    render(){

        return(
            <div className='main'>

                {this.props.player.playername ? 
                
                <div className='gamelanding'>
                    <h1 className='title'>
                       Games Go Here 
                    </h1> 

                    <Link to='/player'><button className='btn statsbtn'>Command Console</button></Link>
                    <Link to='/games/clash'><button className='btn clashbtn'>ColorClash</button></Link>
    
                </div>
 
                 : <div className='title'>
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