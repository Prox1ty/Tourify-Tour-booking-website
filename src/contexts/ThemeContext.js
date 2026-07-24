import { createContext, useContext } from "react";

const ThemeContext = createContext ({
    theme: "light",
    setTheme: () => {},
    toggleTheme: () => {}
});

export default ThemeContext;

export function useTheme() {
    return useContext(ThemeContext);
}