
import React from "react";
import { Briefcase, GraduationCap, Mail, MapPin, Phone } from "lucide-react";

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
                I'm a <span className="text-purple-500 font-medium">Full Stack Developer and Machine Learning Engineer</span> with 
                expertise in building responsive web applications, mobile apps, and ML solutions that provide 
                exceptional digital experiences.
              </p>
              <p className="text-muted-foreground">
                I specialize in creating dynamic, interactive applications using modern technologies 
                like React, Node.js, Python, and various database systems. I have experience in both frontend and backend development,
                as well as machine learning applications.
              </p>
              <p className="text-muted-foreground">
                I'm passionate about innovation and problem-solving, with a strong academic background and professional 
                experience developing applications for businesses across Ethiopia and Africa.
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
                    <Phone size={20} className="text-purple-500" />
                  </div>
                  <h4 className="font-medium">Phone</h4>
                </div>
                <p className="text-muted-foreground">+251918375305</p>
              </div>

              <div className="bg-navy-700 p-6 rounded-lg card-hover">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-purple-500/20 mr-3">
                    <Mail size={20} className="text-purple-500" />
                  </div>
                  <h4 className="font-medium">Email</h4>
                </div>
                <p className="text-muted-foreground">shimelsalem@gmail.com</p>
              </div>

              <div className="bg-navy-700 p-6 rounded-lg card-hover">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-purple-500/20 mr-3">
                    <GraduationCap size={20} className="text-purple-500" />
                  </div>
                  <h4 className="font-medium">Education</h4>
                </div>
                <p className="text-muted-foreground">M.Sc. in Computer Science</p>
              </div>

              <div className="bg-navy-700 p-6 rounded-lg card-hover">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-full bg-purple-500/20 mr-3">
                    <MapPin size={20} className="text-purple-500" />
                  </div>
                  <h4 className="font-medium">Location</h4>
                </div>
                <p className="text-muted-foreground">Addis Ababa, Ethiopia</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-navy-700 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Awards & Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-navy-800 p-6 rounded-lg card-hover">
                <h4 className="text-xl font-bold mb-3 text-purple-400">Certificate of Appreciation</h4>
                <p className="text-muted-foreground">
                  Certificate of appreciation in 2018 Annual Software development competition, at Bahir dar institute of 
                  Technology. I was awarded certificate of appreciation as a second place winner 
                  for developing Android based food ordering App for Bahir Dar city, by the faculty dean Mr. Dawed Nesru.
                </p>
              </div>
              
              <div className="bg-navy-800 p-6 rounded-lg card-hover">
                <h4 className="text-xl font-bold mb-3 text-purple-400">Letter of Appreciation</h4>
                <p className="text-muted-foreground">
                  For my work on Online food ordering App for Bahir Dar city, after being evaluated by experts and found to be one of potential projects for further developments. I was allowed to participate in job fair and Technology exhibition and given a letter of appreciation from University Industry Linkage and community director, Dr. Sisay Geremew.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
