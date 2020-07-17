import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'
import reducer from './reducers';

import initialState from './initialState'

import App from './routes/App';

let composeEnhacers

composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer,
    initialState,
    composeEnhacers(applyMiddleware(thunk))
    );

const history = createBrowserHistory()

ReactDOM.render(
       
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    
    document.getElementById('app')
);