import React from "react";

import Navbar from "./assets/Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./assets/Pages/Homepage/Homepage";
import RoomPage from "./assets/Pages/RoomPage/RoomPage";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/room" element={<RoomPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
