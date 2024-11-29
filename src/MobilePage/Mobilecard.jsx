import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';

const MobilePhone = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      image: "/1Blue G93.png",
      title: "BLU G93",
      content:
        "An affordable smartphone with a 6.5-inch display, 4GB RAM, and a 13MP dual-camera setup, offering great value for everyday use.",
      specialty: "Expandable storage & Dual-camera",
    },
    {
      image: "/1BluG43.png",
      title: "BLU G43",
      content:
        "The BLU G43 features a 6.0-inch display, 2GB RAM, and a 13MP main camera, making it a great choice for budget-conscious users.",
      specialty: "Compact design & Good performance at a budget",
    },
    {
      image: "/1BluG73.png",
      title: "BLU G73",
      content:
        "With a 6.5-inch screen, 4GB RAM, and a 48MP triple-camera setup, the BLU G73 offers excellent performance and photography features.",
      specialty: "Triple-camera setup & Large display",
    },
    {
      image: "/1Galaxy A15.png",
      title: "Galaxy A15",
      content:
        "The Samsung Galaxy A15 offers a 6.5-inch screen with HD+ resolution, 4GB RAM, and a 48MP quad-camera system, delivering solid value for the price.",
      specialty: "High-quality camera & Long-lasting battery",
    },
    {
      image: "/1Nokia 110 4G.png",
      title: "Nokia 110 4G",
      content:
        "A durable 4G feature phone with a 1.8-inch display, long battery life, and essential features like a torch and FM radio.",
      specialty: "Affordable 4G connectivity & Battery life",
    },
    {
      image: "/1Nokia-215-5G-1.png",
      title: "Nokia 215 5G",
      content:
        "A reliable entry-level 5G phone with a 2.4-inch display, 1GB RAM, and essential features for those looking to enter the 5G world at an affordable price.",
      specialty: "5G Connectivity & Compact design",
    },
    {
      image: "/1Redmi 10.png",
      title: "Redmi 10",
      content:
        "The Redmi 10 features a 6.5-inch display, 4GB RAM, and a 50MP quad-camera setup, delivering great performance and camera quality at an affordable price.",
      specialty: "Quad-camera setup & High-refresh display",
    },
    {
      image: "/1RedminNote-12.png",
      title: "Redmi Note 12",
      content:
        "A powerful smartphone with a 6.67-inch AMOLED display, 6GB RAM, and a 50MP triple-camera setup, providing a great value for its price point.",
      specialty: "AMOLED display & Strong performance",
    },
    {
      image: "/1Samsung-Galaxy-s22-Ultra-2.png",
      title: "Samsung Galaxy S22",
      content:
        "The Samsung Galaxy S22 offers a 6.1-inch Dynamic AMOLED 2X display, 8GB RAM, and a 108MP main camera, providing flagship performance in a compact design.",
      specialty: "Flagship performance & Stunning display",
    },
    {
      image: "/1Xiaomi-Poco-X5-1.png",
      title: "Xiaomi Poco X5",
      content:
        "With a 6.67-inch AMOLED display, 6GB RAM, and a 48MP camera, the Poco X5 is designed to offer high-end features at an affordable price.",
      specialty: "AMOLED display & 5G support",
    },
    {
      image: "/1Xiaomi-Poco-X5-Pro.png",
      title: "Xiaomi Poco X5 Pro",
      content:
        "The Poco X5 Pro brings a 6.67-inch AMOLED display, 8GB RAM, and a 108MP camera, delivering flagship-level features at a competitive price.",
      specialty: "Pro-level performance & 108MP camera",
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
