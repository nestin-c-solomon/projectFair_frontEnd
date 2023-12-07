import React from 'react'
import {Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'

function Auth({register}) {
    const registerForm = register?true:false 
  return (
    <div style={{width:'100%', height:'100vh'}} className='d-flex justify-content-center align-items-center'>
        <div className=" w-75 container">
            <Link style={{textDecoration:'none', color:'blue'}} to={'/'}><i class="fa-solid fa-arrow-right fa-rotate-180 me-2"></i>Back to home</Link>
            <div className="card bg-success p-5 rounded">
                <div className='row align-items-center'>
                    <div className="col-lg-6">
                        <img src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=" width={'100%'} alt="" />
                    </div>
                    <div className="col-lg-6">
                        <div className='d-flex align-items-center flex-column'>
                            <h1 className='text-center text-light'>  <i class="fa-brands fa-stack-overflow fa-2x"></i>Project Fair</h1>
                            <h5 className='text-light mt-3'>
                                {
                                    registerForm?"Sign Up to your account" : "Sign In to your account"
                                }
                            </h5>
                            <Form className='mt-5 w-100'>

                                {
                                    registerForm &&
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Username" />
                                    </Form.Group>
                                }

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Email Id" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Password" />
                                    </Form.Group>

                                {
                                    registerForm?
                                    <div>
                                        <button className='btn btn-warning rounded mt-3'>Register</button>
                                        <p>Already a user? Click here to <Link to={'/login'} style={{color:'blue'}}>Login</Link> </p>
                                    </div>:
                                    <div>
                                        <button className='btn btn-warning rounded mt-3'>Login</button>
                                        <p>New user? Click here to <Link to={'/register'} style={{color:'blue'}}>Register</Link> </p>
                                    </div>
                                }

                            </Form>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        
    </div>
  )
}

export default Auth