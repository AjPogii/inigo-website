import React, { useState } from 'react'
import './Contact.css';
import heroimg from '../../../assets/images/functionhall3.jpg';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [sent, setSent] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { name, email, subject, message });
        setSent(true);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };
    return (

        <div className="contact-page">
            <div className="hero-image">
                <img src={heroimg} alt="" />
                <div className="contact-container">
                    <h1>Contact Us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed sit amet nulla auctor, vestibulum magna sed, convallis ex</p>
                </div>
            </div>

            <div className="container-content">

                <div className="map-location">

                </div>

                <div className="contact-info">
                    <div className="box">
                        <div className="icon">
                            <i className="ri-map-pin-line"></i>
                        </div>
                        <div className="text">
                            <h3>Address</h3>
                            <p>Rizal St., Brgy.19 Cabangan, Legazpi City</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon">
                            <i className="ri-phone-line"></i>
                        </div>
                        <div className="text">
                            <h3>Phone</h3>
                            <p>+63935-281-0508</p>
                            <p>+63923-692-0148</p>
                        </div>
                    </div>

                    <div className="box">
                        <div className="icon">
                            <i className="ri-mail-line"></i>
                        </div>
                        <div className="text">
                            <h3>Email</h3>
                            <p>sales.inigo2019@gmail.com</p>
                            <p>reservations@hotelinigo.ph</p>
                        </div>
                    </div>

                </div>

                <div className="contact-form">
                    <form>
                        <h2>Send a Message</h2>
                        <p>Thank you for visiting our site! We're excited to hear from you.
                            Whether you have questions, feedback, or just want to say hello, please don't hesitate to reach out.
                            We're here to help and look forward to connecting with you.</p>

                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="subject">Subject:</label>
                            <input
                                type="text"
                                id="subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required></textarea>
                        </div>

                        <button type="submit" disabled={sent}>
                            {sent ? 'Message Sent!' : 'Send Message'}
                        </button>
                        {sent && <p >Thank you for your feedback</p>}
                    </form>
                </div>

            </div>
        </div>

    );
}

export default Contact
