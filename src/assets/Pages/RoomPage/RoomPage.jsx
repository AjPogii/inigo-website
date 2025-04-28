import React, { useState } from "react";
import "./RoomPage.css";
import RoomDetailsPage from "./RoomDetailsPage";

import heroImg from "../../images/room-hero.jpg";
// Import other images if you have them
import RoomImg1 from "../../images/room-img1.png";
import standardimg from "../../images/standard-3.jpg"
// import RoomImg2 from "../../images/room-img2.png";
// import RoomImg3 from "../../images/room-img3.png";

const RoomData = [
  {
    id: 1,
    title: "Standard Room",
    price: "₱2000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    image: standardimg, // Removed the curly braces
  },
  {
    id: 2,
    title: "Deluxe Room",
    price: "₱3000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    image: RoomImg1, // Use placeholder or import actual image
  },
  {
    id: 3,
    title: "Twin deluxe Room",
    price: "₱4000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    image: RoomImg1, // Use placeholder or import actual image
  },
  {
    id: 4,
    title: "Executive Room",
    price: "₱5000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    image: RoomImg1, // Use placeholder or import actual image
  },
  {
    id: 5,
    title: "Special Executive Room",
    price: "₱6000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    image: RoomImg1, // Use placeholder or import actual image
  },
  {
    id: 6,
    title: "Family Room",
    price: "₱7000",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.",
    image: RoomImg1, // Use placeholder or import actual image
  },

];

const RoomPage = () => {

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedRoom, setSelectedRoom] = React.useState(null);

  const openRoomDetails = (room) => {
    setSelectedRoom(room.title);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Disable scrolling
  }

  const closeRoomDetails = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto"; // Enable scrolling
  }

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
                  alt={room.title}
                  className="room-image"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              )}

              <div className="room-content">
                <h3 className="room-name">{room.title}</h3>
                <p className="room-description">{room.description}</p>
                <div className="room-footer">
                  <span className="room-price">{room.price}/ night</span>
                  <button className="view-details-button"
                    onClick={() => openRoomDetails(room)}>
                    View Details
                  </button>
                  <button className="book-now-button">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <RoomDetailsPage
        isOpen={isModalOpen}
        onClose={closeRoomDetails}
        roomname={selectedRoom} />
    </div>
  );
};

export default RoomPage;
