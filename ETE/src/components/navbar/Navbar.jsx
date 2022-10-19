import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo1 from '../../logo1.png';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo1} />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a className="text-decoration-none text-light" href="/home">Home</a></p>
          <p><a className="text-decoration-none text-light" href="#wgpt3">About Us</a></p>
          <p><a className="text-decoration-none text-light" href="#possibility">Open AI</a></p>
          <p><a className="text-decoration-none text-light" href="#features">Case Studies</a></p>
          <p><a className="text-decoration-none text-light" href="#blog">Library</a></p>
          {/* <p><a className="text-decoration-none text-light" href="/client">Client</a></p> */}
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <a className="text-decoration-none" href="/login"><p>Sign in</p></a>
        <a className="text-decoration-none" href="/register"><button type="button">Sign up</button></a>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT3?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
