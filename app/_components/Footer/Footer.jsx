"use client";
import React from "react";

function Footer({ onSubmit, onReset, onNext }) {
   return (
      <footer className="flex items-center justify-end w-full gap-4 p-2 border-t shadow-sm bg-card border-border text-text">
        
         <button
            onClick={onReset}
            className="px-4 py-2 text-sm rounded-md bg-bg hover:opacity-80"
         >
            Reset
         </button>
         <button
            onClick={onNext}
            className="px-4 py-2 text-sm text-white bg-blue-500 rounded-md hover:bg-blue-600"
         >
            Next
         </button>
         <button
            onClick={onSubmit}
            className="px-4 py-2 text-sm text-white bg-green-500 rounded-md hover:bg-green-600"
         >
            Submit
         </button>
      </footer>
   );
}

export default Footer;