import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing'
import Player from './components/Player/Player'
import GameLanding from './components/Games/GameLanding'
import ColorClash from './components/Games/ColorClash/ColorClash'
import FlashTrainer from './components/Games/FlashTrainer/FlashTrainer'
// import SpecWave from './components/Games/SpecWave'
// import Flashmaster from './components/Games/FlashMaster'


export default(
    <Switch>
        <Route exact path = '/' component = {Landing}/>
        <Route path = '/player' component = {Player}/>
        <Route exact path = '/games' component = {GameLanding}/>
        <Route path = '/games/clash' component = {ColorClash}/>
        <Route path = '/games/flash' component = {FlashTrainer}/>
        {/* <Route path = '/games/spectralwave' component = {SpecWave}/> */}
    </Switch>
)