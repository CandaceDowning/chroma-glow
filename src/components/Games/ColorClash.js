import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class ColorClash extends Component {
    
    render(){
        return(
            <div className='main colorClash'>

                <h1>Color Clash Game</h1>
                <Link to = '/games'><button>Back to games landing</button></Link>
            </div>
        )
    }
}

const mapStateToProps = state => state
export default connect(
    mapStateToProps,
) (ColorClash)