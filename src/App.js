import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Home from "./components/Home";
import About from "./components/About";
import SnakeGame from "./components/BounceGame";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="/snake-game" element={<SnakeGame />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
};

export default App;
