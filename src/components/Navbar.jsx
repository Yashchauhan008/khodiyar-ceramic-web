import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import logo from "../assets/logo.png";
import { catalogue } from "../utils/data.js";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="backdrop-blur-md bg-primary/40 text-text h-19 w-full fixed top-0 left-0 z-50 shadow-lg border-b border-text/10 font-family-darker-grotesque font-bold" style={{fontSize: 'var(--font-size-nav)'}}>
      <div className="flex justify-between items-center px-6 sm:px-10 md:px-20 lg:px-28 py-4">
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex items-center justify-center">
          <img src={logo} alt="BREEZO" className="h-10 sm:h-12 w-auto" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center justify-center gap-10  relative">
          <NavLink to="/" className={({isActive}) => `hover:text-white transition flex items-center justify-center ${isActive ? 'text-red-500 font-extrabold' : 'text-text'}`}>
            Home
          </NavLink>
          <NavLink to="/about-us" className={({isActive}) => `hover:text-white transition flex items-center justify-center ${isActive ? 'text-red-500 font-extrabold' : 'text-text'}`}>
            About Us
          </NavLink>

          {/* Collections Dropdown */}
          <div
            className="relative group flex items-center justify-center"
            onMouseEnter={() => {
              clearTimeout(window.dropdownTimeout);
              setDropdownOpen(true);
            }}
            onMouseLeave={() => {
              window.dropdownTimeout = setTimeout(() => {
                setDropdownOpen(false);
              }, 150);
            }}
          >
            <button className="flex items-center cursor-pointer justify-center gap-2 text-text hover:text-white transition relative z-10">
              Collections
              <FaChevronDown
                className={` transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {/* Fixed Positioned Dropdown */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-[#1E1E1E] rounded-lg shadow-lg z-50 transition-all duration-300 transform origin-top ${dropdownOpen
                ? "opacity-100 scale-100 translate-y-0 visible"
                : "opacity-0 scale-95 -translate-y-2 invisible"
                }`}
            >
              <ul className="py-2  text-text flex flex-col items-center justify-center">
                {catalogue.slice(0, 5).map((item) => (
                  <li key={item.id} className="w-full text-center">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeMenu}
                      className="block px-4 py-2 hover:bg-gray-700 hover:text-white transition rounded-md"
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>


          <NavLink to="/export" className={({isActive}) => `hover:text-white transition flex items-center justify-center ${isActive ? 'text-red-500 font-extrabold' : 'text-text'}`}>
            Export
          </NavLink>
          <NavLink to="/catalogue" className={({isActive}) => `hover:text-white transition flex items-center justify-center ${isActive ? 'text-red-500 font-extrabold' : 'text-text'}`}>
            E-Catalogues
          </NavLink>
          <NavLink to="/technology" className={({isActive}) => `hover:text-white transition flex items-center justify-center ${isActive ? 'text-red-500 font-extrabold' : 'text-text'}`}>
            Technology
          </NavLink>
        </div>

        {/* Contact Button (Desktop) */}
        <div className="hidden lg:flex items-center justify-center">
          <Link
            to="/export#contact"
            className="flex items-center justify-center gap-2 bg-accent/80 backdrop-blur-sm px-5 py-2 rounded-md  hover:bg-accent transition"
          >
            Contact Us
            <span className="flex items-center justify-center w-5 h-5 bg-white rounded-full">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 17L17 7M17 7H8M17 7V16"
                  stroke="#2f5f46"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-text focus:outline-none flex items-center justify-center"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-primary flex flex-col items-center justify-center -mt-1.5 gap-6 py-6 transition-all duration-500 overflow-hidden ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <NavLink to="/" onClick={closeMenu} className={({isActive}) => `hover:text-white transition flex items-center justify-center ${isActive ? 'text-red-500 font-extrabold' : 'text-text'}`}>
          Home
        </NavLink>

        <NavLink to="/about-us" onClick={closeMenu} className={({isActive}) => `hover:text-white transition flex items-center justify-center ${isActive ? 'text-red-500 font-extrabold' : 'text-text'}`}>
          About Us
        </NavLink>

        {/* Mobile Dropdown */}
        <div className="w-full flex flex-col items-center justify-center">
          <button
            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
            className="flex items-center justify-center gap-2 text-text hover:text-white transition"
          >
            Collections
            <FaChevronDown
              className={`text-xs transition-transform duration-200 ${mobileDropdownOpen ? "rotate-180" : ""
                }`}
            />
          </button>

          {mobileDropdownOpen && (
            <div className="flex flex-col items-center justify-center gap-6 mt-6  w-full bg-primary  rounded-md">
              {catalogue.slice(0, 5).map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="text-text hover:text-white transition flex items-center justify-center"
                >
                  {item.title}
                </a>
              ))}
            </div>
          )}
        </div>

        <NavLink to="/export" onClick={closeMenu} className={({isActive}) => `hover:text-white transition flex items-center justify-center ${isActive ? 'text-red-500 font-extrabold' : 'text-text'}`}>
          Export
        </NavLink>
        <NavLink to="/catalogue" onClick={closeMenu} className={({isActive}) => `hover:text-white transition flex items-center justify-center ${isActive ? 'text-red-500 font-extrabold' : 'text-text'}`}>
          E-Catalogues
        </NavLink>
        <NavLink to="/technology" onClick={closeMenu} className={({isActive}) => `hover:text-white transition flex items-center justify-center ${isActive ? 'text-red-500 font-extrabold' : 'text-text'}`}>
          Technology
        </NavLink>

        {/* Contact Button (Mobile) */}
        <Link
          to="/export#contact"
          onClick={closeMenu}
          className="bg-accent text-text px-6 py-2 rounded-md  hover:bg-accent transition flex items-center justify-center"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;