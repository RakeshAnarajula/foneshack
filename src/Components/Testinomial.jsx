import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO, TechInnovate",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    content: "An incredible solution that transformed our entire business strategy and operational efficiency.",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Lead Developer, CodeCraft",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg", 
    content: "The most innovative and user-friendly platform I've ever worked with. Truly game-changing technology.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Marketing Director, GrowthSpark",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    content: "Exceptional product that simplified our complex marketing workflows and boosted team productivity.",
  },
  {
    id: 4,
    name: "David Kim",
    position: "Startup Founder, InnovateNow",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    content: "A revolutionary approach that redefined how we think about team collaboration and project management.",
  },
  {
    id: 5,
    name: "Alex Wong",
    position: "Product Manager, GlobalTech",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    content: "Seamless integration and incredible support. This product has been a game-changer for our team's.",
  },
  {
    id: 6,
    name: "Rachel Green",
    position: "Startup Entrepreneur",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    content: "Innovative solution that provides unparalleled insights and streamlines our complex business processes.",
  }
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const getTestimonialPosition = (offset) => {
    const totalTestimonials = testimonials.length;
    return (currentIndex + offset + totalTestimonials) % totalTestimonials;
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 100
      }
    })
  };

  const renderTitle = () => {
    const title = "What Our Clients Say";
    return (
      <motion.h1
        initial="hidden"
        animate="visible"
        className="text-4xl md:text-5xl font-extrabold text-center mb-8 md:mb-12 text-transparent bg-clip-text bg-red-800"
      >
        {title.split(" ").map((word, i) => (
          <motion.span 
            key={i}
            variants={wordVariants}
            custom={i}
            style={{ display: 'inline-block', marginRight: '0.5rem' }}
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>
    );
  };

  return (
    <div className=" bg-gray-900 flex flex-col items-center overflow-x-hidden  justify-center p-6 ">
      {renderTitle()}

      <div className="w-full max-w-6xl flex flex-col items-center">
        <AnimatePresence mode="wait">
          <div className="relative w-full flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
            {/* Desktop/Tablet View */}
            <div className="hidden md:flex items-center justify-center w-full space-x-4">
              {/* Left Card */}
              <motion.div
                key={`left-${getTestimonialPosition(-1)}`}
                initial={{ scale: 0.9, opacity: 0.8 }}
                animate={{ scale: 0.9, opacity: 0.8 }}
                transition={{ duration: 0.3 }}
                className="z-10 hidden md:block"
              >
                <div className="bg-gray-800 rounded-2xl p-6 w-72 backdrop-blur-sm">
                  <Quote className="text-white/30 w-8 h-8 mb-2" />
                  <p className="text-white/70 text-sm italic">
                    "{testimonials[getTestimonialPosition(-1)].content}"
                  </p>
                </div>
              </motion.div>

              {/* Center Card - Main Testimonial */}
              <motion.div
                key={`center-${currentIndex}`}
                initial={{ scale: 1, opacity: 1 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="z-30"
              >
                <div className="bg-gray-900 shadow-2xl rounded-2xl p-8 w-96 backdrop-blur-lg transform transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonials[currentIndex].avatar} 
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-white/30"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {testimonials[currentIndex].name}
                      </h3>
                      <p className="text-white/70 text-sm">
                        {testimonials[currentIndex].position}
                      </p>
                    </div>
                  </div>
                  <p className="text-white italic mb-4">
                    "{testimonials[currentIndex].content}"
                  </p>
                  <Quote className="text-white/30 w-12 h-12 absolute bottom-4 right-4" />
                </div>
              </motion.div>

              {/* Right Card */}
              <motion.div
                key={`right-${getTestimonialPosition(1)}`}
                initial={{ scale: 0.9, opacity: 0.8 }}
                animate={{ scale: 0.9, opacity: 0.8 }}
                transition={{ duration: 0.3 }}
                className="z-10 hidden md:block"
              >
                <div className="bg-gray-800 rounded-2xl p-6 w-72 backdrop-blur-sm">
                  <Quote className="text-white/30 w-8 h-8 mb-2" />
                  <p className="text-white/70 text-sm italic">
                    "{testimonials[getTestimonialPosition(1)].content}"
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden w-full p-4">
              <motion.div
                key={`mobile-${currentIndex}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="bg-gray-800 shadow-2xl rounded-2xl p-6 w-full backdrop-blur-lg"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].name}
                    className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-white/30"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {testimonials[currentIndex].name}
                    </h3>
                    <p className="text-white text-xs">
                      {testimonials[currentIndex].position}
                    </p>
                  </div>
                </div>
                <p className="text-white text-sm italic mb-4">
                  "{testimonials[currentIndex].content}"
                </p>
                <Quote className="text-white/30 w-8 h-8 absolute bottom-4 right-4" />
              </motion.div>
            </div>
          </div>
        </AnimatePresence>

        {/* External Navigation Buttons */}
        <div className="flex space-x-4 items-center">
          <button 
            onClick={prevTestimonial}
            className="bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition transform hover:scale-105 flex items-center"
          >
            <ChevronLeft className="text-white w-6 h-6" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition transform hover:scale-105 flex items-center"
          >
            <ChevronRight className="text-white w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;