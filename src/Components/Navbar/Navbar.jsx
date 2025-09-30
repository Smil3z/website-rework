import React from "react";
import "./Navbar.css";
import logo from "../../assets/smileslogo.png";
const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="" />
      <ul>
        <li>Home</li>
        <li>About me</li>
        <li>Projects</li>
        <li>Contact me</li>
        <li>Example</li>
      </ul>
    </nav>
  );
};

export default Navbar;
