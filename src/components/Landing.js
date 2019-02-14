import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import AuthModal from './AuthModal'

class Landing extends Component {   
    constructor(){
        super()

        this.state = {
            show:false
        }
    }
    
    toggleModal= e => {
        this.setState({show: !this.state.show})
    }

    render(){
        if(this.props.player.length){
            return <Redirect push to='/games'/>
        } 

        return(
            <div className='main landing'>

                <h1 className='title'>CHROMA-GLOW</h1>
                {this.state.show ? null : 
                    <button className='btn authbtn'
                        onClick = {this.toggleModal}>Press Start</button>}
                



                <div>
                   <AuthModal 
                    show = {this.state.show}
                    toggleModal = {this.toggleModal}
                    // toggleModal = {this.toggleModal}
                   />
                </div>


            </div>
        )
    }

}


const mapStateToProps = state => state
export default connect(mapStateToProps)(Landing)