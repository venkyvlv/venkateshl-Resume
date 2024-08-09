import React from 'react';
import { NavLink } from 'react-router-dom';
import profilePic from "../assets/venky-prpic.jpg";

const Sidebar = ({ onNavigate, activeSection, isSidebarOpen, toggleSidebar }) => {
  const handleNavClick = (section) => {
    onNavigate(section);
    if (isSidebarOpen) {
      toggleSidebar(); // Close the sidebar if it is open
    }
  };

  return (
    <>
      <button
        className="md:hidden fixed top-4 left-4 text-white text-2xl z-50"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? (
          <i className="fas fa-arrow-left"></i> // Font Awesome left arrow icon
        ) : (
          <i className="fas fa-bars"></i> // Font Awesome hamburger menu icon
        )}
      </button>
      <div className={`fixed top-0 left-0 h-full bg-black text-white transition-transform transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative md:flex md:flex-col md:items-center py-10 z-40 px-4`}>
        <img
          src={profilePic}
          alt="Profile"
          className="rounded-full w-24 h-24 mb-4 mx-auto"
        />
        <h1 className="text-2xl font-bold text-center">Venkatesh L.</h1>
        <p className="text-gray-400 mb-6 text-center">Available for work</p>
        <nav className="text-center">
          <NavLink
            to="#home"
            onClick={() => handleNavClick('home')}
            className={`block py-2 ${activeSection === 'home' ? 'text-red-500' : 'text-gray-300 hover:text-red-500'}`}
          >
            Home
          </NavLink>
          <NavLink
            to="#about"
            onClick={() => handleNavClick('about')}
            className={`block py-2 ${activeSection === 'about' ? 'text-red-500' : 'text-gray-300 hover:text-red-500'}`}
          >
            About
          </NavLink>
          <NavLink
            to="#services"
            onClick={() => handleNavClick('services')}
            className={`block py-2 ${activeSection === 'services' ? 'text-red-500' : 'text-gray-300 hover:text-red-500'}`}
          >
            Services
          </NavLink>
          <NavLink
            to="#GetinTouch"
            onClick={() => handleNavClick('GetinTouch')}
            className={`block py-2 ${activeSection === 'GetinTouch' ? 'text-red-500' : 'text-gray-300 hover:text-red-500'}`}
          >
            Get in Touch
          </NavLink>
          {/* Add other navigation items similarly */}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
