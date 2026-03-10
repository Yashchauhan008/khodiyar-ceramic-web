import React from "react";
import { motion } from "framer-motion";
import O1 from "../ui/icons/O1";
import O2 from "../ui/icons/O2";
import O3 from "../ui/icons/O3";
import O4 from "../ui/icons/O4";
import O5 from "../ui/icons/O5";
import O6 from "../ui/icons/O6";
import RevealText from "../components/RevealText";

const OurSpecialities = () => {
  const features = [
    { icon: <O1 />, title: "Scratch Proof" },
    { icon: <O2 />, title: "Waterproof" },
    { icon: <O3 />, title: "High Durable" },
    { icon: <O4 />, title: "Hygienic" },
    { icon: <O5 />, title: "HD Design" },
    { icon: <O6 />, title: "Dimension Stability" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className=" text-text max-w-section mx-auto py-12 sm:py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Heading */}
      <div className="text-left sm:text-left mb-10 sm:mb-12">
        <motion.p 
          className="text-accent mb-1 sm:mb-2 font-bold"
          style={{fontSize: 'var(--font-size-subheading)',fontFamily: 'var(--font-family-cormorant'}}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Specialities
        </motion.p>
        <motion.h2 
          className=" font-bold"
          style={{fontSize: 'var(--font-size-heading)',fontFamily: 'var(--font-family-cormorant'}}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <RevealText text="The khodiyar ceramic Difference" />
          {/* The khodiyar ceramic Difference */}
        </motion.h2>
      </div>

      {/* Features */}
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-10 lg:gap-14 mt-8 sm:mt-10 justify-items-center"
        variants={containerVariants}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center group"
            style={{fontSize: 'var(--font-size-body)'}}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.1, 
              y: -5,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div 
              className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4"
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {feature.icon}
            </motion.div>
            <p className="font-extralight">
              {feature.title}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default OurSpecialities;