import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {showListHome} from "../service/homeService";

const HomeList = () => {
    const dispatch = useDispatch()
  let dataHome = useSelector((state)=>{

      return state.post.listHome
  })
    useEffect(() => {
        dispatch(showListHome())
    },[])

    return (
            <div className="container">

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

                        <Link to={'/posts/create'} className={'btn'}>
                                Create Post
                        </Link>
                        <Link to={'/user/login'} className={'btn'}>
                            Login
                        </Link>
                    </div>

                </header>
                <section className="home container" id="home">
                    <div className="home-text">
                        <h1>Find Your Next <br/>Perfect Place To <br/>Live.</h1>
                    </div>
                </section>
                <section className="about container" id="about">
                    <div className="about-img">
                        <img src="img/about.jpg" alt=""/>
                    </div>
                    <div className="about-text">
                        <span>About Us</span>
                        <h2>We Provide The Best <br/>Property For You !</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto debitis ducimus neque
                            assumenda facere
                            magni!</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto debitis ducimus neque
                            assumenda facere
                            magni!</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, soluta.</p>
                        <a href="#" className="btn">Learn More</a>
                    </div>
                </section>
                <section className="sales container" id="sales">
                    <div className="box">
                        <i className='bx bx-user'></i>
                        <h3>Make Your Dream True</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, aut.</p>
                    </div>
                    <div className="box">
                        <i className='bx bx-desktop'></i>
                        <h3>Start Your Membership</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, aut.</p>
                    </div>
                    <div className="box">
                        <i className='bx bx-home-alt'></i>
                        <h3>Enjoy Your New Home</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, aut.</p>
                    </div>
                </section>
                <section className="newsletter container">
                    <h2>Have Question in mind? <br/>Let us help you</h2>
                    <form action="">
                        <input type="email" name="" id="email-box" placeholder="yourmail@gmail.com" required />
                            <input type="submit" value="Send" className="btn" />
                    </form>
                </section>
                <section className="properties container" id="properties">
                    <div className="heading">
                        <span>Recent</span>
                        <h2>Our Featured Properties</h2>
                        <p>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Odio, laborum!</p>
                    </div>
                    <div className="properties-container container">

                            {dataHome.map((item)=>{
                               return (
                                   <> <div className="box">
                                       <img src={"img/p1.jpg"} alt=""/>
                                       <h3>{item.price.toLocaleString()}</h3>
                                       <div className="content">
                                           <div className="text">
                                               <h3>{item.name}</h3>
                                               <p>{item.address}</p>
                                           </div>
                                           <div className="icon">
                                               <i className='bx bx-bed'><span>5</span></i>
                                               <i className='bx bx-bath'><span>2</span></i>
                                           </div>
                                       </div>
                                   </div>
                                   </>
                               )
                            })}


                    </div>
                </section>
                <section className="footer">
                    <div className="footer-container container">
                        <h2>R. State</h2>
                        <div className="footer-box">
                            <h3>Quick Links</h3>
                            <a href="#">Agency</a>
                            <a href="#">Building</a>
                            <a href="#">Rates</a>
                        </div>
                        <div className="footer-box">
                            <h3>Locations</h3>
                            <a href="#">Birmingham</a>
                            <a href="#">London</a>
                            <a href="#">New York</a>
                        </div>
                        <div className="footer-box">
                            <h3>Contact</h3>
                            <a href="#">+44 (0)800 123 4567</a>
                            <a href="#">yourmail@gmail.com</a>
                            <div className="social">
                                <a href="#"><i className='bx bxl-facebook'></i></a>
                                <a href="#"><i className='bx bxl-twitter'></i></a>
                                <a href="#"><i className='bx bxl-instagram'></i></a>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="copyright">
                    <p>&#169; FEA All Right Reserved</p>
                </div>

            </div>

    );
};

export default HomeList;