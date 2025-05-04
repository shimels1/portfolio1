
import React from "react";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink?: string;
  githubLink?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Continuous Sign Language Recognition",
      description: "A machine learning project using Python, Keras and Deep Learning to recognize Ethiopian Sign Language.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFzayUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      tags: ["Python", "Keras", "Deep Learning"],
      githubLink: "https://github.com/shimels1",
    },
    {
      title: "Online Food Ordering App",
      description: "A food ordering application for Bahir Dar city built using Android and Firebase.",
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWNvbW1lcmNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      tags: ["Android", "Firebase", "Java"],
      githubLink: "https://github.com/shimels1",
    },
    {
      title: "Entertainment Website",
      description: "A website built with Angular, Node.js, and MySQL for entertainment content.",
      image: "https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      tags: ["Angular", "Node.js", "MySQL"],
      githubLink: "https://github.com/shimels1",
    },
    {
      title: "Pavement Management System",
      description: "An application built with Angular, Node.js and PostgreSQL for managing pavement infrastructure.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      tags: ["Angular", "Node.js", "PostgreSQL"],
      githubLink: "https://github.com/shimels1",
    },
    {
      title: "Bible App",
      description: "A mobile application built with Android and SQLite for reading and studying the Bible.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWNvbW1lcmNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      tags: ["Android", "SQLite"],
      githubLink: "https://github.com/shimels1",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-navy-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="section-title text-center">My Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl text-center mt-4">
            Here are some of the projects I've worked on
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-navy-700 rounded-xl overflow-hidden card-hover"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 h-16 overflow-hidden">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-navy-800 text-purple-400 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-purple-500 hover:text-purple-400"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Preview
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-purple-500 hover:text-purple-400"
                    >
                      <Github size={16} className="mr-1" />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
