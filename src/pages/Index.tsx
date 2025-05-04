
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import { useTheme } from "@/components/ThemeProvider";

const Index = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'}`}>
      <Navbar />
      <Hero />
      <About />
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2">
          <Experience />
        </div>
        <div className="lg:w-1/2">
          <Education />
        </div>
      </div>
      <Skills />
      <Projects />
      <Contact />
      
      <footer className={`${theme === 'dark' ? 'bg-slate-900' : 'bg-slate-100'} py-6`}>
        <div className="container mx-auto px-6 text-center">
          <p className={`${theme === 'dark' ? 'text-muted-foreground' : 'text-slate-600'}`}>
            &copy; {new Date().getFullYear()} Shimels Alem. All rights reserved.
          </p>
          <p className={`${theme === 'dark' ? 'text-muted-foreground' : 'text-slate-600'} text-sm mt-2`}>
            <a 
              href="https://shimels1.github.io/portofolio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-teal-500"
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
