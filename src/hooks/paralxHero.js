import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import sidePic from "../assets/v2.png";

const ParallaxImage = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]); // adjust 100 → more movement

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Parallax motion image */}
      <motion.div
        style={{
          y,
          backgroundImage: `url(${sidePic})`,
          backgroundPosition: "40% center",
          backgroundSize: "contain", // keeps the face visible
          backgroundRepeat: "no-repeat",
          backgroundColor: "#fff",
          scale: 1.1,
          filter: "brightness(1.05) contrast(1.05) saturate(1.1)",
        }}
        className="absolute inset-0 will-change-transform"
      />

      {/* Premium overlay layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
      <div className="absolute top-1/2 left-1/3 w-[60%] h-[80%] bg-white/5 rounded-full blur-[120px] opacity-60 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 pointer-events-none"></div>
    </div>
  );
};

export default ParallaxImage;
