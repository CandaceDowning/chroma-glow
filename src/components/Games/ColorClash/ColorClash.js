import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateScore, updateLuck } from "../../../ducks/reducer";
import Timer from "./Timer";
import Victory from "./Victory";
import Defeat from "./Defeat";
import ClashEnd from "./ClashEnd";
import ClashInt from "./ClashInt";
import { withRouter} from "react-router-dom";
const shuffler = require("shuffle-array");

class ColorClash extends Component {
  constructor(props) {
    super(props);

    
    this.state = {
      playerAns: false,
      playerCorrect: false,
      questCount: 0,
      decoyCount:5,
      correctCount: 0,
      timeBonus: 0,
      totalScore: 0,
    };
  }

  //tracks the time bonus given by the countdown clock
  stopTime = time => {
    let timeBonus = this.state.timeBonus;
    this.setState({ timeBonus: (timeBonus += parseInt(time)) });
  };

  //updates state when player answers question
  answer = ans => {
    this.setState({ playerAns: true });

    if (ans === true) {
      this.setState({
        playerCorrect: true,
        correctCount: this.state.correctCount + 1
      });
    }
  };

  //takes the player to the next set of question and answers after the results screen
  next = () => {
    this.setState({
      questCount: this.state.questCount + 1,
      decoyCount: this.state.decoyCount + 2,
      playerAns: false,
      playerCorrect: false
    });
    
    //keeps a running total of the player score 
    let luck = this.props.player.luck
    let totTimeBonus = (this.state.timeBonus/5)*3
    let score = this.state.correctCount*100
    let randoLuck = Math.random()*luck+1
    console.log(randoLuck)
  
    let runningScore= Math.floor((totTimeBonus+score)*randoLuck)
    console.log(runningScore)
    this.setState({totalScore: runningScore})

  };

  //ends the clash, and updates high score and luck if necessary
  endClash = () => {
    //updates player score if higher than current score
    let id = this.props.player.id;
    let finalScore =  this.state.totalScore

    if (finalScore > this.props.player.score) {
      this.props.updateScore(id, finalScore);
    }
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
  };

  render() {

    //shuffling the answers array, and declaring variables to be rendered from props based on current question count
    const { flash } = this.props;

    const current = flash.length && this.state.questCount;

    const quest = flash.length && flash[current].question 
    
    let decoy1 = this.state.decoyCount
    let decoy2 = decoy1++

    const answers =[ 
      {answer: flash[current].answer , boo: true},  
      {answer: flash[decoy1].answer , boo: false},         	
      {answer: flash[decoy2].answer , boo: false}
    ]
    
    const shuffled = shuffler(answers)

    const ans1 = shuffled[0].answer
    const ans1boo = shuffled[0].boo


    const ans2 = shuffled[1].answer
    const ans2boo = shuffled[1].boo


    const ans3 = shuffled[2].answer
    const ans3boo = shuffled[2].boo


    return (
      <div className="main colorClash">
        {/* CATCH ALL FOR REFRESH MID-GAME */}
        {!this.props.flash.length ? (
          <div>
            <ClashInt/>
          </div>
        ) : // GAME START
        !this.state.playerAns && this.state.questCount < 5 ? (
          <div>
            <h1 className="clash-title">Color Clash</h1>

            <div>
              <div className="timer-box">
                <p className="timer">CLASH TIME:</p>
                <Timer stopTime={this.stopTime} />
              </div>
              
              <h2 className="vocab">{quest}</h2>
            </div>

            <div className="ans-box">
              <div className="ans1 ans">
                <p >{ans1}</p>
              </div>
              <div className="ans2 ans">
                <p  >
                  {ans2}
                </p>
              </div>
              <div className="ans3 ans">
                <p >
                  {ans3}
                </p>
              </div>
            </div>

            <div className="dash">
              <div className="leftbtn">
                <Link to="/games">
                  <button className="btn1"/>
                </Link>
              </div>

              <div className="btn-key-screen">
                <div className="key-box">
                  <div className="key-holder">
                    <div className="btn1-key key" />
                    <p>SURRENDER</p>
                  </div>
                  <div className="key-holder">
                    <div className="btn2-key key" />
                    <p>ONE </p>
                  </div>
                  <div className="key-holder">
                    <div className="btn3-key key" />
                    <p>TWO</p>
                  </div>
                  <div className="key-holder">
                    <div className="btn4-key key" />
                    <p>THREE</p>
                  </div>
                </div>
              </div>

              <div className="rigthbtn">
                <div >
                  <button className="btn2" onClick={() => this.answer(ans1boo)}/>
                </div>

                <div className="bottombtn">
                  <button className="btn3" onClick={() => this.answer(ans2boo)}/>
                  <button className="btn4" onClick={() => this.answer(ans3boo)}/>
                </div>
              </div>
            </div>
          </div>
        ) : //PLAYER ANSWERED QUESTION CORRECTLY
        this.state.playerAns &&
          this.state.playerCorrect &&
          this.state.questCount < 5 ? (
          <Victory next={this.next} />
        ) : //PLAYER ANSWERED QUESTION INCORRECTLY
        this.state.playerAns &&
          !this.state.playerCorrect &&
          this.state.questCount < 5 ? (
          <Defeat next={this.next} />
        ) : (
          //END OF GAME
          <ClashEnd
            salvage={this.state.totalScore}
            end={this.endClash}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => state;
export default withRouter(
connect(
  mapStateToProps,
  { updateScore, updateLuck  }
)(ColorClash)
);
