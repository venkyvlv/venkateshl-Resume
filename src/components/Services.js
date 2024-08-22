import React from "react";
import { servicesData } from "../utilities/constant";

// Function to generate bright pastel colors for sparkles
const getBrightSparkleColor = () => {
  const colors = [
    "#FFEBEE", // Light Pink
    "#FFCDD2", // Light Coral
    "#FFEB3B", // Bright Yellow
    "#E1F5FE", // Light Blue
    "#B9FBC0", // Light Mint
    "#F3E5F5", // Light Lavender
    "#E0F2F1", // Light Teal
    "#FF9E80", // Light Orange
    "#B3E5FC", // Light Blue
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

// Function to generate vibrant gradient colors
const getRandomGradient = () => {
  const colors = [
    "#FFEBEE", // Light Pink
    "#FFCDD2", // Light Coral
    "#FFEB3B", // Bright Yellow
    "#E1F5FE", // Light Blue
    "#B9FBC0", // Light Mint
    "#F3E5F5", // Light Lavender
    "#E0F2F1", // Light Teal
    "#FF9E80", // Light Orange
    "#B3E5FC", // Light Blue
    "#FCE4EC", // Light Pink
    "#FFF3E0", // Extra Light Orange
    "#D1C4E9", // Light Purple
  ];
  const color1 = colors[Math.floor(Math.random() * colors.length)];
  let color2;
  do {
    color2 = colors[Math.floor(Math.random() * colors.length)];
  } while (color1 === color2); // Ensure different colors for the gradient
  return `linear-gradient(to right, ${color1}, ${color2})`;
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
    const color = getBrightSparkleColor();
    const position = getRandomPosition();
    const size = getRandomSize();
    const delay = `${Math.random() * 4}s`; // Random delay between 0s and 4s

    return (
      <div
        key={index}
        className="sparkle"
        style={{
          width: size,
          height: size,
          backgroundColor: color,
          top: position.top,
          left: position.left,
          opacity: 0.8, // Increased opacity for brightness
          animationDelay: delay,
        }}></div>
    );
  });
};

const Services = () => {
  return (
    <section className="py-6 px-4 bg-gray-100 relative overflow-hidden">
      <div className="sparkle-bg">
        {generateSparkles(230)} {/* Increase the number of sparkles */}
      </div>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Services</h2>
        <p className="text-gray-600 mb-8 text-sm sm:text-base">
          Services I offer to my clients
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {servicesData.map((service, index) => {
            const gradient = getRandomGradient();

            return (
              <div
                key={index}
                className="service-card p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transition-shadow duration-300 ease-in-out transform hover:scale-105"
                style={{ background: gradient }}>
                <div
                  className="text-3xl sm:text-4xl md:text-5xl mb-4"
                  style={{ color: "#9C27B0" }}>
                  {/* Set icon color to Purple */}
                  <i className={service.icon}></i>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-justify text-sm sm:text-base">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
