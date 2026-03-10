import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Instagram } from "../ui/icons/Instagram";
import { Linkedin } from "../ui/icons/Linkedin";
import { Facebook } from "../ui/icons/Facebook";
import logo from "../assets/KClogo.png";

const Footer = () => {
  return (
    <>
      {/* Main footer */}
      <footer className="bg-secondary text-text">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="grid gap-10 sm:gap-12 md:grid-cols-3">
            {/* Brand + social */}
            <div className="space-y-5">
              <Link to="/" className="inline-flex items-center gap-3">
                <img
                  src={logo}
                  alt="Khodiyar Ceramic"
                  className="h-12 w-auto sm:h-14"
                />
              </Link>
              <p
                className="max-w-xs text-xs sm:text-sm text-gray-400"
                style={{ fontSize: "var(--font-size-body)" }}
              >
                A distinguished name in premium porcelain and ceramic surfaces,
                crafting timeless spaces with refined design and enduring
                quality.
              </p>

              <div className="flex items-center gap-4 text-white">
                <Link
                  to={""}
                  target="_blank"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:-translate-y-0.5 hover:scale-105 transition-transform duration-300"
                >
                  <Instagram
                    className="hover:text-red-500"
                    style={{
                      width: "var(--icon-size)",
                      height: "var(--icon-size)",
                    }}
                  />
                </Link>
                <Link
                  to={"https://linkedin.com/in/breezo-porcelano-80b187370"}
                  target="_blank"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:-translate-y-0.5 hover:scale-105 transition-transform duration-300"
                >
                  <Linkedin
                    className="hover:text-red-500"
                    style={{
                      width: "var(--icon-size)",
                      height: "var(--icon-size)",
                    }}
                  />
                </Link>
                <Link
                  to={
                    "https://www.facebook.com/share/1CPbmxKmhe/?mibextid=wwXIfr"
                  }
                  target="_blank"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:-translate-y-0.5 hover:scale-105 transition-transform duration-300"
                >
                  <Facebook
                    className="hover:text-red-500"
                    style={{
                      width: "var(--icon-size)",
                      height: "var(--icon-size)",
                    }}
                  />
                </Link>
              </div>
            </div>

            {/* Quick links */}
            <div className="space-y-4 text-sm">
              <h4
                className="font-semibold tracking-wide text-text"
                style={{ fontSize: "var(--font-size-nav)" }}
              >
                Quick Links
              </h4>
              <nav className="flex flex-col gap-2 text-xs sm:text-sm text-gray-400">
                <NavLink
                  to="/"
                  className="hover:text-accent transition-colors"
                >
                  Home
                </NavLink>
                <NavLink
                  to="/about-us"
                  className="hover:text-accent transition-colors"
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/collection"
                  className="hover:text-accent transition-colors"
                >
                  Collection
                </NavLink>
                <NavLink
                  to="/export"
                  className="hover:text-accent transition-colors"
                >
                  Export
                </NavLink>
                <NavLink
                  to="/technology"
                  className="hover:text-accent transition-colors"
                >
                  Technology
                </NavLink>
                <NavLink
                  to="/contact"
                  className="hover:text-accent transition-colors"
                >
                  Contact
                </NavLink>
              </nav>
            </div>

            {/* Contact details */}
            <div className="space-y-5 text-xs sm:text-sm text-gray-300">
              <div>
                <h4
                  className="mb-2 font-semibold text-text"
                  style={{ fontSize: "var(--font-size-nav)" }}
                >
                  Address
                </h4>
                <p
                  className="font-extralight leading-relaxed"
                  style={{ fontSize: "var(--font-size-body)" }}
                >
                  167, Rafaleshwar G.I.D.C. 8-A,
                  <br />
                  National Highway Morbi-363 642,
                  <br />
                  Gujarat, India.
                </p>
              </div>

              <div>
                <h4
                  className="mb-1 font-semibold text-text"
                  style={{ fontSize: "var(--font-size-nav)" }}
                >
                  Mail Us
                </h4>
                <a
                  href="mailto:info@khodiyarceramic.com"
                  className="font-extralight hover:text-accent transition-colors"
                  style={{ fontSize: "var(--font-size-body)" }}
                >
                  info@khodiyarceramic.com
                </a>
              </div>

              <div>
                <h4
                  className="mb-1 font-semibold text-text"
                  style={{ fontSize: "var(--font-size-nav)" }}
                >
                  Call Us
                </h4>
                <a
                  href="tel:+919879811122"
                  className="font-extralight hover:text-accent transition-colors"
                  style={{ fontSize: "var(--font-size-body)" }}
                >
                  +91 9909841101                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-white/5 pt-4 text-[10px] sm:flex-row sm:text-xs text-gray-500">
            <p>
              © 2025 Khodiyar Ceramic Group of Company. All rights reserved.
            </p>
            <p>
              Developed and managed by{" "}
              <a
                href="https://beyondadtech.com"
                target="_blank"
                className="hover:text-accent transition-colors"
              >
                Beyond AdTech
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;