import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
const Accessories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      image: "/longearbuds.jpg",
      title: "Spectrum Elite - Gaming Headphones",
      content:
      "Immerse yourself in dynamic sound with vibrant RGB lighting that pulses to your music's beat. Premium over-ear comfort meets gaming-grade audio performance for an unmatched listening experience.",
      specialty: "RGB Lighting & Bass Enhancement",
    },
    {
      image: "/earbuds.jpg",
      title: "Apple AirPods Pro",
      content:
        "Experience premium sound with active noise cancellation technology that adapts to your environment. Perfect companion for crystal-clear audio, whether you're commuting or relaxing.",
      specialty: "Noise Cancellation & adaptive ",
    },
    {
      image:"/wired ear phones.jpg",
      title: "JBL Tune 110 Classic Red wired",
      content:
        "Classic wired earbuds delivering pure, uninterrupted sound without battery anxiety. Perfect for those who value simplicity and consistent audio performance.",
      specialty: "Wired Reliability & In-ear Design",
    },
    {
      image: "/usb cable.jpg",
      title: "Apple 20W USB-C Power Adapter",
      content:
      "Power up your devices with lightning-fast charging technology and universal USB-C connectivity. Sleek, compact design meets high-efficiency power delivery for modern devices.",
      specialty: "Fast Charging & USB-C Compatible",
    },
    {
      image: "/power bank.jpg",
      title: "Apple MagSafe Battery Pack",
      content:
      "Stay charged anywhere with this high-capacity portable power bank featuring multiple charging ports. Essential companion for travelers and tech enthusiasts who need reliable backup power.",
      specialty: "Portable Power & Multi-port Design",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000); // Change the image every 3 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="bg-gray-900 text-white py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <motion.h1
          className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 mt-1"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
            Accessories Zone in FoneShack
          </span>
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          {/* Image Section */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-2xl">
              {testimonials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: index === activeIndex ? 1 : 0,
                    y: index === activeIndex ? 0 : 20,
                    transition: { duration: 0.5, ease: "easeOut" },
                  }}
                  className="absolute w-full h-full"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-purple-900/60 to-transparent"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative overflow-hidden min-h-[200px]">
              {testimonials.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: index === activeIndex ? 1 : 0,
                    y: index === activeIndex ? 0 : 20,
                    transition: { duration: 0.5, ease: "easeOut" },
                  }}
                  className={`${
                    index === activeIndex ? "relative" : "absolute"
                  } top-0 left-0 w-full`}
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                    {item.title}
                  </h2>
                  <p className="text-base sm:text-lg md:text-lg text-gray-300 mb-4 md:mb-6">
                    {item.content}
                  </p>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full border border-purple-500/30 backdrop-blur-sm"
                  >
                    {item.specialty}
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Progress bar */}
            <div className="mt-8 w-full bg-purple-500/20 h-1 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-400 to-pink-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 3, // Sync with the image change interval
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accessories;
