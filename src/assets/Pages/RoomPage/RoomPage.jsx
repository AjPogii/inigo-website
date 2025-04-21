import React from "react";
import "./RoomPage.css";
import { Link } from "react-router-dom";


import heroImg from "../../images/singleroom1.jpg";
// Import other images if you have them

import RoomImg1 from "../../images/room-img1.png";
// import RoomImg2 from "../../images/room-img2.png";
// import RoomImg3 from "../../images/room-img3.png";

const RoomData = [
  {
    id: 1,
    name: "Standard Room",
    price: "₱2000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    image: RoomImg1, // Removed the curly braces
  },
  {
    id: 2,
    name: "Deluxe Room",
    price: "₱3000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    image: RoomImg1, // Use placeholder or import actual image
  },
  {
    id: 3,
    name: "Twin deluxe Room",
    price: "₱4000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    image: RoomImg1, // Use placeholder or import actual image
  },
  {
    id: 4,
    name: "Executive Room",
    price: "₱5000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    image: RoomImg1, // Use placeholder or import actual image
  },
  {
    id: 5,
    name: "Special Executive Room",
    price: "₱6000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    image: RoomImg1, // Use placeholder or import actual image
  },
  {
    id: 6,
    name: "Family Room",
    price: "₱7000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    image: RoomImg1, // Use placeholder or import actual image
  },
];


const RoomPage = () => {
  return (
    <div className="room-page">
      <div className="hero-section">
        <img src={heroImg} alt="img" className="hero-img" />
        <div className="room-container-content">
          <h1>ROOMS AND SUITES</h1>
          <p>Experience our luxurious accommodations</p>
        </div>
      </div>

      <div className="room-list-container">
        <div className="room-list">
          {RoomData.map((room) => (
            <div className="room-card" key={room.id}>
              {room.image && (
                <img
                  src={room.image}
                  alt={room.name}
                  className="room-image"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              )}

              <div className="room-content">
                <h3 className="room-name">{room.name}</h3>
                <p className="room-description">{room.description}</p>
                <div className="room-footer">
                  <span className="room-price">{room.price}/ night</span>
                  <Link to={`/room/${room.id}`} className="view-details-button">
                    View Details
                  </Link>
                  <button className="book-now-button">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomPage;
