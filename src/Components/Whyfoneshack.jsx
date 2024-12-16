import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
const WhyChooseFoneShack = () => {
  const [showAnimation, setShowAnimation] = useState([]);

  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const index = parseInt(entry.target.getAttribute("data-index"));
        if (entry.isIntersecting) {
          setShowAnimation((prev) => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
        }
      });
    }, options);

    const elements = document.querySelectorAll(".animate-element");
    elements.forEach((element) => {
      const index = parseInt(element.getAttribute("data-index"));
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
        "All our products are rigorously tested for quality and reliability. Every device we sell is certified and backed by our quality guarantee.",
      extraContent:
        "We partner with top brands to provide with genuine devices, offering warrantie and customer support that you can trust.",
      imgSrc: "/trusted.jpg",
    },
    {
      title: "Expertise",
      description:
        "With over 20 years in the mobile industry , we offer unmatched expertise and insights into the latest technologies.",
      extraContent:
        "Our technical team is constantly trained on new innovations to guide you in making informed purchase decisions.",
      imgSrc: "/expertise.jpg",
    },
    {
      title: "Dedicated Team",
      description:
        "Our team commited to ensuring customer satisfaction with every interaction. knowledgeable, and professional service.",
      extraContent:
        "Whether you need technical support or recommendations, our team is here to help every step of the way.",
      imgSrc: "/dedicated team.jpg",
    },
    {
      title: "One-Stop Solution",
      description:
        "From mobile phone to seamless payment solutions, FoneShack has everything you need under one roof.",
      extraContent:
        "Explore wide range of products, designed to meet your everyday tech needs, all in one convenient location.",
      imgSrc: "/one step solution.jpg",
    },
  ];

  return (
    <div className="bg-gray-900 text-white overflow-hidden relative p-6">
      {/* Title Section */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-purple-700 mb-10 text-center whitespace-nowrap">
        Why Choose Foneshack?
        <span className="block w-40 sm:w-80 h-1 bg-gradient-to-r from-yellow-900 to-purple-600 mt-1 animate-[underline_1s_ease-in-out] mx-auto"></span>
      </h2>

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
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
            data-index={index}
          >
            {/* Image Section with Border */}
            <motion.div
              className={`w-full md:w-1/2 transform transition-all duration-1000 ease-out ${
                showAnimation[index]
                  ? "opacity-100 translate-x-0"
                  : `opacity-0 ${
                      index % 2 === 0 ? "translate-x-32" : "-translate-x-32"
                    }`
              }`}
            >
              <motion.div
                className="overflow-hidden rounded-2xl border-4 border-gray-700 hover:border-red-500 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
              >
                <motion.img
                  src={section.imgSrc}
                  alt={section.title}
                  className="w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover transition-transform duration-300 ease-in-out"
                  loading="lazy"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Content Section */}
            <div
              className={`w-full md:w-1/2 transform transition-all duration-1000 ease-out flex flex-col items-center md:items-start text-center md:text-left space-y-4 px-4 lg:px-8 ${
                showAnimation[index]
                  ? "opacity-100 translate-x-0"
                  : `opacity-0 ${
                      index % 2 === 0 ? "-translate-x-32" : "translate-x-32"
                    }`
              }`}
            >
              <h2 className="text-xl sm:text-xl lg:text-2xl font-bold text-purple-400 text-center md:text-left">
                {section.title}
              </h2>
              <p className="text-start sm:text-base lg:text-lg text-gray-300">
                {section.description}
              </p>
              <p className="text-start sm:text-base lg:text-lg text-gray-300">
                {section.extraContent}
              </p>
            </div>
          </motion.div>
        ))}
      </main>
    </div>
  );
};

export default WhyChooseFoneShack;
