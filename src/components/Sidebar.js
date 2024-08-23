import React from "react";
import { NavLink } from "react-router-dom";
import profilePic from "../assets/favicon1.svg";

const Sidebar = ({
  onNavigate,
  activeSection,
  isSidebarOpen,
  toggleSidebar,
}) => {
  const handleNavClick = (section) => {
    if (section === "snakeGame") {
      // Open the Snake game in a new tab
      window.open("/snake-game", "_blank");
    } else {
      onNavigate(section);
      if (isSidebarOpen) {
        toggleSidebar(); // Close the sidebar if it is open
      }
    }
  };

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 text-white text-2xl z-50"
        onClick={toggleSidebar}>
        {isSidebarOpen ? (
          <i className="fas fa-arrow-left"></i> // Font Awesome left arrow icon
        ) : (
          <i className="fas fa-bars"></i> // Font Awesome hamburger menu icon
        )}
      </button>
      <div
        className={`fixed top-0 left-0 h-full bg-[#1C9F8C] text-white transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative md:flex md:flex-col md:items-center py-10 z-40 px-4`}>
        <img
          src={profilePic}
          alt="Profile"
          className="rounded-full w-24 h-24 mb-4 mx-auto shadow-[0px_0px_16px_#198474] p-1.5"
        />
        <h1 className="text-2xl font-bold text-center">Venkatesh L.</h1>
        <p className="text-[#FFB800] mb-6 text-center">Available for work</p>
        <nav className="text-center text-sm">
          <NavLink
            to="#home"
            onClick={() => handleNavClick("home")}
            className={`block py-2 ${
              activeSection === "home"
                ? "text-[#FFB800]"
                : "text-gray-300 hover:text-[#FFB800]"
            }`}>
            Home
          </NavLink>
          <NavLink
            to="#about"
            onClick={() => handleNavClick("about")}
            className={`block py-2 ${
              activeSection === "about"
                ? "text-[#FFB800]"
                : "text-gray-300 hover:text-[#FFB800]"
            }`}>
            About
          </NavLink>
          <NavLink
            to="#roles"
            onClick={() => handleNavClick("roles")}
            className={`block py-2 ${
              activeSection === "roles"
                ? "text-[#FFB800]"
                : "text-gray-300 hover:text-[#FFB800]"
            }`}>
            Skills & Responsibilities
          </NavLink>
          <NavLink
            to="#services"
            onClick={() => handleNavClick("services")}
            className={`block py-2 ${
              activeSection === "services"
                ? "text-[#FFB800]"
                : "text-gray-300 hover:text-[#FFB800]"
            }`}>
            Services
          </NavLink>
          <NavLink
            to="#GetinTouch"
            onClick={() => handleNavClick("GetinTouch")}
            className={`block py-2 ${
              activeSection === "GetinTouch"
                ? "text-[#FFB800]"
                : "text-gray-300 hover:text-[#FFB800]"
            }`}>
            Get in Touch
          </NavLink>
          <NavLink
            to="#snakeGame"
            onClick={() => handleNavClick("snakeGame")}
            className={`block py-2 ${
              activeSection === "snakeGame"
                ? "text-[#FFB800]"
                : "text-gray-300 hover:text-[#FFB800]"
            }`}>
            Snake Game
          </NavLink>
        </nav>
        <div className="fixed top-0 left-0 min-h-24 w-1.5 bg-[#F56C6C] z-30 animate-bar1"></div>
        <div className="fixed top-6 left-2 min-h-24 w-1.5 bg-[#FFB800] z-30 animate-bar2"></div>
        <div className="fixed bottom-9 right-2 h-24 w-1.5 bg-[#FFB800] z-30 animate-bar4"></div>
        <div className="fixed bottom-3 right-0 h-24 w-1.5 bg-[#F0F0F0] z-30 animate-bar3"></div>
      </div>
    </>
  );
};

export default Sidebar;
