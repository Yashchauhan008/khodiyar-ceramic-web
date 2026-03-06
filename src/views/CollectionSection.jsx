import React from "react";
import { motion } from "framer-motion";
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import img5 from '../assets/img5.png'
import img6 from '../assets/psdmarchpang46 1.png'
import RevealText from "../components/RevealText";

const collections = [
  { id: 1, title: "Classic Collection", image: img4 },
  { id: 2, title: "Modern Collection", image: img5 },
  { id: 3, title: "Elegant Design", image: img1 },
  { id: 4, title: "Luxury Series", image: img2 },
  { id: 5, title: "Premium Look", image: img3 },
  { id: 6, title: "Artistic Finish", image: img6 },
];

const CollectionSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className=" text-text max-w-section mx-auto py-12 sm:py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
    >
      {/* Section Header */}
      <motion.p 
        className="text-accent mb-1 sm:mb-1 font-bold" 
        style={{fontSize: 'var(--font-size-subheading)',fontFamily: 'var(--font-family-cormorant'}}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Our Collection
      </motion.p>
      <motion.h2 
        className="mb-8 sm:mb-10 font-bold" 
        style={{fontSize: 'var(--font-size-heading)',fontFamily: 'var(--font-family-cormorant'}}
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <RevealText text="Khodiyar Ceramic - Experience a collection crafted with elegance, precision, and timeless design." />
        {/* Breezo - Experience a collection crafted with elegance, precision, and
        timeless design. */}
      </motion.h2>

      {/* First Row - 2 Images */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-8"
        variants={containerVariants}
      >
        {collections.slice(0, 2).map((item) => (
          <motion.div
            key={item.id}
            className="relative group overflow-hidden rounded-lg cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 sm:h-64 md:h-92 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 transition duration-300 hover:bg-black/60"></div>

            {/* Top Text */}
            <div
              className="absolute top-2 sm:top-4 left-3 sm:left-4 
              opacity-100 sm:opacity-0 sm:group-hover:opacity-100
              translate-y-0 sm:group-hover:translate-y-1
              transition-all duration-700 delay-150 pointer-events-none"
            >
              <p className="text-xs sm:text-sm text-text" style={{fontSize: 'var(--font-size-body)'}}>{item.title}</p>
            </div>

            {/* Bottom Text */}
            <div
              className="absolute bottom-2 sm:bottom-4 left-3 sm:left-4 
              opacity-100 sm:opacity-0 sm:group-hover:opacity-100
              translate-y-0 sm:group-hover:-translate-y-1
              transition-all duration-700 delay-300 pointer-events-none"
            >
              <p className="text-[9px] sm:text-xs text-text tracking-widest uppercase font-bold" style={{fontFamily: 'var(--font-family-cormorant'}}>
                Luxurious
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Second Row - 4 Images */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-6"
        variants={containerVariants}
      >
        {collections.slice(2, 6).map((item) => (
          <motion.div
            key={item.id}
            className="relative group overflow-hidden rounded-lg cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 sm:h-48 md:h-64 lg:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 transition duration-300 hover:bg-black/60"></div>

            {/* Top Text */}
            <div
              className="absolute top-2 sm:top-4 left-3 sm:left-4 
              opacity-100 sm:opacity-0 sm:group-hover:opacity-100
              translate-y-0 sm:group-hover:translate-y-1
              transition-all duration-700 delay-150 pointer-events-none"
            >
              <p className=" text-white" style={{fontSize: 'var(--font-size-body)'}}>
                {item.title}
              </p>
            </div>

            {/* Bottom Text */}
            <div
              className="absolute bottom-2 sm:bottom-4 left-3 sm:left-4 
              opacity-100 sm:opacity-0 sm:group-hover:opacity-100
              translate-y-0 sm:group-hover:-translate-y-1
              transition-all duration-700 delay-300 pointer-events-none"
            >
              <p className="text-[8px] sm:text-[10px] text-gray-300 tracking-widest uppercase font-bold" style={{fontFamily: 'var(--font-family-cormorant'}}>
                Luxurious
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CollectionSection;
