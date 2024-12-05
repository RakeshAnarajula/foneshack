import React, { useState } from "react";
import PropTypes from "prop-types";
import { Smartphone, Headphones, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const Card = ({ image, title, description, icon: IconComponent, path, isExternal }) => {
  const [hovered, setHovered] = useState(false);
  return (
    isExternal ? (
      // For external links, use an <a> tag
      <a
        href={path}
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center items-center p-6"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300">
          {/* Image Container */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${hovered ? "blur-md scale-105" : "blur-0 scale-100"}`}
          >
            <img
              className="w-full h-full object-cover transition-all duration-300"
              src={image}
              alt={title}
            />
            {/* Image Title Overlay */}
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/70 to-transparent p-4">
              <div className="flex items-center gap-2 text-white">
                <IconComponent className="w-6 h-6" />
                <span className="text-lg font-semibold">{title}</span>
              </div>
            </div>
          </div>
          {/* Content Overlay */}
          <div
            className={`absolute inset-0 backdrop-blur-sm bg-black/40 text-white p-4 sm:p-6 flex items-center justify-center transition-all duration-500 ${hovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
          >
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <IconComponent className="w-8 h-8" />
                <h4 className="text-sm sm:text-xl font-semibold">{title}</h4>
              </div>
              <p className="text-xs sm:text-base mt-2">{description}</p>
            </div>
          </div>
        </div>
      </a>
    ) : (
      // For internal links, use Link component from react-router-dom
      <Link
        to={path}
        className="flex justify-center items-center p-6"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300">
          {/* Image Container */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${hovered ? "blur-md scale-105" : "blur-0 scale-100"}`}
          >
            <img
              className="w-full h-full object-cover transition-all duration-300"
              src={image}
              alt={title}
            />
            {/* Image Title Overlay */}
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/70 to-transparent p-4">
              <div className="flex items-center gap-2 text-white">
                <IconComponent className="w-6 h-6" />
                <span className="text-lg font-semibold">{title}</span>
              </div>
            </div>
          </div>
          {/* Content Overlay */}
          <div
            className={`absolute inset-0 backdrop-blur-sm bg-black/40 text-white p-4 sm:p-6 flex items-center justify-center transition-all duration-500 ${hovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
          >
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <IconComponent className="w-8 h-8" />
                <h4 className="text-sm sm:text-xl font-semibold">{title}</h4>
              </div>
              <p className="text-xs sm:text-base mt-2">{description}</p>
            </div>
          </div>
        </div>
      </Link>
    )
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  path: PropTypes.string.isRequired,
  isExternal: PropTypes.bool, // Optional, defaults to false
};

Card.defaultProps = {
  isExternal: false, // Default to internal link
};

const App = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-900">
      {/* Title Section */}
      <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-6">
        Our Services
        <span className="block w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 mt-1 animate-[underline_1s_ease-in-out]"></span>
      </h2>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl">
        <Card
          image="/mobilephone.png"
          title="Mobile Phones"
          description="Explore our diverse range of mobile handsets from top brands, ensuring you always stay connected."
          icon={Smartphone}
          path="/mobilephones"
        />
        <Card
          image="/accessories.jpg"
          title="Accessories"
          description="Elevate your mobile experience with our curated selection of phone accessories, from cases to headphones and more."
          icon={Headphones}
          path="/accessories"
        />
        <Card
          image="/surepay vendor.jpg"
          title="SurePay Dominica Vendor"
          description="Head to SurePay Dominica Fhoneshack located at 56 King George V St, Roseau, Dominica."
          icon={CreditCard}
          path="https://surepaybills.com/home-dominica/" // External link
          isExternal={true} // Mark this card as external
        />
      </div>
    </div>
  );
};

export default App;
