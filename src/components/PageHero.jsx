import React from 'react'
import { motion } from "framer-motion";
export default function PageHero({heading}) {
  return (
    <section className="text-center py-12 sm:py-16 md:py-20 lg:py-28">
        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[150px] text-gray-600 font-bold select-none"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {heading}
        </motion.h1>
      </section>
  )
}
