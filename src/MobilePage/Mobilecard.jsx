import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';
const MobilePhone = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      image: "/iphone 14 pro.png",
      title: "iPhone 14 Pro",
      content:
        "Experience the revolutionary A16 Bionic chip and dynamic island feature. Professional camera system with 48MP main sensor delivers stunning photos in any light condition.",
      specialty: "Photography & Performance",
    },
    {
      image: "/samsung galaxy S23 ultra.jpg",
      title: "Samsung Galaxy S23 Ultra",
      content:
        "Featuring an advanced S Pen and professional-grade camera system with 200MP sensor. Perfect for both creative professionals and power users.",
      specialty: "Productivity & Versatility",
    },
    {
      image: "/google pixel 7 pro.jpg",
      title: "Google Pixel 7 Pro",
      content:
        "Superior AI-powered photography and pure Android experience. Advanced computational photography features make every shot perfect.",
      specialty: "AI & Software Innovation",
    },
    {
      image: "/mobilephone hero.jpg",
      title: "OnePlus 11",
      content:
        "Lightning-fast performance with Snapdragon 8 Gen 2. Hasselblad camera partnership delivers natural colors and exceptional clarity.",
      specialty: "Speed & Efficiency",
    },
    {
      image: "/Xiaomi 13 pro.jpg",
      title: "Xiaomi 13 Pro",
      content:
        "Leica-powered camera system with 1-inch sensor. Premium build quality with ceramic back and impressive fast charging capabilities.",
      specialty: "Camera & Charging",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
            Our Featured Mobile Devices
          </span>
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div className="w-full md:w-1/2 relative">
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-2xl">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className={`absolute w-full h-full transition-all duration-500 ease-in-out transform ${
                    index === activeIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-full"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover ${
                      item.title === "Google Pixel 7 Pro" || item.title === "Xiaomi 13 Pro"
                        ? "object-contain md:object-fill"
                        : ""
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-purple-900/60 to-transparent"></div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 relative">
            <div className="relative overflow-hidden">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 ease-in-out transform ${
                    index === activeIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 absolute top-0 translate-y-full"
                  }`}
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                    {item.title}
                  </h2>
                  <p className="text-base sm:text-lg md:text-lg text-gray-300 mb-4 md:mb-6">
                    {item.content}
                  </p>
                  <div className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-full border border-purple-500/30 backdrop-blur-sm">
                    {item.specialty}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-purple-500/20 hover:bg-purple-500/40 transition-colors border border-purple-500/30 backdrop-blur-sm"
                aria-label="Previous slide"
              >
                <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-purple-300" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-purple-500/20 hover:bg-purple-500/40 transition-colors border border-purple-500/30 backdrop-blur-sm"
                aria-label="Next slide"
              >
                <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-purple-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilePhone;
