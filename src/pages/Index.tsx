
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
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <Experience />
        <Education />
      </div>
      <Skills />
      <Projects />
      <Contact />
      
      <footer className="bg-card py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            &copy; {new Date().getFullYear()} Shimels Alem. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2">
            <a 
              href="https://shimels1.github.io/portofolio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
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
