import React from "react";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";

const Home = () => {
    return (
        <div className="hero ">
            <div className="card bg-dark text-white border-0">
                <img src="/assets/background_image.jpg" className="card-img" alt="BackgroundImage" height="550px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center ">
                    <div className="container ">
                    <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                    <p className="card-text lead fs-2">CHECK OUT ALL THE TREANDS</p>
                </div>
                </div>
            </div>
            <Products/>
            <About/>
            <Contact/>
        </div>
        
    );
};
export default Home;


