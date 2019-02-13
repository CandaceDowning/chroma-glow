import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPlayer, logout } from '../ducks/reducer'



class Player extends Component {   

    render(){

        return(
            <div className='main player'>
                {this.props.player.playername ? 
                
                <div>
                    <div>
                        <h1 className='title player'>{this.props.player.playername}'s Stats</h1>
                    </div> 
                    <div>
                        <h3 className='stats'>Player stats go here</h3></div>
    
                    <Link to = '/'><button className='btn logoutbtn' onClick={this.props.logout}>logout</button></Link>
                    <Link to = '/games'><button className='btn backbtn'>Back to the fun</button></Link>
                </div>

                : <div>
                    <h1 className="title tresspass">YOU ARE TRESPASSING!</h1>
                    <Link to = '/'><button className='btn escapebtn'>Escape</button></Link>
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