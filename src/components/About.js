import React from "react";
import sidePic from "../assets/venkysidepic.jpg";

const About = () => {
  return (
    <section className="glitch-section relative pb-12 min-h-screen">
      <div className="glitch-bg" />

      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10 grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
        <div className="col-span-1 md:col-span-1 relative">
          <img
            src={sidePic}
            alt="Profile"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="col-span-1 md:col-span-4 md:ml-10">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900">
            Who am <span className="text-red-500">I?</span>
          </h2>
          <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900 mt-2">
            I'm <span className="text-red-500">Venkatsh L.</span>, a React Js
            Developer and UX/UI Designer
          </h1>
          <p className="mt-4 text-gray-700 text-sm md:text-base">
            Creative and detail-oriented Front-End Developer with a strong focus
            on building intuitive and visually appealing user interfaces. With
            extensive experience as a UI Developer and UX Designer, I bring a
            comprehensive understanding of both design principles and technical
            implementation. Proficient in React.js, I excel at creating dynamic
            and responsive web applications. As a seasoned freelancer, I have a
            proven track record of delivering high-quality solutions while
            meeting tight deadlines.
          </p>
          <div className="mt-4 flex flex-col md:flex-row">
            <div className="flex flex-col md:flex-row md:space-x-8 mb-4 md:mb-0">
              <div className="mb-2 md:mb-0">
                <div className="text-gray-700 font-semibold">Name:</div>
                <div className="text-gray-900">Venkatesh L.</div>
              </div>

              <div className="mb-2 md:mb-0">
                <div className="text-gray-700 font-semibold">Email:</div>
                <div className="text-red-500">vlvenky02@gmail.com</div>
              </div>
              <div>
                <div className="text-gray-700 font-semibold">From:</div>
                <div className="text-gray-900">Bangalore, India</div>
              </div>
            </div>
          </div>
          {/* <div className="mt-6 flex flex-col md:flex-row">
            <button className="bg-red-500 text-white py-2 px-4 rounded-lg mr-4 mb-4 md:mb-0">Download CV</button>
            <button className="border border-gray-500 text-gray-500 py-2 px-4 rounded-lg">My Work</button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
