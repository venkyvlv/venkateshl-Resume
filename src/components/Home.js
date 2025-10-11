import React from "react";

import { Typewriter } from "react-simple-typewriter";
import vPic from "../assets/v.jpg";

const Home = () => {
  const workingAs = [
    "Front end Developer",
    "UI Developer",
    "UX Designer",
    "React Js Developer",
    "Freelancer",
  ];

  return (
    <div
      className={`flex-1 h-screen text-white bg-cover bg-center bg-gradient-to-br from-[#ff7a66] via-[#ffb800] to-[#6b46c1] relative bg-attractive`}
    >
      {/* background image as element so we can control opacity precisely */}
      <img
        src={vPic}
        alt="background"
        aria-hidden="true"
        className="pointer-events-none"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.04,
          zIndex: 0,
        }}
      />
      {/* subtle image overlay to reduce prominence */}
      <div className="absolute inset-0 bg-white/10 mix-blend-overlay pointer-events-none" />
      {/* Decorative waves and particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <svg
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[140%] opacity-60 animate-wave"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,80 C150,200 350,0 600,80 C850,160 1050,40 1200,80"
            fill="none"
            stroke="rgba(255,184,0,0.85)"
            strokeWidth="2"
            className="wave-line"
          />
        </svg>
        <svg
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[130%] opacity-45 animate-wave animation-delay-2000"
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,100 C200,0 400,200 600,100 C800,0 1000,200 1200,100"
            fill="none"
            stroke="rgba(255,184,0,0.6)"
            strokeWidth="1.4"
            className="wave-line wave-line--sub"
          />
        </svg>
      </div>
      <div className="snowfall-container">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="snowflake"
            style={{ left: `${i * 5}%`, animationDuration: `${5 + i * 2}s` }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      <div className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="max-w-2xl w-[90%] md:w-3/4 lg:w-1/2">
          <div className="backdrop-blur-md bg-white/6 border border-white/20 rounded-2xl p-10 shadow-lg relative z-20 overflow-hidden">
            {/* subtle shimmer */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -left-40 top-0 h-full w-40 bg-gradient-to-r from-white/6 via-white/12 to-white/6 opacity-20 transform rotate-12 animate-shimmer"></div>
            </div>
            {/* diagonal glassy thin line (bottom-left to top-right) */}
            <div className="absolute pointer-events-none -left-20 -bottom-20 w-96 h-6 transform rotate-12 opacity-60 animate-diagonal-wave">
              <div className="w-full h-full bg-gradient-to-tr from-white/40 via-white/70 to-white/40 rounded-full blur-md" />
            </div>
            {/* top-left single thin glassy line (inside card) */}
            <div className="absolute pointer-events-none left-6 top-6 w-56 h-1 transform -rotate-12 opacity-80 animate-diagonal-wave-top">
              <div className="w-full h-full bg-gradient-to-tr from-white/60 via-white/90 to-white/60 rounded-full blur-sm" />
            </div>
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4  ">
                Venkatesh <span className="text-[#e0097b85]">L.</span>
              </h1>
              <p className="text-2xl font-semibold">
                I'm a{" "}
                <span className="text-[#e0097b85]">
                  <Typewriter
                    words={workingAs}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={50}
                    deleteSpeed={40}
                    delaySpeed={1000}
                  />
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
