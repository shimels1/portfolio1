
import React from "react";
import { Briefcase, GraduationCap, Mail, User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-navy-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="section-title text-center">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl text-center mt-4">
            Here you will find more information about me, what I do, and my current skills
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Get to know me!</h3>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                I'm a <span className="text-purple-500 font-medium">Frontend Developer</span> with 
                expertise in building responsive web applications and user interfaces that provide 
                exceptional digital experiences.
              </p>
              <p className="text-muted-foreground">
                I specialize in creating dynamic, interactive websites using modern technologies 
                like React, TypeScript, and Tailwind CSS. I enjoy tackling complex problems and 
                turning them into simple, beautiful solutions.
              </p>
              <p className="text-muted-foreground">
                I'm passionate about web standards and best practices, focusing on creating fast, 
                accessible, and responsive websites. I'm always looking to learn new technologies 
                and improve my skills.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-medium py-3 px-8 rounded-md transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Personal Info</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-navy-700 p-6 rounded-lg card-hover">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-purple-500/20 mr-3">
                    <User size={20} className="text-purple-500" />
                  </div>
                  <h4 className="font-medium">Name</h4>
                </div>
                <p className="text-muted-foreground">Shimel Sisay</p>
              </div>

              <div className="bg-navy-700 p-6 rounded-lg card-hover">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-purple-500/20 mr-3">
                    <Mail size={20} className="text-purple-500" />
                  </div>
                  <h4 className="font-medium">Email</h4>
                </div>
                <p className="text-muted-foreground">sisayshimel42@gmail.com</p>
              </div>

              <div className="bg-navy-700 p-6 rounded-lg card-hover">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-purple-500/20 mr-3">
                    <GraduationCap size={20} className="text-purple-500" />
                  </div>
                  <h4 className="font-medium">Education</h4>
                </div>
                <p className="text-muted-foreground">BSc in Computer Science</p>
              </div>

              <div className="bg-navy-700 p-6 rounded-lg card-hover">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-purple-500/20 mr-3">
                    <Briefcase size={20} className="text-purple-500" />
                  </div>
                  <h4 className="font-medium">Experience</h4>
                </div>
                <p className="text-muted-foreground">3+ Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
