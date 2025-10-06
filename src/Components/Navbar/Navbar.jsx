import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/smileslogo.png";

const Navbar = () => {
  const [stickOn, setStickOn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setStickOn(true) : setStickOn(false);
    });
  }, []);

  return (
    <nav className={`container ${stickOn ? "dark-nav" : ""}`}>
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
