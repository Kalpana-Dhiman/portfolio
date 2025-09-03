import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Globe, 
  Database, 
  GitBranch, 
  Smartphone,
  Monitor
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["Java", "C++", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "Frameworks & Libraries",
      icon: Globe,
      skills: ["React.js", "Node.js", "Android SDK", "Room Database"]
    },
    {
      title: "Databases & Systems",
      icon: Database,
      skills: ["MySQL", "SQLite", "Firebase", "Linux", "Windows"]
    },
    {
      title: "Developer Tools",
      icon: GitBranch,
      skills: ["Git", "VS Code", "Android Studio", "IntelliJ", "Eclipse"]
    }
  ];

  const interpersonalSkills = [
    "Teamwork", "Communication", "Problem Solving", 
    "Active Listening", "Adaptability", "Patience"
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-text-gradient bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Expertise across multiple technologies and frameworks
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="p-6 bg-skill-bg border-section-border hover:bg-card-hover transition-all duration-300 hover:shadow-elevated hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-highlight/10 rounded-lg">
                    <Icon className="h-5 w-5 text-highlight" />
                  </div>
                  <h3 className="font-semibold text-sm">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-xs bg-secondary/50 hover:bg-highlight/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Center the Databases & Systems for balance */}
        <div className="flex justify-center mb-16">
          <Card className="p-6 bg-skill-bg border-section-border hover:bg-card-hover transition-all duration-300 hover:shadow-elevated hover:scale-105 w-full max-w-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-highlight/10 rounded-lg">
                <Monitor className="h-5 w-5 text-highlight" />
              </div>
              <h3 className="font-semibold text-sm">Operating Systems</h3>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="secondary" className="text-xs bg-secondary/50 hover:bg-highlight/20 transition-colors">
                Windows
              </Badge>
              <Badge variant="secondary" className="text-xs bg-secondary/50 hover:bg-highlight/20 transition-colors">
                Linux
              </Badge>
            </div>
          </Card>
        </div>

        {/* Interpersonal Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">
            Interpersonal <span className="text-highlight">Skills</span>
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {interpersonalSkills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 text-sm border-highlight/30 hover:bg-highlight/10 transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-8">
            <span className="text-highlight">Languages</span>
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {["English", "Hindi", "Punjabi"].map((language, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 text-sm border-highlight/30 hover:bg-highlight/10 transition-colors"
              >
                {language}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;