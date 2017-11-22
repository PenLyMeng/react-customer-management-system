/**
 * Created by l.pen on 11/22/2017.
 */
/**
 * Created by l.pen on 11/22/2017.
 */


import React, {Component} from 'react'
import {Form,FormGroup,FormControl,Button,Row,Col} from 'react-bootstrap'
import '../style/form_sign_up.css'


class SignUp extends Component {


    render() {
        return (
            <div id="container" >

                <Col md="4" mdOffset="4">
                    <Form horizontal id="form-login">
                        <FormGroup controlId="formHorizontalEmail">


                            <Col sm={6} smOffset={5}>
                                <div className="title">Sign Up</div>
                            </Col>


                        </FormGroup>

                        <FormGroup controlId="formHorizontalEmail">
                            <Col sm={12}>
                                <FormControl type="email" placeholder="Enter Email"></FormControl>
                            </Col>

                        </FormGroup>

                        <FormGroup controlId="formHorizontalPassword">
                            <Col sm={12}>
                                <FormControl type="password" placeholder="Enter Password"></FormControl>
                            </Col>

                        </FormGroup>


                        <FormGroup controlId="formHorizontalConfirmPassword">
                            <Col sm={12}>
                                <FormControl type="password" placeholder="Enter Confirm Password"></FormControl>
                            </Col>

                        </FormGroup>


                        <FormGroup>

                            <Col md={2}>
                                <Button  id="btn-sign-up" bsClass="btn btn-primary" type="submit"><span className="glyphicon glyphicon-user" aria-hidden="true"></span> Sign Up</Button>
                            </Col>



                        </FormGroup>


                    </Form>
                </Col>

            </div>
        )
    }
}

export default SignUp