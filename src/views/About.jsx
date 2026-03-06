import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "../index.css";
import { useNavigate } from "react-router-dom";
import home from '../assets/home-img.png'
import RevealText from "../components/RevealText";

const About = () => {
    const navigate = useNavigate();
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const leftContentVariants = {
        hidden: { opacity: 0, x: -80, rotateY: -15 },
        visible: { 
            opacity: 1, 
            x: 0, 
            rotateY: 0,
            transition: { 
                duration: 0.8, 
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 100
            }
        }
    };

    const rightContentVariants = {
        hidden: { opacity: 0, x: 80, rotateY: 15 },
        visible: { 
            opacity: 1, 
            x: 0, 
            rotateY: 0,
            transition: { 
                duration: 0.8, 
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 100,
                delay: 0.2
            }
        }
    };

    const textVariants = {
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

    const imageVariants = {
        hidden: { 
            opacity: 0, 
            scale: 0.8, 
            rotateX: 15,
            filter: "blur(10px)"
        },
        visible: { 
            opacity: 1, 
            scale: 1, 
            rotateX: 0,
            filter: "blur(0px)",
            transition: { 
                duration: 1,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 80
            }
        }
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.8 },
        visible: { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            transition: { 
                duration: 0.6,
                ease: "backOut",
                delay: 0.3
            }
        }
    };

    return (
        <>
            {/* About Section */}
            <motion.div
                className="text-text py-16 grid lg:grid-cols-2 gap-15 items-center max-w-section mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px", amount: 0.2 }}
                style={{ y }}
            >
                {/* Left side text + image */}
                <motion.div variants={leftContentVariants}>
                    <motion.p
                        className="text-accent mb-1 font-bold"
                        style={{fontSize: 'var(--font-size-subheading)',fontFamily: 'var(--font-family-cormorant'}}
                        variants={textVariants}
                    >
                        About Us
                    </motion.p>

                    <motion.h2
                        className=" mb-6 leading-snug font-bold"
                        style={{fontSize: 'var(--font-size-heading)',fontFamily: 'var(--font-family-cormorant'}}
                        variants={textVariants}
                    >
                        <RevealText text="Khodiyar Ceramic The Group of Company Where Innovation Meets Perfection" />
                        {/* Breezo Group of Company <br />
                        Where Innovation Meets Perfection */}
                    </motion.h2>

                    <motion.div 
                        className="relative group w-full max-w-[568px] mx-auto overflow-hidden rounded-lg"
                        variants={imageVariants}
                        whileHover={{ 
                            scale: 1.05, 
                            rotateY: 5,
                            transition: { duration: 0.3 }
                        }}
                    >
                        {/* <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                        /> */}
                        <motion.img
                            src={home}
                            alt="Interior Design"
                            className="w-full h-auto md:h-[284px] object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        />
                    </motion.div>
                </motion.div>

                {/* Right side description */}
                <motion.div 
                    className="text-text leading-relaxed lg:pl-[90px]"
                    variants={rightContentVariants}
                >
                    <motion.p
                        className="text-body leading-[1.6rem] sm:leading-[1.8rem] tracking-[0.2px] text-justify font-extralight"
                        style={{fontSize: 'var(--font-size-body)'}}
                        variants={textVariants}
                    >
                        Khodiyar Group of Company stands tall among leading pioneers dedicated
                        to excellence, innovation, and design precision. We specialize in
                        curating a diverse range of premium products that blend aesthetic
                        brilliance with functional superiority, redefining the standards of
                        modern living and architecture.
                    </motion.p>

                    <motion.button
                        onClick={() => navigate("/about-us")}
                        className="mt-8 cursor-pointer bg-accent text-text px-6 py-3 rounded-md font-extralight relative overflow-hidden"
                        style={{fontSize: 'var(--font-size-body)'}}
                        variants={buttonVariants}
                        whileHover={{ 
                            scale: 1.05, 
                            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                            transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-500"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "100%" }}
                        />
                        Know More
                    </motion.button>
                </motion.div>
            </motion.div>
        </>
    );
};

export default About;