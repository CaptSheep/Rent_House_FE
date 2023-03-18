import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {register} from "../service/userService";
import * as Yup from "yup";
// import './CSS/style.css'


const InputSchema = Yup.object().shape({
    email: Yup.string()
        .required("Please Enter Email!"),
    password: Yup.string()
        .required('Please Enter Password')
        .min(6, 'Can not less than 6 characters')
        .max(20, 'Can not over than 20 characters'),
    confirmPassword: Yup.string()
        .required('Please Enter Confirm Password'),
    fullName: Yup.string()
        .required('Please Enter Full Name'),
    userName: Yup.string()
        .required('Please Enter User Name'),
    address: Yup.string()
        .required('Please Enter Address '),
    phoneNumber: Yup.string()
        .required('Please Enter Phone Number')
        .max(10, 'Phone Number can not longer than 10 character')
})

const Register = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const Swal = require('sweetalert2')
    const handleRegister = async (values) => {
        if (values.password !== values.confirmPassword) {
            Swal.fire({
                title: 'Error!',
                text: 'Password Repeat Wrong!',
                icon: 'error',
                confirmButtonText: 'Try Again'
            })
        } else {
            let data = {
                email: values.email,
                password: values.password,
                confirmPassword: values.confirmPassword,
                fullName: values.fullName,
                userName: values.userName,
                address: values.address,
                phoneNumber: values.phoneNumber
            }
            let registerMess = await dispatch(register(data))
            checkRepeatUser(registerMess)
        }
    }
    const checkRepeatUser = (registerMess) => {
        if (registerMess.payload.mess === 'User existed') {
            Swal.fire({
                title: 'Error!',
                text: 'Account already exists',
                icon: 'error',
                confirmButtonText: 'Try Again'
            })
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Register Successfully',
                showConfirmButton: false,
                timer: 1500
            })
            navigate('/user/login')
        }
    }
    return (
        <>

            <Formik
                validationSchema={InputSchema}
                initialValues={{
                    userName: "", password: "", confirmPassword: "", email: '', address: '', phoneNumber: '',
                    fullName: ''
                }}
                onSubmit={(values, {resetForm}) => {
                    // handleRegister(values)
                    console.log(values)
                    resetForm()
                }}
            >
                <div className="row ht-100v flex-row-reverse no-gutters">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className="signup-form">
                            <div className="auth-logo text-center mb-5">
                                <div className="row">
                                    <Link to={'/home'}>
                                        <img src="./assets/images/logo-64x64.png" className="logo-img" alt="Logo"/>
                                    </Link>
                                    <div className="col-md-10">
                                        <p>Jackie's Rent House</p>
                                        <span>Design System</span>
                                    </div>
                                </div>
                            </div>
                            <Form className="pt-5">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <Field type="text" className="form-control" name="fullName"
                                                   placeholder="Full Name"/>
                                            <ErrorMessage name={'fullName'} component="div"
                                                          style={{color: "red", fontSize: "15px"}}/>

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <Field type="text" className="form-control" name="userName" placeholder="User Name"/>
                                            <ErrorMessage name={'userName'} component="div"
                                                          style={{color: "red", fontSize: "15px"}}/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <Field type="text" className="form-control" name="email"
                                                   placeholder="Email Address"/>
                                            <ErrorMessage name={'email'} component="div"
                                                          style={{color: "red", fontSize: "15px"}}/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <Field type="text" className="form-control" name="phoneNumber"
                                                   placeholder="Phone Number"/>
                                            <ErrorMessage name={'phoneNumber'} component="div"
                                                          style={{color: "red", fontSize: "15px"}}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <Field type="text" className="form-control" name="address"
                                                   placeholder="Address"/>
                                            <ErrorMessage name={'address'} component="div"
                                                          style={{color: "red", fontSize: "15px"}}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <Field type="password" className="form-control" name="password"
                                                   placeholder="Password"/>
                                            <ErrorMessage name={'password'} component="div"
                                                          style={{color: "red", fontSize: "15px"}}/>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <Field type="password" className="form-control" name="confirmPassword"
                                                   placeholder="Confirm Password"/>
                                            <ErrorMessage name={'confirmPassword'} component="div"
                                                          style={{color: "red", fontSize: "15px"}}/>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <p className="agree-privacy">By clicking the Sign Up button below you agreed to
                                            our privacy policy and terms of use of our website.</p>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="go-login">Already a member? <Link to={'/user/login'}>Sign In</Link></span>
                                    </div>
                                    <div className="col-md-6 text-right">
                                        <div className="form-group">
                                            <button type={'submit'} className="btn btn-primary sign-up">Sign Up</button>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                    <div className="col-md-6 auth-bg-image d-flex justify-content-center align-items-center">
                        <div className="auth-left-content mt-5 mb-5 text-center">
                            <div className="weather-small text-white">
                                <p className="current-weather"><i className='bx bx-sun'></i> <span>14&deg;</span></p>
                                <p className="weather-city">Gyumri</p>
                            </div>
                            <div className="text-white mt-5 mb-5">
                                <h2 className="create-account mb-3">Create Account</h2>
                                <p>Enter your personal details and start journey with us.</p>
                            </div>
                            <div className="auth-quick-links">
                                <a href="#" className="btn btn-outline-primary">Purchase template</a>
                            </div>
                        </div>
                    </div>
                </div>


            </Formik>


        </>
    )
}
export default Register