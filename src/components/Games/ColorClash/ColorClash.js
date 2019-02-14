import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import io from "socket.io-client";
import { getClash } from "../../../ducks/reducer";
import ClashQuest from './ClashQuest';
import ClashQuestDone from './ClashQuestDone';


class ColorClash extends Component {
  constructor() {
    super();

    this.state = {
      room: 0,
      timer: 20,
      live: false,
      questDone: false,
      clashDone: false,
      currentQuest: 0,
      questions: [],
      players: [],
      playerCounter: 0,
      statBoard: []
    };

  }

  componentDidMount(){
      getClash(clash =>{
        this.setState({questions: clash})
      })
      this.socket = io('/');
      this.genRoom()
      this.socket.on('room-joined', data =>{
        this.addPlayer(data.name, data.id)
      })
      this.socket.on('player-answer', data => {
        this.subAns(data.name, data.ans)
      })
  }

  genRoom = () => {
    let newRoom =  Math.floor(Math.random()*9000, 10000)
    this.setState({room: newRoom})
    this.socket.emit('host-join', {room: newRoom})
  }

  startClash = () => {
    let { players} = this.state
    if (players[0] && players[1]){
      this.nextQuest()
      this.setState({
        live: true
      })
    } else {
      alert('It takes two to Clash')
    }
  }

  QuestDone = () => {
    this.socket.emit('quest-over', this.state.room)
    let revPlayers = [...players];
    revPlayers.forEach((player)=>{
      player.questAnswered = false;
      player.ansCorrect = false;
    })
    this.getLeaderBoard()
    this.setState({
      questDone: true,
      currentQuest: this.state.currentQuest +1,
      timer: 20,
      players: revPlayers
    })
  }

  timeKeeper = () => {
    let intTime = 20;
    let players = [ ...this.state.players]

    this.setState({questDone: false})

    timeCheck = () =>{
      let checkAns = () => {
        let pAns = 0;
        players.forEach(player => {
          player.qAns? ++pAns: null
        })
        players.forEach(player=>{
          if(player.ansCorrect){
            player.score += (intTime*10 +1000)
            this.socket.emit('sent-info', {id: player.id, score: player.score, ansCorrect: player.ansCorrect})
          }
        });
        pAns === players.length ? intTime = 0 : nullintTime -=1;
      }
      endQuest = () => {
        clearInterval(timeKept);
        this.questDone()
      }
      return intTime > 0
      ? checkAns()
      : endQuest()
    }
    let timeKept = setInterval(()=>{ timeCheck()}, 1000)
    return timeKept
  }

  nextQuest = () => {
    this.timeKeeper()

    currentQuest === quest.length
    ? this.setState({questDone: true})
    : this.socket.emit('next-quest', {room})
      this.setState({questDone: false})
  }

  addPlayer = (name, id) => {
    let player = {
      id: id,
      name: this.props.player.playername,
      score: 0,
      qAns: false,
      ansCorrect: false
    }
    let newPlayer = [...this.state.player]
    newPlayer.push(player)
    this.setState({
      players: newPlayer,
      playerCounter: this.state.playerCounter++
    })
  }

  submitAns = (name, ans) => {
    let player = this.state.players.filter(player => player.name === name)
    let revPlayers = this.state.players.filter(player => player.name !== name)

    player[0].qAns = true;
    ans === this.state.questions[this.state.currentQuestion].correctAns
    ? player[0].ansCorrect = true
    : player[0].ansCorrect = false

    revPlayers.push(player[0])
    this.setState({
      players:revPlayers
    })
  }

  getLeader = () => {
    let all = [...this.state.players]
    let statBoard = all.sort((a,b)=> b.score - a.score)
    this.setState({
      statBoard: statBoard
    })
  }


  render() {
    let { room, questions, currentQuest, live, questDone, clashDone } = this.state;
    let sortedPlayers =  this.state.map(player => {
      return(
        <p key={player.id}>{player.name}</p>
      )
    })

    return (
      <div className="main colorClash">
        <div>
          <h4>Clash Designation</h4>
          <h3>{room}</h3>
        </div>
        {!live && !questDone && !clashDone ?
          <div>
            <button onClick={()=> this.startClash()}>Start Clash</button>
            <p > Clashers Present</p>
            {sortedPlayers}
          </div>
        : 
        live && !questDone && clashDone ?
          <ClashQuest
            question = {questions[currentQuest].question}
            ans = {questions[currentQuest].answer}
            wrong1 = {questions[Math.floor(Math.random()*17)].answer}
            wrong2 = {questions[Math.floor(Math.random()*17)].answer}/>
          :
          <ClashQuestDone
            nextQuest = {this.nextQuest}
            statBoard = {this.state.statBoard}
            lastQuest = {this.state.questions.length === this.state.currentQuest}/>  

        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quiz: state.quiz
  }
};

export default connect(
  mapStateToProps,
  { getClash }
)(ColorClash);
