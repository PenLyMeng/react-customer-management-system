/**
 * Created by l.pen on 11/22/2017.
 */
/**
 * Created by l.pen on 11/22/2017.
 */


import React, {Component} from 'react'
import {Form,FormGroup,FormControl,Button,Row,Col} from 'react-bootstrap'



import {startSignUp} from '../action/index'
import '../style/form_sign_up.css'

import {connect} from 'react-redux'


class SignUp extends Component {



    constructor(props){
        super(props)

        this.startSignUp = this.startSignUp.bind(this)
    }

    startSignUp(){
        if(this.inputPassword.value === this.inputConfirmPassword.value){
            startSignUp(this.inputEmail.value,this.inputPassword.value)
        }else{
            alert("password and confirm password is not match")
        }

    }

    render() {
        return (
            <div id="container" >

                <Col md={4} mdOffset={4}>
                    <Form horizontal id="form-login">
                        <FormGroup controlId="formHorizontalEmail">


                            <Col sm={6} smOffset={5}>
                                <div className="title">Sign Up</div>
                            </Col>


                        </FormGroup>

                        <FormGroup controlId="formHorizontalEmail">
                            <Col sm={12}>
                                <FormControl inputRef={email => this.inputEmail = email} type="email" placeholder="Enter Email"></FormControl>
                            </Col>

                        </FormGroup>

                        <FormGroup controlId="formHorizontalPassword">
                            <Col sm={12}>
                                <FormControl inputRef={password => this.inputPassword = password} type="password" placeholder="Enter Password"></FormControl>
                            </Col>

                        </FormGroup>


                        <FormGroup controlId="formHorizontalConfirmPassword">
                            <Col sm={12}>
                                <FormControl inputRef={confirmPassword => this.inputConfirmPassword = confirmPassword} type="password" placeholder="Enter Confirm Password"></FormControl>
                            </Col>

                        </FormGroup>


                        <FormGroup>

                            <Col md={2}>
                                <Button  id="btn-sign-up" bsClass="btn btn-primary" onClick={this.startSignUp}><span className="glyphicon glyphicon-user" aria-hidden="true"></span> Sign Up</Button>
                            </Col>



                        </FormGroup>


                    </Form>
                </Col>

            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapDispatchToProps,{startSignUp})(SignUp)



