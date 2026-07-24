import ThemeContext from "./ThemeContext";
import React, {useContext, useEffect, useState} from 'react'

export default function ThemeContextProvider({ children }) {
    // getting system theme from browser
    const [theme, setTheme] = useState(() => {
        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    });
    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark"); // add dark class to html if theme === dark
    }, [theme]);

    return (
    <ThemeContext.Provider
    value={{
        theme,
        setTheme,
        toggleTheme
    }}>
        {children}
    </ThemeContext.Provider>
  )
}

