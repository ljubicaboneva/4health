import React from 'react';
import {Link} from "react-router-dom"
import "./header.css"
const Header = () => {

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark navbar-fixed header">
                <div className="container">
                    <div className="navbar-brand"><h2 className="brand active">4health</h2></div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon">

                       </span>
                    </button>
                    <div  className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link btnn" style={{color:'#c8d1d9'}} href={"/"}><h5>Home</h5></a>
                            </li>


                            <div className="dropdown">
                                <li className="nav-link dropbtn" style={{color:'#c8d1d9'}}><h5>Services <i className="fa fa-caret-down"></i></h5>
                                </li>
                                <div className="dropdown-content">
                                    <li className="nav-item">
                                        <a href={"/exercises"} className="nav-link" style={{color:'#c8d1d9'}}><h6 className="color">Exercises</h6></a>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/foods"} style={{color:'#c8d1d9'}}><h6 className="color">Foods</h6></Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href={"/diets"} style={{color:'#c8d1d9'}}><h6 className="color">Diets</h6></a>
                                    </li>
                                </div>
                            </div>


                            <li className="nav-item">
                                <a className="nav-link" href={"/supplements"} style={{color:'#c8d1d9'}}><h5 className={"btnn"}>Shop</h5></a>
                            </li>



                            <li className="nav-item">
                                <Link className="nav-link" to={"/people/ljubica123/cart"} style={{color:'#c8d1d9'}}><h5 className={"btnn"}>Cart <span className="fa fa-shopping-cart"></span></h5></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/people/ljubica123/favourites"} style={{color:'#c8d1d9'}}><h5 className={"btnn"}><span className="fa fa-heart"></span></h5></Link>
                            </li>

                            <h5 className="dropdown">
                                <li className="nav-link dropbtn" style={{color:'#c8d1d9'}}><h5>Help <i className="fa fa-caret-down"></i></h5>
                                </li>
                                <div className="dropdown-content">
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/about"} style={{color:'#c8d1d9'}}><h6 className="color">About/Contact</h6></Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href={"/people"} style={{color:'#c8d1d9'}}><h6 className="color">Users</h6></a>
                                    </li>

                                </div>
                            </h5>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    )
};

export default Header;