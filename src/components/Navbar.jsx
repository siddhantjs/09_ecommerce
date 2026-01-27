import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import { useTheme } from '../context/ThemeContext';
import ToggleTheme from '../components/ToggleTheme';
import SearchBar from "./SearchBar";

function Navbar({search, setSearch}) {
    const [open, setOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const { theme } = useTheme();

    return (
        <header className="sticky top-0 z-50">
            <nav
                className={`
                ${theme === "light" 
                  ? "bg-white/80 border-rose-100" 
                  : "bg-gray-900/80 border-gray-800"}
                flex flex-col
                shadow-lg backdrop-blur-xl
                border-b transition-all duration-300
            `}>
                {/* Top Bar */}
                <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
                    {/* Logo */}
                    <Link
                        to="/"
                        className={`
                        ${theme === "light"
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-600" 
                          : "text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400"}
                        text-lg md:text-2xl font-bold tracking-tight
                        hover:scale-105 transition-transform duration-300
                        drop-shadow-sm
                    `}>
                        ShopEase
                    </Link>

                    {/* Desktop Search Bar */}
                    <div className="hidden md:block flex-1 max-w-xl mx-8">
                        <SearchBar search={search} setSearch={setSearch}/>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center gap-6 font-medium">
                        <NavItem theme={theme} to="/products" label="Products" />
                        <NavItem theme={theme} to="/cart" label="Cart" icon={<ShoppingCart size={18} />} />
                        <ToggleTheme />
                    </ul>

                    {/* Mobile Actions */}
                    <div className="flex md:hidden items-center gap-3">
                        {/* Search Toggle Button */}
                        <button
                            onClick={() => setSearchOpen(!searchOpen)}
                            className={`transition-colors ${
                              theme === "light" ? "text-gray-700" : "text-gray-300"
                            }`}
                        >
                            <Search size={22} />
                        </button>

                        {/* Cart Icon */}
                        <Link
                            to="/cart"
                            className={`transition-colors ${
                              theme === "light" ? "text-gray-700" : "text-gray-300"
                            }`}
                        >
                            <ShoppingCart size={22} />
                        </Link>

                        {/* Menu Toggle Button */}
                        <button
                            onClick={() => setOpen(!open)}
                            className={`transition-colors ${
                              theme === "light" ? "text-gray-700" : "text-gray-300"
                            }`}
                        >
                            {open ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Search Bar */}
                {searchOpen && (
                    <div className={`
                        md:hidden px-4 pb-3
                        animate-slideDown
                    `}>
                        <SearchBar search={search} setSearch={setSearch}/>
                    </div>
                )}
            </nav>

            {/* Mobile Menu */}
            {open && ( 
                <div
                    className={`
                    md:hidden shadow-xl backdrop-blur-xl
                    ${theme === "light" 
                      ? "bg-white/90 border-rose-100" 
                      : "bg-gray-900/90 border-gray-800"}
                    border-b transition-all duration-300
                    animate-slideDown
                `}>
                    <ul className="flex flex-col items-center gap-4 py-6">
                        <NavItem 
                            theme={theme} 
                            to="/products" 
                            label="Products" 
                            onClick={() => setOpen(!open)} 
                        />
                        <NavItem 
                            theme={theme} 
                            to="/cart" 
                            label="Cart" 
                            onClick={() => setOpen(!open)} 
                        />
                        <div className="pt-2">
                            <ToggleTheme />
                        </div>
                    </ul>
                </div>
            )}
        </header>
    );
}

export default Navbar;



/* ---------------- Sub Components ---------------- */

function NavItem({ theme, to, label, icon, onClick }) {
    return (
        <li>
            <Link
                to={to}
                onClick={onClick}
                className={`
                ${theme === "light"
                  ? "text-gray-700 hover:text-rose-600" 
                  : "text-gray-300 hover:text-amber-400"}
                relative flex items-center gap-2
                transition-all duration-300
                hover:scale-110
                font-medium
                group
                `}>
                {icon}
                {label}
                <span className={`
                  absolute -bottom-1 left-0 w-0 h-0.5 
                  ${theme === "light" ? "bg-rose-600" : "bg-amber-400"}
                  group-hover:w-full transition-all duration-300
                `}></span>
            </Link>
        </li>
    );
}