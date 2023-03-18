import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {login} from "../service/userService";
import * as Yup from "yup";

import WrapLogin from "./layouts/wrapLogin";
import * as url from "url";



const InputSchema = Yup.object().shape({
    email: Yup.string()
        .required("Please Enter Email!")
    ,
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .max(10, 'Password can not longer than 10 characters')
        .required("Please Enter Password!"),
})
const Login = () => {

    const Swal = require('sweetalert2')

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogin = async (values) => {
        let dataLogin = await dispatch(login(values))
        checkLogin(dataLogin)
    }

    const checkLogin = (dataLogin) => {

        if (dataLogin.payload.mess === 'Wrong username or password. Please try again') {
            Swal.fire({
                title: 'Error!',
                text: 'Login information is incorrect',
                icon: 'error',
                confirmButtonText: 'Try Again'
            })
            localStorage.clear()
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Logged in successfully',
                showConfirmButton: false,
                timer: 1500
            })
            localStorage.setItem("token", dataLogin.payload.token)
            setTimeout(() => {
                clearTimeout()
                navigate('/home')
            }, 1500)
        }
    }
    return (
        <>
            <div className="row ht-100v flex-row-reverse no-gutters">
                <div className="col-md-6 d-flex justify-content-center align-items-center">
                    <div className="signup-form">
                        <div className="auth-logo text-center mb-5">
                            <div className="row">
                                <div className="col-md-2">
                                    <img src="./assets/images/logo-64x64.png" className="logo-img" alt="Logo"/>
                                </div>
                                <div className="col-md-10">
                                    <p>Argon Social Network</p>
                                    <span>Design System</span>
                                </div>
                            </div>
                        </div>
                        <Formik
                            validationSchema={InputSchema}
                            initialValues={{
                                email: "", password: ""
                            }}
                            onSubmit={(values, {resetForm}) => {
                                handleLogin(values)
                                resetForm()
                            }}
                        >
                            <Form>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <Field type={"text"} className={"form-control"} name={"email"} placeholder={"Email Address"}/>
                                            <ErrorMessage name={'email'} component="div"
                                                          style={{color: "red", fontSize: "15px"}}></ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <Field type={"password"} placeholder={'Enter your password'} name="password" className={"form-control"}/>
                                            <ErrorMessage name={'password'} component="div"
                                                          style={{color: "red", fontSize: "15px"}}></ErrorMessage>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <a href="forgot-password.html">Forgot password?</a>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="custom-control material-checkbox">
                                            <Field type="checkbox" className="material-control-input"/>
                                            <span className="material-control-indicator"></span>
                                            <span className="material-control-description">Remember Me</span>
                                        </label>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <div className="form-group">
                                            <button type={'submit'} className={"btn btn-primary sign-up"}>Sign In</button>
                                        </div>
                                    </div>
                                    <div className="col-md-12 text-center mt-4">
                                        <p className="text-muted">Start using your fingerprint</p>
                                        <a href="#" className="btn btn-outline-primary btn-sm sign-up" data-toggle="modal"
                                           data-target="#fingerprintModal">Use Fingerprint</a>
                                    </div>
                                    <div className="col-md-12 text-center mt-5">
                                    <span className="go-login">Not yet a member? <a
                                        href="sign-up.html">Sign Up</a></span>
                                    </div>
                                </div>
                            </Form>
                        </Formik>

                    </div>
                </div>
                <div className="col-md-6  d-flex justify-content-center align-items-center " style={{backgroundImage :  `url(require("/assets/images/background/auth-bg.png"))`}} >
                    <div className="auth-left-content mt-5 mb-5 text-center">
                        <div className="weather-small text-white">
                            <p className="current-weather"><i className='bx bx-sun'></i> <span>14&deg;</span></p>
                            <p className="weather-city">Gyumri</p>
                        </div>
                        <div className="text-white mt-5 mb-5">
                            <h2 className="create-account mb-3">Welcome Back</h2>
                            <p>Thank you for joining. Updates and new features are released daily.</p>
                        </div>
                        <div className="auth-quick-links">
                            <a href="#" className="btn btn-outline-primary">Purchase template</a>
                        </div>
                    </div>
                </div>
            </div>
    </>)
}
export default Login;
