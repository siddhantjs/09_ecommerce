import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`min-h-[calc(100vh-160px)] flex items-center justify-center px-6
        
      `}
    >
      <div className="max-w-5xl text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900">
          Shop Smarter.  
          <span className="block text-gray-900 mt-2">
            Experience Modern E-Commerce
          </span>
        </h1>

        {/* Sub text */}
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-400 mb-10">
          A beautifully crafted shopping experience built with
          <span className="font-semibold"> React, Tailwind, Zustand </span>
          and modern API architecture.
        </p>

        {/* Quotes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 rounded-xl bg-white/40 backdrop-blur-lg shadow-lg">
            <p className="italic text-gray-800">
              “Great design is not just what it looks like,  
              it’s how it works.”
            </p>
            <span className="block mt-3 text-sm text-gray-600 dark:text-gray-400">
              — Steve Jobs
            </span>
          </div>

          <div className="p-6 rounded-xl bg-white/40 backdrop-blur-lg shadow-lg">
            <p className="italic text-gray-800">
              “Simplicity is the soul of efficiency.”
            </p>
            <span className="block mt-3 text-sm text-gray-600">
              — Austin Freeman
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="products"
            className="px-8 py-3 rounded-xl bg-black text-white text-sm font-medium hover:bg-gray-800 transition"
          >
            Explore Products
          </Link>

          <Link
            to="cart"
            className="px-8 py-3 rounded-xl border border-gray-700 text-sm font-medium text-gray-900 hover:bg-gray-900 hover:text-white transition"
          >
            View Cart
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
