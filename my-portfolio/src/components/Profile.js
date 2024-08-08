import React, { useRef, useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Home from './Home';
import About from './About';
// Import other sections similarly

const Profile = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  // Create refs for other sections similarly

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const homeElement = homeRef.current;
    const aboutElement = aboutRef.current;
    // Store other section refs similarly

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    if (homeElement) observer.observe(homeElement);
    if (aboutElement) observer.observe(aboutElement);
    // Observe other sections similarly

    return () => {
      if (homeElement) observer.unobserve(homeElement);
      if (aboutElement) observer.unobserve(aboutElement);
      // Unobserve other sections similarly
    };
  }, []);

  const handleScrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="grid grid-cols-[20%,80%] h-screen">
      <Sidebar
        onNavigate={(section) => {
          if (section === 'home') handleScrollToSection(homeRef);
          if (section === 'about') handleScrollToSection(aboutRef);
          // Handle other sections similarly
        }}
        activeSection={activeSection} // Pass the active section to Sidebar
      />
      <div className="overflow-auto bg-gray-100">
        <div ref={homeRef} className="h-screen bg-white" id="home">
          <Home />
        </div>
        <div ref={aboutRef} className="h-screen bg-white" id="about">
          <About />
        </div>
        {/* Include other sections similarly */}
      </div>
    </div>
  );
};

export default Profile;
