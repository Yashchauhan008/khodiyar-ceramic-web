import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const SplashScreen = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-[#0a0a0a] via-primary to-[#1a1a1a] flex items-center justify-center z-[9999] overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      onAnimationComplete={() => {
        setTimeout(onComplete, 3000);
      }}
    >
      {/* Luxury Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-10"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Animated Grid Pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <motion.div
        className="relative flex flex-col items-center justify-center"
        initial={{ scale: 0.3, opacity: 0, y: 100 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ 
          duration: 1.5,
          ease: [0.16, 1, 0.3, 1],
          type: "spring",
          stiffness: 80,
          damping: 20
        }}
      >
        {/* Premium Logo Container */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0.5, rotateY: -90 }}
          animate={{ scale: 1, rotateY: 0 }}
          transition={{ 
            duration: 1.8,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.5
          }}
        >
          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 bg-accent/30 rounded-full blur-2xl scale-150"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.8, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
          
          <motion.img
            src={logo}
            alt="BREEZO"
            className="h-32 sm:h-40 w-auto relative z-10 drop-shadow-2xl"
            initial={{ filter: "brightness(0.5) blur(5px)" }}
            animate={{ filter: "brightness(1) blur(0px)" }}
            transition={{ duration: 1.5, delay: 0.8 }}
          />
        </motion.div>
        
        {/* Elegant Typography */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h1
            className="text-4xl sm:text-5xl font-light tracking-[0.2em] text-white mb-2"
            style={{ fontFamily: 'var(--font-family-cormorant)' }}
            initial={{ letterSpacing: "0.1em", opacity: 0.5 }}
            animate={{ letterSpacing: "0.2em", opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
          >
            BREEZO
          </motion.h1>
          
          <motion.div
            className="flex items-center justify-center space-x-4 mb-4"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent" />
            <div className="w-2 h-2 bg-accent rounded-full" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent" />
          </motion.div>
          
          <motion.p
            className="text-lg sm:text-xl font-light text-text/80 tracking-[0.15em]"
            style={{ fontFamily: 'var(--font-family-cormorant)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            GROUP OF COMPANY
          </motion.p>
        </motion.div>

        {/* Luxury Loading Animation */}
        <motion.div
          className="mt-12 flex space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-accent rounded-full"
              initial={{ scale: 0.5, opacity: 0.3 }}
              animate={{ 
                scale: [0.5, 1, 0.5], 
                opacity: [0.3, 1, 0.3] 
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2 + 2.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;