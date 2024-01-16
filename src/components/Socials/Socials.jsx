import React from "react";
import "./socials.css";
import Phone from "../../images/socials.png";
import facebook from "../../images/facebook.svg";
import insta from "../../images/instagram.svg";


const Socials = () => {

    return (
        <>
            <div className="socials-container">
                <div className="socials-content">
                    <h1>Follow Us on Social Media!</h1>
                    <p>Stay up to date with the latest news, features, and events.</p>
                    <div className="social-icons">
                        <a href=""><img className="social-icon" src={facebook} /></a>
                        <a href=""><img className="social-icon" src={insta} /></a>
                    </div>
                    <img className="phone" src={Phone} />
                </div>
            </div>
        </>
    );
};

export default Socials;