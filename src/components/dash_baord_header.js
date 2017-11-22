/**
 * Created by l.pen on 11/22/2017.
 */
/**
 * Created by l.pen on 11/22/2017.
 */


import React, {Component} from 'react'
import {Navbar,Nav,NavItem,NavDropdown,MenuItem,Form,FormGroup,FormControl,Button,Row,Col} from 'react-bootstrap'
import '../style/form_login.css'


class DashbaordHeader extends Component {


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
                        <NavDropdown  eventKey={1} title="Penlymeng" id="basic-nav-dropdown">
                            <MenuItem eventKey={1.1}>Profile</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={1.2}>Log out</MenuItem>

                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        )
    }
}

export default DashbaordHeader