import { useState, useEffect } from "react";
const WebsiteLoader = () => {
  const [setIsLoading] = useState(true);
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(loadingTimer);
  }, );
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900">
      <div className="relative w-20 h-20 mb-6">
        <img
          src="/foneshack logo.png"
          alt="Logo"
          className="w-full h-full object-contain"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin w-20 h-20 border-t-4 border-b-20 border-red-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
export default WebsiteLoader;
