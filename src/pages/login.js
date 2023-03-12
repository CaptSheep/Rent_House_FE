import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {login} from "../service/userService";
import * as Yup from "yup";
import './CSS/style.css'
import data from "bootstrap/js/src/dom/data";



const InputSchema = Yup.object().shape({
    email: Yup.string()
        .required("Please Enter Email!"),
    password: Yup.string()
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
            localStorage.setItem("token",dataLogin.payload.token)
            setTimeout(() => {
                clearTimeout()
                navigate('/home')
            }, 1500)
        }
    }
    return(
        <>
            <header>
                <div className={"nav container"}>
                    {/*<a href='/home' className={"logo"}><i className={'bx bx-home'}></i>Home</a>*/}
                    <Link to={'/home'} className={"logo"} >
                        <button className={"logo"} style={{border: "none" , outline: 'none', background : "transparent"}}> Home</button>
                    </Link>
                    <a href="" className={"btn"}>Sign Up</a>
                </div>

            </header>
            <Formik
                validationSchema={InputSchema}
                initialValues={{
                    email: "", password: ""
                }}
                onSubmit={(values, {resetForm}) => {
                    handleLogin(values)
                    resetForm()
                }}>

                <div className={"login container"}>
                <div className={"login-container"}>
                    <h2>Login To Continue</h2>
                    <p>Log in with your data that you entered<br/> during your registration</p>
                    <Form >
                    <span>Enter your email address</span>
                    <Field type={'text'} name={'email'} placeholder={'Please input your email : '} />
                    <span>Enter your password</span>
                    <Field type={'password'} name={"password"}  placeholder={"Password"} />
                        <button className={"btn"} >Login</button>
                    <a href="#">Forget Password?</a>
                    </Form>
                    <a href="" className={"btn"}>Sign up now</a>
                </div>
                    <div className={"login-image"}>
                        <img src={'/img/login.png'} alt="" />
                    </div>
                </div>
            </Formik>

        </>
    )
}
export default Login;