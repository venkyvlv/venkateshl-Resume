import React, { useRef, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import GetInTouch from "./GetinTouch";
import RolesResponiblities from "./RolesResponiblities";
import Loader from "./Loader"; // Import the Loader component

const Profile = () => {
  const [loading, setLoading] = useState(true); // Track if loading is complete

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const serviceRef = useRef(null);
  const GetinTouchRef = useRef(null);
  const rolesRef = useRef(null);

  const [activeSection, setActiveSection] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const homeElement = homeRef.current;
    const aboutElement = aboutRef.current;
    const serviceElement = serviceRef.current;
    const GetinTouchElement = GetinTouchRef.current;
    const rolesElement = rolesRef.current;

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
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
    if (rolesElement) observer.observe(rolesElement);

    return () => {
      if (homeElement) observer.unobserve(homeElement);
      if (aboutElement) observer.unobserve(aboutElement);
      if (serviceElement) observer.unobserve(serviceElement);
      if (GetinTouchElement) observer.unobserve(GetinTouchElement);
      if (rolesElement) observer.unobserve(rolesElement);
    };
  }, []);

  const handleScrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />; // Show loader until complete
  }

  return (
    <div className="flex h-screen">
      <Sidebar
        onNavigate={(section) => {
          if (section === "home") handleScrollToSection(homeRef);
          if (section === "about") handleScrollToSection(aboutRef);
          if (section === "services") handleScrollToSection(serviceRef);
          if (section === "GetinTouch") handleScrollToSection(GetinTouchRef);
          if (section === "roles") handleScrollToSection(rolesRef);
        }}
        activeSection={activeSection}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />
      <div
        className={`flex-1 overflow-auto bg-gray-100 profile-content ${
          !loading ? "animate-doorOpen" : ""
        }`}>
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
      </div>
    </div>
  );
};

export default Profile;
