import React from 'react';
import {Link} from 'react-router-dom';

export default function ClashOver(props){
    return(
        <div>
            <h1>Clash Over Man</h1>
            <h2>Victor: {props.statBoard[0].name}</h2>
            <Link to='/games'>
                <button>Escape the aftermath</button>
            </Link>
        </div>
    )
}