"use client";
import React from "react";
import Link from "next/link";

export default function HomePage() {
   return (
      <div className="font-sans bg-bg text-text">
         {/* Navbar */}
         <header className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl">
            <div className="text-xl font-bold">Prodmast</div>
            <nav className="hidden space-x-8 md:flex text-body-md">
               <Link href="#" className="hover:text-primary">
                  Home
               </Link>
               <Link href="#" className="hover:text-primary">
                  About
               </Link>
               <Link href="#" className="hover:text-primary">
                  Services
               </Link>
               <Link href="#" className="hover:text-primary">
                  Contact
               </Link>
            </nav>
            <button className="px-5 py-2 text-white rounded-md bg-primary hover:bg-primary/90">
               Sign Up
            </button>
         </header>

         {/* Hero Section */}
         <section className="px-6 py-16 mx-auto text-center max-w-7xl md:text-left">
            <h1 className="font-bold leading-tight text-heading-xl md:text-5xl">
               The Future of Manufacturing with{" "}
               <span className="text-primary">Latest Technology</span>
            </h1>
            <p className="max-w-2xl mx-auto mt-4 text-body-lg text-text/80 md:mx-0">
               Expert tech to elevate your manufacturing. Let’s take your business
               further.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col justify-center gap-4 mt-6 sm:flex-row md:justify-start">
               <Link
                  href="/challenges"
                  className="px-6 py-3 text-white rounded-md bg-primary hover:bg-primary/90"
               >
                  Get Started
               </Link>
               <button className="px-6 py-3 border rounded-md bg-card border-border hover:bg-card/80">
                  Try Demo
               </button>
            </div>

            {/* Stats */}
            <div className="flex flex-col justify-center gap-6 mt-10 sm:flex-row md:justify-start">
               <div className="p-6 text-center rounded-lg shadow-sm bg-card">
                  <p className="font-bold text-heading-lg text-primary">100+</p>
                  <p className="text-body-md text-text/70">
                     Our Esteemed Clients and Partners
                  </p>
               </div>
               <div className="p-6 text-center rounded-lg shadow-sm bg-card">
                  <p className="font-bold text-heading-lg text-primary">1951+</p>
                  <p className="text-body-md text-text/70">Total Projects</p>
               </div>
               <div className="p-6 text-center rounded-lg shadow-sm bg-card">
                  <p className="font-bold text-heading-lg text-primary">6+</p>
                  <p className="text-body-md text-text/70">
                     Years of Dedicated Service
                  </p>
               </div>
            </div>
         </section>

         {/* Placeholder for Editor + Preview */}
         <section className="px-6 py-16 mx-auto max-w-7xl">
            <div className="p-6 text-center border rounded-lg bg-card border-border text-text/70">
               🚀 Editor + Preview will go here for first-time experience
            </div>
         </section>
      </div>
   );
}