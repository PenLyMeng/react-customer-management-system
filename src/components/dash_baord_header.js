/**
 * Created by l.pen on 11/22/2017.
 */
/**
 * Created by l.pen on 11/22/2017.
 */


import React, {Component} from 'react'
import {Navbar,Nav,NavItem,NavDropdown,MenuItem,Form,FormGroup,FormControl,Button,Row,Col} from 'react-bootstrap'
import {startSignout}  from '../action/index'
import {connect} from 'react-redux'
import '../style/form_login.css'


class DashbaordHeader extends Component {


    constructor(props){
        super(props)

        this.startSignout = this.startSignout.bind(this)
    }

    startSignout(){
        this.props.startSignout()
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
                        <NavDropdown  eventKey={1} title="Penlymeng" id="basic-nav-dropdown">
                            <MenuItem eventKey={1.1}>Profile</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={1.2} onClick={this.startSignout}>Log out</MenuItem>

                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>({})

export default connect(mapDispatchToProps,{startSignout})(DashbaordHeader)