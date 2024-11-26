import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const navItems = [
  { name: 'MOBILE PHONE', path: '/mobilephones' },
  { name: 'ACCESSORIES', path: '/accessories' },
  { name: 'CONTACT', path: '/contact' },
  { 
    name: 'SUREPAY VENDOR', 
    path: 'https://surepaybills.com/home-dominica/', 
    external: true, 
    highlight: true 
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showArrow, setShowArrow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const menuRef = useRef(null); // Reference for the menu

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.pageYOffset > 400;
      if (showArrow !== show) {
        setShowArrow(show);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showArrow]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleNavClick = (path, external) => {
    setIsOpen(false);
    if (external) {
      window.open(path, '_blank', 'noopener,noreferrer');
    } else {
      navigate(path);
    }
  };

  const handleArrowClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <motion.nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 cursor-pointer" onClick={handleLogoClick}>
              <img
                src="/foneshack logo.png"
                alt="Logo"
                className="h-12 w-auto"
              />
            </div>
            <div className="hidden lg:block">
              <div className="ml-10 flex items-center space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.path, item.external)}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition duration-300
                      ${location.pathname === item.path && !item.external
                        ? 'bg-red-100 text-red-500 shadow-lg outline outline-2 outline-red-500' 
                        : 'text-red-500 hover:bg-red-100 hover:text-red-700 hover:shadow-lg hover:outline hover:outline-2 hover:outline-red-500'
                      }
                      ${item.highlight ? 'outline outline-2 outline-red-500' : ''}`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="lg:hidden">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="inline-flex items-center p-2 text-red-500"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className="px-2 pt-2 pb-3 space-y-1 sm:px-3" 
                ref={menuRef} // Attach the ref to the menu
              >
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.path, item.external)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition duration-300
                      ${location.pathname === item.path && !item.external
                        ? 'bg-red-100 text-red-500 shadow-lg outline outline-2 outline-red-500'
                        : 'text-red-500 hover:bg-red-100 hover:text-red-700 hover:shadow-lg hover:outline hover:outline-2 hover:outline-red-500'
                      }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <AnimatePresence>
        {showArrow && (
          <motion.button
            onClick={handleArrowClick}
            className="fixed bottom-4 right-4 p-3 bg-white text-red-500 rounded-full shadow-lg z-50 hover:bg-red-50 transition-colors duration-300"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            aria-label="Go to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
