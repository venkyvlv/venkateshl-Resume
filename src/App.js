import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import Home from "./components/Home";
import About from "./components/About";
import "./App.css";
// import Services from './components/Services';
// import Portfolio from './components/Portfolio';
// import Clients from './components/Clients';
// import Blog from './components/Blog';
// import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          {/*<Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="clients" element={<Clients />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
