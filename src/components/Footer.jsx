import React from "react";
import { useTheme } from "../context/ThemeContext";

function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`
        w-full
        ${theme === "light" ? "bg-[#FFCDC9] text-gray-900" : "bg-gray-900 text-[#FFCDC9] border-[#FFCDC9]"}
        shadow-[0_-4px_10px_rgba(0,0,0,0.08)]
      `}
    >
      <div className="max-w-7xl mx-auto px-4 py-6 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} YourStore. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
