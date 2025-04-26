import React from "react";
import "./App.css";
import Navbar from "./assets/Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./assets/Pages/Homepage/Homepage";
import RoomPage from "./assets/Pages/RoomPage/RoomPage";
import RoomDetailsPage from "./assets/Pages/RoomPage/RoomDetailsPage";
import Facilities from "./assets/Pages/FacilitiesPage/Facilities";
import About from "./assets/Pages/AboutPage/About";
import Contact from "./assets/Pages/ContactUsPage/Contact";


function App() {
  return (
    <div className="App-container">
      <Router>
        <Navbar />
        <div className="page-content">
          <Routes>
            <Route path="/home" element={<Homepage />} />
            <Route path="/room" element={<RoomPage />} />
            <Route path="/room/:roomname" element={<RoomDetailsPage />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
