import React from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import PageHero from "../components/PageHero";
import { catalogue } from "../utils/data";
export default function CatalogueGrid() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
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
    <motion.section 
      className="min-h-screen max-w-section mx-auto text-text"
      style={{ fontFamily: "var(--head-font)" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="">
        {/* Hero Title - Fully Responsive */}
        <PageHero heading={'Catalogue'} />

        {/* Grid - Fully Responsive */}
        <motion.div 
          className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-15 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {catalogue.map((item) => (
            <motion.div
              key={item.id}
              className="group cursor-pointer flex flex-col items-center w-full max-w-[320px] sm:max-w-xs md:max-w-sm"
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              {/* Image Container */}
              <motion.div 
                className="relative bg-neutral-900 overflow-hidden shadow-lg transition-all duration-500"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className=" group-hover:scale-105 rounded-lg transition-transform duration-500"
                />
              </motion.div>

              {/* Info Section */}
              <div className="mt-3 sm:mt-4 text-center w-full mb-8 font-extralight"style={{fontSize: 'var(--font-size-body)'}}>
                <h3 className=" text-gray-300 mb-2 mt-4 sm:mt-6">{item.title}</h3>
                <motion.a 
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-accent text-accent px-5 sm:px-6 py-2 rounded-md text-sm font-semibold hover:bg-emerald-600 hover:text-black transition-all duration-300 mt-4 sm:mt-6 md:mt-8 w-full sm:w-auto mx-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span>View</span>
                  <Eye className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}