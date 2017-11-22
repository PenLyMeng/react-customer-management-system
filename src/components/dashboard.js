/**
 * Created by l.pen on 11/22/2017.
 */
/**
 * Created by l.pen on 11/22/2017.
 */
/**
 * Created by l.pen on 11/22/2017.
 */


import React, {Component} from 'react'
import {Form,FormGroup,FormControl,Button,Row,Col} from 'react-bootstrap'
import '../style/dash_baord.css'

import UserDetail from './user_detail'
import UserList from './user_list'
import DashbaordHeader from './dash_baord_header'

class Dashboard extends Component {


    render() {
        return (

            <div id="">
                <DashbaordHeader/>
                <UserDetail/>
                <UserList/>
            </div>
        )
    }
}

export default Dashboard