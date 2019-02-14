import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import ClashPlayerQuest from './ClashPlayerQuest';
import PlayerQuestionOver from './Player_Question_Over';

class ClashPlayer extends Component {
    constructor(){
        super()

        this.state = {
            rightRoom: false,
            gamestart: false,
            questOver: false,
            
        }
    }
}