
import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-900/20 via-transparent to-transparent"></div>
      <div className="container mx-auto px-6 py-24 md:py-0 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col justify-center space-y-6 animate-fade-in">
            <div>
              <h2 className="text-teal-500 text-xl md:text-2xl font-medium mb-2">
                Hello, I'm
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Shimels Alem
              </h1>
              <div className="flex items-center">
                <div className="h-[2px] w-16 bg-teal-500 mr-3"></div>
                <p className="text-xl md:text-2xl text-muted-foreground">
                  Full Stack Developer | Machine Learning Engineer
                </p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-lg">
              I build exceptional digital experiences that are fast,
              accessible, visually appealing, and responsive to user needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#projects"
                className="bg-teal-500 hover:bg-teal-600 text-slate-900 font-medium py-3 px-8 rounded-md transition-colors duration-300 text-center flex items-center justify-center"
              >
                View My Work
                <ArrowRight size={16} className="ml-2" />
              </a>
              <a
                href="#contact"
                className="border border-teal-500 text-teal-500 hover:bg-teal-500/10 font-medium py-3 px-8 rounded-md transition-colors duration-300 text-center"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-500 to-teal-800 opacity-80 blur-3xl"></div>
              <div className="relative h-full flex items-center justify-center">
                <div className="bg-slate-800 rounded-full w-64 h-64 overflow-hidden border-4 border-teal-500/30">
                  <img
                    src="/lovable-uploads/a476d0f8-bae2-4cd7-aafe-4cd9dee94ad0.png"
                    alt="Professional portrait of Shimels"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
