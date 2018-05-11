import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { createStore,applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { Provider, connect } from 'react-redux'
import App from './components/App';
import counterReducers from './reducers/counterReducers';

const store = createStore(counterReducers,applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)