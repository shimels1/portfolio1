
import React, { useState } from "react";
import { ExternalLink, Github, Maximize2, ChevronDown } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "@/components/ui/collapsible";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProjectImage {
  url: string;
  alt: string;
}

interface Project {
  title: string;
  description: string;
  images: ProjectImage[];
  tags: string[];
  liveLink?: string;
  githubLink?: string;
}

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);
  const [expandedDescriptions, setExpandedDescriptions] = useState<Record<number, boolean>>({});
  
  const toggleDescription = (index: number) => {
    setExpandedDescriptions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
  const projects: Project[] = [
    {
      title: "Continuous Sign Language Recognition",
      description: "A machine learning project using Python, Keras and Deep Learning to recognize Ethiopian Sign Language. Implemented CNN and LSTM hybrid architecture. Achieved 87% accuracy on test dataset. Created custom dataset of Ethiopian Sign Language gestures. Developed real-time recognition capabilities.",
      images: [
        {
          url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFzayUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
          alt: "Sign language recognition interface"
        },
        {
          url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          alt: "Machine learning dashboard"
        },
      ],
      tags: ["Python", "Keras", "Deep Learning"],
      githubLink: "https://github.com/shimels1",
    },
    {
      title: "Online Food Ordering App",
      description: "A food ordering application for Bahir Dar city built using Android and Firebase. Real-time order tracking and notifications. Integrated payment gateway. Restaurant and menu management system. User authentication and profile management.",
      images: [
        {
          url: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWNvbW1lcmNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          alt: "Food ordering app interface"
        },
        {
          url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWNvbW1lcmNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          alt: "Food app payment screen"
        },
        {
          url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          alt: "Food ordering app dashboard"
        }
      ],
      tags: ["Android", "Firebase", "Java"],
      githubLink: "https://github.com/shimels1",
    },
    {
      title: "Entertainment Website",
      description: "A website built with Angular, Node.js, and MySQL for entertainment content. Content management system for administrators. User-generated content and comments. Personalized content recommendations. Advanced search functionality.",
      images: [
        {
          url: "https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
          alt: "Entertainment website homepage"
        },
        {
          url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          alt: "Entertainment content gallery"
        }
      ],
      tags: ["Angular", "Node.js", "MySQL"],
      githubLink: "https://github.com/shimels1",
    },
    {
      title: "Pavement Management System",
      description: "An application built with Angular, Node.js and PostgreSQL for managing pavement infrastructure. GIS integration for spatial data visualization. Condition assessment and reporting. Maintenance scheduling and budget planning. Mobile data collection capabilities.",
      images: [
        {
          url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          alt: "Pavement management dashboard"
        },
        {
          url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          alt: "Map interface for pavement system"
        },
        {
          url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          alt: "Code view of pavement system"
        }
      ],
      tags: ["Angular", "Node.js", "PostgreSQL"],
      githubLink: "https://github.com/shimels1",
    },
    {
      title: "Bible App",
      description: "A mobile application built with Android and SQLite for reading and studying the Bible. Multiple Bible translations. Verse highlighting and note-taking. Daily reading plans. Offline access to all content. Search functionality across all books.",
      images: [
        {
          url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZWNvbW1lcmNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
          alt: "Bible app interface"
        },
        {
          url: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
          alt: "Bible study features"
        }
      ],
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
              <div className="h-52 overflow-hidden relative">
                <Carousel className="w-full">
                  <CarouselContent>
                    {project.images.map((image, imgIndex) => (
                      <CarouselItem key={imgIndex}>
                        <div className="h-52 relative">
                          <img
                            src={image.url}
                            alt={image.alt}
                            className="w-full h-full object-cover cursor-pointer"
                            onClick={() => setSelectedImage(image)}
                          />
                          <Dialog>
                            <DialogTrigger asChild>
                              <button 
                                className="absolute bottom-2 right-2 bg-black/50 p-1.5 rounded-md hover:bg-black/70 transition-colors"
                                aria-label="View fullscreen"
                              >
                                <Maximize2 className="h-4 w-4 text-white" />
                              </button>
                            </DialogTrigger>
                            <DialogContent className="max-w-[90vw] max-h-[90vh] w-auto h-auto p-0 border-none bg-transparent">
                              <img
                                src={image.url}
                                alt={image.alt}
                                className="w-full h-full object-contain"
                              />
                            </DialogContent>
                          </Dialog>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                
                <Collapsible 
                  open={expandedDescriptions[index]} 
                  onOpenChange={() => toggleDescription(index)}
                  className="mb-4"
                >
                  <div className={expandedDescriptions[index] ? "" : "h-16 overflow-hidden"}>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                  
                  <CollapsibleTrigger asChild>
                    <button 
                      className="flex items-center text-xs text-teal-400 hover:text-teal-300 mt-1"
                    >
                      {expandedDescriptions[index] ? "Show Less" : "Show More"}
                      <ChevronDown 
                        className={`ml-1 h-4 w-4 transition-transform ${expandedDescriptions[index] ? "rotate-180" : ""}`} 
                      />
                    </button>
                  </CollapsibleTrigger>
                </Collapsible>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-navy-800 text-teal-400 text-xs px-3 py-1 rounded-full"
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
                      className="flex items-center text-sm text-teal-500 hover:text-teal-400"
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
                      className="flex items-center text-sm text-teal-500 hover:text-teal-400"
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
