import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { useTheme } from '../context/ThemeContext'
import ToggleTheme from '../components/ToggleTheme'
import SearchBar from "./SearchBar";

function Navbar() {
    const [open, setOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="sticky top-0 z-50">
            <nav
                className={` ${theme === "light" ? "bg-[#FFCDC9] " : "bg-gray-900"}
                flex items-center justify-between px-6 py-4 shadow-lg backdrop-blur-md 
                border-b border-white/20 transition-all duration-300
            `}>
                {/* Logo */}
                <Link
                    to="/"
                    className={`${theme==="light"? "text-gray-900":"text-[#FFCDC9]"} text-xl
                    font-bold tracking-wide hover:scale-105 transition-all duration-500`}>
                    ShopEase
                </Link>

                {/* search bar */}
                <SearchBar />

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-6 font-medium">
                    <NavItem theme={theme} to="/products" label="Products" />
                    <NavItem theme={theme} to="/cart" label="Cart" icon={<ShoppingCart size={18} />} />
                    <ToggleTheme />
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden transition text-white"
                >
                    {open ? <X size={26} /> : <Menu size={26} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            {open && ( 
                <div
                    className="md:hidden shadow-xl
                    backdrop-blur-md bg-white/30
                    border-b border-white/20">
                    <ul className="flex flex-col items-center gap-4 py-4">
                        <NavItem theme={theme} to="products" label="Products" onClick={() => setOpen(!open)} />
                        <NavItem theme={theme} to="cart" label="Cart" onClick={() => setOpen(!open)} />
                        <ToggleTheme />
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
                ${theme==="light"? "text-gray-900":"text-[#FFCDC9]"}
                relative flex items-center gap-1 transition-all hover:scale-110 duration-500
                `}>
                {icon}
                {label}
            </Link>
        </li>
    );
}

