import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link, redirect, useNavigate, useParams} from "react-router-dom";
import {showListHome} from "../service/homeService";
import {showCategories} from "../service/categoryService";
import {removeAccount} from "../redux/userRedux/userSlice";


const ListHome = () => {
    const {
        id
    } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let dataHome = useSelector((state) => {
        return state.post.listHome
    })
    useEffect(() => {
        dispatch(showListHome())
        dispatch(showCategories())
    }, [])
    let user = useSelector((state) => {
        return state.user.userNow
    })
    const handleLogout = () => {
        localStorage.removeItem('token')
        dispatch(removeAccount())
        redirect('/user/login')
    }

    return (
        <>
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
                                        <Link to={'/home'}>
                                            <img src="assets/images/logo.png" alt="site-logo"/>
                                        </Link>
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
                                    <Link to={'/home'}>
                                        <img src="assets/images/logo.png" alt="site-logo"/>
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
                                                        <Link to={'listHome'}>All Apartment</Link>
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
                                >
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

            <div className="header-overlay-content">

                <div className="overlay overlay-hugeinc gradient-transparent overlay-menu-item">
                    <button type="button" className="overlay-close">Close</button>
                    <nav>
                        <ul className="overlay-menu">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a>
                                <ul className="sub-menu">
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Work</a></li>
                                    <li><a href="#">Clients</a>
                                        <ul className="sub-menu">
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#">About</a></li>
                                            <li><a href="#">Work</a></li>
                                            <li><a href="#">Clients</a></li>
                                            <li><a href="#">Contact</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Work</a></li>
                            <li><a href="#">Clients</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>

                <div className="gradient-transparent overlay-search">
                    <button type="button" className="overlay-close">Close</button>
                    <div className="header-search-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <form action="#" method="get" className="searchform">
                                        <div className="input-group" id="adv-search">
                                            <input type="text" className="form-controller"
                                                   placeholder="Search for snippets"/>
                                            <div className="input-group-btn">
                                                <div className="btn-group" role="group">
                                                    <div className="dropdown dropdown-lg">
                                                        <button type="button"
                                                                className="btn btn-default dropdown-toggle"
                                                                data-toggle="dropdown" aria-expanded="false">
                                                            <span className="fa fa-caret-down"></span>
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-right" role="menu">
                                                            <div className="form-horizontal">
                                                                <div className="checkbox">
                                                                    <label><input type="checkbox"/> From Blog</label>
                                                                </div>
                                                                <div className="checkbox">
                                                                    <label><input type="checkbox"/>Find Your
                                                                        Apartment</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary">
                                                        <span className="fa fa-search" aria-hidden="true"></span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cd-user-modal">
                    <div className="cd-user-modal-container">
                        <ul className="cd-switcher">
                            <li><a href="#0">Sign in</a></li>
                            <li><a href="#0">New account</a></li>
                        </ul>

                        <div id="cd-login">
                            <form className="cd-form">
                                <p className="fieldset">
                                    <label className="image-replace cd-email" htmlFor="signin-email">E-mail</label>
                                    <input className="full-width has-padding has-border" id="signin-email" type="email"
                                           placeholder="E-mail"/>
                                        <span className="cd-error-message">Error message here!</span>
                                </p>

                                <p className="fieldset">
                                    <label className="image-replace cd-password"
                                           htmlFor="signin-password">Password</label>
                                    <input className="full-width has-padding has-border" id="signin-password"
                                           type="text" placeholder="Password"/>
                                        <a href="#0" className="hide-password">Hide</a>
                                        <span className="cd-error-message">Error message here!</span>
                                </p>

                                <p className="fieldset">
                                    <input type="checkbox" id="remember-me"/>
                                        <label htmlFor="remember-me">Remember me</label>
                                </p>

                                <p className="fieldset">
                                    <input className="full-width" type="submit" value="Login"/>
                                </p>
                            </form>

                            <p className="cd-form-bottom-message">
                                <a href="#0">Forgot your password?</a>
                            </p>
                            <a href="#0" className="cd-close-form">Close</a>
                        </div>
                        <div id="cd-signup">
                            <form className="cd-form">
                                <p className="fieldset">
                                    <label className="image-replace cd-username"
                                           htmlFor="signup-username">Username</label>
                                    <input className="full-width has-padding has-border" id="signup-username"
                                           type="text" placeholder="Username" />
                                        <span className="cd-error-message">Error message here!</span>
                                </p>

                                <p className="fieldset">
                                    <label className="image-replace cd-email" htmlFor="signup-email">E-mail</label>
                                    <input className="full-width has-padding has-border" id="signup-email" type="email"
                                           placeholder="E-mail" />
                                        <span className="cd-error-message">Error message here!</span>
                                </p>

                                <p className="fieldset">
                                    <label className="image-replace cd-password"
                                           htmlFor="signup-password">Password</label>
                                    <input className="full-width has-padding has-border" id="signup-password"
                                           type="text" placeholder="Password" />
                                        <a href="#0" className="hide-password">Hide</a>
                                        <span className="cd-error-message">Error message here!</span>
                                </p>

                                <p className="fieldset">
                                    <input type="checkbox" id="accept-terms" />
                                        <label htmlFor="accept-terms">I agree to the <a href="#0">Terms</a></label>
                                </p>

                                <p className="fieldset">
                                    <input className="full-width has-padding" type="submit" value="Create account" />
                                </p>
                            </form>

                            <a href="#0" className="cd-close-form">Close</a>
                        </div>
                        <div id="cd-reset-password">
                            <p className="cd-form-message">Lost your password? Please enter your email address. You will
                                receive a link to create a new password.</p>

                            <form className="cd-form">
                                <p className="fieldset">
                                    <label className="image-replace cd-email" htmlFor="reset-email">E-mail</label>
                                    <input className="full-width has-padding has-border" id="reset-email" type="email"
                                           placeholder="E-mail" />
                                        <span className="cd-error-message">Error message here!</span>
                                </p>
                                <p className="fieldset">
                                    <input className="full-width has-padding" type="submit" value="Reset password" />
                                </p>
                            </form>

                            <p className="cd-form-bottom-message"><a href="#0">Back to log-in</a></p>
                        </div>

                        <a href="#0" className="cd-close-form">Close</a>
                    </div>
                </div>

            </div>

            <div className="page-header default-template-gradient">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="page-title">House</h2>
                            <p className="page-description">All Apartment List</p>
                        </div>
                    </div>
                </div>

            </div>


            <div className="breadcrumbs-area bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="breadcrumbs">
                        <span className="first-item">
                         <a href="index01.html">Home</a></span>
                                <span className="separator">&gt;</span>
                                <span className="last-item">house</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="apartments-area four bg-gray-color">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="apartment-tab-area">
                                <ul role="tablist" className="nav nav-tabs apartment-menu hidden-xs hidden-sm">
                                    <li className="active">
                                        <a href="#popular-apartment" role="tab" data-toggle="tab">Popular</a>
                                    </li>
                                    <li>
                                        <a href="#newest-to-oldest" role="tab" data-toggle="tab">Date<span>Newest to oldest</span></a>
                                    </li>
                                    <li>
                                        <a href="#oldest-to-newest" role="tab" data-toggle="tab">Date <span>Older to newest</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#price-height-to-low" role="tab" data-toggle="tab">Price<span>Low to high</span></a>
                                    </li>
                                    <li>
                                        <a href="#price-low-to-heigh" role="tab" data-toggle="tab">Price<span>high to low</span></a>
                                    </li>
                                    <li className="pull-right">
                                        <a href="#" role="tab" className="dropdown-toggle" data-toggle="dropdown">Category<i
                                            className="fa fa-angle-down"></i></a>
                                        <ul className="dropdown-menu">
                                            <li><a href="#">Family</a></li>
                                            <li><a href="#">Apartment</a></li>
                                            <li><a href="#">Sublet</a></li>
                                            <li><a href="#">Bachelor Mess</a></li>
                                            <li><a href="#">Office</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <form className="hidden-md hidden-lg">
                                    <select className="apartment-menu-mobile">
                                        <option value='0'>Popular</option>
                                        <option value='1'>Date Newest to oldest</option>
                                        <option value='2'>Date Older to newest</option>
                                        <option value='3'>Price Low to high</option>
                                        <option value='4'>Price high to low</option>
                                        <optgroup label="Category">
                                            <option value='http://google.com'>Family</option>
                                            <option value='6'> Apartment</option>
                                            <option value='7'> Contact</option>
                                            <option value='8'> Sublet</option>
                                            <option value='9'> Bachelor Mess</option>
                                            <option value='10'> Office</option>
                                        </optgroup>
                                    </select>
                                </form>
                                <div className="tab-content">
                                    <div role="tabpanel" id="popular-apartment" className="tab-pane fade in active">
                                        <div className="row">
                                            {dataHome.map((item)=>{
                                                {console.log(item)}
                                              return (<>
                                              <div className="col-md-4 col-sm-6 col-xs-6">
                                                  <div className="apartments-content">
                                                      <div className="image-content">
                                                          <Link to={`/detail/${item.id}`}>
                                                              <img src={item.avatar}
                                                                   alt="apartment"/>
                                                          </Link>
                                                      </div>
                                                      <div className="text-content">
                                                          <div className="top-content">
                                                              <h3>
                                                                  <Link to={`/detail/${item.id}`}>{item.name}</Link>
                                                              </h3>
                                                              <span>
                                                       <i className="fa fa-map-marker"></i>
                                                                  {item.address}
                                                   </span>
                                                          </div>

                                                          <div className="bottom-content clearfix">
                                                              <div className="meta-bed-room">
                                                                  <i className="fa fa-bed"></i> {item.bedroom} Bedroom
                                                              </div>
                                                              <div className="meta-bath-room">
                                                                  <i className="fa fa-bath"></i> {item.bathroom} Bathroom
                                                              </div>
                                                              <span className="clearfix"></span>
                                                              <div className="rent-price pull-left">
                                                                  {item.price.toLocaleString()} $
                                                              </div>
                                                              <div className="share-meta dropup pull-right">
                                                                  <ul>
                                                                      <li className="dropup">
                                                                          <Link to={`/update/${item.id}`} className="dropdown-toggle"
                                                                          ><i
                                                                              className="fa fa-edit"></i></Link>
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

                                              </>)
                                            })}





                                            <div className="clearfix hidden-md hidden-lg"></div>
                                        </div>
                                        <a href="#" className="more-link default-template-gradient">Load More</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <footer className="footer-area" style={{backgroundImage: `url(/assets/images/footer-bg.png)`}}>
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
                                    <p>We Provide Premium Word Press, Ghost and HTML template. Our Perm tritium
                                        Templates is, develop gaped in a way so that the clients find Support. Themes
                                        are developed in a way so that the clients find.</p>
                                    <a href="#" className="button">More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="widget widget_place_category nevy-color">
                                <div className="widget-title-area">
                                    <h3 className="widget-title">Place Category</h3>>
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
                                    <h3 className="widget-title">Instagram Image</h3>>
                                </div>
                                <div className="instagram-image-content">
                                    <a href="#"><img src="assets/images/instagram/instagram-one.png" alt=""/></a>
                                    <a href="#"><img src="assets/images/instagram/instagram-two.png" alt=""/></a>
                                    <a href="#"><img src="assets/images/instagram/instagram-three.png" alt=""/></a>
                                    <a href="#"><img src="assets/images/instagram/instagram-four.png" alt=""/></a>
                                    <a href="#"><img src="assets/images/instagram/instagram-five.png" alt=""/></a>
                                    <a href="#"><img src="assets/images/instagram/instagram-six.png" alt=""/></a>

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

        </>
)
}

export default ListHome