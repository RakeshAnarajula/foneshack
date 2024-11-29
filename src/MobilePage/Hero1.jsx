import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
const Hero1 = ({ scrollToMobilePhone }) => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Mobile Background Image */}
      <div
        className="absolute inset-0 block lg:hidden bg-cover bg-center"
        style={{ backgroundImage: 'url("/main hero2.png")' }}
      ></div>

      {/* Laptop/Desktop Background Image */}
      <div
        className="absolute inset-0 hidden lg:block bg-center"
        style={{
          backgroundImage: 'url("/main hero1.png")',
          backgroundSize: 'contain', // Contain image for laptops
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white p-6 md:p-12">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500 animate-fade-in"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Mobile Phones
        </motion.h1>
        <motion.p
          className="mt-4 max-w-4xl mx-auto text-lg sm:text-xl md:text-2xl text-white opacity-80"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Discover the latest in mobile technology with top-brand handsets,
          innovative designs, and unbeatable features. Stay connected with style
          and ease.
        </motion.p>
        <motion.button
          className="mt-8 px-6 py-3 rounded-lg text-white font-semibold bg-purple-500 shadow-lg transition-colors duration-300"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.0, backgroundColor: "#4c1d95" }}
          transition={{ delay: 0, duration: 0.1 }}
          onClick={scrollToMobilePhone}
        >
          Explore Now
        </motion.button>
      </div>

      {/* Custom Fade-in Animation */}
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 1s ease-out forwards;
          }
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

Hero1.propTypes = {
  scrollToMobilePhone: PropTypes.func.isRequired,
};

export default Hero1;
