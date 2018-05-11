import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/Index';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import todoApp from './components/TodoList';
const store = createStore(todoApp);

ReactDOM.render(
    <Provider store={store}>
        <Index/>
    </Provider>
        ,
        document.querySelector('#root'));