import React, { useState, useEffect } from "react";
import { servicesData } from "../utilities/constant";

const Services = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-[#f5f5f5] via-[#eaeaea] to-[#d8d8d8] overflow-hidden">
      {/* Glowing background orbs */}
      <div className="absolute top-[-10%] left-[5%] w-[25vw] h-[25vw] bg-[#ffffff40] rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] right-[5%] w-[30vw] h-[30vw] bg-[#bcbcbc40] rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight text-gray-900">
          <span className="bg-gradient-to-r from-[#63a241] via-[#ffb800] to-[#ff7a66] bg-clip-text text-transparent">
            My Services
          </span>
        </h2>
        <p className="text-gray-700 text-sm md:text-base mb-10">
          Turning bold ideas into immersive digital experiences
        </p>

        {/* Services Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
            fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl group overflow-hidden 
                bg-white/10 backdrop-blur-2xl border border-white/30 
                shadow-[0_8px_40px_rgba(0,0,0,0.1)] 
                hover:shadow-[0_12px_60px_rgba(0,0,0,0.2)]
                transition-all duration-[4000ms] ease-[cubic-bezier(0.25,1,0.3,1)]"
            >
              {/* Animated Gradient Background */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-60 
                  group-hover:animate-bg-shift-slow"
              ></div>

              {/* Top gradient line */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#63a241] via-[#ffb800] to-[#ff7a66] opacity-80 rounded-t-2xl"></div>

              {/* Inner glow */}
              <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none"></div>

              <div className="relative z-10">
                <div className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#63a241] via-[#ffb800] to-[#ff7a66] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-700 ease-out">
                  <i className={service.icon}></i>
                </div>

                <h3 className="text-lg md:text-xl font-semibold mb-3 text-gray-900 group-hover:text-[#63a241] transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Light sweep shimmer */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer-slow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
