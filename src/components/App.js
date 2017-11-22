import React, {Component} from 'react';
import '../style/App.css';
import Login from './login'
import SignUp from './sign_up'

import Dashbaord from './dashboard'


class App extends Component {
    render() {
        return (
            <div>
                <Dashbaord/>
            </div>
        );
    }
}

export default App;
