// import React from "react";
// import C1 from "../components/C1";
// import C2 from "../components/C2";
// import C3 from "../components/C3";

// const Usabout = () => {
//     return (
//         <div
//             className="bg-(--bg) relative mx-auto w-[80%] text-white font-serif overflow-hidden"
//             style={{ fontFamily: "var(--head-font)" }}
//         >
//             {/* Hero Section */}
//             <section className="relative text-center py-12 sm:py-16 md:py-20 lg:py-28">
//                 <h1
//                     className="relative mx-auto w-[90%] text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[150px] text-gray-600 font-bold select-none px-4"
//                     style={{ fontFamily: '"Cormorant Garamond", serif' }}
//                 >
//                     About Us
//                 </h1>
//             </section>

//             {/* Main Content */}
//             <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-12 sm:space-y-14 md:space-y-16">
//                 {/* Row 1 - Company Intro */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-start">
//                     <div>
//                         <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4">
//                             Breezo Group of Company
//                         </h2>
//                         <p
//                             className="text-sm sm:text-base text-text leading-relaxed tracking-wide"
//                             style={{ fontFamily: "var(--body-font)" }}
//                         >
//                             stands as a symbol of innovation, elegance, and fine craftsmanship
//                             in the ceramic tile industry. We offer a diverse range of tiles –
//                             from Digital Wall and Floor Tiles to Full Body, GVT/PGVT, Slab
//                             Tiles, and Sanitaryware — each designed to bring style, strength,
//                             and sophistication to every space.
//                         </p>
//                     </div>
//                     <div className="flex justify-center">
//                         <img
//                             src="/logo.svg"
//                             alt="Breezo Logo"
//                             className="w-48 sm:w-56 md:w-64 lg:w-80 pt-10"
//                         />
//                     </div>
//                 </div>

//                 {/* Row 2 - Artistry & Engineering */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-start">
//                     <div className="order-2 md:order-1">
//                         <img
//                             src="/woman-choosing-marble-tiles 1.png"
//                             alt="Choosing Tiles"
//                             className="rounded-lg w-full"
//                         />
//                     </div>
//                     <div className="order-1 md:order-2">
//                         <h3 className="text-lg sm:text-2xl font-semibold mb-4 sm:mb-6 pl-20 leading-relaxed tracking-wide">
//                             At Breezo, we blend artistry with engineering
//                         </h3>
//                         <ul
//                             className="space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-10 pl-20 mt-10"
//                             style={{ fontFamily: "var(--body-font)" }}
//                         >
//                             <li className="flex items-start gap-3">
//                                 <img
//                                     src="/Vector.svg"
//                                     alt="icon"
//                                     className="w-5 h-5 mt-1 shrink-0"
//                                 />
//                                 <span className="text-sm sm:text-base text-text leading-relaxed tracking-wide">
//                                     Our expert designers and ceramic specialists constantly
//                                     explore new materials and finishes.
//                                 </span>
//                             </li>
//                             <li className="flex items-start gap-3">
//                                 <img
//                                     src="/Vector.svg"
//                                     alt="icon"
//                                     className="w-5 h-5 mt-1 shrink-0"
//                                 />
//                                 <span className="text-sm sm:text-base text-text leading-relaxed tracking-wide">
//                                     Every product is crafted with precision to deliver both beauty
//                                     and long-lasting performance.
//                                 </span>
//                             </li>
//                             <li className="flex items-start gap-3">
//                                 <img
//                                     src="/Vector.svg"
//                                     alt="icon"
//                                     className="w-5 h-5 mt-1 shrink-0"
//                                 />
//                                 <span className="text-sm sm:text-base text-text leading-relaxed tracking-wide">
//                                     Innovation and quality are at the heart of everything we
//                                     create.
//                                 </span>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>

