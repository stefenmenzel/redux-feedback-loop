import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

//*********Starter info for reducers, passed to generic form*************************/
const feelingInfo = {
    header: 'How are you feeling today?',
    label: 'Feeling',
    value: 0,
    type: 'SET_FEELING',
    nextPage: '/understanding'
}

const understandingInfo = {
    header: 'How well are you understanding the content?',
    label: 'Understanding',
    value: 0,
    type: 'SET_UNDERSTANDING',
    nextPage: '/support'
}

const supportInfo = {
    header: 'How well are you being supported?',
    label: 'Support',
    value: 0,
    type: 'SET_SUPPORT',
    nextPage: '/comment'
}
/***********************************************************/


//Reducers to store different pages information
const feeling = (state = feelingInfo, action) => {
    if(action.type === "SET_FEELING"){
        return {...state, value: action.payload.formValue};
    }
    else if(action.type === "RESET_STATE"){
        return feelingInfo
    }
    return state;
}

const understanding = (state = understandingInfo, action) => {
    if(action.type === 'SET_UNDERSTANDING'){
        return { ...state, value: action.payload.formValue };
    }
    else if (action.type === "RESET_STATE") {
        return understandingInfo
    }
    return state;
}

const support = (state = supportInfo, action) => {
    if(action.type === 'SET_SUPPORT'){
        return { ...state, value: action.payload.formValue };
    }
    else if (action.type === "RESET_STATE") {
        return supportInfo
    }
    return state;
}

const comment = (state = {newComment: ''}, action) => { 
    if(action.type === 'SET_COMMENT'){
        return {newComment: action.payload.newComment};
    }
    else if (action.type === "RESET_STATE") {
        return {newComment: ''}
    }
    return state;
}

const submitted = (state = {isSubmitted: false}, action) => {
    if(action.type === 'SUBMIT_FEEDBACK'){
        return {isSubmitted: !state.isSubmitted};
    }
    return state;
}
//END REDUCERS

//Stash reducers in the store
const storeInstance = createStore (
    combineReducers({
        feeling,
        understanding,
        support,
        comment,
        submitted
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
