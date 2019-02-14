import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing'
import Player from './components/Player'
import GameLanding from './components/Games/GameLanding'
import ColorClash from './components/Games/ColorClash/ColorClash'
// import SpecWave from './components/Games/SpecWave'
// import Flashmaster from './components/Games/FlashMaster'


export default(
    <Switch>
        <Route exact path = '/' component = {Landing}/>
        <Route path = '/player' component = {Player}/>
        <Route exact path = '/games' component = {GameLanding}/>
        <Route path = '/games/colorclash' component = {ColorClash}/>
        {/* <Route path = '/games/spectralwave' component = {SpecWave}/>
        <Route path = '/games/flashmaster' component = {FlashMaster}/> */}
    </Switch>
)