//                 {/* Row 3 - Transform Spaces */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-start">
//                     <div>
//                         <h3 className="text-lg sm:text-2xl font-semibold mb-4 sm:mb-6 leading-relaxed tracking-wide pr-20"
//                             style={{ fontFamily: "var(--head-font)" }}>
//                             We believe tiles do more than cover surfaces — they transform
//                             spaces:
//                         </h3>
//                         <ul className="text-sm sm:text-base text-text space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 leading-relaxed tracking-wide pr-20 mt-5"
//                             style={{ fontFamily: "var(--body-font)" }}>
//                             {[
//                                 "Each Breezo tile adds a unique statement of style and sophistication to your space.",
//                                 "Designed to meet international standards of durability and aesthetics.",
//                                 "Built to withstand wear and tear while retaining their elegance over time.",
//                                 "Ideal for both modern homes and grand commercial environments.",
//                             ].map((text, i) => (
//                                 <li key={i} className="flex items-start gap-3">
//                                     <img
//                                         src="/Vector.svg"
//                                         alt="icon"
//                                         className="w-5 h-5 mt-1 shrink-0"
//                                     />
//                                     <span className="text-sm sm:text-base text-text">{text}</span>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                     <div>
//                         <img
//                             src="/luxurious-modern-entryway-with-sculpture-reflecting-pool 1.png"
//                             alt="Tile Space"
//                             className="rounded-lg w-full"
//                         />
//                     </div>
//                 </div>

//                 {/* Vision, Mission, Applications, Core Values, Stats Sections remain same */}
//                 {/* (No change needed in those sections) */}
//                 {/* Vision & Mission */}
//                 <div className="grid md:grid-cols-2 gap-10 pt-10 text-center md:text-left">
//                     {[
//                         {
//                             title: "Our Vision",
//                             text: "To be a globally recognized leader in ceramics — setting new benchmarks in design, functionality, sustainability, and customer trust.",
//                             img: "/Group 135.png",
//                         },
//                         {
//                             title: "Our Mission",
//                             text: "Our mission is to deliver innovative, durable, and visually inspiring tile collections, while embracing eco-friendly practices and ensuring exceptional quality, consistency, and value for every customer.",
//                             img: "/Group 136.png",
//                         },
//                     ].map((item, i) => (
//                         <div
//                             key={i}
//                             className="relative bg-[#0a0a0a] p-8 rounded-lg overflow-hidden"
//                         >
//                             <img
//                                 src={item.img}
//                                 alt={${item.title} Background}
//                             className="absolute right-6 bottom-4 w-32 md:w-40 select-none opacity-70"
//               />
//                             <h3 className="text-xl md:text-2xl font-semibold mb-3 relative z-10">
//                                 {item.title}
//                             </h3>
//                             <p className="text-text leading-snug text-sm md:text-base relative z-10">
//                                 {item.text}
//                             </p>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Applications */}
//                 <div className="pt-16">
//                     <h3 className="text-2xl font-semibold mb-6">
//                         Applications: Multipurpose Tiles
//                     </h3>
//                     <p className="text-text leading-relaxed mb-8">
//                         Immense intricate details and expert craftsmanship replicate through
//                         the Breezo tiling solutions. From bathrooms and kitchens to living
//                         spaces and cladding, Breezo offers endless tile options — vibrant,
//                         durable, and designed to impress.
//                     </p>

//                     <div className="grid md:grid-cols-2 gap-12 items-start">
//                         <div className="flex justify-center mb-12">
//                             <img
//                                 src="/image 8.png"
//                                 alt="Tile Chart"
//                                 className="rounded-lg w-full max-w-md md:max-w-lg"
//                             />
//                         </div>

