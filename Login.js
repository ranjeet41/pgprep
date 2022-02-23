import React, { useState } from 'react';
import logo from "../Images/logo.png"
import LoginIMG from "../Images/LoginIMG.svg"
import "../Css/MyApp.css"
const Login = () => {
    const [signup, setSignup] = useState(true);
    
    return (
        <>
            <div className='container-fluid'>
                <div className="row pt-5">
                    <div className='col-xl-8 col-md-12 col-sm-12'><img src={LoginIMG} alt="img" className='img-fluid' width="80%"></img></div>
                    <div className='col-xl-4 col-md-12 col-sm-12 align-self-center' >
                        {
                            signup == true ? <div className="log">
                                <h2>Welcome Back</h2>
                                <form>
                                    <div className="input-cont">
                                        <input type="text" />
                                        <label>Username</label>
                                        <div className="border1"></div>
                                    </div>
                                    <div className="input-cont">
                                        <input type="password" />
                                        <label>Password</label>
                                        <div className="border2"></div>
                                    </div>
                                    <span className="check">
                                        <input type="checkbox" /> <label>Remember Me</label>
                                    </span>
                                    
                                    <div className="clear">

                                    <input type="submit" value="Sign In" />
                                    <button className='btn btn-warning btn-block ' onClick={() => setSignup(!signup)}>Register yourself</button>
                                    </div>
                                    
                                </form>
                            </div>
                                : (<div class="container">
                                    <div class="registration mx-auto d-block w-100">
                                        <div class="page-header text-center">
                                            <h1 className='text-primary' >Sign up</h1>
                                        </div>

                                        <form id="member-registration"  class="form-validate form-horizontal well" enctype="multipart/form-data">
                                            <fieldset>
                                                <legend><b>User Registration</b></legend>
                                                <div class="form-group">
                                                    <label for="exampleInputPassword1">Name *</label>
                                                    <input type="text" class="form-control" id="exampleInputPassword1" />
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleInputPassword1">Username *</label>
                                                    <input type="text" class="form-control" id="exampleInputPassword1" />
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleInputPassword1">Password *</label>
                                                    <input type="password" class="form-control" id="exampleInputPassword1" />
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleInputPassword1">Confirm Password *</label>
                                                    <input type="password" class="form-control" id="exampleInputPassword1" />
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Email Address *</label>
                                                    <input type="email" class="form-control" id="exampleInputEmail1" />
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Confirm Email Address *</label>
                                                    <input type="email" class="form-control" id="exampleInputEmail1" />
                                                </div>
                                                <div class="d-flex justify-content-between align-items-center">
                                                    <div class="form-group d-flex justify-content-start">
                                                        <button type="submit" class="btn btn-primary">Submit</button>
                                                    </div>
                                                    <div class="form-check form-group d-flex justify-content-end">
                                                        <button className='btn btn-success' onClick={() => setSignup(!signup)}>Sign in </button>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>)
                        }

                    </div>
                </div>

            </div>




        </>
    )
}
export default Login;