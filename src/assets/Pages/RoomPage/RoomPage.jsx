import React from 'react'
import './RoomPage.css'

const RoomData = [
    {
        id: 1,
        name: 'Standard Room',
        price: '₱2000',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        image: '',
    },

    {
        id: 2,
        name: 'Deluxe Room',
        price: '₱3000',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        image: '',
    },

    {
        id: 3,
        name: 'Twin deluxe Room',
        price: '₱4000',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        image: '',
    },
    {
        id: 4,
        name: 'Executive Room',
        price: '₱5000',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        image: '',
    },
    {
        id: 5,
        name: 'Special Executive Room',
        price: '₱6000',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        image: '',
    },
    {
        id: 6,
        name: 'Family Room',
        price: '₱7000',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
        image: '',
    },

];

const RoomPage = () => {

    return (
        <div className="room-page">

            <nav className="navbar">
                <div className="logo-img">
                    <img src={logo} alt="hotel-logo" />
                </div>

                <ul className="nav-links">
                    <li><a href="home">Home</a></li>
                    <li><a href="room">Rooms</a></li>
                    <li><a href="about">About</a></li>
                    <li><a href="facilities">Facilities</a></li>
                    <li><a href="Contact">Contact</a></li>
                </ul>
            </nav>

            <div className="room-container">
                <h1>Rooms and Suites</h1>
                <p>Iloremememem</p>
                <button>Book Now</button>
            </div>

            <div className="room-list">
                {RoomData.map((room) => (
                    <div className="room-card" key={room.id}>
                        <img src={room.image} alt={room.name} className="room-image" />

                        <div className="room-content">
                            <h3 className="room-name">{room.name}</h3>
                            <p className="room-description">{room.description}</p>
                        </div>
                        <div className="vertical-divider"></div>
                        <span className="room-price">{room.price}/ night</span>
                        <button className="view-details-button">View Details</button>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default RoomPage
