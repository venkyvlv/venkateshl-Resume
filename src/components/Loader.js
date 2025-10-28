import React, { useEffect, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML5", color: "#f06529", icon: <FaHtml5 /> },
  { name: "CSS/CSS3", color: "#2965f1", icon: <FaCss3Alt /> },
  { name: "JavaScript", color: "#d2c04a", icon: <FaJs /> },
  { name: "Bootstrap", color: "#7952b3", icon: <FaBootstrap /> },
  { name: "React.js", color: "#61dafb", icon: <FaReact /> },
  { name: "Next.js", color: "#000000", icon: <SiNextdotjs /> },
  { name: "Git", color: "#f34f29", icon: <FaGitAlt /> },
  { name: "UI Libraries", color: "#38b2ac", icon: <SiTailwindcss /> },
];

const lightenColor = (color, percent) => {
  let R = parseInt(color.slice(1, 3), 16);
  let G = parseInt(color.slice(3, 5), 16);
  let B = parseInt(color.slice(5, 7), 16);

  R = Math.round(R + (255 - R) * percent);
  G = Math.round(G + (255 - G) * percent);
  B = Math.round(B + (255 - B) * percent);

  return `#${R.toString(16).padStart(2, "0")}${G.toString(16).padStart(
    2,
    "0"
  )}${B.toString(16).padStart(2, "0")}`;
};

const Loader = ({ onComplete }) => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [animationState, setAnimationState] = useState("loading");

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSkill < skills.length - 1) {
        setCurrentSkill((prev) => prev + 1);
      } else {
        clearInterval(interval);
        setAnimationState("completed");
        setTimeout(() => onComplete(), 1000);
      }
    }, 900);
    return () => clearInterval(interval);
  }, [currentSkill, onComplete]);

  const progressPercentage = ((currentSkill + 1) / skills.length) * 100;
  const currentSkillColor = skills[currentSkill].color;
  const backgroundColor = lightenColor(currentSkillColor, 0.7);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-all duration-1000 z-[9999] ${
        animationState === "completed" ? "animate-fadeOutLoader" : ""
      }`}
      style={{
        background: `radial-gradient(circle at center, ${backgroundColor}70, #0f172a 90%)`,
      }}
    >
      {/* Ambient glow circles */}
      <div className="absolute w-[45vw] h-[45vw] bg-white/10 rounded-full blur-3xl animate-pulse-slowLoader left-[-10vw] top-[-5vw]"></div>
      <div className="absolute w-[30vw] h-[30vw] bg-white/10 rounded-full blur-3xl animate-pulse-slowLoader right-[-5vw] bottom-[-5vw]"></div>

      {/* Glassy loader ring */}
      <div className="relative z-10 w-[230px] h-[230px] rounded-full flex items-center justify-center backdrop-blur-3xl bg-white/10 border border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.25)]">
        {/* Spinning gradient ring */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: `conic-gradient(${currentSkillColor}, transparent 70%)`,
            animation: "spinLoader 6s linear infinite",
            maskImage:
              "radial-gradient(circle at center, transparent 58%, black 59%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, transparent 58%, black 59%)",
          }}
        ></div>

        {/* Progress circle */}
        <svg
          className="relative z-20"
          width="180"
          height="180"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="rgba(255,255,255,0.15)"
            strokeWidth="3"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke={currentSkillColor}
            strokeWidth="3"
            fill="none"
            strokeDasharray="283"
            strokeDashoffset={283 - (283 * progressPercentage) / 100}
            strokeLinecap="round"
            style={{
              transition: "stroke-dashoffset 0.5s ease, stroke 0.5s ease",
              filter: `drop-shadow(0 0 10px ${currentSkillColor})`,
            }}
          />
        </svg>

        {/* Skill Icon & Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-30">
          <div
            className="text-5xl mb-2 transition-all duration-500 ease-out"
            style={{
              color: currentSkillColor,
              animation: "fadeInLoader 0.7s ease",
            }}
          >
            {skills[currentSkill].icon}
          </div>

          {/* 🔥 Skill text in respective color */}
          <div
            className="text-lg font-semibold tracking-wide animate-fadeInLoader"
            style={{
              color: currentSkillColor,
              textShadow: `0 0 12px ${currentSkillColor}90, 0 0 20px ${currentSkillColor}40`,
            }}
          >
            {skills[currentSkill].name}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-white/10 to-transparent blur-2xl"></div>
    </div>
  );
};

export default Loader;
