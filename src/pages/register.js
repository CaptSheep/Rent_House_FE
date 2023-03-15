import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {register} from "../service/userService";
import * as Yup from "yup";
import './CSS/style.css'


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
            navigate('/')
        }
    }
    return (
        <>
            <header>
                <div className="nav container">
                    <Link to={'/home'} className={"logo"} >
                        <button className={"logo"} style={{border: "none" , outline: 'none', background : "transparent"}}> Home</button>
                    </Link>
                    <input type="checkbox" name="" id="menu" />
                    <label htmlFor="menu"> <i className='bx bx-menu' id="menu-icon"></i></label>

                    <ul className="navbar">
                        <li> <Link to={'/about-us'} className={"logo"} >
                            <button className={"logo"} style={{border: "none" , outline: 'none', background : "transparent"}}> About Us</button>
                        </Link></li>
                        <li> <Link to={'/sale'} className={"logo"} >
                            <button className={"logo"} style={{border: "none" , outline: 'none', background : "transparent"}}> Sale</button>
                        </Link></li>
                        <li> <Link to={'/properties'} className={"logo"} >
                            <button className={"logo"} style={{border: "none" , outline: 'none', background : "transparent"}}> Properties</button>
                        </Link></li>
                    </ul>

                </div>

            </header>
            <Formik
                validationSchema={InputSchema}
                initialValues={{
                    userName: "", password: "", confirmPassword: "", email: '', address: '', phoneNumber: '',
                    fullName: ''
                }}
                onSubmit={(values, {resetForm}) => {
                    handleRegister(values)
                    resetForm()
                }}
            >
                <div className="login container">
                    <div className="login-container">
                        <h2>Welcome , Let's get started</h2>
                        <Form>
                            <span>User Name</span>
                            <Field type={"text"} name="userName" placeholder={"Your User Name"}/>
                            <ErrorMessage name={'userName'} component="div"
                                          style={{color: "red", fontSize: "15px"}}/>
                            <span>Full Name</span>
                            <Field type={"text"} name="fullName" placeholder={"Your Full Name"}/>
                            <ErrorMessage name={'fullName'} component="div"
                                          style={{color: "red", fontSize: "15px"}}/>
                            <span>Address</span>
                            <Field type={"text"} name="address" placeholder={"Your Address"}/>
                            <ErrorMessage name={'address'} component="div"
                                          style={{color: "red", fontSize: "15px"}}/>
                            <span>Enter your email address</span>
                            <Field type={"email"} name="email" placeholder={"yourmail@gmail.com"}/>
                            <ErrorMessage name={'email'} component="div"
                                          style={{color: "red", fontSize: "15px"}}/>
                            <span>Phone</span>
                            <Field type={'text'} name="phoneNumber" placeholder={"Enter your number"}/>
                            <ErrorMessage name={'phoneNumber'} component="div"
                                          style={{color: "red", fontSize: "15px"}}/>
                            <span>Password</span>
                            <Field type={"password"} placeholder={'Enter your password'} name="password"/>
                            <ErrorMessage name={'password'} component="div"
                                          style={{color: "red", fontSize: "15px"}}/>
                            <span>Confirm Password</span>
                            <Field type={"password"} name="confirmPassword" placeholder={"Enter Confirm Password"}/>
                            <ErrorMessage name={'confirmPassword'} component="div"
                                          style={{color: "red", fontSize: "15px"}}/>
                            <button type={"submit"} className={"btn"}>Register</button>
                        </Form>
                        <Link to={'/user/login'} className={"btn"}>Already have account</Link>
                    </div>
                    <div className={"login-image"}>
                        <img src={'/img/sign-up.png'} alt=""/>
                    </div>
                </div>


            </Formik>


        </>
    )
}
export default Register