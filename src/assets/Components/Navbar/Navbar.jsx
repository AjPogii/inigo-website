import React, { useRef } from 'react'
import './Navbar.css'
import logo from '../../../assets/images/logo.png' // Assuming you have a logo image in the specified path


const Navbar = () => {

    const menu = useRef();
    const navbar = useRef();

    const menubtn = () => {
        menu.current.classList.toggle("active");
    }


    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            navbar.current.classList.add("navbarScroll");
        }
        else {
            navbar.current.classList.remove("navbarScroll");
        }
    })

    return (

        <div className="navbar-container" ref={navbar}>
            <div className="logo">
                <img src={logo} alt="hotel-logo" className="logo-img" />
            </div>

            <ul ref={menu}>
                <li><a href="home">Home</a></li>
                <li><a href="room">Rooms</a></li>
                <li><a href="about">About</a></li>
                <li><a href="facilities">Facilities</a></li>
                <li><a href="contact">Contact</a></li>
            </ul>

            <div className="nav-btns">
                <button className="nav-button">Book Now</button>
                <i className="ri-menu-4-line" id="bar-icon" onClick={menubtn}></i>
            </div>
        </div>
    )
}

export default Navbar
