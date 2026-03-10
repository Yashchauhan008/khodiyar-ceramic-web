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


          {/* Right - Contact Info */}
          <div className="space-y-4 sm:space-y-6 text-xs sm:text-sm text-center lg:text-left max-w-xs mt-6 lg:mt-0">
            <div>
              <h4 className="font-semibold text-text mb-1 " style={{fontSize: 'var(--font-size-nav)'}}>Address</h4>
              <p
              className="font-extralight"
              style={{fontSize: 'var(--font-size-body)'}}>

                {/* 213, Latest Business Center,<br /> Mahendra Nagar Chokdi , Morbi - 363642 Gujarat India */}
                167, Rafaleshwar G.I.D.C. 8-A,<br /> National Highway Morbi-363 642, Guj. India.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-text mb-1" style={{fontSize: 'var(--font-size-nav)'}}>Mail Us</h4>
              <a
                href="mailto:info@khodiyarceramic.com"
                className="hover:text-red-500 hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 font-extralight inline-block"
                style={{fontSize: 'var(--font-size-body)'}}
              >
                info@khodiyarceramic.com
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