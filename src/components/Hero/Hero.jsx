import React from "react";
import "./hero.css";
import heroCar from "../../images/hero-car.png";
import heroBg from "../../images/hero-bg.png";

const Hero = () => {
    return (
        <>
            <div className="hero-container">
                <img className="hero-bg" src={heroBg} />
                <div className="hero-text">
                    <h3>Join us on the next show!</h3>
                    <h1>Join in on one of the <span className="highlight">best</span> car shows in the nation.</h1>
                    <p><a className="register" href="#signup">Apply now</a> to enter your vehicle and showcase your masterpiece.</p>
                </div>
                <img className="hero-car" src={heroCar} />
            </div>
        </>
    );
};

export default Hero;