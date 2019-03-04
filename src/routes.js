import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from './components/Landing'
import Player from './components/Player/Player'
import GameLanding from './components/Games/GameLanding'
import ColorClash from './components/Games/ColorClash/ColorClash'
import ClashLanding from './components/Games/ColorClash/ClashLanding'
import FlashTrainer from './components/Games/FlashTrainer/FlashTrainer'
import FlashLanding from './components/Games/FlashTrainer/FlashLanding'
import SpecWave from './components/Games/SpecWave/SpecWave'
import Calibrate from './components/Games/SpecWave/Calibrate'
import Scanner from './components/Player/Scanner'
import DonateChart from './components/Player/DonateChart'
import Log from './components/Player/Log'
import ShipsFunction from './components/Player/ShipsFunction';
import CalReset from './components/Player/CalRest';


export default(
    <Switch>
        <Route exact path = '/' component = {Landing}/>
        <Route exact path = '/player' component = {Player}/>
        <Route exact path = '/games' component = {GameLanding}/>
        <Route exact path = '/games/clash' component = {ColorClash}/>
        <Route path= '/games/clashland' component = {ClashLanding}/>
        <Route path = '/games/flashland' component = {FlashLanding}/>
        <Route path = '/games/flash' component = {FlashTrainer}/>
        <Route path = '/games/specwave' component = {SpecWave}/>
        <Route path = '/games/calibrate' component = {Calibrate}/>
        <Route path = '/player/scanner' component = {Scanner}/>
        <Route path = '/player/donate' component = {DonateChart}/>
        <Route path = '/player/log' component = {Log}/>
        <Route path = '/player/ship' component = {ShipsFunction}/>
        <Route path = '/player/calreset' component = {CalReset}/>
    </Switch>
)