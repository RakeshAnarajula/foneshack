import React, { useState } from 'react';
import { motion } from 'framer-motion';
const AppleProductsTable = () => {
  const [hoveredRowIndex, setHoveredRowIndex] = useState(null);

  const products = [
    {
      sku: 'A1472',
      description: 'Apple 45W MagSafe Power Adapter for MacBook Air',
      altSku: 'MC747E/A',
      image: '/appletable1.png',
    },
    {
      sku: 'MD463BE/A',
      description: 'Apple Thunderbolt Gigabit Ethernet Adapter',
      altSku: 'MD810E/A',
      image: '/appletable2.jpg',
    },
    {
      sku: 'MD818ZM/A',
      description: 'Apple Lightning (1M) - MD818ZM/A',
      altSku: 'MMTN2AM/A',
      image: '/appletable3.jpg',
    },
    {
      sku: 'MUF72AM/A',
      description: 'Apple USB-C to USB-C (1m)',
      altSku: '',
      image: '/appletable4.jpg',
    },
    {
      sku: 'MMTN2ZM/A',
      description: 'Apple AirPods with Charging Case',
      altSku: 'MMTN2AM/B',
      image: '/appletable5.jpg',
    },
    {
      sku: 'MGN63LL/A',
      description: 'Apple MacBook Air (M1, 2020) - Space Gray',
      altSku: 'MGND3LL/A',
      image: '/appletable6.jpg',
    },
    {
      sku: 'MK2E3LL/A',
      description: 'Apple Magic Keyboard with Touch ID and Numeric Keypad',
      altSku: '',
      image: '/appletable7.jpg',
    },
    {
      sku: 'MLWK3LL/A',
      description: 'Apple Magic Mouse 2 - Silver',
      altSku: 'MLA02LL/A',
      image: '/appletable8.jpg',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
      <motion.div
        className="flex items-center justify-center gap-3 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.img
          src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
          alt="Apple Logo"
          className="w-8 h-8 sm:w-10 sm:h-10"
          initial={{ scale: 0.8, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
        <motion.h1
          className="text-xl sm:text-3xl font-bold text-gray-800"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Apple Products
        </motion.h1>
      </motion.div>

      <div className="bg-gray-100 rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-2 sm:px-6 sm:py-4 text-left text-xs sm:text-sm font-semibold">
                SKU
              </th>
              <th className="px-4 py-2 sm:px-6 sm:py-4 text-left text-xs sm:text-sm font-semibold">
                Description
              </th>
              <th className="px-4 py-2 sm:px-6 sm:py-4 text-left text-xs sm:text-sm font-semibold">
                Alternative SKU
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {products.map((product, index) => (
              <motion.tr
                key={product.sku}
                onMouseEnter={() => setHoveredRowIndex(index)}
                onMouseLeave={() => setHoveredRowIndex(null)}
                onClick={() => setHoveredRowIndex(index)} // For mobile: click to view image
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="hover:bg-gray-50 transition-colors relative cursor-pointer"
              >
                <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">
                  {product.sku}
                </td>
                <td className="px-4 py-2 sm:px-6 sm:py-4 text-xs sm:text-sm text-gray-500">
                  {product.description}
                </td>
                <td className="px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">
                  {product.altSku}
                </td>
                {hoveredRowIndex === index && (
                  <motion.td
                    colSpan={3}
                    className="absolute left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src={product.image}
                      alt={product.description}
                      className="object-cover rounded shadow-md"
                      style={{
                        width: '150px',
                        height: '150px',
                      }}
                    />
                  </motion.td>
                )}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppleProductsTable;
