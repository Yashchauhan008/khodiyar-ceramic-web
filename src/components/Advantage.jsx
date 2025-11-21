import React from "react";
import { motion } from "framer-motion";
import { FaUsers, FaBrain, FaThLarge, FaChartLine } from "react-icons/fa";
import A1 from "./A1";
import A2 from "./A2";
import A3 from "./A3";

const Advantage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
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
      className=" text-text py-10 max-w-section mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="text-left">
        {/* Section Header */}
        <motion.p 
          className="text-accent mb-1 font-bold" 
          style={{fontSize: 'var(--font-size-subheading)',fontFamily: 'var(--font-family-cormorant'}}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Advantage
        </motion.p>
        <motion.h2 
          className="font-bold mb-10 sm:mb-12" 
          style={{fontSize: 'var(--font-size-heading)',fontFamily: 'var(--font-family-cormorant'}}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          What Sets Us Apart ?
        </motion.h2>

        {/* Cards */}
        <motion.div 
          className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-14 place-items-center"
          variants={containerVariants}
        >
          {/* 1️⃣ Growing Group */}
          <motion.div 
            className="flex flex-col items-center text-center space-y-3 sm:space-y-4 w-full sm:max-w-xs"
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 w-full sm:max-w-xs">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="absolute inset-0 w-full h-full -rotate-90 transition-colors duration-300 group-hover:[&>circle]:stroke-red-700"
                  viewBox="0 0 100 100"
                >
                  <circle
                    className="fill-none stroke-red-700 stroke-4 [stroke-dasharray:20_15] [stroke-linecap:round]"
                    cx="50"
                    cy="50"
                    r="46"
                  />
                </svg>
                <div className="relative flex items-center justify-center">
                  <A1 />
                </div>
              </div>
              <h3 className="text-base font-bold"
                style={{fontSize: 'var(--font-size-subheading)',fontFamily: 'var(--font-family-cormorant'}}>Growing Group</h3>
              <p className="text-body leading-relaxed tracking-wide text-justify font-extralight"
                style={{fontSize: 'var(--font-size-body)'}}>
                With the trust of customers and consistent efforts towards
                perfection, Breezo Ceramics is emerging as a hub of top-class
                ceramic products that settle for nothing less than the BEST. Class
                and luxury pinnacle is the gist of our affordable product range.
              </p>
            </div>
          </motion.div>

          {/* 2️⃣ Young Mindset */}
          <motion.div 
            className="flex flex-col items-center md:pb-20 text-center space-y-3 sm:space-y-4 w-full sm:max-w-xs"
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >

            <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 w-full sm:max-w-xs">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-5 flex items-center justify-center">
                <svg
                  className="absolute inset-0 w-full h-full -rotate-90 transition-colors duration-300 group-hover:[&>circle]:stroke-red-700"
                  viewBox="0 0 100 100"
                >
                  <circle
                    className="fill-none stroke-red-700 stroke-4 [stroke-dasharray:15_13] [stroke-linecap:round]"
                    cx="50"
                    cy="50"
                    r="46"
                  />
                </svg>
                <div className="relative flex items-center justify-center">
                  <A2 />
                </div>
              </div>

              <h3 className="text-base font-bold"
                style={{fontSize: 'var(--font-size-subheading)',fontFamily: 'var(--font-family-cormorant'}}>
                Young Mindset
              </h3>

              <p className="text-body leading-relaxed tracking-wide text-justify font-extralight"
                style={{fontSize: 'var(--font-size-body)'}}>
                We relate to modern-day décor expectations and prepare fresh
                styles that blend well with your theme and décor your space. Every
                bit of our export quality products is curated, keeping in mind the
                design, appearance and exclusiveness you desire.
              </p>
            </div>
          </motion.div>

          {/* 3️⃣ Largest Collection of Tiles */}
          <motion.div 
            className="flex flex-col items-center text-center space-y-3 sm:space-y-4 w-full sm:max-w-xs"
            variants={cardVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 w-full sm:max-w-xs">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="absolute inset-0 w-full h-full -rotate-90 transition-colors duration-300 group-hover:[&>circle]:stroke-red-700"
                  viewBox="0 0 100 100"
                >
                  <circle
                    className="fill-none stroke-red-700 stroke-4 [stroke-dasharray:20_15] [stroke-linecap:round]"
                    cx="50"
                    cy="50"
                    r="46"
                  />
                </svg>
                <div className="relative flex items-center justify-center">
                  <A3 />
                </div>
              </div>
              <h3 className="text-base font-bold"
                style={{fontSize: 'var(--font-size-subheading)',fontFamily: 'var(--font-family-cormorant'}}>Largest Collection of Tiles</h3>
              <p className="text-body font-extralight leading-relaxed tracking-wide text-justify"
                style={{fontSize: 'var(--font-size-body)'}}>
                Get a breakthrough in the unique collection of ceramic tiles with
                us. Start browsing through endless styles, designs and tiling
                options to revamp your space with sophisticated ceramic solutions
                that upgrade the space dynamics!
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Advantage;