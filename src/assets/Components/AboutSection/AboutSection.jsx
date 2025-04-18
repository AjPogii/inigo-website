import React from 'react'
import './AboutSection.css'
import aboutImg from '../../images/hero1.jpg'

const AboutSection = () => {
    return (

        <div className="About-container section">
            <div className="about-inner-container">

                <div className="About-img">
                    <img src={aboutImg} alt="about-img" />
                </div>

                <div className="About-content">
                    <h1 className="section-title">About Us</h1>
                    <h2 className="section-heading">Escape to <span>Tranquility, </span> Embraced by <span>Nature and Elegance.</span> </h2>

                    <div className="About-content-text">
                        <small>Hotel Inigo strive to create a pleasant and welcoming atmosphere.
                            It’s our goal to make our clients feel at ease, greeting them with professionalism and attention for their every need.
                            High-speed Internet is available throughout our hotel.</small>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default AboutSection
