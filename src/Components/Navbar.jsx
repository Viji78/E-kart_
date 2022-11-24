import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

    const state =useSelector((state) =>  state.handleCart)
    return (
        <div>
           
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-3 shadow ">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/"><i className="fa fa-drupal"></i> *E-CART_NAME*</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link " to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                        
                       <div className="buttons">
                       <NavLink to="/Cart" className="btn btn-outline-light">
                            <i className="fa fad fa-shopping-cart me-1"></i> Cart({state.length}) </NavLink>
                       <NavLink to="/register" className="btn btn-outline-light ms-2">
                            <i className="fa fa-user-plus me-1"></i> Register </NavLink>
                        <NavLink to="/login" className="btn btn-outline-light ms-2">
                            <i className="fa fa-sign-in me-1"></i> Login </NavLink>

                       </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar