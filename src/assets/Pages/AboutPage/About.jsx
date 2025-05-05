import React from 'react'
import './About.css'

import aboutimg1 from '../../images/about-1.jpg'
import aboutimg2 from '../../images/about-2.jpg'
import aboutimg3 from '../../images/about-3.jpg'

const About = () => {

    return (

        <div className="about-page">
            <div className="hero-section">
                <div className="hero-overlay">
                    <div className="about-container-content">
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    </div>

                </div>
            </div>

            <div className="about-content">
                <p className="content-text">Hotel Inigo is in the city’s business district, just minutes from shopping malls,
                    government offices, and travel hubs to nearby tourist spots. It offers air-
                    conditioned rooms and a shared lounge. The hotel has a 24-hour front desk,
                    airport transfers, room service, and free high-speed internet. Each room has a
                    flat-screen TV with high-definition cable channels and a private bathroom.
                    Guests can also enjoy an Bicolano delicacy of their choice. <br />
                    <br />
                    Strategically located in the city’s business district, few minutes away to major shopping malls,
                    government offices, and the jump off hub to nearby tourist destinations.
                    Hotel Inigo provides air-conditioned accommodation and a shared lounge.
                    The hotel offers a 24-hour front desk, airport transfer, room service, and
                    free high-speed internet connections.
                    All guest rooms in the hotel are fitted with a flat-screen TV with state-of-the art digital high definition cable TV,
                    At Hotel Inigo the rooms come with a private bathroom. Guest can enjoy an Asian breakfast of their choice.
                </p>


                <div className="image-collage">
                    <div className="main-image">
                        <img src={aboutimg1} alt="img-1" />
                    </div>
                    <div className="side-images">
                        <img src={aboutimg2} alt="img-2" className="side-image" />
                        <img src={aboutimg3} alt="img-3" className="side-image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
