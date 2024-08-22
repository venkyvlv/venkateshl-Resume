import React, { useRef, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import GetInTouch from "./GetinTouch";
import RolesResponiblities from "./RolesResponiblities"; // Import the Roles component

const Profile = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const GetinTouchRef = useRef(null);
  const rolesRef = useRef(null); // Create ref for Roles section

  const [activeSection, setActiveSection] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const homeElement = homeRef.current;
    const aboutElement = aboutRef.current;
    const serviceElement = serviceRef.current;
    const GetinTouchElement = GetinTouchRef.current;
    const rolesElement = rolesRef.current; // Get Roles element

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    if (homeElement) observer.observe(homeElement);
    if (aboutElement) observer.observe(aboutElement);
    if (serviceElement) observer.observe(serviceElement);
    if (GetinTouchElement) observer.observe(GetinTouchElement);
    if (rolesElement) observer.observe(rolesElement); // Observe Roles section

    return () => {
      if (homeElement) observer.unobserve(homeElement);
      if (aboutElement) observer.unobserve(aboutElement);
      if (serviceElement) observer.unobserve(serviceElement);
      if (GetinTouchElement) observer.unobserve(GetinTouchElement);
      if (rolesElement) observer.unobserve(rolesElement); // Unobserve Roles section
    };
  }, []);

  const handleScrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      <Sidebar
        onNavigate={(section) => {
          if (section === "home") handleScrollToSection(homeRef);
          if (section === "about") handleScrollToSection(aboutRef);
          if (section === "services") handleScrollToSection(serviceRef);
          if (section === "GetinTouch") handleScrollToSection(GetinTouchRef);
          if (section === "roles") handleScrollToSection(rolesRef); // Handle Roles section
        }}
        activeSection={activeSection}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div className="flex-1 overflow-auto bg-gray-100">
        <div ref={homeRef} className="min-h-screen bg-white md:p-2" id="home">
          <Home />
        </div>
        <div ref={aboutRef} className="min-h-screen bg-white" id="about">
          <About />
        </div>
        <div ref={rolesRef} className="min-h-screen bg-white" id="roles">
          <RolesResponiblities />
        </div>
        <div ref={serviceRef} className="min-h-screen bg-white" id="services">
          <Services />
        </div>
        <div
          ref={GetinTouchRef}
          className="min-h-auto bg-white"
          id="GetinTouch">
          <GetInTouch />
        </div>

        {/* Include other sections similarly */}
      </div>
    </div>
  );
};

export default Profile;
