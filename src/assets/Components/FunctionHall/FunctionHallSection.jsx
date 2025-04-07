import React from 'react'
import './FunctionHallSection.css'

import HallImg1 from '../../images/room-img1.png'
import HallImg2 from '../../images/room-img2.png'
import HallImg3 from '../../images/room-img3.png'

const FunctionHall = () => {

    return (

        <div className="function-hall section">

            <div className="function-hall-container">

                <div className="function-hall-content">

                    <h1 className="section-title">Function Hall</h1>
                    <p className="description">
                        Discover a world of comfort and convenience with our exceptional facilities and services, designed to enhance your stay.
                    </p>

                    <button className="view-all-button"> View all</button>

                </div>


                <div className="function-hall-images">
                    <div className="image-left">
                        <img src={HallImg1} alt="img-1" />
                    </div>
                    <div className="image-right">
                        <div className="image-top-right">
                            <img src={HallImg2} alt="img-2" />
                        </div>
                        <div className="image-bottom-right">
                            <img src={HallImg3} alt="img-3" />
                        </div>
                    </div>
                </div>



            </div>

        </div>

    )
}

export default FunctionHall
