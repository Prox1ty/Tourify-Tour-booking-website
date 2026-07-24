import React from "react";
import { LuMoon as Moon, LuSun as Sun } from "react-icons/lu";
import { useTheme } from "../contexts";

function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="
        flex items-center justify-center
        h-10 w-10
        rounded-full
        bg-[var(--surface-secondary)]
        text-[var(--text)]
        border border-[var(--border)]
        transition-all duration-200
        hover:bg-[var(--surface)]
        hover:scale-105
        active:scale-95
        cursor-pointer
      "
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun size={20} strokeWidth={2} />
      ) : (
        <Moon size={20} strokeWidth={2} />
      )}
    </button>
  );
}

export default ThemeButton;