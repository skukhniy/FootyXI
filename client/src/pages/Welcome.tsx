import React from 'react';

export default function Welcome() {
  return (
    <div className="h-[90%] flex flex-col justify-center self-center">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-7xl font-bold mb-5 mt-1">Welcome to FootyXI</h1>
        <p className="text-lg">Create a squad that is true to you.</p>
      </div>
      {/* Nav Buttons */}
      <div className="flex justify-center mb-10 mt-5">
        <button className=" bg-green-600 p-3 px-6 pt-2 text-white font-bold rounded-full mr-5 hover:scale-110 ">
          <a href="/signup">Sign Up</a>
        </button>
        <button className=" bg-green-600 p-3 px-6 pt-2 text-white font-bold rounded-full ml-5 hover:scale-110">
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
