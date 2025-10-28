import React from "react";
import sidePic from "../assets/v2.png";
import ParallaxImage from "../hooks/paralxHero";

const About = () => {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-[#f8fafc] via-[#ffffff] to-[#eef2f3] overflow-hidden">
      {/* Decorative gradient lights */}
      <div className="absolute top-0 left-0 w-[25vw] h-[25vw] bg-[#ffb800]/10 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-[20vw] h-[20vw] bg-[#63a241]/10 rounded-full blur-3xl opacity-60"></div>

      {/* Left Column - Parallax Image */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative overflow-hidden">
        <ParallaxImage />

        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"></div>
      </div>

      {/* Right Column - Info Content */}
      <div className="relative z-10 w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white/70 backdrop-blur-sm md:bg-transparent md:backdrop-blur-0">
        <h2 className="text-xl md:text-2xl font-bold mb-3 tracking-wide">
          <span className="bg-gradient-to-r from-[#63a241] via-[#ffb800] to-[#ff7a66] bg-clip-text text-transparent uppercase">
            Who Am I?
          </span>
        </h2>

        <h1 className="text-xl md:text-xl font-extrabold leading-snug mb-5">
          <span className="text-3xl relative inline-block bg-gradient-to-r from-[#63a241] via-[#ffb800] to-[#ff7a66] bg-clip-text text-transparent animate-gradient-slow">
            I’m Venkatesh L,
          </span>{" "}
          <br className="hidden md:block" />
          <span className="text-gray-800 text-lg font-medium tracking-wide">
            a{" "}
            <span className="relative font-semibold bg-gradient-to-r from-[#ff7a66] via-[#ffb800] to-[#63a241] bg-clip-text text-transparent animate-role-gradient capitalize">
              React.Js Developer
            </span>{" "}
            <span className="text-gray-700">&</span>{" "}
            <span className="relative font-semibold bg-gradient-to-r from-[#63a241] via-[#ffb800] to-[#ff7a66] bg-clip-text text-transparent animate-role-gradient capitalize">
              UI/UX Designer
            </span>
          </span>
        </h1>

        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
          Passionate and detail-oriented Front-End Developer specializing in
          crafting intuitive and visually engaging interfaces. With strong
          expertise in React.js and UI/UX design, I bridge the gap between
          creativity and functionality. I take pride in building seamless user
          experiences that are both elegant and efficient — with a proven track
          record as a freelancer delivering high-quality solutions on time.
        </p>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-700">
          <div>
            <p className="font-semibold text-gray-500 bg-gradient-to-r from-[#63a241] via-[#ffb800] to-[#ff7a66] bg-clip-text text-transparent animate-role-gradient ">
              Email
            </p>
            <p className="text-[#ff7a66] bg-gradient-to-r from-[#63a241] via-[#ffb800] to-[#ff7a66] bg-clip-text text-transparent animate-role-gradient ">
              vlvenky02@gmail.com
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-500">From</p>
            <p className="text-gray-800">Bangalore, India</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8  flex-wrap gap-4 hidden">
          <button
            title="No link yet"
            className="bg-[#63a241] hover:bg-[#558d37] text-white font-semibold py-2 px-6 rounded-lg transition duration-300 shadow-md "
          >
            Download CV
          </button>
          <button
            title="No link yet"
            className="border border-gray-300 text-gray-700 hover:bg-gray-100 py-2 px-6 rounded-lg transition duration-300"
          >
            My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
