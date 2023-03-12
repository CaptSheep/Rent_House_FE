import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {register} from "../service/userService";
import * as Yup from "yup";
import './CSS/style.css'