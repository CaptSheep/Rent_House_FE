import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {register} from "../service/userService";
import * as Yup from "yup";
import './CSS/style.css'
import {carryValue} from "@testing-library/user-event/dist/keyboard/shared";


const InputSchema = Yup.object().shape({
    name: Yup.string()
        .required("Please Enter Name!"),
    email: Yup.string()
        .required("Please Enter Email!"),
    password : Yup.string()
        .required('Please Enter Password')
        .min(6,'Can not less than 6 characters')
        .max(20,'Can not over than 20 characters')
    ,
    confirmPassword : Yup.string()
        .required('Please Enter Confirm Password')
    ,
    fullName : Yup.string()
        .required('Please Enter Full Name'),
    userName : Yup.string()
        .required('Please Enter User Name')
        .max(255,'User Name can not over 255 characters'),
    address : Yup.string()
        .required('Please Enter Address '),
    phoneNumber : Yup.string()
        .required('Please Enter Phone Number')
        .max(10,'Phone Number can not longer than 10 character')
})

const Register = ()=>{
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
                email: values.email, password: values.password, name : values.name, confirmPassword : values.confirmPassword
                , fullName : values.fullName, userName : values.userName, address : values.address, phoneNumber : values.phoneNumber
            }
            let registerMess = await dispatch(register(data))
            checkRepeatUser(registerMess)
        }
    }
    const checkRepeatUser = (registerMess) => {
        if (registerMess.payload.mess == 'User existed') {
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
    return(
        <>
            <Formik  validationSchema={InputSchema}
                     initialValues={{
                         userName: "", password: "", repeatPassword: "",
                     }}
                     onSubmit={(values, {resetForm}) => {
                         handleRegister(values)
                         resetForm()
                     }}
                     >
                <header>
                    <div className={"nav container"}>
                        {/*<a href='/home' className={"logo"}><i className={'bx bx-home'}></i>Home</a>*/}
                        <Link to={'/home'} className={"logo"} >
                            <button className={"logo"} style={{border: "none" , outline: 'none', background : "transparent"}}> Home</button>
                        </Link>
                        <a href="" className={"btn"}>Login</a>
                    </div>

                </header>
                <div className="login container">
                    <div className="login-container">
                        <h2>Welcome , Let's get started</h2>
                        <p>Already have account <Link to={'user/login'} className={'btn'}>Log In</Link></p>
                       <Form>
                            <span>Full Name</span>
                            <Field type="text" name="" id="" placeholder="Your Name" required/>
                                <span>Enter your email address</span>
                                <Field type="email" name="email" id="" placeholder="yourmail@gmail.com" required/>
                                    <span>Phone</span>
                                    <Field type="tel" name="phoneNumber" id="" placeholder="Enter your number" required/>
                                        <span>Enter your password</span>
                                        <Field type="password" name="password" id="" placeholder="At least 8" required/>
                                            <Field type="submit" value="Sign Up" class="button" />
                                              <Link to={'/user/login'}>Already have account</Link>
                        </Form>
                        <Link to={'/user/login'} className={"btn"}>Log In</Link>
                    </div>
                    <div className={"login-image"}>
                        <img src={'img/sign-up.png'} alt=""/>
                    </div>
                </div>

                <section className={"footer"}>
                    <div className={"footer-container container"}>
                        <h2>R. State</h2>
                        <div className="footer-box">
                            <h3>Quick Links</h3>
                            <a href="#">Agency</a>
                            <a href="#">Building</a>
                            <a href="#">Rates</a>
                        </div>
                        <div class="footer-box">
                            <h3>Locations</h3>
                            <a href="#">Birmingham</a>
                            <a href="#">London</a>
                            <a href="#">New York</a>
                        </div>
                        <div class="footer-box">
                            <h3>Contact</h3>
                            <a href="#">+44 (0)800 123 4567</a>
                            <a href="#">yourmail@gmail.com</a>
                            <div class="social">
                                <a href="#"><i class='bx bxl-facebook' ></i></a>
                                <a href="#"><i class='bx bxl-twitter' ></i></a>
                                <a href="#"><i class='bx bxl-instagram' ></i></a>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="copyright">
                    <p>&#169; FEA All Right Reserved</p>
                </div>


            </Formik>
        </>
    )
}
export default Register