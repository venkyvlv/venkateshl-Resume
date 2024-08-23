import React, { useRef, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import GetInTouch from "./GetinTouch";
import RolesResponiblities from "./RolesResponiblities";
import Loader from "./Loader";
import music from "../assets/lightmusic2.mpeg";
import { FaPlay, FaPause } from "react-icons/fa";

const Profile = () => {
  const audioRef = useRef(new Audio(music));
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    const audio = audioRef.current;
    audio.volume = 0.3;
    audio.loop = true;
    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch((error) => {
        console.error("Audio play error:", error);
      });
  };

  const pauseAudio = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  useEffect(() => {
    const audio = audioRef.current;
    audio.muted = false;
    audio.volume = 0.3;

    const handlePlay = () =>
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => {
          console.error("Audio play error:", error);
        });

    handlePlay();

    return () => {
      audio.pause();
      setIsPlaying(false);
    };
  }, [setIsPlaying]);

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

  useEffect(() => {
    if (!loading) {
      playAudio();
    }
  }, [loading]);

  const handleScrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
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

      {/* Background Music */}
      <div className="fixed bottom-4 left-4 flex space-x-2 z-50">
        <button
          onClick={isPlaying ? pauseAudio : playAudio}
          className="bg-[#1C9F8C] p-2 rounded-full text-white"
          style={{ fontSize: "18px" }}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
    </div>
  );
};

export default Profile;
