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

                    <h1 className="section-heading">Function Hall</h1>
                    <p className="description">
                        Hotel Inigo is an ideal venue for meetings, conferences, and special events,
                        offering a blend of elegance and functionality. With thoughtfully designed event spaces,
                        the hotel provides a refined setting suited for business gatherings,
                        social celebrations, and corporate functions. Equipped with modern amenities and supported by a dedicated team,
                        Hotel Inigo ensures a memorable experience, making every event both productive and enjoyable. Whether hosting an intimate meeting or
                        a grand affair, guests can expect top-notch service and a welcoming atmosphere.
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
