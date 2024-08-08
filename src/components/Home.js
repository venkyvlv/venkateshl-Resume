import React, { useState } from 'react';
import bgPic from '../assets/bg-pic.jpg';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const workingAs = [
    "Front end Developer",
    "UI Developer",
    "UX Designer",
    "React Js Developer",
    "Freelancer"
  ];

  return (
    <div
      className={`flex-1 h-screen text-white bg-cover bg-center ${isHovered ? 'bg-effects' : 'bg-effects'}`}
      style={{ backgroundImage: `url(${bgPic})` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      >
           {/* Snowfall and Particles */}
      <div className="snowfall-container">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="snowflake" style={{ left: `${i * 5}%`, animationDuration: `${5 + i * 2}s` }} />
        ))}
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animationDuration: `${1 + Math.random() * 2}s` }} />
        ))}
      </div>
      <div className="h-screen bg-black bg-opacity-60 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">
            Venkatesh <span className="text-red-500">L.</span>
          </h1>
          <p className="text-2xl font-semibold">
            I'm a{' '}
            <span className="text-red-500">
              <Typewriter
                words={workingAs}
                loop={5}
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
  );
};

export default Home;
