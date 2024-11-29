import React from 'react';
import { Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="max-w-full mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center sm:items-start pt-10 sm:pt-16">
            <div className="flex items-center space-x-4">
              <div>
                <img
                  src="/digicel.png"
                  alt="Digicel"
                  className="h-20 w-auto mb-4 cursor-pointer"
                />
                <p className="text-blue-400 text-md font-medium mt-2">Digicel Authorized Dealer</p>
              </div>
              <div>
                <img
                  src="/foneshack logo.png"
                  alt="FoneShack"
                  className="h-20 w-auto mb-4 cursor-pointer"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-start space-y-3">
            <h3 className="font-semibold text-white text-lg mb-2">Roseau Office</h3>
            <div className="flex items-center space-x-2 group">
              <Phone className="w-4 h-4 text-white group-hover:text-blue-300" />
              <a href="tel:7674403565" className="text-white group-hover:text-blue-300">767 440 3565</a>
            </div>
            <div className="flex items-center space-x-2 group">
              <Phone className="w-4 h-4 text-white group-hover:text-blue-300" />
              <a href="tel:7676122316" className="text-white group-hover:text-blue-300">767 612 2316</a>
            </div>
            <div className="flex items-center space-x-2 group">
              <Mail className="w-4 h-4 text-white group-hover:text-blue-300" />
              <a href="mailto:roseau@thefoneshack.com" className="text-white group-hover:text-blue-300">roseau@thefoneshack.com</a>
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-start space-y-3">
            <h3 className="font-semibold text-white text-lg mb-2">Portsmouth Office</h3>
            <div className="flex items-center space-x-2 group">
              <Phone className="w-4 h-4 text-white group-hover:text-blue-300" />
              <a href="tel:7674456970" className="text-white group-hover:text-blue-300">767 445 6970</a>
            </div>
            <div className="flex items-center space-x-2 group">
              <Phone className="w-4 h-4 text-white group-hover:text-blue-300" />
              <a href="tel:7676128530" className="text-white group-hover:text-blue-300">767 612 8530</a>
            </div>
            <div className="flex items-center space-x-2 group">
              <Mail className="w-4 h-4 text-white group-hover:text-blue-300" />
              <a href="mailto:portsmouth@thefoneshack.com" className="text-white group-hover:text-blue-300">portsmouth@thefoneshack.com</a>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="transform hover:scale-110 transition-transform duration-200">
            <div className="bg-blue-600 p-2 rounded-full shadow-lg hover:shadow-xl">
              <Facebook className="w-5 h-5 text-white" />
            </div>
          </a>
          <a href="#" className="transform hover:scale-110 transition-transform duration-200">
            <div className="bg-pink-600 p-2 rounded-full shadow-lg hover:shadow-xl">
              <Instagram className="w-5 h-5 text-white" />
            </div>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-200">
            <div className="bg-black p-2 rounded-full shadow-lg hover:shadow-xl">
              <Twitter className="w-5 h-5 text-white" />
            </div>
          </a>
        </div>
      
        <div className="border-t border-gray-600 pt-6">
          
        <div className="text-center mb-2">
          <p className="text-white">© 2024 FoneShack. All Rights Reserved.</p>
        </div>
          <div className="flex justify-center space-x-3 text-sm text-white">
            <a href="/privacy" className="hover:text-blue-300 transition-colors duration-200">Privacy Policy</a>
            <span>|</span>
            <a href="/terms" className="hover:text-blue-300 transition-colors duration-200">Terms of Service</a>
            <span>|</span>
            <a href="/contact" className="hover:text-blue-300 transition-colors duration-200">Contact Us</a>
          </div>
        </div>

        {/* Designed and Developed By */}
        <div className="text-center mt-2">
          <p className="text-white text-md">
            Designed and Developed by{' '}
            <a href="https://www.virtutechsolutions.com/" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">
              Virtue Tech Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
