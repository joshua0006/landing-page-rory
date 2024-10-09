import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AiOutlineUser,
  AiOutlineVideoCamera,
  AiOutlineStar,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("header");
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = document.querySelectorAll(
      "header, #about, #showreel, #testimonials, #contact-me"
    );
    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
      setIsScrolled(window.pageYOffset > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navItems = [
    { name: "About", icon: AiOutlineUser, id: "about" },
    { name: "Showreel", icon: AiOutlineVideoCamera, id: "showreel" },
    { name: "Testimonials", icon: AiOutlineStar, id: "testimonials" },
    { name: "Contact Me", icon: AiOutlineMail, id: "contact-me" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    setTimeout(() => {
      const section = document.querySelector(sectionId);
      if (section) {
        const navbarHeight = 80;
        const sectionPosition = section.getBoundingClientRect().top;
        const offsetPosition =
          sectionPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 300);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-gray-900 bg-opacity-95" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <button className="text-white lg:hidden z-50" onClick={toggleMenu}>
              {isOpen ? (
                <AiOutlineClose className="text-2xl" />
              ) : (
                <AiOutlineMenu className="text-2xl" />
              )}
            </button>
            <AnimatePresence>
              {(isOpen || windowWidth >= 1024) && (
                <motion.div
                  className={`${
                    windowWidth < 1024
                      ? "fixed inset-0 bg-gray-900 bg-opacity-95 flex items-center justify-center"
                      : "relative bg-transparent flex items-center"
                  }`}
                  initial={{ opacity: 0, scale: windowWidth < 1024 ? 0.9 : 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: windowWidth < 1024 ? 0.9 : 1 }}
                  transition={{ duration: 0.3 }}
                  style={
                    windowWidth < 1024
                      ? {
                          position: "fixed",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          width: "100vw",
                          height: "100vh",
                          zIndex: 40,
                        }
                      : {}
                  }
                >
                  <motion.ul
                    className={`flex ${
                      windowWidth < 1024
                        ? "flex-col items-center space-y-8"
                        : "flex-row space-x-6"
                    }`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {navItems.map((item) => (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <a
                          href={`#${item.id}`}
                          className={`text-white transition-colors duration-300 ${
                            windowWidth < 1024 ? "text-4xl" : "text-base"
                          } hover:text-gray-300 font-semibold`}
                          onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(`#${item.id}`);
                          }}
                        >
                          <span
                            className={
                              activeSection === item.id ? "text-yellow-400" : ""
                            }
                          >
                            {item.name}
                          </span>
                        </a>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.nav>
      {showScrollTop && (
        <motion.button
          className="fixed bottom-4 right-4 bg-white text-black p-2 rounded-full shadow-lg z-50"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: [1, 1.1, 1],
            transition: {
              y: { duration: 0.3 },
              scale: {
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              },
            },
          }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.2 }}
        >
          <AiOutlineArrowUp className="text-2xl" />
        </motion.button>
      )}
    </>
  );
};

export default Navbar;
