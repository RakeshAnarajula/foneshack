import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
const WhyChooseFoneShack = () => {
  const [showAnimation, setShowAnimation] = useState([]);
  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.5,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.getAttribute('data-index'));
        if (entry.isIntersecting) {
          setShowAnimation((prev) => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }
      });
    }, options);

    const elements = document.querySelectorAll('.animate-element');
    elements.forEach((element) => {
      const index = parseInt(element.getAttribute('data-index'));
      if (!showAnimation[index]) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [showAnimation]);

  const sections = [
    {
      title: "Trusted Products",
      description:
        "We ensure every product meets the highest standards of quality, rigorously tested for reliability and durability. Trust us for your tech needs!",
      imgSrc: "/trusted.jpg",
      icon: "🛡️"
    },
    {
      title: "Expertise",
      description:
        "With over 20 years of experience in mobile retail and services, we are proud to lead the industry with innovative solutions and unmatched knowledge.",
      imgSrc: "/expertise.jpg",
      icon: "🧠"
    },
    {
      title: "Dedicated Team",
      description:
        "Our team of 15 highly trained professionals is passionate about delivering exceptional service tailored to your needs.",
      imgSrc: "/dedicated team.jpg",
      icon: "👥"
    },
    {
      title: "One Stop Solution",
      description:
        "From the latest devices to seamless payment solutions, FoneShack offers everything you need in one place.",
      imgSrc: "/one step solution.jpg",
      icon: "🔧"
    },
  ];

  return (
    <div className="bg-gray-900 text-white overflow-hidden relative p-4">
      {/* Animated Title */}
      <motion.h1 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 1, 
          type: "spring", 
          bounce: 0.5 
        }}
        className="text-center text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-red-600 py-12 relative z-10"
      >
        Why Choose FoneShack?
      </motion.h1>

      {/* Feature Sections */}
      <main className="space-y-16 px-4 md:px-8 pb-16 relative z-10">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center space-y-6 md:space-y-0 animate-element ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
            data-index={index}
          >
            {/* Image Section with Enhanced Animation */}
            <motion.div
              className={`w-full md:w-1/2 transform transition-all duration-1000 ease-out ${
                showAnimation[index] 
                  ? 'opacity-100 translate-x-0' 
                  : `opacity-0 ${index % 2 === 0 ? 'translate-x-32' : '-translate-x-32'}`
              }`}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(96, 165, 250, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 10 
              }}
            >
              <motion.div
                className="overflow-hidden rounded-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.6,
                  ease: "easeInOut"
                }}
              >
                <motion.img
                  src={section.imgSrc}
                  alt={section.title}
                  className="w-full h-[250px] md:h-[300px] lg:h-[350px] object-cover transition-transform duration-300 ease-in-out"
                  loading="lazy"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Content Section */}
            <div
              className={`w-full md:w-1/2 transform transition-all duration-1000 ease-out flex flex-col items-center md:items-start text-center md:text-left space-y-4 px-4 lg:px-8 ${
                showAnimation[index] 
                  ? 'opacity-100 translate-x-0' 
                  : `opacity-0 ${index % 2 === 0 ? '-translate-x-32' : 'translate-x-32'}`
              }`}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-400 flex items-center">
                <span className="mr-4 text-4xl">{section.icon}</span>
                {section.title}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300">
                {section.description}
              </p>
            </div>
          </motion.div>
        ))}
      </main>
    </div>
  );
};

export default WhyChooseFoneShack;