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
  {
    name: "HTML5",
    color: "#f06529",
    icon: <FaHtml5 className="text-orange-500" />,
  },
  {
    name: "CSS/CSS3",
    color: "#2965f1",
    icon: <FaCss3Alt className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    color: "#f0db4f",
    icon: <FaJs className="text-yellow-500" />,
  },
  {
    name: "Bootstrap",
    color: "#7952b3",
    icon: <FaBootstrap className="text-purple-500" />,
  },
  {
    name: "React.js",
    color: "#61dafb",
    icon: <FaReact className="text-blue-400" />,
  },
  {
    name: "Next.js",
    color: "#000000",
    icon: <SiNextdotjs className="text-black" />,
  },
  {
    name: "Git",
    color: "#f34f29",
    icon: <FaGitAlt className="text-red-500" />,
  },
  {
    name: "UI Libraries",
    color: "#38b2ac",
    icon: <SiTailwindcss className="text-teal-500" />,
  },
];

const lightenColor = (color, percent) => {
  let R = parseInt(color.slice(1, 3), 16);
  let G = parseInt(color.slice(3, 5), 16);
  let B = parseInt(color.slice(5, 7), 16);

  R = Math.round(R + (255 - R) * percent);
  G = Math.round(G + (255 - G) * percent);
  B = Math.round(B + (255 - B) * percent);

  R = R.toString(16).padStart(2, "0");
  G = G.toString(16).padStart(2, "0");
  B = B.toString(16).padStart(2, "0");

  return `#${R}${G}${B}`;
};

const Loader = ({ onComplete }) => {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [animationState, setAnimationState] = useState("loading"); // Track animation state

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentSkill < skills.length - 1) {
        setCurrentSkill((prevSkill) => prevSkill + 1);
      } else {
        clearInterval(interval);
        setAnimationState("completed"); // Start door opening animation
        setTimeout(() => onComplete(), 1000); // Delay to match animation duration
      }
    }, 700); // Change skill every 700ms

    return () => clearInterval(interval);
  }, [currentSkill, onComplete]);

  const progressPercentage = ((currentSkill + 1) / skills.length) * 100;
  const currentSkillColor = skills[currentSkill].color;
  const backgroundColor = lightenColor(currentSkillColor, 0.5); // Lighten color by 50%

  return (
    <div
      className={`loader-container ${
        animationState === "completed" ? "door-opened" : ""
      }`}
      style={{ backgroundColor }}>
      <div className="loader-content">
        {/* Left and Right Pieces */}
        <div className="loader-piece left">
          <svg
            className="relative"
            width="150"
            height="150"
            viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#e0e0e0"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke={currentSkillColor} // Dynamically change color
              strokeWidth="2"
              fill="none"
              strokeDasharray="283" // 2 * Math.PI * 45
              strokeDashoffset={283 - (283 * progressPercentage) / 100}
              strokeLinecap="round"
              style={{
                transition: "stroke-dashoffset 0.5s ease, stroke 0.5s ease",
              }}
            />
          </svg>
          {/* Skill Icon and Name inside the circle */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <div className="text-4xl mb-2">{skills[currentSkill].icon}</div>
            <div className="text-xl font-semibold text-gray-700">
              {skills[currentSkill].name}
            </div>
          </div>
        </div>

        <div className="loader-piece right">
          {/* Same content for the right piece if needed */}
        </div>
      </div>
    </div>
  );
};

export default Loader;
