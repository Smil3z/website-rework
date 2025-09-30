import React from "react";
import "./Hero.css";
import video from "../../assets/particlewave.mp4";
const Hero = () => {
  return (
    <div className="hero">
      <video src={video} autoPlay loop muted />
    </div>
  );
};

export default Hero;