//                         <div className="overflow-x-auto my-10">
//                             <table className="text-text text-lg leading-7 mx-auto">
//                                 {[
//                                     ["Glossy", "Wall Tiles", "20X60CM"],
//                                     ["Carving", "Floor Tiles", "20X100CM"],
//                                     ["High Gloss", "GVT/PGVT", "30X45CM"],
//                                     ["Matt", "Slab Tiles", "30X80CM"],
//                                     ["Rustic", "Parking Tiles", "60X120CM"],
//                                     ["Sugar", "Sanitary Ware", "120X180CM"],
//                                     ["Vitrified", "Tiles", "80X160CM"],
//                                 ].map(([a, b, c], i) => (
//                                     <tr key={i} className="text-center border-b border-gray-700/50">
//                                         <td className="py-3 px-8">{a}</td>
//                                         <td className="py-3 px-8">{b}</td>
//                                         <td className="py-3 px-8">{c}</td>
//                                     </tr>
//                                 ))}
//                             </table>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Core Values */}
//                 <div>
//                     <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-12 sm:mb-16 text-center">
//                         Our Core Values
//                     </h1>

//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
//                         {[
//                             { img: "/innovation.png", title: "Driven by Innovation" },
//                             { img: "/quality.png", title: "Commitment to Quality" },
//                             { img: "/real value.png", title: "Provide Real Value" },
//                         ].map((val, i) => (
//                             <div key={i} className="flex flex-col items-center text-center">
//                                 <div className="w-32 h-32 rounded-full border-2 border-dashed border-red-600 flex items-center justify-center mb-6">
//                                     <div className="w-28 h-28 rounded-full bg-neutral-800 flex items-center justify-center">
//                                         <img src={val.img} alt={val.title} className="w-14 h-14" />
//                                     </div>
//                                 </div>
//                                 <h3 className="text-base sm:text-lg text-white font-light">
//                                     {val.title}
//                                 </h3>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* Stats Section */}
//             <section
//                 className="relative bg-cover bg-center py-14 md:py-20 mt-20"
//                 style={{ backgroundImage: "url('/b2.png')" }}
//             >
//                 <div className="absolute inset-0 bg-black/50"></div>

//                 <div className="relative z-10 max-w-6xl mx-auto flex flex-wrap justify-center md:justify-between text-center text-white px-6">
//                     {[
//                         ["15+", "Year of Experience"],
//                         ["25+", "Country we export"],
//                         ["30000+", "Box productions"],
//                         ["150+", "Attractive Designs"],
//                     ].map(([num, text], i) => (
//                         <div key={i} className="w-1/2 md:w-1/4 mb-8 md:mb-0">
//                             <p className="text-3xl md:text-4xl font-bold text-[#ff1f1f] mb-1">
//                                 {num}
//                             </p>
//                             <p>{text}</p>
//                         </div>
//                     ))}
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default Usabout;

