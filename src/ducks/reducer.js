import axios from 'axios';
const initialState = {
    player: {},
    clash:{},
    error:""
}


//auth action variable declaration
const SIGN_UP = 'SIGN_UP';
const LOG_IN = 'LOG_IN';
const GET_PLAYER = 'GET_PLAYER';
const LOG_OUT = 'LOG_OUT';


//game action variable declaration
const GET_CLASH = 'GET_CLASH'
const UPDATE_SCORE = 'UPDATE_SCORE'

//action creators
export function signup(playername, password){
    return{
        type: SIGN_UP,
        payload: axios.post('/auth/signup', { playername, password})
    };
};

export function login(playername, password){
    return{
        type: LOG_IN,
        payload: axios.post('/auth/login', { playername, password})
    };
};

export function getPlayer(){
    return{
        type: SIGN_UP,
        payload: axios.get('/auth/getPlayer')
    };
};

export function logout(){
    return{
        type: LOG_OUT,
        payload: axios.post('/auth/logout')
    }
};

export function getClash(){
    return{
        type: GET_CLASH,
        payload: axios.get('/game/clash')
    }
}

export function updateScore(id, finalScore){
    return{
        type: UPDATE_SCORE,
        payload: axios.put('/game/score', {id, finalScore})
    }
}


//reducer
export default function reducer(state=initialState, action){
    switch(action.type){
        case `${SIGN_UP}_FULFILLED`:
        return {
            ...state,
            player: action.payload.data
        };
        case `${SIGN_UP}_REJECTED`:     
        return {
            ...state,
            error: action.payload.data
        }
        case `${LOG_IN}_FULFILLED`:
        return {
            ...state,
            player: action.payload.data
        };
        case `${LOG_IN}_REJECTED`:
        return {
            ...state,
            error:action.payload.data
        };
        case `${GET_PLAYER}_FULFILLED`:
        return {
            ...state,
            player: action.payload.data
        };
        case `${LOG_OUT}_FULFILLED`:
        return {
            ...state,
            player:action.payload.data
        }
        case `${GET_CLASH}_FULFILLED`:
        return {
            ...state,
            clash: action.payload.data
        }
        case `${UPDATE_SCORE}_FULFILLED`:
        return{
            ...state,
            player: action.payload.data
        }
        default:
        return state;
    }
}