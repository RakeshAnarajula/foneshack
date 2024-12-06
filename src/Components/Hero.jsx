import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
const Hero2 = ({ scrollToFeature }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">      <motion.div
        className="absolute inset-0 bg-cover bg-center w-full h-full sm:hidden"
        style={{
          backgroundImage: 'url("mobile-view.jpg")',
        }}
      ></motion.div>
      <motion.div
        className="absolute inset-0 bg-contain bg-center hidden sm:block"
        style={{
          backgroundImage: 'url("/new hero1png.png")',
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      ></motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-55"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl px-6 md:px-12 text-center text-white">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to FoneShack
        </motion.h1>
        <motion.p
          className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl opacity-80 leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Discover the future of mobile technology with cutting-edge
          smartphones that redefine innovation and performance.
        </motion.p>

        <motion.button
          className="mt-8 px-6 py-3 rounded-lg font-semibold bg-purple-500 shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 focus:outline-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1, backgroundColor: "#4c1d95" }}
          transition={{ duration: 0.3 }}
          onClick={scrollToFeature}
        >
          Explore Now
        </motion.button>
      </div>
    </div>
  );
};

Hero2.propTypes = {
  scrollToFeature: PropTypes.func.isRequired,
};

export default Hero2;

