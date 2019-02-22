import React, { Component} from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

class FlashTrainer extends Component{

    constructor(props){
        super(props)

        this.state = {
            thisClash: props.clash,
            current: 0,
            showAns: false,
            luckAdd: 0
        }
    }

    componentDidMount(){
        console.log(this.props)
    }

    flip= () => {
        this.setState({showAns: !this.state.showAns})
    }

    next = () => {
        if(this.state.current<=this.state.thisClash.length){
        this.setState({current: this.state.current+1})}
        if(this.state.showAns){this.flip()}
    }

    last = () => {
        this.setState({current: this.state.current-1})
        if(this.state.showAns){this.flip()}
    }

    updateLuck = () => {

    }



    render(){
        console.log(this.state.current)

        const { clash } = this.props;

        const current = clash.length && this.state.current;
    
        const quest = clash.length && clash[current].question;
        const answer = clash.length && clash[current].answer;      

        return(
            <div className='main'>
                <h1 className="title">FLASH TRAINER</h1>

                {!this.state.showAns ?
                    <div className="flashcard question">
                    <p>{quest}</p></div>
                    :
                    <div className="flashcard answer">
                    <p>{answer}</p>
                    </div>
                }

            
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
                <div className="btn2">
                    <button onClick={()=>this.flip()} />
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
  mapStateToProps
)(FlashTrainer);