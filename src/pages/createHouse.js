import React, {useEffect, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {createHome} from "../service/homeService";
import * as Yup from "yup";
// import './CSS/style.css'
import {
    ref, getDownloadURL, uploadBytesResumable
} from "firebase/storage";
import {storage} from "./firebase/config";
import {showCategories} from "../service/categoryService";


const InputSchema = Yup.object().shape({
    name: Yup.string()
        .required("Please Enter Name!"),
    address: Yup.string()
        .required("Please Enter Address!"),
    price: Yup.number()
        .min(1, "Can't be less than 1$")
        .required("Please Enter Price!"),
    description: Yup.string()
        .required("Please Enter Description!"),
    categoryId: Yup.string()
        .required("Please Chose Category!"),
    bedroom: Yup.string()
        .required("Please Enter Bedroom!"),
    bathroom: Yup.string()
        .required("Please Enter Bathroom!"),
})

const CreatePost = () => {


    const [images, setImages] = useState([]);
    const [urls, setUrls] = useState([]);
    const [progress, setProgress] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userId = useSelector(state => {
        return state.user.userNow.userInfo.id
    })

    useEffect((state) => {
        dispatch(showCategories())
    })


    const handleSubmit = async (values) => {
        let avatar = urls[0]
        let data = {...values, 'avatar': avatar}
        console.log(data)
        await dispatch(createHome(data))
        // navigate('/home')
    }

    const handleChange = (e) => {
        for (let i = 0; i < e.target.files.length; i++) {
            const newImage = e.target.files[i];
            newImage["id"] = Math.random();
            setImages((prevState) => [...prevState, newImage]);
        }

    };

    const handleUpload = () => {
        const newArray = [];
        if (images.length > 0) {
            images.map((image) => {
                const storageRef = ref(storage, `/images/${image.name}`);
                const uploadTask = uploadBytesResumable(storageRef, image);
                newArray.push(uploadTask);
                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        const progress = Math.round(
                            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                        );
                        setProgress(progress);
                    },
                    (error) => {
                        console.log(error);
                    },
                    async () => {
                        await getDownloadURL(uploadTask.snapshot.ref).then((downloadURLs) => {
                            setUrls(prevState => [...prevState, downloadURLs])
                            console.log("File available at", downloadURLs);
                        });
                    }
                );
            });
        }


    }


    return (
        <>

            <Formik validationSchema={InputSchema} initialValues={{
                name: '',
                address: '',
                price: '',
                description: '',
                categoryId: '',
                bedroom: '',
                bathroom: '',
                avatar: '',
                userId: userId
            }} onSubmit={(values) => handleSubmit(values)
            }>
                {(props) => {

                    return (
                        <div className="row ht-100v flex-row-reverse no-gutters">
                            <div className="col-md-6 d-flex justify-content-center align-items-center">
                                <div className="signup-form">
                                    <div className="auth-logo text-center mb-5">
                                        <div className="row">
                                            <Link to={'/home'}>
                                                <img src="./assets/images/logo-64x64.png" className="logo-img"
                                                     alt="Logo"/>
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
                                                    <Field type="text" className="form-control" name="name"
                                                           placeholder="Room Name"/>
                                                    <ErrorMessage name={'name'} component="div"
                                                                  style={{color: "red", fontSize: "15px"}}/>

                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <Field type="text" className="form-control" name="address"
                                                           placeholder="Home Address"/>
                                                    <ErrorMessage name={'address'} component="div"
                                                                  style={{color: "red", fontSize: "15px"}}/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <Field type="text" className="form-control" name="price"
                                                           placeholder="Home Price"/>
                                                    <ErrorMessage name={'price'} component="div"
                                                                  style={{color: "red", fontSize: "15px"}}/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <Field type="text" className="form-control" name="description"
                                                           placeholder="Home Description"/>
                                                    <ErrorMessage name={'description'} component="div"
                                                                  style={{color: "red", fontSize: "15px"}}/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>
                                                        <Field component={'select'} className={'form-control'}
                                                               name={'categoryId'} id={'categoryId'}
                                                               onChange={(e) => {
                                                                   props.setFieldValue('categoryId', e.target.value)
                                                               }}
                                                        >
                                                            <option>Category ID</option>
                                                            <option value={"1"}>1</option>
                                                            <option value={"2"}>2</option>
                                                            <option value={"3"}>3</option>
                                                        </Field>
                                                    </label>

                                                    <ErrorMessage name={'categoryId'} component="div"
                                                                  style={{color: "red", fontSize: "15px"}}/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <Field type="text" className="form-control" name="bedroom"
                                                           placeholder="Number of Bedroom"/>
                                                    <ErrorMessage name={'password'} component="div"
                                                                  style={{color: "red", fontSize: "15px"}}/>
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <Field type="text" className="form-control" name="bathroom"
                                                           placeholder="Number of Bathroom"/>
                                                    <ErrorMessage name={'bathroom'} component="div"
                                                                  style={{color: "red", fontSize: "15px"}}/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 text-right">
                                                <Field type="file" multiple onChange={handleChange} name={'avatar'}/>
                                                <button type={'button'} className={"btn btn-primary sign-up"} onClick={()=>{
                                                    dispatch(handleUpload)
                                                    props.setFieldValue('avatar',urls[0])
                                                }}>Upload Image</button>
                                                <button onClick={() => {
                                                }} type={"submit"} className={"btn btn-primary sign-up"}>Create Home
                                                </button>

                                            </div>
                                        </div>
                                    </Form>

                                </div>
                            </div>
                            <div className="col-md-6 auth-bg-image d-flex justify-content-center align-items-center">
                                <div className="auth-left-content mt-5 mb-5 text-center">
                                    <div className="weather-small text-white">
                                        <p className="current-weather"><i className='bx bx-sun'></i>
                                            <span>14&deg;</span></p>
                                        <p className="weather-city">Gyumri</p>
                                    </div>
                                    <div className="text-white mt-5 mb-5">
                                        <h2 className="create-account mb-3">Create Home</h2>
                                        <p>Enter your personal details and start journey with us.</p>
                                    </div>
                                    <div className="auth-quick-links">
                                        <a href="#" className="btn btn-outline-primary">Purchase template</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}

            </Formik>


        </>
    )
}
export default CreatePost