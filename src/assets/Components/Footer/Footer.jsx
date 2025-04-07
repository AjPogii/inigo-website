import React from 'react'
import './Footer.css'
import logo from '../../../assets/images/logo.png'




const Footer = () => {
    return (

        <footer className="footer-container section">
            <div className="footer-contents">
                <div className="footer-logo">
                    <img src={logo} alt="logo" className="logo-img" />
                </div>
            </div>

            <div className="contact-column">
                <h3 className="column-title">CONTACT AND RESERVATION</h3>
                <div className="underline"></div>

                <div className="contact-item">
                    <div className="icon-circle">
                        <i className="ri-phone-line"></i>
                    </div>
                    <div className="contact-text">
                        <p>+63935-281-0508</p>
                        <p>+63923-692-0148</p>
                    </div>
                </div>

                <div className="contact-item">
                    <div className="icon-circle">
                        <i className="ri-mail-line"></i>
                    </div>
                    <div className="contact-text">
                        <p>sales.inigo2019@gmail.com</p>
                        <p>reservations@hotelinigo.ph</p>
                    </div>
                </div>

                <div className="contact-item">
                    <div className="icon-circle">
                        <i className="ri-facebook-circle-fill"></i>
                    </div>
                    <div className="contact-text">
                        <p>Hotel Inigo</p>
                    </div>
                </div>
            </div>

            <div className="address-column">
                <h3 className="column-title">Hotel Address</h3>
                <div className="underline"></div>

                <div className="contact-item">
                    <div className="icon-circle">
                        <i className="ri-map-pin-line"></i>
                    </div>
                    <div className="address-text">
                        <p>Rizal St., Brgy.19 Cabangan,</p>
                        <p>Legazpi City</p>
                    </div>
                </div>
            </div>


            <div className="footer-bottom">
                <p>Hotel Inigo 2025 © All Rights Reserved</p>
            </div>

        </footer>
    )
}

export default Footer
