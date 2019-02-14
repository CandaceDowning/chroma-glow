import React from 'react';
import Timer from './Timer';

export default function ClashQuest(props){
    return(
        <div>
            <Timer/>
            <h1>{props.question}</h1>
            <div>
                <p>answer</p>
                <p>{props.ans}</p>
            </div>
            <div>
                <p>wrong1</p>
                <p>{wrong1}</p>
            </div>
            <div>
                <p>wrong2</p>
                <p>{wrong2}</p>
            </div>


        </div>
    )
}