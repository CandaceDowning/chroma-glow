import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getClash, updateScore } from "../../../ducks/reducer";
import Timer from "./Timer";
import Victory from "./Victory";
import Defeat from "./Defeat";
import ClashEnd from "./ClashEnd";
// const shuffler = require("shuffle-array");

class ColorClash extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerAns: false,
      playerCorrect: false,
      questCount: 0,
      correctCount: 0,
      score: 0,
      mixedClash: props.clash
    };
  }

  stopTime = time => {
    // console.log(this.state.score);
    // console.log(time);
    let score = this.state.score;
    this.setState({ score: (score += parseInt(time)) });
  };

  answer = ans => {
    this.setState({ playerAns: true });

    if (ans === true) {
      this.setState({
        playerCorrect: true,
        correctCount: this.state.correctCount + 1
      });
    }
  };

  next = () => {
    this.setState({
      questCount: this.state.questCount + 1,
      playerAns: false,
      playerCorrect: false
    });
  };

  endClash = () => {
    let id = this.props.player.id;
    let finalScore = Math.floor(
      (this.state.score / 5) * this.state.correctCount +
        this.state.correctCount * 100
    );
    console.log(this.props.player.score);
    if (finalScore > this.props.player.score) {
      this.props.updateScore(id, finalScore);
    }

    this.setState({ questCount: 0 });
    console.log(id);
    console.log(finalScore);
  };

  render() {
    const { clash } = this.props;

    const current = clash.length && this.state.questCount;
    const random1 = Math.floor(Math.random() * 17);
    const random2 = Math.floor(Math.random() * 17);

    const quest = clash.length && this.state.mixedClash[current].question;
    const answer = clash.length && this.state.mixedClash[current].answer;
    const wrong1 = clash.length && this.state.mixedClash[random1].answer;
    const wrong2 = clash.length && this.state.mixedClash[random2].answer;
    // console.log(current)

    return (
      <div className="main colorClash">
        {/* CATCH ALL FOR REFRESH MID-GAME */}
        {!this.props.clash[0] ? (
          <div className="title">
            <h1 className="title">CLASH INTERRUPTED</h1>
            <Link to="/games">
              <button className="btn escapebtn">Escape</button>
            </Link>
          </div>
        ) : // GAME START
        !this.state.playerAns && this.state.questCount < 5 ? (
          <div>
            <h1 className="title">Color Clash</h1>

            <div>
              <div className="timer-box">
                <p className="timer">CLASH TIME:</p>
                <Timer stopTime={this.stopTime} />
              </div>
              
              <h2 className="subtitle">{quest}</h2>
            </div>

            <div className="ans-box">
              <div className="ans1 ans" onClick={() => this.answer(true)}>
                <p >{answer}</p>
              </div>
              <div className="ans2 ans" onClick={() => this.answer(false)}>
                <p  >
                  {wrong1}
                </p>
              </div>
              <div className="ans3 ans" onClick={() => this.answer(false)}>
                <p >
                  {wrong2}
                </p>
              </div>
            </div>

            <div className="dash">
              <div className="btn1">
                <Link to="/games">
                  <button />
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
                <div className="btn2">
                  <button />
                </div>

                <div className="bottombtn">
                  <button className="btn3" />
                  <button className="btn4" />
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
            salvage={Math.floor(
              (this.state.score / 5) * this.state.correctCount +
                this.state.correctCount * 100
            )}
            end={this.endClash}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  { getClash, updateScore }
)(ColorClash);
