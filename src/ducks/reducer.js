import axios from 'axios';

const initialState = {
    player: {},
    flash:{},
    decoy:{},
    rank:{},
    stats:{},
    donate:{},
    error:""
}


//auth action variable declaration
const SIGN_UP = 'SIGN_UP';
const LOG_IN = 'LOG_IN';
const GET_PLAYER = 'GET_PLAYER';
const LOG_OUT = 'LOG_OUT';
const DELETE_PLAYER = 'DELETE_PLAYER';


//game action variable declaration
const GET_FLASH = 'GET_FLASH'
const GET_DECOY = 'GET_DECOY'
const UPDATE_SCORE = 'UPDATE_SCORE'
const UPDATE_LUCK = 'UPDATE_LUCK'
const GET_RANK = 'GET_RANK'
const GET_STATS = 'GET_STATS'
const GET_DONATE = 'GET_DONATE'
const CAL_RESET = 'CAL_RESET'


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

export function deletePlayer(id){
    return{
        type: DELETE_PLAYER,
        payload: axios.delete(`/auth/deleteplayer/${id}`)
    }
};

export function getFlash(){
    return{
        type: GET_FLASH,
        payload: axios.get('/game/flash')
    }
}

export function getDecoy(){
    return{
        type: GET_DECOY,
        payload: axios.get('/game/decoy')
    }
}

export function updateScore(id, finalScore){
    return{
        type: UPDATE_SCORE,
        payload: axios.put('/game/score', {id, finalScore})
    }
};

export function updateLuck(id, luck){
    return{
        type: UPDATE_LUCK,
        payload: axios.put('/game/luck', {id, luck})
    }
};

export function getRank(){
    return{
        type: GET_RANK,
        payload: axios.get('/game/rank')
    }
};
export function getStats(){
    return{
        type: GET_STATS,
        payload: axios.get('/game/stats')
    }
};
export function getDonate(){
    return{
        type: GET_DONATE,
        payload: axios.get('/game/donaterank')
    }
};

export function calReset(){
    return{
        type: CAL_RESET,
        payload: axios.put('/game/calreset')
    }
};




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
        };
        case `${DELETE_PLAYER}_FULFILLED`:
        return {
            ...state,
            player: action.payload.data
        };
        case `${GET_FLASH}_FULFILLED`:
        return {
            ...state,
            flash: action.payload.data
        };
        case `${GET_DECOY}_FULFILLED`:
        return {
            ...state,
            decoy: action.payload.data
        };
        case `${UPDATE_SCORE}_FULFILLED`:
        return{
            ...state,
            player: action.payload.data
        };
        case `${GET_RANK}_FULFILLED`:
        return{
            ...state,
            rank: action.payload.data
        };
        case `${GET_STATS}_FULFILLED`:
        return{
            ...state,
            stats: action.payload.data
        };
        case `${GET_DONATE}_FULFILLED`:
        return{
            ...state,
            donate: action.payload.data
        };
        case `${CAL_RESET}_FULFILLED`:
        return{
            ...state,
            level: action.payload.data
        };
        default:
        return state;
    }
}