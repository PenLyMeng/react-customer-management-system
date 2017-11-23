import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './components/App';


import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducers from './reducers/index'


const store = createStore(reducers)



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>

    , document.getElementById('root'));

