import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0e0e0e] text-white text-center px-6">
      {/* Error Code */}
      <h1 className="text-[100px] sm:text-[150px] md:text-[200px] font-bold text-gray-700 select-none">
        404
      </h1>

      {/* Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mt-4 mb-3">
        Page Not Found
      </h2>

      {/* Message */}
      <p className="text-gray-400 text-sm sm:text-base max-w-md mb-10 leading-relaxed">
        The page you’re looking for doesn’t exist or has been moved.
        Let’s get you back to where you belong.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="bg-[#3B6E54] hover:bg-[#3ba17d] text-white px-6 sm:px-8 py-3 rounded-md text-sm sm:text-base font-medium shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
