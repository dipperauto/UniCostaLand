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
    <div className="relative min-h-screen bg-[#0b1220] text-slate-100">
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