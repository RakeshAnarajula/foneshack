// import React, { useEffect, useState, useRef } from "react";
// import PropTypes from "prop-types";
// import { motion } from "framer-motion";
// const Hero = ({ scrollToFeature }) => {
//   const [isVideoPlayed, setIsVideoPlayed] = useState(false);
//   const videoRef = useRef(null);
//   const [hasIntersected, setHasIntersected] = useState(false);
//   useEffect(() => {
//     const options = { threshold: 0.3 };
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !hasIntersected) {
//           setHasIntersected(true);
//           if (videoRef.current && !isVideoPlayed) {
//             videoRef.current.play();
//             setIsVideoPlayed(true);
//           }
//         }
//       },
//       options
//     );
//     const section = document.querySelector(".hero-container");
//     if (section) observer.observe(section);

//     return () => observer.disconnect();
//   }, [isVideoPlayed, hasIntersected]);

//   return (
//     <div className="hero-container relative h-screen w-full overflow-hidden">
//       {/* Video Background */}
//       <motion.video
//         ref={videoRef}
//         className="absolute top-0 left-0 w-full h-full object-cover lg:object-fill"
//         muted
//         playsInline
//         onEnded={() => videoRef.current && videoRef.current.pause()}
//         initial={{ opacity: 0.8 }} // Start with a dull opacity
//         animate={{ opacity: hasIntersected ? 0.3 : 0.8 }} // Reduce opacity when intersected
//         transition={{ duration: 1.5 }}
//       >
//         <source src="/herovideo.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </motion.video>
//       {/* Gray Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900  px-4 bg-opacity-10 z-0" />
//       {/* Hero Content */}
//       <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 text-center text-white">
//         <motion.h1
//           className="text-3xl text-red-900 sm:text-5xl lg:text-6xl font-extrabold mb-6"
//           initial={{ opacity: 0, y: -50 }}
//           animate={{
//             opacity: hasIntersected ? 1 : 0,
//             y: hasIntersected ? 0 : -50,
//           }}
//           transition={{
//             duration: 1.2,
//             delay: 0.5,
//           }}
//         >
//           Welcome to FoneShack
//         </motion.h1>

//         <motion.p
//           className="text-base text-black sm:text-lg lg:text-2xl mb-8"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{
//             opacity: hasIntersected ? 1 : 0,
//             y: hasIntersected ? 0 : 50,
//           }}
//           transition={{
//             duration: 1.4,
//             delay: 0.7,
//           }}
//         >
//           Explore the Latest Mobile Innovations
//         </motion.p>

//         <motion.button
//           className="px-6 py-3 sm:px-8 sm:py-4 bg-red-500 hover:bg-red-700 rounded-md text-sm sm:text-lg font-medium shadow-lg transition-transform transform hover:scale-105"
//           onClick={scrollToFeature}
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{
//             opacity: hasIntersected ? 1 : 0,
//             scale: hasIntersected ? 1 : 0.8,
//           }}
//           transition={{
//             duration: 1.6,
//             delay: 0.9,
//           }}
//         >
//           Explore Now
//         </motion.button>
//       </div>
//     </div>
//   );
// };

// // Add PropTypes validation
// Hero.propTypes = {
//   scrollToFeature: PropTypes.func.isRequired, // Ensure it's a required function
// };

// export default Hero;


import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Hero2 = ({ scrollToFeature }) => {
  return (
    <motion.div
      className="relative min-h-screen max-w-full flex items-center justify-center bg-black overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Background for all screens */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/main hero2.png")',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl px-6 md:px-12 text-center text-white">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to FoneShack
        </motion.h1>
        <motion.p
          className="mt-4 text-lg sm:text-xl md:text-2xl opacity-80 leading-relaxed"
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
    </motion.div>
  );
};

Hero2.propTypes = {
  scrollToFeature: PropTypes.func.isRequired,
};

export default Hero2;
