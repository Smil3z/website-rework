import React from "react";
import "./Navbar.css";
import logo from "../../assets/smileslogo.png";
const Navbar = () => {
  return (
    <nav className="container">
      <img src={logo} className="logo" alt="" />
      <ul className="navlist">
        <li>Home</li>
        <li>About me</li>
        <li>Projects</li>
        <li>
          <button className="bttn">Contact me</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
