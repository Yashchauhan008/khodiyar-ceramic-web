import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";

const SocialBar = () => {
  return (
    <div
      className="
        fixed 
        top-1/3 
        left-0 
        z-40 
        flex 
        flex-col 
        gap-2 
      "
    >
      {/* Instagram */}
      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-accent hover:bg-[#2d5a46] text-white p-2 rounded-tr-md rounded-br-md transition-all duration-300 flex items-center justify-center"
      >
        <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />
      </a>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/share/1CPbmxKmhe/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-accent hover:bg-[#2d5a46] text-white p-2 rounded-tr-md rounded-br-md transition-all duration-300 flex items-center justify-center"
      >
        <FaFacebookF className="w-4 h-4 sm:w-5 sm:h-5" />
      </a>

      {/* X (Twitter) */}
      {/* <a
        href="https://x.com"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-accent hover:bg-[#2d5a46] text-white p-2 rounded-tr-md rounded-br-md transition-all duration-300 flex items-center justify-center"
      >
        <FaXTwitter className="w-4 h-4 sm:w-5 sm:h-5" />
      </a> */}

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/breezo-porcelano-80b187370"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-accent hover:bg-[#2d5a46] text-white p-2 rounded-tr-md rounded-br-md transition-all duration-300 flex items-center justify-center"
      >
        <FaLinkedinIn className="w-4 h-4 sm:w-5 sm:h-5" />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919879811122?text=Hello%20BREEZO,%20I%20am%20interested%20in%20your%20products"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-accent hover:bg-[#2d5a46] text-white p-2 rounded-tr-md rounded-br-md transition-all duration-300 flex items-center justify-center"
      >
        <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" />
      </a>
    </div>
  );
};

export default SocialBar;