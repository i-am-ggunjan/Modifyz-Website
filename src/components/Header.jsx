import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import Modifyz from "../assets/Modifyz.jpg";

const Header = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <>
      <header className="shadow-2xl shadow-[#219ff5]/40">
        <article>
          <main>
            <div className="modifyz">
              <div className="logo">
                <img src={Modifyz} />
              </div>
              <div className="name">
                <span className="m">M</span>
                <span className="odi">ODI</span>
                <span className="fyz">FYZ</span>
              </div>
            </div>
            <span className="hamburger hamburger-1" onClick={showNavbar}>
              ≡
            </span>

            <nav ref={navRef}>
              <ul>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/profile"}>Profile</Link>
                </li>
                <li>
                  <Link to={"/about"}>About Us</Link>
                </li>
                <li>
                  <Link to={"/contacts"}>Contacts</Link>
                </li>
                <li>
                  <Link to={"/shop"}>Shop</Link>
                </li>
              </ul>
            </nav>
          </main>
        </article>
      </header>
    </>
  );
};

export default Header;
