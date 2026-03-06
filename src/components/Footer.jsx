import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Instagram } from "../ui/icons/Instagram";
import { Linkedin } from "../ui/icons/Linkedin";
import { Facebook } from "../ui/icons/Facebook";
import footerImg from '../assets/footer.png';
import logo from '../assets/KClogo.png';
const Footer = () => {
  return (
    <>
      {/* Instagram Header Section */}
      <div className="bg-(--bg) flex flex-col items-center justify-center py-6 sm:py-8 px-4">
        <div className="flex flex-row sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
          <span className="text-text text-sm sm:text-lg italic leading-tight">
            Follow <br className="sm:block" /> us on
          </span>
          <div className="flex items-center justify-center">
            <img
              src={footerImg}
              alt="Instagram"
              className="w-[150px] sm:w-[250px] h-10 sm:h-16 hover:opacity-80 cursor-pointer transition"
            />
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-secondary text-text py-10 sm:py-12 px-4 sm:px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:items-start text-center lg:text-left gap-8 sm:gap-16 max-w-7xl mx-auto">
          {/* Left - Logo & Socials */}
          <div className="flex flex-col items-center lg:items-start space-y-4 sm:space-y-6">
            <Link to="/">
              <img src={logo} alt="Khodiyar Ceramic" className="h-12 sm:h-16 w-auto" />
            </Link>

            <div className="flex space-x-4 sm:space-x-6 text-white">
              <Link to={''} target="_blank" className="hover:scale-110 hover:-translate-y-1 transition-transform duration-300"><Instagram className="hover:text-red-500 cursor-pointer transition hover:rotate-12" style={{width: 'var(--icon-size)', height: 'var(--icon-size)'}} /></Link>
              {/* <Link to={''} target="_blank" className="hover:scale-110 hover:-translate-y-1 transition-transform duration-300"><X className="hover:text-red-500 cursor-pointer transition hover:rotate-12" style={{width: 'var(--icon-size)', height: 'var(--icon-size)'}} /></Link> */}
              <Link to={'https://linkedin.com/in/breezo-porcelano-80b187370'} target="_blank" className="hover:scale-110 hover:-translate-y-1 transition-transform duration-300"><Linkedin className="hover:text-red-500 cursor-pointer transition hover:rotate-12" style={{width: 'var(--icon-size)', height: 'var(--icon-size)'}} /></Link>
              <Link to={'https://www.facebook.com/share/1CPbmxKmhe/?mibextid=wwXIfr'} target="_blank" className="hover:scale-110 hover:-translate-y-1 transition-transform duration-300"><Facebook className="hover:text-red-500 cursor-pointer transition hover:rotate-12" style={{width: 'var(--icon-size)', height: 'var(--icon-size)'}} /></Link>
            </div>
          </div>

          {/* Center - Links & Map */}
          <div className="flex flex-col items-center lg:items-center mt-6 lg:mt-0">
            <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-10 gap-y-2 sm:gap-y-4 mb-4 sm:mb-6 font-extralight" style={{fontSize: 'var(--font-size-body)'}}>
              <NavLink to="/about-us" className={({isActive}) => `hover:text-red-500 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 ${isActive ? 'text-red-500 font-medium' : ''}`}>About Us</NavLink>
              <NavLink to="/catalogue" className={({isActive}) => `hover:text-red-500 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 ${isActive ? 'text-red-500 font-medium' : ''}`}>E - Catalogue</NavLink>
              <NavLink to="/export" className={({isActive}) => `hover:text-red-500 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 ${isActive ? 'text-red-500 font-medium' : ''}`}>Export</NavLink>
              <NavLink to="/technology" className={({isActive}) => `hover:text-red-500 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 ${isActive ? 'text-red-500 font-medium' : ''}`}>Technology</NavLink>
            </div>

            {/* Embedded Google Map */}
            <div className="bg-primary w-[220px] sm:w-[300px] md:w-[460px] lg:w-[490px] h-[150px] sm:h-[200px] md:h-[220px] rounded-md overflow-hidden shadow-md">
              <iframe
                title="Khodiyar Ceramic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d790.3209686114794!2d70.85706057417057!3d22.845494080448937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39598d004d22b7bb%3A0xbd4c1d2d06ef4eba!2sLatest%20business%20center!5e1!3m2!1sen!2sin!4v1763556105562!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right - Contact Info */}
          <div className="space-y-4 sm:space-y-6 text-xs sm:text-sm text-center lg:text-left max-w-xs mt-6 lg:mt-0">
            <div>
              <h4 className="font-semibold text-text mb-1 " style={{fontSize: 'var(--font-size-nav)'}}>Address</h4>
              <p
              className="font-extralight"
              style={{fontSize: 'var(--font-size-body)'}}>

                213, Latest Business Center,<br /> Mahendra Nagar Chokdi , Morbi - 363642 Gujarat India
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-text mb-1" style={{fontSize: 'var(--font-size-nav)'}}>Mail Us</h4>
              <a
                href="mailto:breezogroupofcompany@gmail.com"
                className="hover:text-red-500 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 font-extralight inline-block"
                style={{fontSize: 'var(--font-size-body)'}}
              >
                breezogroupofcompany@gmail.com
              </a>
            </div>

            <div>
              <h4 className="font-semibold text-text mb-1" style={{fontSize: 'var(--font-size-nav)'}}>Call Us</h4>
              <a
                href="tel:+919879811122"
                className="hover:text-red-500 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 font-extralight inline-block"
                style={{fontSize: 'var(--font-size-body)'}}
              >
                +91 98798 11122
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center text-gray-500 mt-8 sm:mt-10 text-[10px] sm:text-xs">
          <p>© 2025 Khodiyar Ceramic Group of Company | All rights reserved | Developed and managed by <a href="https://beyondadtech.com" target="_blank" className="hover:text-red-500 transition-colors">Beyond AdTech</a>.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;