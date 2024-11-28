import React, { useState } from 'react';
import { motion } from 'framer-motion';
const SamsungTable = () => {
  const [hoveredRowIndex, setHoveredRowIndex] = useState(null);
  const products = [
    {
      sku: 'EP-DG950CBE',
      description: 'Samsung Type-C (EP-DG950CBE) - Black',
      altSku: 'DG950-BLK',
      image: '/samsungtable1.jpeg',
    },
    {
      sku: 'EP-DN930CWE',
      description: 'Samsung Type-C (EP-DN930CWE) - White',
      altSku: 'DN930-WHT',
      image: '/samsungtable2.jpeg',
    },
    {
      sku: 'EP-DN975BBEGWW',
      description: 'Samsung Type-C to Type-C - BLACK - 1M (Fast Charging) Max 100W',
      altSku: 'DN975-FC100',
      image: '/samsungtable3.jpeg',
    },
    {
      sku: 'EP-L1100WBEGWW',
      description: 'Samsung Dual USB Port Fast (15W) w/ COMBO Cable (Retail/Black)',
      altSku: 'L1100-DUAL',
      image: '/samsungtable4.jpeg',
    },
    {
      sku: 'EP-PN920TBEGUS',
      description: 'Samsung Fast Wireless Charging Pad (EP-PN920TBEGUS)',
      altSku: 'PN920-WPAD',
      image: '/samsungtable5.jpeg',
    },
    {
      sku: 'S-DATA-MICRO-60INCH',
      description: 'Samsung - 60 Inch WHITE (ECB-DU4EWE)',
      altSku: 'ECB-DU4EWE',
      image: '/samsungtable6.jpeg',
    },
    {
      sku: 'S-ETAOU61JBE',
      description: 'Samsung - 1 Amp (Black) - ETAOU61JBE',
      altSku: 'ETAOU61-BLK',
      image: '/samsungtable7.jpeg',
    },
    {
      sku: 'EP-XX123456',
      description: 'Samsung USB-C Charging Cable (EP-XX123456)',
      altSku: 'XX123-USB-C',
      image: '/samsungtable8.jpeg',
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
          src="https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg"
          alt="Samsung Logo"
          className="w-20 h-8 sm:w-40 sm:h-12 md:w-40 md:h-14 lg:w-48 lg:h-16"
          initial={{ scale: 0.8, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
      </motion.div>
      <div className="bg-gray-100 rounded-lg shadow-lg ">
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
                <td className="px-1 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm font-medium text-gray-900">
                  {product.sku}
                </td>
                <td className="px-1 py-2 sm:px-6 sm:py-4 text-xs sm:text-sm text-gray-500">
                  {product.description}
                </td>
                <td className="px-1 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-500">
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

export default SamsungTable;
