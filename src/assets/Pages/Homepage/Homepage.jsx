import React from "react";

import "./Homepage.css";


import Header from "../../Components/Header/Header";
import RoomSection from "../../Components/RoomSection/RoomSection";
import AboutSection from "../../Components/AboutSection/AboutSection";
import FunctionHallSection from "../../Components/FunctionHall/FunctionHallSection";
import Footer from "../../Components/Footer/Footer";

const Homepage = () => {
  return (
    <div>
      <Header />
      <RoomSection />
      <AboutSection />
      <FunctionHallSection />
      <Footer />
    </div>
  );
};

export default Homepage;
