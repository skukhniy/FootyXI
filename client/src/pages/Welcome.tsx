import React from 'react';

export default function Welcome() {
  return (
    <div className="h-[90%] flex flex-col justify-center self-center">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-6xl font-bold mb-5 mt-1">Welcome to FootyXI</h1>
        <p className="text-lg">Create a squad that is true to you.</p>
      </div>
      {/* Nav Buttons */}
      <div className="flex flex-col self-center justify-center mb-10 mt-5 md:flex-row">
        <button className=" bg-green-600 p-3 px-6 pt-2 text-white font-bold rounded-full hover:scale-110 w-28 self-center mb-5 md:mr-5 md:mb-0">
          <a href="/signup">Sign Up</a>
        </button>
        <button className=" bg-green-600 p-3 px-6 pt-2 text-white font-bold rounded-full hover:scale-110 w-52 md:ml-5 ">
          Continue As a Guest
        </button>
      </div>
      {/* login */}
      <div className="text-center mt-5">
        <p>
          If you already have an account
          <span> </span>
          <a href="/login" className="text-blue-600 underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
