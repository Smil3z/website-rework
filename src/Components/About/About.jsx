import React from "react";
import "./About.css";
import selfie from "../../assets/me.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={selfie} alt="" className="selfie-pic" />
      </div>
      <div className="about-right">
        <h3>ABOUT ME</h3>
        <p>
          "Hello everyone and welcome to my portfolio, my name is Stephon and I
          am a motivated Full Stack Engineer proficient in HTML, CSS, and
          JavaScript programming languages. My background is in Web Development
          and Agile Methodologies. I provide a high level of service to clients
          in custom development for applications and website proprietary
          customizations.",
        </p>
      </div>
    </div>
  );
};

export default About;
