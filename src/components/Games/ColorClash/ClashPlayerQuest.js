import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import io from "socket.io-client";



class ClashPlayerQuest extends Component {
  constructor() {
    super();

    this.state = {
 
    };

  }



  render() {
    if(!this.props.player.playername){
        return <Redirect push to='/'/>
    } 

    const right = Math.floor(Math.random() * 17);
    const random1 = Math.floor(Math.random() * 17);
    const random2 = Math.floor(Math.random() * 17);

    const quest = this.props.clash[right].question;
    const answer = this.props.clash[right].answer;
    const wrong1 = this.props.clash[random1].answer;
    const wrong2 = this.props.clash[random2].answer;

    return (
      <div className="main colorClash">
        {!this.state.playerAns ? (
          <div>
            <h1 className="title">Color Clash</h1>
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
            </div>
          </div>
        ) : this.state.playerAns && this.state.playerRight ? (
          <div>
            <h1 className="title">you win</h1>
          </div>
        ) : (
          <div>
            <h1 className="title">you lose</h1>
          </div>
        )}

        <Link to="/games">
          <button className="btn backbtn">Back to games landing</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  { getClash }
)(ClashPlayerQuest);
