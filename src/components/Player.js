import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPlayer, logout } from '../ducks/auth_reducer'


class Player extends Component {   

    componentDidMount(){
        this.props.getPlayer()
        console.log(this.props.player)
    }

    render(){

        return(
            <div className='main player'>
                {this.props.player.playername ? 
                
                <div>
                    <div>
                        <h1>{this.props.player.playername}'s Stats</h1>
                    </div> 
    
                    <Link to = '/'><button onClick={this.props.logout}>logout</button></Link>
                    <Link to = '/games'><button>Back to the fun</button></Link>
                </div>

                : <div>
                    <h1>Your are tresspassing!</h1>
                    <Link to = '/'><button>Escape</button></Link>
                    </div>}
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(
    mapStateToProps,
    {getPlayer, logout}
)(Player);