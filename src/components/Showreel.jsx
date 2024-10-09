import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  AiOutlineWifi,
  AiFillPlayCircle,
  AiFillPauseCircle,
} from "react-icons/ai";
import { BiBattery } from "react-icons/bi";

const ShowreelCard = ({ number, text }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => {
      clearInterval(timer);
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-72 h-[600px] rounded-[40px] overflow-hidden shadow-xl bg-black mb-4">
        {/* Phone frame */}
        <div className="absolute inset-0 border-[14px] border-gray-500 rounded-[40px] z-10 pointer-events-none">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-2xl"></div>
        </div>

        {/* Status bar */}
        <div className="absolute top-5 left-6 right-6 flex justify-between items-center z-20 text-white">
          <span className="text-xs">{formatTime(currentTime)}</span>
          <div className="flex items-center space-x-1">
            <AiOutlineWifi />
            <BiBattery />
          </div>
        </div>

        {/* Video content */}
        <div className="w-full h-full overflow-hidden relative">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
            <div className="font-bold text-2xl mb-2 text-white">{text}</div>
            <div className="text-sm text-gray-300">Tap to play/pause</div>
          </div>
          <button
            onClick={togglePlay}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-6xl opacity-50 hover:opacity-100 transition-opacity"
          >
            {isPlaying ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
          </button>
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full z-20"></div>
      </div>
    </div>
  );
};

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
          Show reel
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-16 mb-12">
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
        <motion.p
          className="text-center text-lg text-gray-300 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Experience the power of our comprehensive suite of tools designed to
          enhance your productivity. From streamlined organization to efficient
          communication and innovative problem-solving, our platform empowers
          you to tackle any challenge with confidence and achieve your goals
          faster than ever before.
        </motion.p>
      </div>
    </section>
  );
};

export default Showreel;
