import { useState,useEffect,useContext, createContext } from "react";

// 1. creating context
const themeContext = createContext();

// 2. creating theme provider
const ThemeProvider = ({children})=>{

    // creating state and storing in localstorage for persistancy.
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
    useEffect(() => localStorage.setItem('theme', theme), [theme]);

    // function to update theme on click on buttons
    const toggleTheme = ()=>{
        setTheme((prev)=>prev==="light"?"dark":"light")
    }

    return <themeContext.Provider value={{theme, toggleTheme}}>
                {children}
           </themeContext.Provider>
}

// custom theme hook
const useTheme = ()=> useContext(themeContext);
export {
    useTheme,
    ThemeProvider
}