
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      <footer className="bg-navy-800 py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Shimel Sisay. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
