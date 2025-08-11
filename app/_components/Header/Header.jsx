"use client";
import React from "react";
import ThemeToggle from "./ThemeToggle";

function Header({ problems, selectedProblem, onProblemChange }) {
   return (
      <header className="sticky top-0 z-10 flex items-center justify-between w-full p-4 border-b shadow-sm bg-card border-border text-text">
         <h1 className="text-lg font-semibold">CSS Battle</h1>

         <select
            value={selectedProblem}
            onChange={(e) => onProblemChange(e.target.value)}
            className="p-2 text-sm border rounded-md border-border bg-card text-text"
         >
            {problems.map((problem) => (
               <option key={problem.id} value={problem.id}>
                  {problem.title}
               </option>
            ))}
         </select>

         <ThemeToggle />
      </header>
   );
}

export default Header;