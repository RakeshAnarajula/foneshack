import React from "react";
const Marquee = () => {
  const brands = [
    "/digicel.png",
    "/iluv-logo.png",
    "/logo-alcatel.png",
    "/logo-apple.png",
    "/logo-blu.png",
    "/logo-cat.png",
    "/logo-pure-apear.png",
    "/logo-samsung.png",
    "/logo-sandisk.png",
    "/logp-kingstone.png",
    "/nokia.png",
  ];
  return (
    <div className="overflow-hidden w-full bg-gray-100 py-6">
      <h2 className="text-center text-2xl sm:text-4xl font-bold mb-4 animate-fade-in text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        Top Brands We Carry
      </h2>

      <div
        className="flex whitespace-nowrap animate-marquee"
        style={{
          animation: "marquee 20s linear infinite",
          width: "200%", // Ensures the duplicated images fit into the scroll
        }}
      >
        {brands.concat(brands).map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Brand ${index + 1}`}
            className="w-24 h-12 sm:w-36 sm:h-24 mx-2 sm:mx-4 object-contain"
          />
        ))}
      </div>
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeIn 1s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};
export default Marquee;
