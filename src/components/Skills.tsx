
import React from "react";

interface Skill {
  name: string;
  level: number;
  color: string;
}

const Skills = () => {
  const frontendSkills: Skill[] = [
    { name: "HTML/CSS", level: 90, color: "from-[#E44D26] to-[#F16529]" },
    { name: "JavaScript", level: 85, color: "from-[#F0DB4F] to-[#F0DB4F]" },
    { name: "React.js", level: 80, color: "from-[#61DBFB] to-[#61DBFB]" },
    { name: "TypeScript", level: 75, color: "from-[#007ACC] to-[#007ACC]" },
    { name: "Tailwind CSS", level: 85, color: "from-[#38BDF8] to-[#38BDF8]" },
  ];

  const otherSkills: Skill[] = [
    { name: "Node.js", level: 70, color: "from-[#68A063] to-[#68A063]" },
    { name: "Git/GitHub", level: 85, color: "from-[#F05032] to-[#F05032]" },
    { name: "Responsive Design", level: 90, color: "from-[#FF6B6B] to-[#FF6B6B]" },
    { name: "UI/UX Principles", level: 75, color: "from-[#FF3366] to-[#FF3366]" },
    { name: "Performance Optimization", level: 70, color: "from-[#00C9A7] to-[#00C9A7]" },
  ];

  const SkillBar = ({ skill }: { skill: Skill }) => {
    return (
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="font-medium">{skill.name}</span>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="bg-navy-800 p-8 rounded-xl card-hover">
            <h3 className="text-xl font-bold mb-6 text-center">Frontend Development</h3>
            {frontendSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>

          <div className="bg-navy-800 p-8 rounded-xl card-hover">
            <h3 className="text-xl font-bold mb-6 text-center">Other Skills</h3>
            {otherSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        <div className="mt-16 bg-navy-800 p-8 rounded-xl card-hover">
          <h3 className="text-xl font-bold mb-6 text-center">Additional Technologies & Tools</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Redux", "Next.js", "SASS", "Bootstrap", "Material UI", 
              "Webpack", "Jest", "RESTful APIs", "Firebase", "VS Code"
            ].map((tech) => (
              <span 
                key={tech}
                className="bg-navy-700 text-foreground px-4 py-2 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
