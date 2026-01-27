import React from 'react';
import { Search, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function SearchBar({search, setSearch}) {
  const { theme } = useTheme();
  
  return (
    <div className='w-full relative'>
        <Search 
          className={`absolute left-3 top-1/2 -translate-y-1/2 ${
            theme === "light" ? "text-gray-400" : "text-gray-500"
          }`} 
          size={18} 
        />
        <input 
            type="text" 
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            className={`
              w-full py-2.5 pl-10 pr-10 rounded-xl text-sm md:text-base
              ${theme === "light"
                ? "bg-gray-100 text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-rose-300"
                : "bg-gray-800 text-gray-100 placeholder-gray-400 focus:bg-gray-750 focus:ring-2 focus:ring-amber-500"}
              outline-none
              transition-all duration-300
              border
              ${theme === "light" ? "border-gray-200" : "border-gray-700"}
            `}
            placeholder='Search products...'
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className={`
              absolute right-3 top-1/2 -translate-y-1/2
              ${theme === "light" ? "text-gray-400 hover:text-gray-600" : "text-gray-500 hover:text-gray-300"}
              transition-colors
            `}
          >
            <X size={18} />
          </button>
        )}
    </div>
  );
}

export default SearchBar;