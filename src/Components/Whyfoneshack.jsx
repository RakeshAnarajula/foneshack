import React, { useEffect, useState } from 'react';
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
    },
    {
      title: "Expertise",
      description:
        "With over 20 years of experience in mobile retail and services, we are proud to lead the industry with innovative solutions and unmatched knowledge.",
      imgSrc: "/expertise.jpg",
    },
    {
      title: "Dedicated Team",
      description:
        "Our team of 15 highly trained professionals is passionate about delivering exceptional service tailored to your needs.",
      imgSrc: "/dedicated team.jpg",
    },
    {
      title: "One Stop Solution",
      description:
        "From the latest devices to seamless payment solutions, FoneShack offers everything you need in one place.",
      imgSrc: "/one step solution.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      {/* Title with fade-in animation */}
      <h1 
        className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-red-600 py-8 opacity-0 animate-fade-in"
      >
        Why Choose FoneShack?
      </h1>

      {/* Feature Sections */}
      <main className="space-y-16 px-4 md:px-8 pb-16">
        {sections.map((section, index) => (
          <div
            key={section.title}
            className={`flex flex-col md:flex-row items-center space-y-6 md:space-y-0 animate-element ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
            data-index={index}
          >
            {/* Image Section */}
            <div
              className={`w-full md:w-1/2 transform transition-all duration-1000 ease-out ${
                showAnimation[index] 
                  ? 'opacity-100 translate-x-0' 
                  : `opacity-0 ${index % 2 === 0 ? 'translate-x-32' : '-translate-x-32'}`
              }`}
            >
              <img
                src={section.imgSrc}
                alt={section.title}
                className="w-full h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>

            {/* Content Section */}
            <div
              className={`w-full md:w-1/2 transform transition-all duration-1000 ease-out flex flex-col items-center md:items-start text-center md:text-left space-y-4 px-4 lg:px-8 ${
                showAnimation[index] 
                  ? 'opacity-100 translate-x-0' 
                  : `opacity-0 ${index % 2 === 0 ? '-translate-x-32' : 'translate-x-32'}`
              }`}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-400">
                {section.title}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300">
                {section.description}
              </p>
            </div>
          </div>
        ))}
      </main>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default WhyChooseFoneShack;