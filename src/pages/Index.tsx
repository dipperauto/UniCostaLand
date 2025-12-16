"use client";

import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Differentials from "../components/Differentials";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BackgroundRain from "../components/BackgroundRain";

const Index: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#070b14] via-[#0b1220] to-[#0d1630] text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      </div>
      <BackgroundRain />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Services />
        <Differentials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;