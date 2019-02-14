import React from 'react';
import ClashOver from './ClashOver';


export default function QuestDone(props){
    return(
        <div>
          {!props.lastQuestion ?
            <div>
                <div>
                    <h1>Question Over</h1>
                </div> 
                <div>
                <button onClick={props.nextQuest}>Next Question</button>
                </div>   
            </div> 
            :
            <GameOver statBoard={props.statBoard}/>
        }
        </div>
    )
}