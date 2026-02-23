import React from "react";
import img1 from '../assets/image 3.png'
import img2 from '../assets/image 4.png'
import RevealText from "../components/RevealText";
const AvailableTileSizes = () => {
  return (
    <div className=" text-text max-w-section mx-auto py-12 sm:py-16 ">
      {/* Heading */}
      <div className="text-left sm:text-left">
        <p className="text-accent mb-1 sm:mb-2 font-bold" style={{fontSize: 'var(--font-size-subheading)',fontFamily: 'var(--font-family-cormorant'}}>Our Range</p>
        <h2 className="font-bold" style={{fontSize: 'var(--font-size-heading)',fontFamily: 'var(--font-family-cormorant'}}>
          <RevealText text='Available Tile Sizes' />
          {/* Available Tile Sizes */}
        </h2>
      </div>
      {/* Images Section */}
      <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 mt-8 sm:mt-10">
        {/* First Image */}
        <img
          src={img1}
          alt="Available Tile Sizes Top"
          className="w-full md:w-[85%] lg:w-[75%] h-auto object-contain rounded-lg"
        />

        {/* Second Image */}
        <img
          src={img2}
          alt="Available Tile Sizes Bottom"
          className="w-full md:w-[85%] lg:w-[75%] h-auto object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default AvailableTileSizes;