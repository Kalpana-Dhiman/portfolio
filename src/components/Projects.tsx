import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Quiz App",
      description: "Interactive quiz application with user-friendly interface for creating and taking quizzes. Features progress tracking, scoring system, and engaging user experience to enhance learning.",
      technologies: ["Java", "Android Studio", "XML"],
      github: "https://github.com/Kalpana-Dhiman/Quiz-App",
      duration: "4-5 Days",
      teamSize: "Individual",
      features: [
        "User-friendly quiz interface",
        "Progress tracking system",
        "Real-time scoring",
        "Multiple question formats",
        "Results analytics"
      ]
    },
    {
      title: "Recipe App",
      description: "Comprehensive recipe management application with secure user authentication and local data storage. Enables users to browse, save, and manage recipes with seamless login functionality.",
      technologies: ["Java", "XML", "Room Database", "Firebase"],
      github: "https://github.com/Kalpana-Dhiman/Recipe-App",
      duration: "1 Week",
      teamSize: "Individual",
      features: [
        "User authentication with Firebase",
        "Local storage with Room Database",
        "Recipe browsing and search",
        "Favorite recipes management",
        "Offline data access"
      ]
    },
    {
      title: "Notes App",
      description: "Efficient note-taking application designed for productivity and organization. Features intuitive interface for creating, editing, and managing personal notes with modern design principles.",
      technologies: ["Java", "Android Studio", "SQLite"],
      github: "https://github.com/Kalpana-Dhiman/Notes-App",
      duration: "3-4 Days",
      teamSize: "Individual",
      features: [
        "Create and edit notes",
        "Search functionality",
        "Categorization system",
        "Auto-save feature",
        "Export options"
      ]
    },
    {
      title: "SurplusLink",
      description: "Innovative platform connecting surplus resources with those in need. Promotes sustainability and resource optimization through an efficient matching system.",
      technologies: ["Java", "Spring Boot", "MySQL", "React.js"],
      github: "https://github.com/Kalpana-Dhiman/SurplusLink",
      duration: "2 Weeks",
      teamSize: "Team of 3",
      features: [
        "Resource listing and matching",
        "User verification system",
        "Real-time notifications",
        "Location-based services",
        "Impact tracking dashboard"
      ]
    },
    {
      title: "Gym Registration UI",
      description: "Modern and visually appealing gym registration interface designed with clean aesthetics. Features responsive design and intuitive form elements for enhanced user experience.",
      technologies: ["HTML", "CSS", "Responsive Design"],
      github: "https://github.com/Kalpana-Dhiman/Gym-Registration-UI",
      duration: "2 Days",
      teamSize: "Individual",
      features: [
        "Responsive design",
        "Modern UI/UX",
        "Form validation",
        "Clean aesthetics",
        "Cross-browser compatibility"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-text-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Showcasing innovation through code and creativity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* First 4 projects in 2x2 grid */}
          {projects.slice(0, 4).map((project, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card border-section-border hover:bg-card-hover transition-all duration-300 hover:shadow-elevated group"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-bold group-hover:text-highlight transition-colors">
                    {project.title}
                  </h3>
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span><strong>Duration:</strong> {project.duration}</span>
                    <span><strong>Team:</strong> {project.teamSize}</span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-highlight">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <span className="text-highlight mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="text-xs bg-secondary/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Center the last project for balance */}
        <div className="flex justify-center">
          <Card className="p-6 bg-card border-section-border hover:bg-card-hover transition-all duration-300 hover:shadow-elevated group max-w-md w-full">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-bold group-hover:text-highlight transition-colors">
                  {projects[4].title}
                </h3>
                <Button variant="ghost" size="sm" asChild>
                  <a href={projects[4].github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {projects[4].description}
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span><strong>Duration:</strong> {projects[4].duration}</span>
                  <span><strong>Team:</strong> {projects[4].teamSize}</span>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-highlight">Key Features:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {projects[4].features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <span className="text-highlight mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {projects[4].technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="text-xs bg-secondary/50"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;