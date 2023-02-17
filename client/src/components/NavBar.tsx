import React, { useState } from 'react';
import banner from '../assets/Logo Assets/banner3.png';
import logo from '../assets/Logo Assets/Asset 11@4x.png';
import { Link } from 'react-router-dom';
import LogoutButton from './Auth/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

export default function NavBar() {
  const [openNav, setNav] = useState(false);
  const toggleMenu = () => {
    setNav(!openNav);
  };
  return (
    <nav
      id="navBar"
      className="bg-green-800 p-3 text-white flex justify-between h-15 sticky top-0 z-[60]"
    >
      {/* Logo */}
      <div className="ml-5 flex justify-center items-center" id="logo">
        {/* <img src={logo} className="w-10 mr-1"></img> */}
        <Link to="/">
          <img src={banner} className="w-52"></img>
        </Link>
        {/* <h1 className="ml-3">
          <a href="/">FOOtyXI</a>
        </h1> */}
      </div>
      {/* Menu */}
      <div className="hidden md:flex self-center space-x-10 text-2xl">
        <a href="/squads" className="hover:text-gray-300 mb-2">
          S q u a d s
        </a>
        <a href="/builder" className="hover:text-gray-300">
          B u i l d e r
        </a>
        <a href="/player-comparison" className="hover:text-gray-300">
          P l a y e r - C o m p a r i s o n
        </a>

        <LogoutButton />
      </div>

      {/* mobile menu */}
      <div className="md:hidden">
        <div
          className={`absolute 
          ${openNav ? 'flex' : 'hidden'} 
          flex-col items-center self-end py-8 mt-[44px] space-y-6 bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-lg text-black`}
          id="menu"
        >
          <a href="/squads" className="hover:text-gray-300">
            Squads
          </a>
          <a href="/builder" className="hover:text-gray-300">
            Builder
          </a>
          <a href="/player-comparison" className="hover:text-gray-300">
            Player Comparison
          </a>
        </div>
      </div>
      {/* Hamburger Button */}
      <button
        id="menu-btn"
        className={`block 
        ${openNav ? 'open' : ''}
        hamburger md:hidden focus:outline-none self-center mt-2`}
        onClick={toggleMenu}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
    </nav>
  );
}
