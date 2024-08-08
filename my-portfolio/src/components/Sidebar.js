import React from 'react';
import { NavLink } from 'react-router-dom';
import profilePic from "../assets/venky-prpic.jpg";

const Sidebar = ({ onNavigate, activeSection }) => {
  return (
    <div className="bg-black text-white h-full flex flex-col items-center py-10">
      <img
        src={profilePic}
        alt="Profile"
        className="rounded-full w-24 h-24 mb-4"
      />
      <h1 className="text-2xl font-bold">Venkatesh L.</h1>
      <p className="text-gray-400 mb-6">Available for work</p>
      <nav className="text-center">
        <NavLink
          to="#home"
          onClick={() => onNavigate('home')}
          className={`block py-2 ${activeSection === 'home' ? 'text-red-500' : 'text-gray-300 hover:text-red-500'}`}
        >
          Home
        </NavLink>
        <NavLink
          to="#about"
          onClick={() => onNavigate('about')}
          className={`block py-2 ${activeSection === 'about' ? 'text-red-500' : 'text-gray-300 hover:text-red-500'}`}
        >
          About
        </NavLink>
        {/* Add other navigation items similarly */}
      </nav>
    </div>
  );
};

export default Sidebar;
