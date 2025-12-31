import {useTheme} from '../context/ThemeContext';

export default function ThemeToggle() {
    const {theme,toggleTheme} = useTheme();
    return (
        <button
            onClick={toggleTheme}
            className="hover:scale-105
            px-3 py-1 rounded-full
            shadow-md transition-all    
        ">
            {theme === "light" ? "🌑" : "🌞"}
        </button>
    );
}
