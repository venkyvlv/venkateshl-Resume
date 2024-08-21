import React from "react";
import { servicesData } from "../utilities/constant";

const getRandomColor = () => {
  const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const getRandomPosition = () => {
  return {
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  };
};

const getRandomSize = () => {
  return `${Math.random() * 10 + 5}px`; // Sparkle size between 5px and 15px
};

const generateSparkles = (count) => {
  return Array.from({ length: count }).map((_, index) => {
    const color = getRandomColor();
    const position = getRandomPosition();
    const size = getRandomSize();
    const delay = `${Math.random() * 4}s`; // Random delay between 0s and 4s

    return (
      <div
        key={index}
        className="sparkle"
        style={{
          borderWidth: size,
          borderColor: `${color} transparent transparent transparent`,
          top: position.top,
          left: position.left,
          animationDelay: delay,
        }}></div>
    );
  });
};

const Services = () => {
  return (
    <section className="py-6 px-4 bg-gray-100 relative overflow-hidden">
      <div className="sparkle-bg">
        {generateSparkles(30)} {/* Increase the number of sparkles */}
      </div>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Services</h2>
        <p className="text-gray-600 mb-8 text-sm sm:text-base">
          Services I offer to my clients
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="service-card bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-105">
              <div className="text-red-500 text-3xl sm:text-4xl md:text-5xl mb-4">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-justify text-sm sm:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
