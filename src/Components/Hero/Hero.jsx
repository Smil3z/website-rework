import React from "react";
import "./Hero.css";
import video from "../../assets/particlewave.mp4";

const Hero = () => {
  return (
    <div className="hero">
      <video className="background-video" src={video} autoPlay loop muted />
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>Welcome to My Site</h1>
        <p>Subtitle or description here</p>
      </div>
    </div>
  );
};

export default Hero;
