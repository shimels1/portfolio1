
import React from "react";
import { Briefcase, CalendarDays, MapPin } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
}

const Experience = () => {
  const experienceList: ExperienceItem[] = [
    {
      title: "Senior Full Stack Developer",
      company: "Abinet Software Development",
      location: "Addis Ababa, Ethiopia",
      period: "2024 - Present",
      description: "Abinet Software Development is dedicated to innovating and delivering cutting-edge software solutions for businesses worldwide.",
      responsibilities: [
        "Participated in developing various React-based applications.",
        "Participated in developing various Node.js APIs with MongoDB integration.",
        "Developed various Android applications using Java."
      ]
    },
    {
      title: "Remot Full Stack Developer",
      company: "XOKA IT Solutions",
      location: "Addis Ababa, Ethiopia",
      period: "07/2018 - 05/2021",
      description: "XOKA IT Solution is a company devoted to innovate and produce multiple technologies to reach all Ethiopian and African private or government organizations.",
      responsibilities: [
        "Involvement in the development of different Angular-based applications.",
        "Involvement in the development of different ASP.NET Core APIs with the MS SQL Database.",
        "Involvement in the development of different Dotnetnuke portals and modules."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="section-title text-center">Work Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl text-center mt-4">
            My professional journey and career highlights
          </p>
        </div>

        <div className="space-y-8">
          {experienceList.map((item, index) => (
            <div key={index} className="relative">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-500 text-slate-900 absolute left-0 z-10">
                <Briefcase className="w-5 h-5" />
              </div>

              <div className="bg-slate-800 p-6 rounded-xl ml-12 card-hover">
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-teal-400">{item.title}</h3>
                </div>
                <div className="mb-1">
                  <span className="font-medium">{item.company}</span>
                </div>
                <div className="flex items-center mb-1">
                  <MapPin className="w-4 h-4 text-muted-foreground mr-1" />
                  <span className="text-sm text-muted-foreground">{item.location}</span>
                </div>
                <div className="flex items-center mb-3">
                  <CalendarDays className="w-4 h-4 text-muted-foreground mr-1" />
                  <span className="text-sm text-muted-foreground">{item.period}</span>
                </div>
                <p className="text-muted-foreground mb-3">{item.description}</p>
                <div>
                  <strong className="text-sm text-teal-400">Key Responsibilities:</strong>
                  <ul className="text-muted-foreground list-disc pl-5 mt-2 space-y-1">
                    {item.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
