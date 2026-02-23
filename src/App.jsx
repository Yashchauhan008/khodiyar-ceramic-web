// export default App;
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import ScrollToSection from "./components/ScrollToSection";
import SplashScreen from "./components/SplashScreen";
import Home from "./views/Home";
import Usabout from "./views/Usabout";
import Technology from "./views/Technology";
import SocialBar from "./components/SocialBar";
import NotFound from "./views/NotFound";
import Footer from "./components/Footer";
import Export from "./views/Export";
import CatalogueGrid from "./views/CatalogueGrid";
import PageTransition from "./components/PageTransition"; // Import the new component

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" }); // Use instant to prevent scroll fighting during transition
  }, [pathname]);

  return null;
};

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const location = useLocation(); // Get location for AnimatePresence key

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen key="splash" onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {!showSplash && (
        <div className="min-h-screen bg-primary flex flex-col">
          <Navbar />
          <ScrollToTop />
          <ScrollToSection />

          {/* Main Content Wrapper */}
          <div className="flex-grow pt-19">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route 
                  path="/" 
                  element={
                    <PageTransition>
                      <Home />
                    </PageTransition>
                  } 
                />
                <Route 
                  path="/catalogue" 
                  element={
                    <PageTransition>
                      <CatalogueGrid />
                    </PageTransition>
                  } 
                />
                <Route 
                  path="/export" 
                  element={
                    <PageTransition>
                      <Export />
                    </PageTransition>
                  } 
                />
                <Route 
                  path="/about-us" 
                  element={
                    <PageTransition>
                      <Usabout />
                    </PageTransition>
                  } 
                />
                <Route 
                  path="/technology" 
                  element={
                    <PageTransition>
                      <Technology />
                    </PageTransition>
                  } 
                />
                <Route 
                  path="*" 
                  element={
                    <PageTransition>
                      <NotFound />
                    </PageTransition>
                  } 
                />
              </Routes>
            </AnimatePresence>
          </div>

          <Footer />
          {/* <SocialBar /> */}
        </div>
      )}
    </>
  );
};

export default App;