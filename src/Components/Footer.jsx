import { Mail, Phone, Instagram, Facebook } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-8">
          <img
            src="/digicel.png"
            alt="Digicel"
            className="h-20 w-auto cursor-pointer"
          />
          <p className="text-blue-400 text-md font-medium">
            Digicel Authorized Dealer
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center lg:items-start">
            <img
              src="/foneshack logo.png"
              alt="FoneShack"
              className="h-20 w-auto mb-4 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
          </div>
          <div className="flex flex-col items-center lg:items-start space-y-3 text-center lg:text-left">
            <h3 className="font-semibold text-white text-md sm:text-lg mb-2">
              Roseau Office
            </h3>
            <div className="flex items-center space-x-2 group">
              <Phone className="w-4 h-4 text-white group-hover:text-blue-300" />
              <a
                href="tel:7674403565"
                className="text-white group-hover:text-blue-300"
              >
                767 440 3565
              </a>
            </div>
            <div className="flex items-center space-x-2 group">
              <Phone className="w-4 h-4 text-white group-hover:text-blue-300" />
              <a
                href="tel:7676122316"
                className="text-white group-hover:text-blue-300"
              >
                767 612 2316
              </a>
            </div>
            <div className="flex items-center space-x-2 group">
              <Mail className="w-4 h-4 text-white group-hover:text-blue-300" />
              <a
                href="mailto:roseau@thefoneshack.com"
                className="text-white group-hover:text-blue-300"
              >
                roseau@thefoneshack.com
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start space-y-3 text-center lg:text-left">
            <h3 className="font-semibold text-white text-md sm:text-lg mb-2">
              Portsmouth Office
            </h3>
            <div className="flex items-center space-x-2 group">
              <Phone className="w-4 h-4 text-white group-hover:text-blue-300" />
              <a
                href="tel:7674456970"
                className="text-white group-hover:text-blue-300"
              >
                767 445 6970
              </a>
            </div>
            <div className="flex items-center space-x-2 group">
              <Phone className="w-4 h-4 text-white group-hover:text-blue-300" />
              <a
                href="tel:7676128530"
                className="text-white group-hover:text-blue-300"
              >
                767 612 8530
              </a>
            </div>
            <div className="flex items-center space-x-2 group">
              <Mail className="w-4 h-4 text-white group-hover:text-blue-300" />
              <a
                href="mailto:portsmouth@thefoneshack.com"
                className="text-white group-hover:text-blue-300"
              >
                portsmouth@thefoneshack.com
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-4 sm:space-x-6 mb-8">
          <a
            href="https://www.facebook.com/FoneShack/"
            className="transform hover:scale-110 transition-transform duration-200"
          >
            <div className="bg-blue-600 p-2 rounded-full shadow-lg hover:shadow-xl">
              <Facebook className="w-5 h-5 text-white" />
            </div>
          </a>
          <a
            href="https://www.instagram.com/foneshack.dm/"
            className="transform hover:scale-110 transition-transform duration-200"
          >
            <div className="bg-pink-600 p-2 rounded-full shadow-lg hover:shadow-xl">
              <Instagram className="w-5 h-5 text-white" />
            </div>
          </a>
          <a
            href="https://x.com/foneshackdom"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform duration-200"
          >
            <div className="bg-black p-2 rounded-full shadow-lg hover:shadow-xl">
              <FaXTwitter className="w-5 h-5 text-white" />
            </div>
          </a>
        </div>
        <div className="border-t border-gray-600 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-white text-sm mb-2 sm:mb-0">
              © 2024 FoneShack. All Rights Reserved.
            </div>
            <div className="flex flex-wrap justify-center space-x-3 text-xs sm:text-sm text-white mb-2 sm:mb-0">
              <a
                href="/privacypolicy"
                className="hover:text-blue-300 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <span>|</span>
              <a
                href="/termsconditions"
                className="hover:text-blue-300 transition-colors duration-200"
              >
                Terms of Service
              </a>
              <span>|</span>
              <a
                href="/contact"
                className="hover:text-blue-300 transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
            <div className="text-white text-xs sm:text-sm">
              Designed and Developed by{" "}
              <a
                href="https://www.virtutechsolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:underline"
              >
                Virtu Tech Solutions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;