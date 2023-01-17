import React from 'react';

export default function Welcome() {
  return (
    <div className="h-full flex flex-col justify-center self-center">
      {/* Header */}
      <div className="text-center mb-20">
        <h1 className="text-6xl mb-5">Welcome to FootyXI</h1>
        <p>Create a squad that is true to you.</p>
      </div>
      {/* Nav Buttons */}
      <div className="flex justify-center mb-20">
        <button className=" bg-green-600 p-3 px-6 pt-2 text-white font-bold rounded-full">
          Sign Up
        </button>
        <button className=" bg-green-600 p-3 px-6 pt-2 text-white font-bold rounded-full ml-5">
          Continue As a Guest
        </button>
      </div>
      <div className="text-center">
        <p>
          If you already have an account <a href="#">Sign in</a>
        </p>
      </div>
    </div>
  );
}
