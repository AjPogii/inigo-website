import React from 'react'
import './RoomSection.css'
import RoomImg1 from '../../images/room-img1.png'
import RoomImg2 from '../../images/room-img2.png'
import RoomImg3 from '../../images/room-img3.png'


const RoomSection = () => {

    const rooms = [
        {
            id: 1,
            title: 'Standard Room',
            price: '₱8,500',
            perNight: '/ per night',
            image: RoomImg1,

        },
        {
            id: 2,
            title: 'Executive Room',
            price: '₱8,500',
            perNight: '/ per night',
            image: RoomImg2,

        },
        {
            id: 3,
            title: 'Deluxe Room',
            price: '₱9,400',
            perNight: '/ per night',
            image: RoomImg3,

        },
    ];

    return (

        <div className="Room-Section section">
            <div className="Room-container">
                <div className="Rooms-title">
                    <h1 className="section-title">Rooms & Suites</h1>
                    <p className="description">
                        Experience ultimate comfort in our elegantly appointed rooms and suites, designed for relaxation and rejuvenation.
                    </p>
                </div>

                <div className="Room-Cards">
                    {rooms.map((room) => (
                        <div key={room.id} className="Room-slide">
                            <div className="Room-Card">
                                <div className="Room-Img">
                                    <img src={room.image} alt="room-image" />

                                </div>

                                <div className="Room-Content">
                                    <h3>{room.title}</h3>
                                    <div className="Price-Container">
                                        <span className="Price-Amount">{room.price}</span>
                                        <span className="Price-Period">{room.perNight}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="View-All-Container">
                    <button className="View-All-Button">
                        VIEW ALL
                    </button>

                </div>
            </div>
        </div>

    )
}

export default RoomSection
