/**
 * Created by l.pen on 11/22/2017.
 */


import React, {Component} from 'react'
import {Form,FormGroup,FormControl,Button,Row,Col} from 'react-bootstrap'
import '../style/form_login.css'
import FormHeader from './form_header'


class Login extends Component {


    render() {
        return (

           <div>
               <FormHeader data="Sign Up"/>
               <div id="container">



                   <Col md={4} mdOffset={4}>
                       <Form horizontal id="form-login">
                           <FormGroup controlId="formHorizontalEmail">


                               <Col sm={6} smOffset={5}>
                                   <div className="title">Login</div>
                               </Col>


                           </FormGroup>

                           <FormGroup controlId="formHorizontalEmail">
                               <Col sm={12}>
                                   <FormControl type="email" placeholder="Enter Email"></FormControl>
                               </Col>

                           </FormGroup>

                           <FormGroup controlId="formHorizontalEmail">
                               <Col sm={12}>
                                   <FormControl type="email" placeholder="Enter Password"></FormControl>
                               </Col>

                           </FormGroup>

                           <FormGroup>

                               <Col md={2}>
                                   <Button  id="btn-login" bsClass="btn btn-success" type="submit"><span className="glyphicon glyphicon-lock" aria-hidden="true"></span> Login</Button>
                               </Col>



                           </FormGroup>


                       </Form>
                   </Col>

               </div>
           </div>

        )
    }
}

export default Login