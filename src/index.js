import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

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

const feeling = (state = feelingInfo, action) => {
    if(action.type === "SET_FEELING"){
        return action.payload.formValue;
    }
    return state;
}

const understanding = (state = understandingInfo, action) => {
    if(action.type === 'SET_UNDERSTANDING'){
        return action.payload.formValue;
    }
    return state;
}

const support = (state = supportInfo, action) => {
    if(action.type === 'SET_SUPPORT'){
        return action.payload.formValue;
    }
    return state;
}

const storeInstance = createStore (
    combineReducers({
        feeling,
        understanding,
        support
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
