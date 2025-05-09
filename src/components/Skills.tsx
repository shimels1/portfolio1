
import React from "react";

interface LanguageSkill {
  name: string;
  level: number;
  proficiency: string;
  color: string;
}

interface Skill {
  name: string;
}

const Skills = () => {
  const languageSkills: LanguageSkill[] = [
    { name: "Amharic", level: 100, proficiency: "Native", color: "from-[#6366F1] to-[#6366F1]" },
    { name: "English", level: 80, proficiency: "Proficient", color: "from-[#6366F1] to-[#6366F1]" },
  ];

  const programmingSkills: Skill[] = [
    { name: "Python" }, { name: "Java" }, { name: "C#" }, 
    { name: "Android" }, { name: "ASP.NET Core" }, { name: "Node.js" }, 
    { name: "Flask" }, { name: "PHP" }, { name: "Keras" }
  ];

  const frontendSkills: Skill[] = [
    { name: "Angular" }, { name: "Angular Material" }, 
    { name: "React" }, { name: "Material UI" }, 
    { name: "Bootstrap" }, { name: "Wordpress" },
    { name: "Redux Toolkit" }, { name: "Redux-Saga" }
  ];

  const databaseSkills: Skill[] = [
    { name: "MS SQL Server" }, { name: "MySQL" }, 
    { name: "MongoDB" }, { name: "PostgreSQL" }, 
    { name: "Firebase" }
  ];

  const otherSkills: Skill[] = [
    { name: "Git" }, { name: "NGINX" }, { name: "Docker" },
    { name: "Rest APIs" }, { name: "Google APIs" }
  ];

  const strengthsList = ["Quick learning ability", "Communication skills"];

  const LanguageSkillBar = ({ skill }: { skill: LanguageSkill }) => {
    return (
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <div>
            <span className="font-medium">{skill.name}</span>
            <span className="text-sm text-muted-foreground ml-2">({skill.proficiency})</span>
          </div>
          <span className="text-sm text-muted-foreground">{skill.level}%</span>
        </div>
        <div className="h-2 w-full bg-navy-700 rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="section-title text-center">My Skills</h2>
          <p className="text-muted-foreground text-lg max-w-2xl text-center mt-4">
            A showcase of my technical abilities and expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-navy-800 p-8 rounded-xl card-hover">
            <h3 className="text-xl font-bold mb-6 text-center">Languages</h3>
            {languageSkills.map((skill) => (
              <LanguageSkillBar key={skill.name} skill={skill} />
            ))}
          </div>

          <div className="bg-navy-800 p-8 rounded-xl card-hover">
            <h3 className="text-xl font-bold mb-6 text-center">Strengths</h3>
            <div className="space-y-4">
              {strengthsList.map((strength, index) => (
                <div 
                  key={index}
                  className="flex items-center p-4 bg-navy-700 rounded-lg"
                >
                  <div className="h-3 w-3 rounded-full bg-indigo-500 mr-3"></div>
                  <span className="font-medium">{strength}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div className="bg-navy-800 p-8 rounded-xl card-hover">
            <h3 className="text-xl font-bold mb-6 text-center">Programming Languages & Frameworks</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {programmingSkills.map((skill) => (
                <span 
                  key={skill.name}
                  className="bg-navy-700 text-foreground px-4 py-2 rounded-full text-sm"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-navy-800 p-8 rounded-xl card-hover">
            <h3 className="text-xl font-bold mb-6 text-center">Frontend Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {frontendSkills.map((skill) => (
                <span 
                  key={skill.name}
                  className="bg-navy-700 text-foreground px-4 py-2 rounded-full text-sm"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-navy-800 p-8 rounded-xl card-hover">
            <h3 className="text-xl font-bold mb-6 text-center">Database Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {databaseSkills.map((skill) => (
                <span 
                  key={skill.name}
                  className="bg-navy-700 text-foreground px-4 py-2 rounded-full text-sm"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
          
          <div className="bg-navy-800 p-8 rounded-xl card-hover">
            <h3 className="text-xl font-bold mb-6 text-center">Other Tools & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {otherSkills.map((skill) => (
                <span 
                  key={skill.name}
                  className="bg-navy-700 text-foreground px-4 py-2 rounded-full text-sm"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
