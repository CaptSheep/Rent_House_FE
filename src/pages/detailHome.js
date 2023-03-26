import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, redirect, useNavigate, useParams} from "react-router-dom";
import {showListHome, showYourHomes} from "../service/homeService";
import {showCategories} from "../service/categoryService";
import {removeAccount} from "../redux/userRedux/userSlice";

const DetailHome = () => {
    const dispatch = useDispatch()
    const {
        id
    } = useParams()
    let dataHome = useSelector((state) => {
        return state.post.listHome
    })
    let user = useSelector((state) => {
        return state.user.userNow
    })
    const handleLogout = () => {
        localStorage.removeItem('token')
        dispatch(removeAccount())
        redirect('/user/login')
    }

    useEffect(() => {
        dispatch(showListHome())
        dispatch(showYourHomes(id))
        dispatch(showCategories())
    }, [])

    return (<>
        <header className="mobile-header-area bg-nero hidden-md hidden-lg">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 tb">
                        <div className="mobile-header-block">
                            <div className="menu-area tb-cell">
                                <div className="mobile-menu-main hidden-md hidden-lg">
                                    <div className="menucontent overlaybg"></div>
                                    <div className="menuexpandermain slideRight">
                                        <a id="navtoggole-main" className="animated-arrow slideLeft menuclose">
                                            <span></span>
                                        </a>
                                        <span id="menu-marker"></span>
                                    </div>
                                    <div id="mobile-main-nav" className="main-navigation slideLeft">
                                        <div className="menu-wrapper">
                                            <div id="main-mobile-container" className="menu-content clearfix"></div>
                                            <div className="left-content">
                                                <ul>
                                                    <li>
                                                        <a href="#"><i className="fa fa-phone-square"></i>Call Us -
                                                            01623 030020</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="cd-signin"><i
                                                            className="fa fa-address-book"></i>Login / Register</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="logo-area tb-cell">
                                <div className="site-logo">
                                    <a href="index-2.html">
                                        <img src="assets/images/logo.png" alt="site-logo"/>
                                    </a>
                                </div>
                            </div>
                            <div className="search-block tb-cell">
                                <a href="#" className="main-search"><i className="fa fa-search"></i></a>
                            </div>
                            <div className="additional-content tb-cell">
                                <a href="#" className="trigger-overlay"><i className="fa fa-sliders"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <header className="header-area bg-nero hidden-xs hidden-sm">
            <div className="container">
                <div className="header-top-content">
                    <div className="row">
                        <div className="col-md-7 col-sm-7 mobile-center">
                            <div className="site-logo">
                                <Link to={"index-2.html"}>
                                    <img src={"assets/images/logo.png"} alt="site-logo"/>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-5 mobile-center">
                            <div className="left-content">
                                <ul>
                                    <li>
                                        <a href="#"><i className="fa fa-phone-square"></i>Call Us - 01623 030020</a>
                                    </li>
                                    {user ? (
                                        <li><Link onClick={() => {
                                            handleLogout()
                                        }} to={"/user/login"} className="cd-signin"><i
                                            className="fa fa-address-book"></i>Logout</Link>
                                        </li>) : (
                                        <li><Link to={"/user/login"} className="cd-signin"><i
                                            className="fa fa-address-book"></i>Login /
                                            Register</Link></li>)}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <header className="header-bottom-content bg-nero hidden-xs hidden-sm">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-sm-10">
                        <nav id="main-nav" className="site-navigation top-navigation">
                            <div className="menu-wrapper">
                                <div className="menu-content">
                                    <ul className="menu-list">

                                        <li>
                                            <a href="booking.html">Booking</a>
                                        </li>
                                        <li>
                                            <a href="#">House</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="apartment.html">All Apartment</a>
                                                </li>
                                                <li>
                                                    <a href="apartment-single.html">Apartment Single</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Pages</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="gallery.html">Our Gallery</a>
                                                </li>
                                                <li>
                                                    <a href="comming.html">Coming Soon</a>
                                                </li>
                                                <li>
                                                    <a href="404.html">404</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="about.html">About</a>
                                        </li>
                                        <li>
                                            <a href="#">Blog</a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a href="blog.html">Blog</a>
                                                </li>
                                                <li>
                                                    <a href="blog-single.html">Single Post</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>

                    <div className="col-md-2 col-sm-2">
                        <div className="booking">
                            <span><a href="booking.html">Booking</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </header>


        <div className="page-header default-template-gradient">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="page-title">House</h2>
                        <p className="page-description">More Details About Apartment</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="breadcrumbs-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="breadcrumbs">
                       <span className="first-item">
                        <a href="index01.html">Home</a></span>
                            <span className="separator">&gt;</span>
                            <span className="last-item">Apartment Single Page</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="apartment-single-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        {dataHome.map((item) => {

                            return (<>
                                <div className="corousel-gallery-content">

                                    <Link className="item image-pop-up">
                                        <img src={item.avatar} alt=""/>
                                    </Link>

                                </div>

                                <div className="family-apartment-content mobile-extend">
                                    <div className="tb">
                                        <div className="tb-cell">
                                            <h3 className="apartment-title">{item.name}</h3>
                                        </div>
                                        <div className="tb-cell">
                                            <p className="pull-right rent">Rent/Month: {item.price.toLocaleString()} $</p>
                                        </div>
                                    </div>
                                    <div className="clearfix"></div>
                                    <p className="apartment-description default-gradient-before">3000 sq-ft., 3 Bedroom,
                                        Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha,
                                        Melbourne.</p>
                                    <div className="price-details">
                                        <h3>Price Details-</h3>
                                        <ul>
                                            <li><span>Rent/Month: </span> {item.price.toLocaleString()} $ (negotiable)
                                            </li>
                                            <li><span>Service Charge :</span> 8,000/= Tk per month, subject to change
                                            </li>
                                            <li><span>Security Deposit :</span> 3 month’s rent</li>
                                            <li><span>Flat Release Policy :</span> 3 months earlier notice required</li>
                                        </ul>
                                    </div>

                                    <div className="property-details">
                                        <h3>Property Details-</h3>
                                        <ul>
                                            <li><span>Address  &amp; Area :</span> Rangs Malancha, House-68, Road-6A
                                                (Dead End
                                                Road), Dhanmondi Residential Area.
                                            </li>
                                            <li><span>Flat Size :</span> 3000 Sq Feet.</li>
                                            <li><span>Floor :</span> A5 (5th Floor) (6 storied Building ) (South Facing
                                                Unit)
                                            </li>
                                            <li><span>Room Category :</span> 3 Large Bed Rooms with 3 Verandas, Spacious
                                                Drawing, Dining &amp; Family Living Room, Highly Decorated Kitchen with
                                                Store
                                                Room and Servant room with attached Toilet.
                                            </li>
                                            <li><span>Facilities :</span> 1 Modern Lift, All Modern Amenities &amp; Semi
                                                Furnished.
                                            </li>
                                            <li><span>Additional Facilities :</span> a. Electricity with full generator
                                                load, b.
                                                Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d.
                                                Community
                                                Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f.
                                                Cloth
                                                Hanging facility with CC camera
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="apartment-overview">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h3>Apartment Overview</h3>
                                                <div className="overview">
                                                    <ul>
                                                        <li>Deposit / Bond <span
                                                            className="pull-right">$225000.00</span></li>
                                                        <li>computer <span className="pull-right">03</span></li>
                                                        <li>Total Area (sq. ft) <span className="pull-right">300</span>
                                                        </li>
                                                        <li>Total Floors <span className="pull-right">06</span></li>
                                                        <li>Car Parking Per Space <span className="pull-right">02</span>
                                                        </li>
                                                        <li>Air Condition <span className="pull-right">Yes</span></li>
                                                        <li>Car Parking Per Space <span className="pull-right">02</span>
                                                        </li>
                                                        <li>Air Condition <span className="pull-right">Yes</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="indoor-features">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h3 className="features-title">Indoor features:</h3>
                                                <ul className="features-list">
                                                    <li>Community Hall</li>
                                                    <li>Safety Grills</li>
                                                    <li>Servants Room</li>
                                                    <li>Servants Toilet</li>
                                                    <li>Fire exit</li>
                                                    <li>CCTV</li>
                                                    <li>WASA connection</li>
                                                    <li>DESCO connection</li>
                                                    <li>TITAS GAS connection</li>
                                                    <li>alcony</li>
                                                    <li>Inter Com</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <h3 className="features-title">Indoor features:</h3>
                                                <ul className="features-list">
                                                    <li>South facing</li>
                                                    <li>Roof Top Garden</li>
                                                    <li>Drivers quarters</li>
                                                    <li>Generator</li>
                                                    <li>Lift</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden-md hidden-lg text-center extend-btn">
                        <span className="extend-icon">
                            <i className="fa fa-angle-down"></i>
                        </span>
                                </div>
                            </>)
                        })}
                    </div>

                    <div className="col-md-4">
                        <div className="apartment-sidebar">
                            <div className="widget_rental_search clerafix">
                                <div className="form-border gradient-border">
                                    <form action="https://htmlguru.net/house-rent/booking.html" method="get"
                                          className="advance_search_query booking-form">
                                        <div className="form-bg seven">
                                            <div className="form-content">
                                                <h2 className="form-title">Book This Apartment</h2>
                                                <div className="form-group">
                                                    <label>Full Name</label>
                                                    <input type="text" name="FirstName" placeholder="Full name"/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Phone Number</label>
                                                    <input type="tel" name="phone number"
                                                           placeholder="+99(99)9999-9999"/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Email Address</label>
                                                    <input type="email" name="Email" placeholder="example@domain.com"/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Family Member</label>
                                                    <input type="number" step="1" min="1" max="100" name="quantity"
                                                           value={"1"} title="Qty" size="4" className="input-text"/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Children</label>
                                                    <input type="number" step="1" min="1" max="100" name="quantity"
                                                           value={"1"} title="Qty" size="4" className="input-text"/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Your Message</label>
                                                    <textarea name="message" placeholder="Message"
                                                              className="form-controller"></textarea>
                                                </div>
                                                <div className="form-group">
                                                    <button type="submit"
                                                            className="button default-template-gradient button-radius">Request
                                                        Booking
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="apartments-content seven post clerafix">
                                <div className="image-content">
                                    <a href="#"><img className="overlay-image" src="assets/images/apartment-ad.png"
                                                     alt="about"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="apartments-related-area bg-gray-color">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-content-one">
                            <h2 className="title default-text-gradient">Related apartments</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-xs-6">
                        <div className="apartments-content">
                            <div className="image-content">
                                <a href="#"><img src={"assets/images/apartment/apartment-one.png"} alt="apartment"/></a>
                            </div>

                            <div className="text-content">
                                <div className="top-content">
                                    <h3><a href="#">Family Apartment</a></h3>
                                    <span><a href="#"><i className="fa fa-map-marker"></i></a> <a href="#">Dhanmondi, Dhaka</a>  </span>
                                </div>
                                <div className="bottom-content clearfix">
                                    <div className="meta-bed-room">
                                        <i className="fa fa-bed"></i> 3 Bedrooms
                                    </div>
                                    <div className="meta-bath-room">
                                        <i className="fa fa-bath"></i>2 Bathroom
                                    </div>
                                    <span className="clearfix"></span>
                                    <div className="rent-price pull-left">
                                        $200
                                    </div>
                                    <div className="share-meta dropup pull-right">
                                        <ul>
                                            <li className="dropup">
                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown"
                                                   role="button" aria-haspopup="true" aria-expanded="false"><i
                                                    className="fa fa-share-alt"></i></a>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i className="fa fa-instagram"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fa fa-star-o"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-6">
                        <div className="apartments-content">
                            <div className="image-content">
                                <a href="#"><img src="assets/images/apartment/apartment-two.png" alt="apartment"/></a>
                            </div>

                            <div className="text-content">
                                <div className="top-content">
                                    <h3><a href="#">Family Apartment</a></h3>
                                    <span><a href="#"><i className="fa fa-map-marker"></i></a> <a href="#">Dhanmondi, Dhaka</a>  </span>
                                </div>
                                <div className="bottom-content clearfix">
                                    <div className="meta-bed-room">
                                        <i className="fa fa-bed"></i> 3 Bedrooms
                                    </div>
                                    <div className="meta-bath-room">
                                        <i className="fa fa-bath"></i>2 Bathroom
                                    </div>
                                    <span className="clearfix"></span>
                                    <div className="rent-price pull-left">
                                        $200
                                    </div>
                                    <div className="share-meta dropup pull-right">
                                        <ul>
                                            <li className="dropup">
                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown"
                                                   role="button" aria-haspopup="true" aria-expanded="false"><i
                                                    className="fa fa-share-alt"></i></a>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i className="fa fa-instagram"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fa fa-star-o"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="clearfix hidden-md hidden-lg"></div>

                    <div className="col-md-4 col-sm-6 col-xs-6">
                        <div className="apartments-content">
                            <div className="image-content">
                                <a href="#"><img src="assets/images/apartment/apartment-three.png" alt="apartment"/></a>
                            </div>

                            <div className="text-content">
                                <div className="top-content">
                                    <h3><a href="#">Family Apartment</a></h3>
                                    <span><a href="#"><i className="fa fa-map-marker"></i></a> <a href="#">Dhanmondi, Dhaka</a>  </span>
                                </div>
                                <div className="bottom-content clearfix">
                                    <div className="meta-bed-room">
                                        <i className="fa fa-bed"></i> 3 Bedrooms
                                    </div>
                                    <div className="meta-bath-room">
                                        <i className="fa fa-bath"></i>2 Bathroom
                                    </div>
                                    <span className="clearfix"></span>
                                    <div className="rent-price pull-left">
                                        $200
                                    </div>
                                    <div className="share-meta dropup pull-right">
                                        <ul>
                                            <li className="dropup">
                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown"
                                                   role="button" aria-haspopup="true" aria-expanded="false"><i
                                                    className="fa fa-share-alt"></i></a>
                                                <ul className="dropdown-menu">
                                                    <li>
                                                        <a href="#"><i className="fa fa-facebook"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i className="fa fa-twitter"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i className="fa fa-instagram"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i className="fa fa-google-plus"></i></a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#"><i className="fa fa-star-o"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="call-to-action default-template-gradient">
            <div className="container">
                <div className="row tb">
                    <div className="col-md-6 col-sm-6 tb-cell">
                        <div className="contact-left-content">
                            <h3>Do you want to Rent your House</h3>
                            <h4>Call us and list your property here</h4>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6 tb-cell">
                        <div className="contact-right-content">
                            <h4><a href="#">+880123654987<span>company@gmail.com</span></a></h4>
                            <a href="#" className="button">Contact us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="contact-area">
            <div className="container-large-device">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading-content-two available">
                                <h2 className="title">We Are Available<br/> For You 24/7</h2>
                                <h5 className="sub-title">Our online support service is always 24 Hours</h5>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            <div className="map-left-content">
                                <iframe width="600" height="350"
                                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC871wKM6aoCLSV_pT3xBVsYzNGXaDh7Pw&amp;q=121King+St,Melbourne+VIC+3000,Australia"
                                        allowFullScreen="allowfullscreen"></iframe>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="map-right-content">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="contact">
                                            <h4><i className="fa fa-address-book"></i>Address</h4>
                                            <p>112/B - Road 121, King/St Melbourne Australia</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="contact">
                                            <h4><i className="fa fa-envelope"></i>Mail</h4>
                                            <p>yourmail@domain.com houserent@domain.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="contact">
                                            <h4><i className="fa fa-phone-square"></i>Call</h4>
                                            <p>+99 0215469875 <br/>666 35874692050</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="contact">
                                            <h4><i className="fa fa-user-circle"></i>Social account</h4>
                                            <div className="social-icon">
                                                <a href="#"><i className="fa fa-facebook"></i></a>
                                                <a href="#"><i className="fa fa-twitter"></i></a>
                                                <a href="#"><i className="fa fa-instagram"></i></a>
                                                <a href="#"><i className="fa fa-google-plus"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer className="footer-area bg-gray-color" style={{backgroundImage: `url(/assets/images/footer-bg.png)`}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="widget widget_about nevy-color">
                            <div className="widget-title-area">
                                <h3 className="widget-title">
                                    About House Rent
                                </h3>
                            </div>
                            <div className="widget-about-content">
                                <img src="assets/images/footer-logo.png" alt="house"/>
                                <p>We Provide Premium Word Press, Ghost and HTML template. Our Perm tritium Templates
                                    is, develop gaped in a way so that the clients find Support. Themes are developed in
                                    a way so that the clients find.</p>
                                <a href="#" className="button">More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="widget widget_place_category nevy-color">
                            <div className="widget-title-area">
                                <h3 className="widget-title">Place Category</h3>
                            </div>
                            <ul>
                                <li>Flat for Rent <a href="#">Francis</a></li>
                                <li>Flat for Rent <a href="#">Collins St</a></li>
                                <li>Flat for Rent <a href="#">Rose Ln</a></li>
                                <li>Flat for Rent <a href="#">Cosgrave Ln</a></li>
                                <li>Flat for Rent <a href="#">Bourke St</a></li>
                                <li>Flat for Rent <a href="#">Flienders Ln</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="widget widget_instagram nevy-color">
                            <div className="widget-title-area">
                                <h3 className="widget-title">Instagram Image</h3>
                            </div>
                            <div className="instagram-image-content">
                                <a href="#"><img src={"assets/images/instagram/instagram-one.png"} alt=""/></a>
                                <a href="#"><img src={"assets/images/instagram/instagram-two.png"} alt=""/></a>
                                <a href="#"><img src={"assets/images/instagram/instagram-three.png"} alt=""/></a>
                                <a href="#"><img src={"assets/images/instagram/instagram-four.png"} alt=""/></a>
                                <a href="#"><img src={"assets/images/instagram/instagram-five.png"} alt=""/></a>
                                <a href="#"><img src={"assets/images/instagram/instagram-six.png"} alt=""/></a>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="bottom-content">
                            <p>Copyright  &copy;2017 <a href="#">HTMLguru</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>)
}
export default DetailHome