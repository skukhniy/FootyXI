import React from 'react';

export default function Login() {
  return (
    <div className="flex flex-col self-center justify-center">
      {/* Header */}
      <div className="text-center mt-10">
        <h1>Login</h1>
      </div>
      {/* Form */}
      <div className="flex justify-center">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-11/12 md:max-w-md">
          {/* Username */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          {/* Password */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p>
          </div>
          {/* Button */}
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            {/* Forgot Pass */}
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
      <p className="text-center text-gray-500 text-xs">
        &copy;2023 Stanislav Kukhniy. All rights reserved.
      </p>
    </div>
  );
}
