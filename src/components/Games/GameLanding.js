import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class GameLanding extends Component {

    render(){
        return(
            <div className='main'>

                {this.props.player ? 
                
                <div className='gamelanding'>
                    <h1>
                       Games Go Here 
                    </h1> 

                    <Link to='/player'><button>Check Yo Stats</button></Link>
                    <Link to='/games/colorclash'><button>ColorClash</button></Link>
    
                </div>

                : <div className='trespass'>
                    <h1>Your are tresspassing!</h1>
                    <Link to = '/'><button>Escape</button></Link>
                    </div>}
            </div>
        )
    }
}

const mapStateToProps = state => state
export default connect(
    mapStateToProps,
) (GameLanding)