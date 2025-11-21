import React from "react";
import { motion } from "framer-motion";
import About from "./About";
import Advantage from "../components/Advantage";
import CollectionSection from "./CollectionSection";
import AvailableTileSizes from "./tile";
import OurSpecialities from "./OurSpecialities";
import CompanyBanner from "./CompanyBanner";

const Home = () => {
    const sectionVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <div className="bg-primary min-h-screen">
            {/* Top Banner Image */}
            <motion.div 
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <CompanyBanner />
            </motion.div>

            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                <About />
            </motion.div>
            
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                <Advantage />
            </motion.div>
            
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                <CollectionSection />
            </motion.div>
            
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                <AvailableTileSizes />
            </motion.div>
            
            <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                <OurSpecialities />
            </motion.div>
        </div>
    );
};

export default Home;