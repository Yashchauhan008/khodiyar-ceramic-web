import React, { useState } from "react";
import { motion } from "framer-motion";
import E1 from "../ui/icons/E1";
import E2 from "../ui/icons/E2";
import E3 from "../ui/icons/E3";
import E4 from "../ui/icons/E4";
import E5 from "../ui/icons/E5";
import E6 from "../ui/icons/E6";
import PageHero from "../components/PageHero";
import GlobalMap from "../components/GlobalMap";
import expImg from "../assets/export-img.png";
import RevealText from "../components/RevealText";
const Export = () => {
  const features = [
    { icon: <E1 />, title: "Low Maintenance" },
    { icon: <E2 />, title: "Customize Packaging" },
    { icon: <E3 />, title: "Availability Assurance" },
    { icon: <E4 />, title: "Range of Surface & Size" },
    { icon: <E5 />, title: "Innovative design & Quality" },
    { icon: <E6 />, title: "Quick Customer Support" },
  ];

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

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateForm = () => {
    if (!formData.name.trim()) {
      alert("Please enter your name");
      return false;
    }
    if (!formData.email.trim()) {
      alert("Please enter your email");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert("Please enter a valid email address");
      return false;
    }
    if (!formData.phone.trim()) {
      alert("Please enter your mobile number");
      return false;
    }
    if (!/^[0-9+\-\s()]{10,}$/.test(formData.phone)) {
      alert("Please enter a valid mobile number");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://breezoporcelano.com/mail-setup/send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          mobile: formData.phone
        })
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        alert("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error('Error:', error);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="text-text max-w-section mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Top Export Heading */}
      <PageHero heading={'Export'} />

      {/* Why We Best Section */}
      <motion.section 
        className="py-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.p 
          className=" text-accent mb-1 text-left md:text-left tracking-wide font-bold" 
          style={{fontSize: 'var(--font-size-subheading)',fontFamily: 'var(--font-family-cormorant'}}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Why We Best
        </motion.p>
        <motion.h2 
          className=" text-text mb-12 text-left md:text-left font-bold" 
          style={{fontSize: 'var(--font-size-heading)',fontFamily: 'var(--font-family-cormorant'}}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <RevealText triggerOnScroll={false} text={"Why import tiles from Khodiyar Ceramic"} />
        </motion.h2>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center space-y-2 sm:space-y-4"
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <motion.div 
                className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full"
                whileHover={{ rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              >
                {item.icon}
              </motion.div>
              <p className=" text-text leading-tight w-[110px] sm:w-[150px] font-extralight"style={{fontSize: 'var(--font-size-body)'}}>
                {item.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* --- Export Globally Section --- */}
      <motion.section 
        className="py-12 sm:py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <p className=" text-accent mb-1 tracking-wide font-bold" style={{fontSize: 'var(--font-size-subheading)',fontFamily: 'var(--font-family-cormorant'}}>
              Export Globally
            </p>
            <h2 className="mb-6 font-bold" style={{fontSize: 'var(--font-size-heading)',fontFamily: 'var(--font-family-cormorant'}}>
               <RevealText triggerOnScroll={false} text={"Export Globally"} />
            </h2>
            <p
              className="text-sm sm:text-base text-body leading-relaxed tracking-wide text-justify lg:pr-25 font-extralight"
              style={{fontSize: 'var(--font-size-body)'}}
            >
              A strong and ever-growing customer base across multiple countries
              has positioned Khodiyar Ceramic The Group of Companies as one of the leading
              global exporters of premium tiles and ceramics.
            </p>
            <p
              className="mt-4 text-sm sm:text-base text-body leading-relaxed tracking-wide text-justify lg:pr-25 font-extralight"
              style={{fontSize: 'var(--font-size-body)'}}
            >
              Our brand has become a synonym for innovation, superior quality,
              and unmatched service in both domestic and international markets.
              With a clear vision to achieve global recognition, K is
              continuously expanding its footprint to establish a solid presence
              worldwide.
            </p>
          </motion.div>
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={expImg}
              alt="Export Background"
              className="w-[330px] sm:w-[400px] md:w-[500px] h-auto object-contain"
            />
          </motion.div>
        </div>

        {/* Packing Details Table */}
        <motion.div 
          className="mt-16 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-text mb-6 font-bold text-center" style={{fontSize: 'var(--font-size-heading)',fontFamily: 'var(--font-family-cormorant'}}> Porcelain Wooden Pallet Packing Details</h3>
          
          <div 
            className="overflow-x-auto x-scroll"
          >
            <table className="w-full text-text border-collapse" style={{fontSize: 'var(--font-size-body)'}}>
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="text-left p-3 font-bold text-accent">Container Type</th>
                  <th className="text-left p-3 font-bold text-accent">Size</th>
                  <th className="text-left p-3 font-bold text-accent">Pcs/Box</th>
                  <th className="text-left p-3 font-bold text-accent">Sqm/Box</th>
                  <th className="text-left p-3 font-bold text-accent">Pallet Size</th>
                  <th className="text-left p-3 font-bold text-accent">Pallet/Container</th>
                  <th className="text-left p-3 font-bold text-accent">Box/Pallet</th>
                  <th className="text-left p-3 font-bold text-accent">Total Boxes</th>
                  <th className="text-left p-3 font-bold text-accent">Total Sqm</th>
                  <th className="text-left p-3 font-bold text-accent">Weight (Kgs)</th>
                </tr>
              </thead>
              <tbody className="text-body">
                <tr className="border-b border-gray-700 hover:bg-gray-800/30 transition-colors">
                  <td className="p-3 font-semibold">20'</td>
                  <td className="p-3">300x600 mm</td>
                  <td className="p-3">8</td>
                  <td className="p-3">1.44</td>
                  <td className="p-3">37" x 44"</td>
                  <td className="p-3">24</td>
                  <td className="p-3">40</td>
                  <td className="p-3">960</td>
                  <td className="p-3">1382.4</td>
                  <td className="p-3">26900</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-gray-800/30 transition-colors">
                  <td className="p-3"></td>
                  <td className="p-3">600x600 mm</td>
                  <td className="p-3">4</td>
                  <td className="p-3">1.44</td>
                  <td className="p-3">42"x42"</td>
                  <td className="p-3">22</td>
                  <td className="p-3">44</td>
                  <td className="p-3">968</td>
                  <td className="p-3">1393.92</td>
                  <td className="p-3">27120</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-gray-800/30 transition-colors">
                  <td className="p-3"></td>
                  <td className="p-3">600x1200 mm</td>
                  <td className="p-3">2</td>
                  <td className="p-3">1.44</td>
                  <td className="p-3">37"x44" & 29.5"x49"</td>
                  <td className="p-3">(12)(5)</td>
                  <td className="p-3">(68)(30)</td>
                  <td className="p-3">966</td>
                  <td className="p-3">1391.04</td>
                  <td className="p-3">27931</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-gray-800/30 transition-colors">
                  <td className="p-3"></td>
                  <td className="p-3">200x1200 mm</td>
                  <td className="p-3">5</td>
                  <td className="p-3">1.2</td>
                  <td className="p-3">30"x30" & 29.5"x49"</td>
                  <td className="p-3">(21)(2)</td>
                  <td className="p-3">(48)(39)</td>
                  <td className="p-3">1086</td>
                  <td className="p-3">1303.02</td>
                  <td className="p-3">27650</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-gray-800/30 transition-colors">
                  <td className="p-3"></td>
                  <td className="p-3">800x800 mm</td>
                  <td className="p-3">3</td>
                  <td className="p-3">1.92</td>
                  <td className="p-3">44"x44"</td>
                  <td className="p-3">20</td>
                  <td className="p-3">36</td>
                  <td className="p-3">720</td>
                  <td className="p-3">1382.4</td>
                  <td className="p-3">27860</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-gray-800/30 transition-colors">
                  <td className="p-3"></td>
                  <td className="p-3">800x1600 mm</td>
                  <td className="p-3">2</td>
                  <td className="p-3">2.56</td>
                  <td className="p-3">44"x44" & 32"x64"</td>
                  <td className="p-3">(10)(6)</td>
                  <td className="p-3">(44)(12)</td>
                  <td className="p-3">512</td>
                  <td className="p-3">1310.72</td>
                  <td className="p-3">27736</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-gray-800/30 transition-colors">
                  <td className="p-3"></td>
                  <td className="p-3">1200x1200 mm</td>
                  <td className="p-3">2</td>
                  <td className="p-3">2.88</td>
                  <td className="p-3">29.5"x48" & 48"x48"</td>
                  <td className="p-3">(13)(4)</td>
                  <td className="p-3">(28)(20)</td>
                  <td className="p-3">444</td>
                  <td className="p-3">1336.64</td>
                  <td className="p-3">27240</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-gray-800/30 transition-colors">
                  <td className="p-3 font-semibold">40'</td>
                  <td className="p-3">1200x2400 mm</td>
                  <td className="p-3">1</td>
                  <td className="p-3">2.88</td>
                  <td className="p-3">Iron Frame</td>
                  <td className="p-3">12</td>
                  <td className="p-3">37</td>
                  <td className="p-3">444</td>
                  <td className="p-3">1278.72</td>
                  <td className="p-3">27660</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-gray-800/30 transition-colors">
                  <td className="p-3"></td>
                  <td className="p-3">800x2400 mm</td>
                  <td className="p-3">1</td>
                  <td className="p-3">1.92</td>
                  <td className="p-3">Iron Frame</td>
                  <td className="p-3">14</td>
                  <td className="p-3">28</td>
                  <td className="p-3">392</td>
                  <td className="p-3">752.64</td>
                  <td className="p-3">27776</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Wall Tiles Wooden Pallet Packing Table */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-text mb-6 font-bold text-center" style={{fontSize: 'var(--font-size-heading)',fontFamily: 'var(--font-family-cormorant'}}>Wall Tiles Wooden Pallet Packing</h3>
          
          <div 
            className="overflow-x-auto x-scroll"
          >
            <table className="w-full text-text border-collapse" style={{fontSize: 'var(--font-size-body)'}}>
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="text-left p-3 font-bold text-accent">Container Type</th>
                  <th className="text-left p-3 font-bold text-accent">Size</th>
                  <th className="text-left p-3 font-bold text-accent">Pcs/Box</th>
                  <th className="text-left p-3 font-bold text-accent">Sqm/Box</th>
                  <th className="text-left p-3 font-bold text-accent">Pallet Size</th>
                  <th className="text-left p-3 font-bold text-accent">Pallet/Container</th>
                  <th className="text-left p-3 font-bold text-accent">Box/Pallet</th>
                  <th className="text-left p-3 font-bold text-accent">Total Boxes</th>
                  <th className="text-left p-3 font-bold text-accent">Total Sqm</th>
                  <th className="text-left p-3 font-bold text-accent">Weight (Kgs)</th>
                </tr>
              </thead>
              <tbody className="text-body">
                <tr className="border-b border-gray-700 hover:bg-gray-800/30 transition-colors">
                  <td className="p-3 font-semibold">20'</td>
                  <td className="p-3">300x450 mm</td>
                  <td className="p-3">6</td>
                  <td className="p-3">0.81</td>
                  <td className="p-3">37" x 44"</td>
                  <td className="p-3">20</td>
                  <td className="p-3">120</td>
                  <td className="p-3">2400</td>
                  <td className="p-3">1944</td>
                  <td className="p-3">27100</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-gray-800/30 transition-colors">
                  <td className="p-3"></td>
                  <td className="p-3">300x600 mm</td>
                  <td className="p-3">5</td>
                  <td className="p-3">0.9</td>
                  <td className="p-3">37" x 44"</td>
                  <td className="p-3">20</td>
                  <td className="p-3">96</td>
                  <td className="p-3">1920</td>
                  <td className="p-3">1728</td>
                  <td className="p-3">26996</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-gray-800/30 transition-colors">
                  <td className="p-3"></td>
                  <td className="p-3">250x750 mm</td>
                  <td className="p-3">5</td>
                  <td className="p-3">0.9375</td>
                  <td className="p-3">44" x 44"</td>
                  <td className="p-3">20</td>
                  <td className="p-3">88</td>
                  <td className="p-3">1760</td>
                  <td className="p-3">1650</td>
                  <td className="p-3">27780</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-gray-800/30 transition-colors">
                  <td className="p-3"></td>
                  <td className="p-3">300x900 mm</td>
                  <td className="p-3">4</td>
                  <td className="p-3">1.08</td>
                  <td className="p-3">44" x 44"</td>
                  <td className="p-3">20</td>
                  <td className="p-3">68</td>
                  <td className="p-3">1360</td>
                  <td className="p-3">1468.8</td>
                  <td className="p-3">26100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Euro Pallet Packing Table */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-text mb-6 font-bold text-center" style={{fontSize: 'var(--font-size-heading)',fontFamily: 'var(--font-family-cormorant'}}>Euro Pallet Packing</h3>
          
          <div 
            className="overflow-x-auto x-scroll"
          >
            <table className="w-full text-text border-collapse" style={{fontSize: 'var(--font-size-body)'}}>
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="text-left p-3 font-bold text-accent">Container Type</th>
                  <th className="text-left p-3 font-bold text-accent">Size</th>
                  <th className="text-left p-3 font-bold text-accent">Pcs/Box</th>
                  <th className="text-left p-3 font-bold text-accent">Sqm/Box</th>
                  <th className="text-left p-3 font-bold text-accent">Pallet Size</th>
                  <th className="text-left p-3 font-bold text-accent">Pallet/Container</th>
                  <th className="text-left p-3 font-bold text-accent">Box/Pallet</th>
                  <th className="text-left p-3 font-bold text-accent">Total Boxes</th>
                  <th className="text-left p-3 font-bold text-accent">Total Sqm</th>
                  <th className="text-left p-3 font-bold text-accent">Weight (Kgs)</th>
                </tr>
              </thead>
              <tbody className="text-body">
                <tr className="border-b border-gray-700 hover:bg-gray-800/30 transition-colors">
                  <td className="p-3 font-semibold">20'</td>
                  <td className="p-3">600x600 mm</td>
                  <td className="p-3">4</td>
                  <td className="p-3">1.44</td>
                  <td className="p-3">32" x 48"</td>
                  <td className="p-3">25</td>
                  <td className="p-3">40</td>
                  <td className="p-3">1000</td>
                  <td className="p-3">1440</td>
                  <td className="p-3">27900</td>
                </tr>
                <tr className="border-b border-gray-700 hover:bg-gray-800/30 transition-colors">
                  <td className="p-3"></td>
                  <td className="p-3">600x1200 mm</td>
                  <td className="p-3">2</td>
                  <td className="p-3">1.44</td>
                  <td className="p-3">37" x 44"</td>
                  <td className="p-3">(11)(10)</td>
                  <td className="p-3">(56)(34)</td>
                  <td className="p-3">956</td>
                  <td className="p-3">1376.64</td>
                  <td className="p-3">27746</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.section>

      {/* --- 🌍 Global Footprint Section (newly added) --- */}
      <motion.section 
        className="py-16 rounded-2xl text-left"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.p 
          className="text-accent mb-1 tracking-wide font-bold"
          style={{fontSize: 'var(--font-size-subheading)',fontFamily: 'var(--font-family-cormorant'}}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Going Global
        </motion.p>
        <motion.h2
          className=" text-text mb-10 font-bold"
          style={{fontSize: 'var(--font-size-heading)',fontFamily: 'var(--font-family-cormorant'}}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
           <RevealText text={"Global Footprint"} />
        </motion.h2>

        <motion.div 
          className="w-full"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <GlobalMap />
        </motion.div>
      </motion.section>

      {/* --- Contact Section --- */}
      <motion.section 
        id="contact"
        className="py-12 sm:py-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.p 
          className="text-accent mb-1 font-bold" 
          style={{fontSize: 'var(--font-size-subheading)',fontFamily: 'var(--font-family-cormorant'}}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Let's Connect
        </motion.p>
        <motion.h2 
          className="mb-8 text-left md:text-left font-bold"
          style={{fontSize: 'var(--font-size-heading)',fontFamily: 'var(--font-family-cormorant'}}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
           <RevealText text={"Get In Touch"} />
        </motion.h2>

        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-[#2e2e2e]/32 border border-neutral-800 rounded px-3 py-2 sm:px-4 sm:py-3 text-white placeholder-text font-extralight focus:outline-none focus:border-accent transition-all duration-300"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-[#2e2e2e]/32 border border-neutral-800 rounded px-3 py-2 sm:px-4 sm:py-3 text-white placeholder-text font-extralight focus:outline-none focus:border-accent transition-all duration-300"
              whileFocus={{ scale: 1.02 }}
            />
          </div>

          <motion.input
            type="email"
            name="email"
            placeholder="johndoe@gmail.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-[#2e2e2e]/32 border border-neutral-800 rounded px-3 py-2 sm:px-4 sm:py-3 text-white placeholder-text font-extralight focus:outline-none focus:border-accent transition-all duration-300"
            whileFocus={{ scale: 1.02 }}
          />

          <motion.textarea
            name="message"
            placeholder="Message..."
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full bg-[#2e2e2e]/32 border border-neutral-800 rounded px-3 py-2 sm:px-4 sm:py-3 text-white placeholder-text font-extralight focus:outline-none focus:border-accent transition-all duration-300 resize-none"
            whileFocus={{ scale: 1.02 }}
          />

          <motion.button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`w-full ${isSubmitting ? 'bg-gray-600 cursor-not-allowed' : 'bg-accent hover:bg-accent'} cursor-pointer text-white font-medium py-3 rounded transition-all duration-300`}
            whileHover={!isSubmitting ? { scale: 1.02 } : {}}
            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </motion.button>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default Export;
