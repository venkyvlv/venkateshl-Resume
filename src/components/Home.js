import React from "react";
import { Typewriter } from "react-simple-typewriter";
import vPic from "../assets/v.jpg";

const Home = () => {
  const workingAs = [
    "Front End Developer",
    "UI Developer",
    "UX Designer",
    "React.js Developer",
    "Freelancer",
  ];

  return (
    <div
      className="relative flex items-center justify-center h-screen overflow-hidden 
                 bg-gradient-to-br from-[#e8ebf2] via-[#d9dde4] to-[#cbd2dc]"
    >
      {/* 🌈 Soft glowing auroras */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-15%] left-[-15%] w-[50vw] h-[50vw] bg-gradient-to-br from-[#63a241]/40 to-[#ffb800]/25 rounded-full blur-3xl animate-float-slow opacity-70"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-gradient-to-tl from-[#ff7a66]/30 to-[#ffb800]/20 rounded-full blur-3xl animate-float-slower opacity-60"></div>
      </div>

      {/* 🪞 subtle background image */}
      <img
        src={vPic}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-soft-light"
      />

      {/* ❄️ floating glass dust */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full opacity-50 animate-particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${6 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* 🌟 Name and role */}
      <div className="relative z-30 text-center">
        {/* GLASSY NAME */}
        <h1
          className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight 
                     bg-clip-text text-transparent 
                     bg-gradient-to-r from-[#ffffff] via-[#d1e8ff] to-[#a7b9ff]
                     drop-shadow-[0_5px_20px_rgba(0,0,0,0.4)]
                     animate-glassyFlow relative inline-block"
        >
          Venkatesh L.
          {/* ✨ moving shine line */}
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 animate-glassSweep"></span>
        </h1>

        {/* ROLE TYPEWRITER */}
        <p className="text-2xl md:text-3xl font-semibold text-[#1f2937] mt-8 drop-shadow-[0_3px_8px_rgba(255,255,255,0.4)]">
          I'm a{" "}
          <span className="font-bold bg-gradient-to-r from-[#63a241] via-[#ffb800] to-[#ff7a66] bg-clip-text text-transparent">
            <Typewriter
              words={workingAs}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1000}
            />
          </span>
        </p>
      </div>

      {/* vignette for focus */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_70%,rgba(0,0,0,0.15))]"></div>
    </div>
  );
};

export default Home;
