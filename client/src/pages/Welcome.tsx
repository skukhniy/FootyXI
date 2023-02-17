import React from 'react';
import logo from '../assets/Logo Assets/Asset 11@4x.png';
// import logoBWfrom '../assets/Logo Assets/logo-BW-LG.png';
import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <div id="welcomePage" className=" flex flex-col  self-center">
      {/* Header */}
      <div className="text-center mb-10 flex flex-col items-center z-20 mt-16 h-full">
        {/* Logo */}
        <img src={logo} className="mb-5 w-40 md:w-56"></img>
        <h1 className="text-4xl font-bold mb-5 mt-1 md:text-7xl">
          Welcome to FootyXI
        </h1>
        <p className="text-lg">Create a squad that is true to you.</p>
      </div>
      {/* Nav Buttons */}
      <div className="flex flex-col self-center justify-center mb-10 mt-5 md:flex-row md:justify-center z-10">
        <Link to="/signup" className="self-center">
          <button className=" btn-primary w-28 hover:scale-110 self-center mb-5 md:mr-5 md:mb-0">
            Sign Up
          </button>
        </Link>
        <Link to="/squad-builder">
          <button className=" btn-primary hover:scale-110 w-30 md:ml-5 ">
            Guest
          </button>
        </Link>
      </div>
      {/* login */}
      <div className="text-center mt-5 z-10">
        <p>
          If you already have an account
          <span> </span>
          <a href="/login" className="text-blue-600 underline">
            Login
          </a>
        </p>
      </div>
      <div
        id="homeBackground"
        className="bg-black h-[800px] opacity-20 z-0 w-full absolute"
      ></div>
    </div>
  );
}
