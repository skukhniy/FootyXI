import React, { useState } from 'react';

export default function NavBar() {
  const [openNav, setNav] = useState(false);
  const toggleMenu = () => {
    setNav(!openNav);
  };
  return (
    <div className="bg-green-800 p-3 text-white flex justify-between h-15 sticky top-0 z-[60]">
      {/* Logo */}
      <div className="ml-5" id="logo">
        <h1>
          <a href="/">FootyXI</a>
        </h1>
      </div>
      {/* Menu */}
      <div className="hidden md:flex self-center space-x-10">
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
    </div>
  );
}
