
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Home, User, Code, Briefcase, Mail, GraduationCap, Award } from "lucide-react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "education", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Education", href: "#education", icon: GraduationCap },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Projects", href: "#projects", icon: Award },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full px-6 py-4 transition-all duration-300 z-50",
        scrolled ? "bg-navy-900/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-gradient">
          Shimels A.
        </a>
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors duration-200 hover:text-purple-500",
                activeSection === item.href.substring(1)
                  ? "text-purple-500"
                  : "text-foreground/70"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="md:hidden flex space-x-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "p-2 rounded-full transition-colors duration-200",
                  activeSection === item.href.substring(1)
                    ? "text-purple-500 bg-navy-800"
                    : "text-foreground/70 hover:bg-navy-800"
                )}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
