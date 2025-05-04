
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";

const Index = () => {
  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      
      <footer className="bg-navy-800 py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Shimels Alem. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2">
            <a 
              href="https://shimels1.github.io/portofolio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-purple-500"
            >
              https://shimels1.github.io/portofolio
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
