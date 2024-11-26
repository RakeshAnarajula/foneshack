import React from 'react';
import { Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="max-w-full mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Logo Section - Left */}
          <div className="flex flex-col items-center sm:items-start pt-10 sm:pt-16">
            <img
              src="/foneshack logo.png"
              alt="FoneShack"
              className="h-20 w-auto pl-10 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
          </div>

          {/* Roseau Office - Middle */}
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

          {/* Portsmouth Office - Right */}
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

        {/* Copyright */}
        <div className="text-center mb-8">
          <p className="text-white">© 2024 FoneShack. All Rights Reserved.</p>
        </div>

        {/* Social Media Icons */}
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
          <a href="#" className="transform hover:scale-110 transition-transform duration-200">
            <div className="bg-blue-400 p-2 rounded-full shadow-lg hover:shadow-xl">
              <Twitter className="w-5 h-5 text-white" />
            </div>
          </a>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-gray-600 pt-6">
          <div className="flex justify-center space-x-4 text-sm text-white">
            <a href="/privacy" className="hover:text-blue-300 transition-colors duration-200">Privacy Policy</a>
            <span>|</span>
            <a href="/terms" className="hover:text-blue-300 transition-colors duration-200">Terms of Service</a>
            <span>|</span>
            <a href="/contact" className="hover:text-blue-300 transition-colors duration-200">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
