import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getClash, updateScore } from "../../../ducks/reducer";
import Timer from "./Timer";

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
    console.log(this.state.score);
    console.log(time);
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

    // if(this.state.score > this.props.player.score){
    //   this.props.updateScore(this.props.player.id, this.state.score)
    // }
  };

  endClash = () => {
    let id = this.props.player.id;
    let finalScore = this.state.score * this.state.correctCount;
    console.log(this.props.player.score);
    if (finalScore > this.props.player.score) {
      this.props.updateScore(id, finalScore);
    }
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
        {!this.props.clash[0] ? (
          <div className="title">
            <h1>CLASH INTERRUPTED</h1>
            <Link to="/games">
              <button className="btn escapebtn">Escape</button>
            </Link>
          </div>
        ) : !this.state.playerAns && this.state.questCount < 5 ? (
          <div>
            <h1 className="title">Color Clash</h1>
            <div className="title">
              <h3>CLASH TIME:</h3> <Timer stopTime={this.stopTime} />
            </div>
            <h2 className="clashQuest">{quest}</h2>
            <div>
              <button onClick={() => this.answer(true)}>
                <h4 className="clashAnswer">{answer}</h4>
              </button>
              <button>
                <h4 className="clashAnswer" onClick={() => this.answer(false)}>
                  {wrong1}
                </h4>
              </button>
              <button>
                <h4 className="clashAnswer" onClick={() => this.answer(false)}>
                  {wrong2}
                </h4>
              </button>
              <div>
                <Link to="/games">
                  <button className="btn backbtn">Surrender</button>
                </Link>
              </div>
            </div>
          </div>
        ) : this.state.playerAns &&
          this.state.playerCorrect &&
          this.state.questCount < 5 ? (
          <div>
            <h1 className="title">VICTORY</h1>
            <button onClick={() => this.next()} className="btn clashbtn">
              NEXT CLASH
            </button>
            <div>
              <Link to="/games">
                <button className="btn backbtn">Surrender</button>
              </Link>
            </div>
          </div>
        ) : this.state.playerAns &&
          !this.state.playerCorrect &&
          this.state.questCount < 5 ? (
          <div>
            <h1 className="title">DEFEAT</h1>
            <button onClick={() => this.next()} className="btn clashbtn">
              NEXT CLASH
            </button>
            <div>
              <Link to="/games">
                <button className="btn backbtn">Surrender</button>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <p className="title">
              Salvage: {this.state.score * this.state.correctCount}
            </p>

            <Link to="/games">
              <button className="btn backbtn" onClick={() => this.endClash()}>
                Back to Base
              </button>
            </Link>
          </div>
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