import React from "react";
import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import RevealText from "../components/RevealText";
import AnimatedCounter from "../components/AnimatedCounter";
import logo from '../assets/KClogo.png'
import women from '../assets/about-1.jpg'
import arrow from '../assets/Vector.svg'
import modern from '../assets/about-2.jpg'
import vision from '../assets/Group 136.png'
import mission from '../assets/Group 135.png'
import tileChart from '../assets/image 8.png'
import innovation from '../assets/innovation.png'
import quality from '../assets/quality.png'
import value from '../assets/real value.png'
import bg from '../assets/b2.png';
const Usabout = () => {

  return (
    <>
    <motion.div
      className="relative max-w-section mx-auto text-text overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* ---------- Hero Section ---------- */}
      <PageHero heading={"About Us"} />

      {/* ---------- Main Content ---------- */}
      <section className="space-y-16 sm:space-y-20 md:space-y-24">
        {/* Row 1 - Company Intro */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div>
            <motion.h2 
              className=" mb-4 font-bold" 
              style={{fontSize: 'var(--font-size-heading)',fontFamily: 'var(--font-family-cormorant'}}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <RevealText triggerOnScroll={false} text={'Breezo Group Of Company'}/>
              {/* Breezo Group of Company */}
            </motion.h2>
            <motion.p
              className=" text-body leading-relaxed tracking-wide text-justify font-extralight"
              style={{fontSize: 'var(--font-size-body)'}}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              stands as a symbol of innovation, elegance, and fine craftsmanship
              in the ceramic tile industry. We offer a diverse range of tiles –
              from Digital Wall and Floor Tiles to Full Body, GVT/PGVT, Slab
              Tiles, and Sanitaryware — each designed to bring style, strength,
              and sophistication to every space.
            </motion.p>
          </div>
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img
              src={logo}
              alt="Breezo Logo"
              className="w-40 sm:w-52 md:w-64 lg:w-80 pt-8 md:pt-12"
            />
          </motion.div>
        </motion.div>

        {/* Row 2 - Artistry & Engineering */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          // viewport={{ margin: "-100px" }}
        >
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
          >
            <img
              src={women}
              alt="Choosing Tiles"
              className="rounded-lg w-full h-auto"
            />
          </motion.div>
          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className=" mb-6 leading-relaxed tracking-wide font-bold" style={{fontSize: 'var(--font-size-subheading)',fontFamily: 'var(--font-family-cormorant'}}>
              At Breezo, we blend artistry with engineering
            </h3>
            <ul
              className="space-y-6 sm:space-y-8"
              style={{fontSize: 'var(--font-size-body)'}}
            >
              {[
                "Our expert designers and ceramic specialists constantly explore new materials and finishes.",
                "Every product is crafted with precision to deliver both beauty and long-lasting performance.",
                "Innovation and quality are at the heart of everything we create.",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <img
                    src={arrow}
                    alt="icon"
                    className="w-5 h-5 mt-1 shrink-0"
                  />
                  <span className="font-extralight text-body leading-relaxed tracking-wide text-justify">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Row 3 - Transform Spaces */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3
              className="font-bold mb-6 leading-relaxed tracking-wide "
              style={{fontSize: 'var(--font-size-subheading)',fontFamily: 'var(--font-family-cormorant'}}
            >
              We believe tiles do more than cover surfaces — they transform
              spaces:
            </h3>
            <ul
              className="space-y-6"
              style={{fontSize: 'var(--font-size-body)'}}
            >
              {[
                "Each Breezo tile adds a unique statement of style and sophistication to your space.",
                "Designed to meet international standards of durability and aesthetics.",
                "Built to withstand wear and tear while retaining their elegance over time.",
                "Ideal for both modern homes and grand commercial environments.",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <img
                    src={arrow}
                    alt="icon"
                    className="w-5 h-5 mt-1 shrink-0"
                  />
                  <span className="font-extralight leading-relaxed tracking-wide text-body">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={modern}
              alt="Tile Space"
              className="rounded-lg w-full h-auto"
            />
          </motion.div>
        </motion.div>

        {/* ---------- Vision & Mission ---------- */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 -mx-3 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {[
            {
              title: "Our Vision",
              text: "To be a globally recognized leader in ceramics — setting new benchmarks in design, functionality, sustainability, and customer trust.",
              img: vision,
            },
            {
              title: "Our Mission",
              img: mission,
              text: "Our mission is to deliver innovative, durable, and visually inspiring tile collections, while embracing eco-friendly practices and ensuring exceptional quality, consistency, and value for every customer.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative p-8  rounded-lg overflow-hidden"
            >
              <img
                src={item.img}
                alt={`${item.title} Background`}
                className="absolute right-6 bottom-2 w-28 sm:w-32 md:w-40 select-none opacity-60"
              />
              <h3 className="font-bold mb-3 relative z-10" style={{fontSize: 'var(--font-size-heading)',fontFamily: 'var(--font-family-cormorant'}}>
                <RevealText text={item.title} />
              </h3>
              <p className="text-body leading-snug text-sm md:text-base relative z-10 text-justify font-extralight" style={{fontSize: 'var(--font-size-body)'}}>
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ---------- Applications ---------- */}
        <motion.div 
          className="pt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h3 className=" font-bold mb-6" style={{fontSize: 'var(--font-size-heading)',fontFamily: 'var(--font-family-cormorant'}}>
            <RevealText text={'Applications: Multipurpose Tiles'}/>
            {/* Applications: Multipurpose Tiles */}
          </h3>
          <p className="text-body leading-relaxed mb-10 text-justify font-extralight" style={{fontSize: 'var(--font-size-body)'}}>
            Immense intricate details and expert craftsmanship replicate through
            the Breezo tiling solutions. From bathrooms and kitchens to living
            spaces and cladding, Breezo offers endless tile options — vibrant,
            durable, and designed to impress.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="flex justify-center">
              <img
                src={tileChart}
                alt="Tile Chart"
                className="rounded-lg w-full max-w-md md:max-w-lg"
              />
            </div>

            <div className="overflow-x-auto">
              <table className="text-text text-sm sm:text-base leading-7 mx-auto border-collapse">
                <tbody>
                  {[
                    ["Glossy", "Wall Tiles", "20X60CM"],
                    ["Carving", "Floor Tiles", "20X100CM"],
                    ["High Gloss", "GVT/PGVT", "30X45CM"],
                    ["Matt", "Slab Tiles", "30X80CM"],
                    ["Rustic", "Parking Tiles", "60X120CM"],
                    ["Sugar", "Sanitary Ware", "120X180CM"],
                    ["Vitrified", "Tiles", "80X160CM"],
                  ].map(([a, b, c], i) => (
                    <tr key={i} className="p-10 font-extralight" style={{fontSize: 'var(--font-size-body)'}}>
                      <td className="py-3 px-2 text-center">{a}</td>
                      <td className="py-3 px-2 text-center">{b}</td>
                      <td className="py-3 px-2 text-center">{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* ---------- Core Values ---------- */}
        <motion.div 
          className="pt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h1 className=" mb-12 text-left font-bold" style={{fontSize: 'var(--font-size-heading)',fontFamily: 'var(--font-family-cormorant'}}>
            
            <RevealText text="Our Core Values" />
          </h1>

          <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20">
            {[
              { img: innovation, title: "Driven by Innovation" },
              { img: quality, title: "Commitment to Quality" },
              { img: value, title: "Provide Real Value" },
            ].map((val, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-32 h-32 flex items-center justify-center relative mb-6">
                  <svg
                    className="absolute inset-0 w-full h-full -rotate-90"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      className="fill-none stroke-red-700 stroke-4 [stroke-dasharray:20_13] [stroke-linecap:round]"
                      cx="50"
                      cy="50"
                      r="48"
                    />
                  </svg>

                  <div className="relative w-28 h-28 rounded-full bg-(--bg) flex items-center justify-center">
                    <img src={val.img} alt={val.title} className="w-14 h-14" />
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-extralight"style={{fontSize: 'var(--font-size-body)'}}>
                  {val.title}
                </h3>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ---------- Stats Section ---------- */}
    </motion.div>
      <motion.section
        className="relative bg-cover bg-center py-14 md:py-20 mt-20"
        style={{ backgroundImage: `url('${bg}')` }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <motion.div 
          className="relative z-10 max-w-section mx-auto grid grid-cols-1 md:grid-cols-4 text-center text-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            ["15", "+", "Years of Experience"],
            ["25", "+", "Countries We Export"],
            ["30000", "+", "Box Productions"],
            ["1500", "+", "Attractive Designs"],
          ].map(([num, suffix, text], i) => (
            <motion.div 
              key={i} 
              className="mb-8 md:mb-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-red-500 mb-1">
                <AnimatedCounter 
                  end={num} 
                  suffix={suffix} 
                  duration={2.5}
                  className="inline-block"
                />
              </div>
              <p className="font-bold" style={{fontSize: 'var(--font-size-subheading)',fontFamily: 'var(--font-family-cormorant'}}>{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      </>
  );
};

export default Usabout;