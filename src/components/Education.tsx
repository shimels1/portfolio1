
import React from "react";
import { CalendarDays, GraduationCap } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string[];
}

const Education = () => {
  const { theme } = useTheme();
  
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
          <p className={`${theme === 'dark' ? 'text-muted-foreground' : 'text-slate-600'} text-lg max-w-2xl text-center mt-4`}>
            My academic background and qualifications
          </p>
        </div>

        <div className="space-y-8">
          {educationList.map((item, index) => (
            <div key={index} className="relative">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-500 text-slate-900 absolute left-0 z-10">
                <GraduationCap className="w-5 h-5" />
              </div>

              <div className={`${theme === 'dark' ? 'bg-slate-800' : 'bg-slate-100'} p-6 rounded-xl ml-12 card-hover`}>
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-teal-500">{item.degree}</h3>
                </div>
                <div className="mb-1">
                  <span className="font-medium">{item.institution}</span>
                  <span className={`${theme === 'dark' ? 'text-muted-foreground' : 'text-slate-500'}`}> - {item.location}</span>
                </div>
                <div className="flex items-center mb-3">
                  <CalendarDays className={`w-4 h-4 ${theme === 'dark' ? 'text-muted-foreground' : 'text-slate-500'} mr-1`} />
                  <span className={`text-sm ${theme === 'dark' ? 'text-muted-foreground' : 'text-slate-500'}`}>{item.period}</span>
                </div>
                {item.details && item.details.length > 0 && (
                  <ul className={`${theme === 'dark' ? 'text-muted-foreground' : 'text-slate-600'}`}>
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
