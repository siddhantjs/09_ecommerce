import React from "react";
import { useTheme } from "../context/ThemeContext";
import { Heart } from "lucide-react";

function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`
        w-full
        ${theme === "light" 
          ? "bg-white border-gray-200 text-gray-700" 
          : "bg-gray-900 border-gray-800 text-gray-400"}
        border-t
        shadow-[0_-4px_20px_rgba(0,0,0,0.08)]
        transition-colors duration-300
      `}
    >
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center space-y-3">
          <p className={`text-sm font-medium ${
            theme === "light" ? "text-gray-600" : "text-gray-400"
          }`}>
            © {new Date().getFullYear()} ShopEase. All rights reserved.
          </p>
          <p className={`text-xs flex items-center justify-center gap-2 ${
            theme === "light" ? "text-gray-500" : "text-gray-500"
          }`}>
            Made with <Heart size={14} className={theme === "light" ? "text-rose-500 fill-rose-500" : "text-amber-500 fill-amber-500"} /> for shoppers
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;