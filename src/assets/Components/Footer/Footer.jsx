import React from 'react'
import './Footer.css'
import logo from '../../../assets/images/logo.png' // Assuming you have a logo image in the specified path

const Footer = () => {
    return (
        <footer className="footer-container section">
            <div className="footer-links">
                <div className="footer-logo">
                    <img src={logo} alt="logo" className="logo-img" />
                </div>
            </div>

            <div className="footer-links">
                <h3>Quick Links</h3>
                <p>About</p>
                <p>Rooms</p>
                <p>Services</p>
            </div>

            <div className="footer-links">
                <h3>Contact and Reservation</h3>
                <p><i className="ri-phone-line">  0935 281 0508</i></p>
                <p><i className="ri-mail-line"> sales@hotelinigo.ph</i></p>
                <p>< i className="ri-links-line">  http://www.hotelinigo.ph/</i></p>

            </div>

            <div className="footer-links">
                <h3>Hotel Address</h3>
                <p><i className="ri-time-line"> Always Open </i></p>
                <p> <i className="ri-home-line">  Brgy 19 Rizal Street.,  Cabangan, Legazpi City, Legazpi, Philippines, 4500</i></p>
            </div>
        </footer>
    )
}

export default Footer
