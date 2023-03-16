import React, {useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {createHome} from "../service/homeService";
import * as Yup from "yup";
import './CSS/style.css'
import {
    ref, getDownloadURL, uploadBytesResumable
} from "firebase/storage";
import {storage} from "./firebase/config";

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
    categoryId: Yup.number()
        .required("Please Enter Category!"),
    bedroom: Yup.number()
        .required("Please Enter Bedroom!"),
    bathroom: Yup.number()
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
    const handleSubmit = async (values) => {
        let avatar = urls[0]
        let data = {...values, avatar}
         await dispatch(createHome(data))
        console.log(data)
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
            <header>
                <div className="nav container">
                    <Link to={'/home'} className={"logo"}>
                        <button className={"logo"}
                                style={{border: "none", outline: 'none', background: "transparent"}}> Home
                        </button>
                    </Link>
                    <input type="checkbox" name="" id="menu"/>
                    <label htmlFor="menu"> <i className='bx bx-menu' id="menu-icon"></i></label>

                    <ul className="navbar">

                        <li><Link to={'/about-us'} className={"logo"}>
                            <button className={"logo"}
                                    style={{border: "none", outline: 'none', background: "transparent"}}> About Us
                            </button>
                        </Link></li>
                        <li><Link to={'/sale'} className={"logo"}>
                            <button className={"logo"}
                                    style={{border: "none", outline: 'none', background: "transparent"}}> Sale
                            </button>
                        </Link></li>
                        <li><Link to={'/properties'} className={"logo"}>
                            <button className={"logo"}
                                    style={{border: "none", outline: 'none', background: "transparent"}}> Properties
                            </button>
                        </Link></li>
                    </ul>
                </div>

            </header>
            <Formik validationSchema={InputSchema} initialValues={{
                name: '',
                address: '',
                price: '',
                description: '',
                categoryId: '',
                bedroom: '',
                bathroom: '',
                userId: userId
            }} onSubmit={(values) => handleSubmit(values)
            }>
                <div className="login container">
                    <div className="login-container">
                        <Form id="createPost" tabIndex="500">
                            <h3 style={{color: "#dc3545"}}>Create Post Rent Home</h3>
                            <label>Name</label>
                            <Field type="text" name="name" style={{borderRadius: "10px"}}/>
                            <ErrorMessage name="name" component="div"
                                          style={{color: "red", fontSize: "10px"}}></ErrorMessage>
                            <label>Address</label>
                            <Field type="text" name="address" style={{borderRadius: "10px"}}/>
                            <ErrorMessage name="address" component="div"
                                          style={{color: "red", fontSize: "10px"}}></ErrorMessage>
                            <label>Price</label>
                            <Field type="number" name="price" style={{borderRadius: "10px"}}/>
                            <ErrorMessage name="price" component="div"
                                          style={{color: "red", fontSize: "10px"}}></ErrorMessage>
                            <label>Description</label>
                            <Field style={{height: "200px", borderRadius: "10px"}} name="description"/>
                            <ErrorMessage name="description" component="div"
                                          style={{color: "red", fontSize: "10px"}}></ErrorMessage>
                            <label>Category</label>
                            <Field as={"select"} name={"categoryId"} style={{borderRadius: "10px"}}>
                                <option value="">Category</option>
                                <option value="1">House</option>
                                <option value="2">Homestay</option>
                                <option value="3">Hotel</option>
                            </Field>
                            <ErrorMessage name="categoryId" component="div"
                                          style={{color: "red", fontSize: "10px"}}></ErrorMessage>
                            <label>Bedroom</label>

                            <Field as={"select"} name={"bedroom"} style={{borderRadius: "10px"}}>
                                <option value="">Bedroom</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </Field>
                            <label>Bathroom</label>
                            <ErrorMessage name="bedroom" component="div"
                                          style={{color: "red", fontSize: "10px"}}></ErrorMessage>
                            <Field as={"select"} name={"bathroom"} style={{borderRadius: "10px"}}>
                                <option value="">Bathroom</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </Field>
                            <ErrorMessage name="bathroom" component="div"
                                          style={{color: "red", fontSize: "10px"}}></ErrorMessage>

                            <label>Image</label>
                            <input type="file" multiple onChange={handleChange}/>
                            <button onClick={()=>{
                                dispatch(handleUpload)
                            }}>Upload Image</button>

                            <button type={"submit"} className={"btn"}>Create Home</button>

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
export default CreatePost