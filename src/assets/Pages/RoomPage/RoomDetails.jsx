import React from "react";
import "./RoomDetails.css"; // Import your CSS file for styling


import { useParams, Link } from "react-router-dom";
import RoomData from "./RoomData"; // Export RoomData from a separate file or import from RoomPage

const RoomDetail = () => {
    const { id } = useParams();
    const room = RoomData.find((room) => room.id === parseInt(id));

    if (!room) {
        return (
            <div>
                <h2>Room not found</h2>
                <Link to="/room">Back to Rooms</Link>
            </div>
        );
    }

    return (
        <div className="room-details-container">
            <div className="hero-section">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h1>Rooms Details</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. E cumque tenetur eaque,
                        adipisci sit iure tempora inventore suscipit? Delectus, esse. Pariatur, voluptatum?</p>
                </div>
            </div>

            <div className="main-content">
                <div className="room-images">
                    <div className="main-image">
                        <img src="/api/placeholder/600/300" alt={room.title} />
                    </div>
                    <div className="sub-images">
                        <div className="sub-image">
                            <img src="/api/placeholder/300/150" alt={`${room.title} view 2`} />
                        </div>
                        <div className="sub-image">
                            <img src="/api/placeholder/300/150" alt={`${room.title} view 3`} />
                        </div>
                    </div>
                </div>

                <div className="booking-form">

                    <div>
                        <button className="book-button">Book Now</button>
                    </div>
                </div>
            </div>

            <div className="room-details">
                <div className="room-header">
                    <div>
                        <h2>{room.title}</h2>

                    </div>
                    <div className="room-price">${room.price}/Night</div>
                </div>

                <div className="room-description">
                    <p>{room.description}</p>
                </div>

                <div>
                    <h3>Room Feature</h3>
                    <div className="room-facilities">
                        {room.facilities.map((facility, index) => (
                            <div key={index} className="facility">{facility}</div>
                        ))}
                    </div>

                    <div className="room-info">
                        <div className="info-item">Adults: {room.capacity}</div>
                        <div className="info-item">Size: {room.size}</div>
                        <div className="info-item">Bed Type: {room.bedType}</div>
                        <div className="info-item">View: {room.view}</div>
                    </div>
                </div>

                <div className="room-actions">
                    <button className="book-now">Book Now</button>
                    <button className="return-to-rooms">Return to Rooms</button>
                </div>
            </div>
        </div>
    );
}
export default RoomDetail;