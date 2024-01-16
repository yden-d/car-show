import React from "react";
import './navbar.css';
import Logo from '../../images/logo.png'

const Navbar = () => {
    
    return (
        <>
            <div className="navbar">
            <a href=""><img src={Logo} className="logo" /></a>
                <ul className="navbar-items">
                    <li className="nav-item"><a href="/car-show/">Home</a></li>
                    <li className="nav-item"><a href="/car-show/about">About</a></li>
                    <li className="nav-item"><a href="/car-show/vehicles">Vehicles</a></li>
                    <li className="nav-item"><a href="/car-show/contact">Contact</a></li>
                </ul>
                <div className="auth">
                    <a href="" style={{ marginRight: "1rem" }}>Log In</a>
                    <button>Sign Up</button>
                </div>
            </div>
        </>
    )
}

export default Navbar;