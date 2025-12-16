"use client";

import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Differentials from "../components/Differentials";
import InstagramBlock from "../components/InstagramBlock";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <Differentials />
        <About />
        <InstagramBlock />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;