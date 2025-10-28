import React from "react";
import { Typewriter } from "react-simple-typewriter";
import vPic from "../assets/v.jpg";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

const Home = () => {
  const workingAs = [
    "Front End Developer",
    "UI Developer",
    "UX Designer",
    "React.js Developer",
    "Freelancer",
  ];

  const techLogos = [
    { icon: <FaReact className="text-[#61DAFB]" />, name: "React" },
    {
      icon: <SiNextdotjs className="text-black dark:text-white" />,
      name: "Next.js",
    },
    { icon: <FaJs className="text-[#F7DF1E]" />, name: "JavaScript" },
    { icon: <SiTypescript className="text-[#3178C6]" />, name: "TypeScript" },
    { icon: <FaHtml5 className="text-[#E34F26]" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-[#1572B6]" />, name: "CSS3" },
    { icon: <SiTailwindcss className="text-[#38BDF8]" />, name: "TailwindCSS" },
    { icon: <SiRedux className="text-[#764ABC]" />, name: "Redux" },
    { icon: <FaGitAlt className="text-[#F05032]" />, name: "Git" },
    { icon: <FaGithub className="text-[#181717]" />, name: "GitHub" },
  ];

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden
                 bg-gradient-to-br from-[#e8ebf2] via-[#d9dde4] to-[#cbd2dc]
                 px-4 sm:px-6 md:px-8"
    >
      {/* 🌈 Glowing auroras */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-15%] left-[-15%] w-[60vw] h-[60vw] bg-gradient-to-br from-[#63a241]/40 to-[#ffb800]/25 rounded-full blur-3xl animate-float-slow opacity-70"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[65vw] h-[65vw] bg-gradient-to-tl from-[#ff7a66]/30 to-[#ffb800]/20 rounded-full blur-3xl animate-float-slower opacity-60"></div>
      </div>

      {/* 🪞 Background image */}
      <img
        src={vPic}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-soft-light"
      />

      {/* ❄️ Floating glass dust */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(20)].map((_, i) => (
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
      <div className="relative z-30 text-center max-w-[90%] sm:max-w-[80%] md:max-w-[70%]">
        <h1
          className="font-extrabold tracking-tight leading-tight
                     text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
                     bg-clip-text text-transparent 
                     bg-gradient-to-r from-[#ffffff] via-[#d1e8ff] to-[#a7b9ff]
                     drop-shadow-[0_5px_20px_rgba(0,0,0,0.4)]
                     animate-glassyFlow relative inline-block"
        >
          Venkatesh L.
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 animate-glassSweep"></span>
        </h1>

        {/* Typewriter roles */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#1f2937] mt-6 sm:mt-8 drop-shadow-[0_3px_8px_rgba(255,255,255,0.4)]">
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

        {/* 💠 Floating tech icons */}
        <div
          className="mt-10 sm:mt-12 md:mt-16 
                     flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10"
        >
          {techLogos.map((tech, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center justify-center 
                         w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 
                         rounded-2xl bg-white/10 backdrop-blur-md 
                         border border-white/20 shadow-lg transition-all duration-500 
                         hover:scale-110 hover:bg-white/30 hover:shadow-2xl"
              style={{
                animation: `floaty ${
                  4 + index
                }s ease-in-out infinite alternate`,
              }}
            >
              <div className="text-3xl sm:text-4xl mb-1 sm:mb-2">
                {tech.icon}
              </div>
              <p className="text-[10px] sm:text-xs md:text-sm font-medium text-gray-800">
                {tech.name}
              </p>
              <span className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-40 rounded-2xl transition-opacity duration-500"></span>
            </div>
          ))}
        </div>
      </div>

      {/* vignette for depth */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_70%,rgba(0,0,0,0.15))]"></div>
    </div>
  );
};

export default Home;
