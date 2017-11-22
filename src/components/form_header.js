/**
 * Created by l.pen on 11/22/2017.
 */
/**
 * Created by l.pen on 11/22/2017.
 */


import React, {Component} from 'react'
import {Navbar,Nav,NavItem,NavDropdown,MenuItem,Form,FormGroup,FormControl,Button,Row,Col} from 'react-bootstrap'
import '../style/form_login.css'
import {Link} from 'react-router-dom'

import { hashHistory  } from 'react-router';


class FormHeader extends Component {


    constructor(props){
        super(props)

            this.onNaviagate = this.onNaviagate.bind(this)

    }



    onNaviagate(){
        //this.props.router.push('/');
        this.props.history.push('/')
    }


    render() {
        return (

            <div id="">

                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Customer Management System</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1}   onClick={this.onNaviagate} > {this.props.data} </NavItem>

                    </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        )
    }
}

export default FormHeader