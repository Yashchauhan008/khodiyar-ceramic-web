import React from "react";
import { motion } from "framer-motion";
import T1 from "../components/T1";
import T2 from "../components/T2";
import T3 from "../components/T3";
import T4 from "../components/T4";
import PageHero from "../components/PageHero";

const Technology = () => {
  const features = [
    {
      title: "Modern Manufacturing",
      desc: "State-of-the-art manufacturing with modern machinery and digital precision.",
      icon: <T1 />,
    },
    {
      title: "Design Excellence",
      desc: "Enhanced design quality — perfecting texture, tone, surface finish, and strength.",
      icon: <T2 />,
    },
    {
      title: "Aesthetic Perfection",
      desc: "Every tile is a masterpiece of refined aesthetics and engineered durability.",
      icon: <T3 />,
    },
    {
      title: "Timeless Innovation",
      desc: "Breezo embodies innovation, where technology meets timeless design.",
      icon: <T4 />,
    },
  ];

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
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
      className=" relative max-w-section mx-auto text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* --- Top Export Title --- */}
      <PageHero heading={'Technology'}/>

      {/* Innovation Section */}
      <motion.section 
        className="mb-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="space-y-10 grid md:grid-cols-2 gap-20 items-center">
          <motion.div 
            className="space-y-5"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p
              className="text-accent text-base font-bold mb-1"
              style={{fontSize: 'var(--font-size-subheading)',fontFamily: 'var(--font-family-cormorant'}}
            >
              Innovation
            </p>
            <h2 className=" leading-tight font-bold" style={{fontSize: 'var(--font-size-heading)',fontFamily: 'var(--font-family-cormorant'}}>
              We Commit to Innovation
            </h2>
            <p
              className="text-text font-semibold"
              style={{fontSize: 'var(--font-size-nav)'}}
            >
              Seamless Technological Excellence for Unmatched Quality!
            </p>
            <p
              className="text-body font-extralight text-justify"
              style={{fontSize: 'var(--font-size-body)'}}
            >
              At Breezo Group of Company, innovation isn't just a goal — it's a
              continuous journey toward perfection. We redefine standards daily
              through cutting-edge technology, advanced research, and creative
              craftsmanship.
            </p>
          </motion.div>
          <motion.div 
            className="w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80"
              alt="Modern Interior"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Features Grid */}
      <motion.section 
        className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 mb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.8 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="text-center group"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            <motion.div 
              className="w-24 h-24 mx-auto mb-4 flex items-center justify-center relative"
              whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <svg
                className="absolute inset-0 w-full h-full -rotate-90"
                viewBox="0 0 100 100"
              >
                <circle
                  className="fill-none stroke-red-700 stroke-4 [stroke-dasharray:20_15] [stroke-linecap:round] transition-colors duration-300 group-hover:stroke-red-700"
                  cx="50"
                  cy="50"
                  r="45"
                />
              </svg>
              <div className=" relative flex items-center justify-center">
                {feature.icon}
              </div>
            </motion.div>

            <h3 className=" mb-3 font-bold" style={{fontSize: 'var(--font-size-subheading)',fontFamily: 'var(--font-family-cormorant'}}>
              {feature.title}
            </h3>
            <p className="text-body font-extralight px-4"style={{fontSize: 'var(--font-size-body)'}}>
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </motion.section>

      {/* Quality Section */}
      <motion.section 
        className="sm:mx-0 mb-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <div className="space-y-10 grid md:grid-cols-2 gap-30 items-center">
          <motion.div 
            className="space-y-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
        <p className="text-accent text-base mb-1 font-bold"style={{fontSize: 'var(--font-size-subheading)',fontFamily: 'var(--font-family-cormorant'}}>
          Crafted With Care
        </p>
            <h2 className=" leading-tight font-bold"style={{fontSize: 'var(--font-size-heading)',fontFamily: 'var(--font-family-cormorant'}}>
              We Promise Quality
            </h2>
            <p
              className="text-body  leading-relaxed mb-6 text-justify font-extralight"
              style={{fontSize: 'var(--font-size-body)'}}

            >
              Our designers use advanced technology to craft unique designs with
              natural hues, premium textures, and tailored aesthetics —
              perfectly aligning with your space’s theme.
            </p>
            <p
              className="text-body leading-relaxed text-justify font-extralight"
              style={{fontSize: 'var(--font-size-body)'}}
            >
              With high-tech materials and precision engineering, we ensure that
              every Breezo product delivers unmatched quality and durability.
            </p>
          </motion.div>
          <motion.div 
            className="w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
              alt="Living Room Interior"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Technology;
