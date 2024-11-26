import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
const App = () => {
  const [selectedTitle, setSelectedTitle] = useState(null);
  const data = [
    {
      title: "Headset",
      sku: "RFHSBTST021",
      description: "MyBat Pro Mono Bluetooth Headset – Black",
      image: "/tableheadset.png",
      additionalItems: [
        { sku: "RFHSBTST021", description: "MyBat Pro Mono Bluetooth Headset – Black" },
        { sku: "RFHSBTST031", description: "MyBat Pro EZTALK Wireless MP-M97 Bluetooth 5.0 Business Headset with Noise Cancelling Microphone – Black" },
      ]
    },
    {
      title: "Chargers",
      sku: "RCGCARC04B",
      description: "MyBat Pro 2-Port Quick Power Delivery Car Charger",
      image: "/tablecharger.png",
      additionalItems: [
        { sku: "RCGCARC04B", description: "MyBat Pro 2-Port Quick Power Delivery Car Charger (30W) – Black" },
        { sku: "RCGCARC08B", description: "MyBat Pro 3-Port Quick Car Charge (Power Delivery & QC3.0)(62W) – Black" },
      ]
    },
    {
      title: "Powerbanks",
      sku: "RPBBAT011",
      description: "MyBat Pro 20000mAh Power Delivery Power Bank (20W) ",
      image: "/tablepower bank.png",
      additionalItems: [
        { sku: "RPBBAT011", description: "MyBat Pro 20000mAh Power Delivery Power Bank (20W) – Black" },
        { sku: "RPBBAT051", description: "MyBat Pro 5000mAh Magnetic Wireless Power Bank for iPhone 12 / 13 Series (20W Power Delivery" }
      ]
    },
    {
      title: "Cables",
      sku: "RCBCAMO011",
      description: "MyBat Pro USB-A to USB-C Zinc Alloy Cable – Black",
      image: "/tablecables.png",
      additionalItems: [
        { sku: "RCBCAMO011", description: "MyBat Pro USB-A to USB-C Zinc Alloy  Quick Charging Cable – Black" },
        { sku: "RCBCCMO011", description: "MyBat Pro USB-C to USB-C Zinc Alloy Quick Charging Cable – Black" }
      ]
    }
  ];

  const handleTitleClick = (index) => {
    setSelectedTitle(data[index]);
  };

  useEffect(() => {
    setSelectedTitle(data[0]);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        className="mb-8 text-center"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
          MyBat Pro <span className="text-blue-400">Accessories</span> Showcase
        </h1>
        <p className="text-gray-300 mt-2 text-lg md:text-xl">
          Explore Our Premium Tech Accessories
        </p>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row">
          {/* Left Column with Titles */}
          <div className="lg:w-1/4 p-4 bg-gray-200">
            <ul>
              {data.map((item, index) => (
                <motion.li
                  key={index}
                  onClick={() => handleTitleClick(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="cursor-pointer p-3 text-gray-700 hover:bg-gray-300 rounded-md transition-all duration-300 ease-in-out font-medium"
                >
                  {item.title}
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 p-4 bg-white flex flex-col justify-center items-center">
            {selectedTitle && (
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full text-center"
              >
                <h2 className="text-xl lg:text-2xl font-bold mb-4 text-gray-800">{selectedTitle.title}</h2>
                <div className="mb-4">
                  <p className="font-semibold text-gray-600">SKU: {selectedTitle.sku}</p>
                  <p className="text-lg lg:text-xl text-gray-700">{selectedTitle.description}</p>
                  
                  {selectedTitle.additionalItems && (
                    <div className="mt-4 overflow-y-auto max-h-64">
                      <h3 className="text-lg font-semibold mb-2 text-gray-800">Available {selectedTitle.title} Models:</h3>
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-2 text-gray-700">SKU</th>
                            <th className="border border-gray-300 p-2 text-gray-700">Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {selectedTitle.additionalItems.map((item, index) => (
                            <motion.tr 
                              key={index} 
                              whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                              className="hover:bg-gray-200 transition-colors duration-200"
                            >
                              <td className="border border-gray-300 p-2 text-gray-700">{item.sku}</td>
                              <td className="border border-gray-300 p-2 text-gray-700">{item.description}</td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </div>
          <div className="lg:w-1/4 p-4 bg-gray-200 flex justify-center items-center">
            {selectedTitle && (
              <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={selectedTitle.image}
                alt={selectedTitle.title}
                className="w-full max-w-[250px] lg:max-w-[300px] h-auto object-cover rounded-md shadow-lg"
              />
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default App;