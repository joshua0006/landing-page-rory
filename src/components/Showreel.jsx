import React from "react";
import { motion } from "framer-motion";

const ShowreelCard = ({ number, text }) => (
  <div className="group cursor-pointer group-hover:duration-500 overflow-hidden relative rounded-2xl shadow-inner shadow-gray-50 flex flex-col justify-around items-center w-64 h-96 bg-neutral-900 text-gray-50">
    <div className="after:duration-500 before:duration-500 duration-500 group-hover:before:translate-x-16 group-hover:before:-translate-y-16 group-hover:after:translate-x-16 group-hover:after:translate-y-20 after:absolute after:w-16 after:h-16 after:bg-orange-400 after:rounded-full after:-z-10 after:blur-xl after:bottom-40 after:right-20 before:absolute before:w-24 before:h-24 before:bg-sky-400 before:rounded-full before:-z-10 before:blur-xl before:top-24 before:right-20 flex flex-col font-extrabold text-7xl z-10">
      <span>{number}</span>
    </div>
    <div className="flex flex-row justify-center text-lg font-thin items-center gap-2 font-thin">
      <span>{text}</span>
      <svg
        className="w-6 h-6 stroke-current"
        height="100"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 100 100"
        width="100"
        x="0"
        xmlns="http://www.w3.org/2000/svg"
        y="0"
      >
        <path
          d="M33.9,46V29.9a16.1,16.1,0,0,1,32.2,0M50,62v8.1m-24.1,16H74.1a8,8,0,0,0,8-8V54a8,8,0,0,0-8-8H25.9a8,8,0,0,0-8,8V78.1A8,8,0,0,0,25.9,86.1Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="8"
        ></path>
      </svg>
    </div>
  </div>
);

const Showreel = () => {
  const showreelItems = [
    { number: "01", text: "Organization" },
    { number: "02", text: "Efficiency" },
    { number: "03", text: "Communication" },
    { number: "04", text: "Problem Solving" },
  ];

  return (
    <section id="showreel" className="py-24 bg-gray-800 text-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold mb-16 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Showreel
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-16">
          {showreelItems.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <ShowreelCard number={item.number} text={item.text} />
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-24 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-3xl font-semibold mb-6 text-white">
            My Work in Action
          </h3>
          <p className="text-xl mb-6 text-gray-300">
            These cards represent key aspects of my work as an executive
            assistant. Each showcases a crucial skill that I bring to the table,
            ensuring efficient and effective support for executives and
            organizations.
          </p>
          <p className="text-xl text-gray-300">
            From maintaining impeccable organization to facilitating clear
            communication, my goal is to streamline operations and support
            executive functions at the highest level.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Showreel;
