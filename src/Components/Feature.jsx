import React, { useEffect, useState } from 'react';

const Feature = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  
  useEffect(() => {
    const options = {
      root: null,
      threshold: 0.5,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowAnimation(true);
        }
      });
    }, options);

    const elements = document.querySelectorAll('.animate-element');
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="flex flex-col lg:flex-row items-center overflow-x-hidden justify-between min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 px-4" // added padding for mobile
      id="feature-section"
    >
      {/* Image Section */}
      <div
        className={`w-full lg:w-1/2 transform ${
          showAnimation ? 'animate-slide-left' : ''
        } opacity-0 animate-element `}
      >
        <img
          src="/herosection1.png"
          alt="Feature"
          className=" w-full h-auto object-cover"
        />
      </div>

      {/* Content Section */}
      <div
        className={`w-full lg:w-1/2 transform ${
          showAnimation ? 'animate-slide-right' : ''
        } opacity-0 animate-element py-20 mb-10`} // removed margin-top to eliminate space
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-red-600 mb-4">
          Your Perfect Mobiles Awaits at FoneShack
        </h2>
        <p className="text-lg text-white mb-4">
          FoneShack, a subsidiary of Pix N'phones Ltd, is Dominica's leading mobile handset and accessories retailer.
        </p>
        <p className="text-lg text-white">
          Established in 2003, we've expanded our reach with two prime locations and have partnered with Digicel, the Caribbean's fastest-growing telecoms provider.
        </p>
      </div>
    </div>
  );
};

export default Feature;
