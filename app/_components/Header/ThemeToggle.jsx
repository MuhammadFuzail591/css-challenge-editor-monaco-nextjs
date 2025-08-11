"use client";
import { useTheme } from "@/app/context/ThemeContext";
import React from "react";

function ThemeToggle() {
   const { theme, setTheme } = useTheme();

   function toggleTheme() {
      const newTheme = theme === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      localStorage.theme = newTheme;
      setTheme(newTheme);
   }

   return (
      <button
         onClick={toggleTheme}
         className="px-3 py-1 text-sm border rounded-md border-border bg-card text-text hover:opacity-80"
      >
         {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
   );
}

export default ThemeToggle;