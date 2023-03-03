import React, { useState } from "react";

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleModeChange = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500">
      <nav className="flex items-center justify-between flex-wrap bg-gradient-to-r from-cyan-500 to-blue-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-semibold text-xl tracking-tight">
            <a href="/"> Daily News</a>
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <a
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
            >
              Top News
            </a>
            <a
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
            >
              Sports
            </a>
            <a
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white"
            >
              Entertainment
            </a>
          </div>
          <div>
            <button
              onClick={handleModeChange}
              className="bg-white text-gray-800 font-bold py-2 px-4 rounded"
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
