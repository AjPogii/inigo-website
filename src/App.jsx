import React from "react";
import "./App.css";
import Navbar from "./assets/Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./assets/Pages/Homepage/Homepage";
import RoomPage from "./assets/Pages/RoomPage/RoomPage";
import Facilities from "./assets/Pages/FacilitiesPage/Facilities";
import About from "./assets/Pages/AboutPage/About";
import Contact from "./assets/Pages/ContactUsPage/Contact";
import RoomDetail from "./assets/Pages/RoomPage/RoomDetails";

function App() {
  return (
    <div className="App-container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/room" element={<RoomPage />} />
          <Route path="/room/:id" element={<RoomDetail />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
