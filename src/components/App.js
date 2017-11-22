import React, {Component} from 'react';

import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'



import '../style/App.css';
import Login from './login'
import SignUp from './sign_up'

import Dashboard from './dashboard'



class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path="/login" component={Login}/>
                        <Route path="/signup" component={SignUp}/>
                        <Route path="/dashboard" component={Dashboard}/>
                    </Switch>
                </div>
            </BrowserRouter>

        );
    }
}

export default App;
