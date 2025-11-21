import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import ScrollToSection from "./components/ScrollToSection";
import SplashScreen from "./components/SplashScreen";
import Home from "./views/Home";
import Company from "./views/Company";
import Services from "./views/Services";
import Contact from "./views/Contact";
import About from "./views/About";
import Usabout from "./views/Usabout";
import Technology from "./views/Technology";
import SocialBar from "./components/SocialBar";
import NotFound from "./views/NotFound";
import Footer from "./components/Footer";
import Export from "./views/Export";
import CatalogueGrid from "./views/CatalogueGrid";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {!showSplash && (
        <>
          {/* Full background wrapper */}
          <div style={{ minHeight: "100vh", scrollBehavior: "smooth" }} className="pt-19 bg-primary">
            <Navbar />
            <ScrollToTop />
            <ScrollToSection />

            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/company" element={<Company />} /> */}
              <Route path="/catalogue" element={<CatalogueGrid />} />
              <Route path="/export" element={<Export />} />
              {/* <Route path="/about" element={<About />} /> */}
              <Route path="/about-us" element={<Usabout />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
          </div>

          <SocialBar />
        </>
      )}
    </>
  );
};

export default App;
