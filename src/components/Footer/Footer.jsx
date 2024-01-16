import React from "react";
import './footer.css';
import { Button, TextField } from "@mui/material";

const Footer = () => {

    return (
        <>
            <footer>
                    <div className="footer-container">
                        <ul className="footer-content">
                            <li><h2>Maryland Car Show</h2></li>
                            <li>An organized place to sign up or learn more about car shows in Maryland.</li>
                            <li>(111) 222-3333</li>
                            <li>mdcarshows@gamil.com</li>
                            <li>Design inspired by Stefan Topalovic at: </li>
                            <li><a href="https://car-rental-ten.vercel.app">car-rental-ten.vercel.app</a></li>
                        </ul>
                        <ul className="footer-content">
                            <li><h2>About</h2></li>
                            <li><a href="">Careers</a></li>
                            <li><a href="">Mobile</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="/">How it works</a></li>
                        </ul>
                        <ul className="footer-content">
                            <li><h2>Show Schedules</h2></li>
                            <li>Fridays: 7:00PM - 10:00PM</li>
                            <li>Saturdays & Sundays: 10:00AM - 2:00PM</li>
                        </ul>
                        <ul className="footer-content">
                            <li><h2>News Letter</h2></li>
                            <li>Enter your email to stay up-to-date with our latest shows!</li>
                            <li>
                                <TextField
                                    placeholder="Enter email address"
                                    inputMode="email"
                                />
                            </li>
                            <li><button className="footer-btn">Subscribe</button></li>
                        </ul>
                    </div>
            </footer>
        </>
    )
}

export default Footer;