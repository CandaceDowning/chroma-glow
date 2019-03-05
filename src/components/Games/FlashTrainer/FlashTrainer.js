import React, { Component} from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { updateLuck } from '../../../ducks/reducer'

class FlashTrainer extends Component{

    constructor(props){
        super(props)

        this.state = {
            thisFlash: props.flash,
            current: 0,
            showAns: false
        }
    }

    componentDidMount(){
        console.log(this.props)
    }

    flip= () => {
        this.setState({showAns: !this.state.showAns})
    }

    next = () => {
        if(this.state.current<=this.state.thisFlash.length){
        this.setState({current: this.state.current+1})}
        if(this.state.showAns){this.flip()}
    }

    last = () => {
        this.setState({current: this.state.current-1})
        if(this.state.showAns){this.flip()}
    }

    updateLuck = () => {
    let id = this.props.player.id;

    //generates small random amount of luck, sometimes it is less than current luck
    let luckGen = Math.random()
    let luckAdding = luckGen.toFixed(2)
    let luck =  parseInt(this.props.player.luck)
    let newLuck = luck+luckAdding/10

    //resets player luck if no answers were correct
    if(this.state.correctCount === 0){
      this.props.updateLuck(id, 1)
    }
    //updates luck if current newLuck is higher current luck 
    else if(newLuck > this.props.player.luck){
    this.props.updateLuck(id, newLuck)
    }
    }



    render(){

        const { flash } = this.props;

        const current = flash.length && this.state.current;
    
        const quest = flash.length && flash[current].question;
        const answer = flash.length && flash[current].answer;      

        return(
            <div className='main'>
                <h1 className="flash-title">FLASH TRAINER</h1>

                {!this.state.showAns ?
                    <div className="flashcard question">
                    <p>{quest}</p></div>
                    :
                    <div className="flashcard answer">
                    <p>{answer}</p>
                    </div>
                }

            
            <div className="dash">
              <div className="leftbtn">
                <Link to="/games">
                  <button className="btn1" onClick={()=>this.updateLuck()}/>
                </Link>
              </div>
              <div className="btn-key-screen">
                <div className="key-box">
                  <div className="key-holder">
                    <div className="btn1-key key" />
                    <p>NAVIGATION</p>
                  </div>
                  <div className="key-holder">
                    <div className="btn2-key key" />
                    <p>FLIP</p>
                  </div>
                  <div className="key-holder">
                    <div className="btn3-key key" />
                    <p>LAST</p>
                  </div>
                  <div className="key-holder">
                    <div className="btn4-key key" />
                    <p>NEXT</p>
                  </div>
                </div>
              </div>
              <div className="rigthbtn">
                <div >
                    <button className="btn2" onClick={()=>this.flip()} />
                </div>
                <div className="bottombtn">
                  <button onClick={()=>{this.last()}} className="btn3" />
                  <button onClick={()=>{this.next()}} className="btn4" />
                </div>
              </div>
            </div>


            </div>
        )
    }
} 

const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  { updateLuck }
)(FlashTrainer);