import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Header = () => {
  return (
    <header className="relative h-screen w-full overflow-hidden bg-gradient-animate">
      <Navbar />
      <div className="relative z-10 h-full flex items-center justify-between container mx-auto px-4">
        <motion.div
          className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:w-1/2">
            <div className="mb-12">
              <h1 className="text-6xl lg:text-7xl font-bold mb-6 text-shadow">
                Jane Doe
              </h1>
              <h2 className="text-4xl lg:text-5xl font-light">
                Executive Assistant Extraordinaire
              </h2>
            </div>
            <a
              href="https://calendly.com/your-calendly-link"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black text-xl font-bold py-3 px-8 rounded-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100 shadow-md mb-8"
            >
              Get in Touch
            </a>
            <div className="flex flex-row items-center gap-7">
              <a
                href="https://facebook.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors duration-300 text-xl md:text-3xl font-semibold flex items-center"
              >
                <FaFacebookF className="mr-2" size={24} />
                Facebook
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-white hover:text-red-400 transition-colors duration-300 text-xl md:text-3xl font-semibold flex items-center"
              >
                <MdEmail className="mr-2" size={24} />
                Email
              </a>
              <a
                href="https://instagram.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-400 transition-colors duration-300 text-xl md:text-3xl font-semibold flex items-center"
              >
                <FaInstagram className="mr-2" size={24} />
                Instagram
              </a>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-shrink-0 mt-12 lg:mt-0 lg:w-1/2 flex justify-end"
          >
            <div className="w-72 h-72 md:w-[28rem] md:h-[28rem] overflow-hidden">
              <img
                src="image/avatar.png"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
