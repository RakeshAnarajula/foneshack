import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, TechInnovate",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    content:
      "An incredible solution that transformed our entire business strategy.",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Lead Developer, CodeCraft",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    content:
      "The most innovative and user-friendly platform I've ever worked with.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Marketing Director, GrowthSpark",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    content:
      "Exceptional product that simplified our complex marketing workflows.",
  },
  {
    id: 4,
    name: "David Kim",
    position: "Startup Founder, InnovateNow",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    content:
      "A revolutionary approach that redefined how we think about team.",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const getPosition = (offset) => {
    const total = testimonials.length;
    return (currentIndex + offset + total) % total;
  };

  return (
    <div className="bg-gray-900 text-white p-8 flex flex-col items-center overflow-x-hidden">
      <motion.h1
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-violet-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        What Our Clients Say
        <span className="block w-40 sm:w-80 h-1 bg-gradient-to-r from-yellow-900 to-purple-600 mt-1 animate-[underline_1s_ease-in-out] mx-auto"></span>

      </motion.h1>
      <div className="relative w-full max-w-4xl flex flex-col items-center">
        {/* Cards Container */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          {[getPosition(-1), getPosition(0), getPosition(1)].map((position, index) => {
            const isCenter = index === 1;
            return (
              <motion.div
                key={position}
                initial={{ scale: isCenter ? 1 : 0.8 }}
                animate={{ scale: isCenter ? 1.2 : 0.8 }}
                transition={{ duration: 0.5 }}
                className={`bg-gray-800 p-6 rounded-xl shadow-lg w-60 md:w-72 ${
                  isCenter ? "z-10" : "z-0"
                }`}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonials[position].avatar}
                    alt={testimonials[position].name}
                    className="w-16 h-16 rounded-full border-2 border-gray-500 mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">
                      {testimonials[position].name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {testimonials[position].position}
                    </p>
                  </div>
                </div>
                <p className="italic">"{testimonials[position].content}"</p>
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={prevTestimonial}
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
