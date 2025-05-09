
import React from "react";
import { CalendarDays, GraduationCap } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string[];
}

const Education = () => {
  const educationList: EducationItem[] = [
    {
      degree: "M.Sc. in Computer Science",
      institution: "Bahir Dar University",
      location: "Bahir Dar, Ethiopia",
      period: "2020 - 2022",
      details: ["Thesis: Continuous Ethiopian Sign Language Recognition"]
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Bahir Dar University",
      location: "Bahir Dar, Ethiopia",
      period: "2013 - 2018",
    },
    {
      degree: "Diploma in Database Administration",
      institution: "Bahirdar Poly Technic College",
      location: "Bahir Dar, Ethiopia",
      period: "2010 - 2013",
    }
  ];

  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="section-title text-center">Education</h2>
          <p className="text-muted-foreground text-lg max-w-2xl text-center mt-4">
            My academic background and qualifications
          </p>
        </div>

        <div className="space-y-8">
          {educationList.map((item, index) => (
            <div key={index} className="relative">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-500 text-slate-900 absolute left-0 z-10">
                <GraduationCap className="w-5 h-5" />
              </div>

              <div className="bg-slate-800 p-6 rounded-xl ml-12 card-hover">
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-indigo-400">{item.degree}</h3>
                </div>
                <div className="mb-1">
                  <span className="font-medium">{item.institution}</span>
                  <span className="text-muted-foreground"> - {item.location}</span>
                </div>
                <div className="flex items-center mb-3">
                  <CalendarDays className="w-4 h-4 text-muted-foreground mr-1" />
                  <span className="text-sm text-muted-foreground">{item.period}</span>
                </div>
                {item.details && item.details.length > 0 && (
                  <ul className="text-muted-foreground">
                    {item.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
