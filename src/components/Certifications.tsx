import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Award, Calendar, ExternalLink } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Training in Android App Development",
      issuer: "Technical Institute",
      date: "June 2024",
      type: "Development"
    },
    {
      title: "Java Features Completion Certificate",
      issuer: "Infosys Springboard",
      date: "June 2024",
      type: "Programming"
    },
    {
      title: "Master Android – Become an App Developer",
      issuer: "Infosys Springboard",
      date: "June 2024",
      type: "Development"
    },
    {
      title: "CSS Completion Certificate",
      issuer: "HackerRank",
      date: "July 2024",
      type: "Web Development"
    },
    {
      title: "Cloud Operations Certificate",
      issuer: "AWS",
      date: "February 2025",
      type: "Cloud Computing"
    },
    {
      title: "Java Bootcamp Completion",
      issuer: "Let's Upgrade",
      date: "28 February 2025",
      type: "Programming"
    },
    {
      title: "Matrix Breakout Competition Participation",
      issuer: "Competition Authority",
      date: "March 2025",
      type: "Competition"
    },
    {
      title: "Automation Developer Associate Training",
      issuer: "UiPath Academy",
      date: "25 March 2025",
      type: "Automation"
    }
  ];

  const patent = {
    title: "Transformative Healthcare Innovation",
    subtitle: "Comprehensive Health Management Application",
    referenceNumber: "PIE 1481",
    description: "Revolutionary Health Management app designed to transform healthcare delivery through innovative technology solutions and comprehensive patient management systems.",
    status: "Granted"
  };

  const typeColors = {
    "Development": "bg-blue-500/10 text-blue-400 border-blue-500/30",
    "Programming": "bg-green-500/10 text-green-400 border-green-500/30",
    "Web Development": "bg-purple-500/10 text-purple-400 border-purple-500/30",
    "Cloud Computing": "bg-orange-500/10 text-orange-400 border-orange-500/30",
    "Competition": "bg-red-500/10 text-red-400 border-red-500/30",
    "Automation": "bg-cyan-500/10 text-cyan-400 border-cyan-500/30"
  };

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="bg-text-gradient bg-clip-text text-transparent">Patent</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Continuous learning and innovation recognition
          </p>
        </div>

        {/* Patent Section */}
        <Card className="p-8 bg-card border-section-border hover:bg-card-hover transition-all duration-300 hover:shadow-elevated mb-12">
          <div className="flex items-start gap-6">
            <div className="p-4 bg-highlight/10 rounded-lg">
              <Award className="h-8 w-8 text-highlight" />
            </div>
            <div className="flex-1 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="text-2xl font-bold text-highlight">{patent.title}</h3>
                <Badge variant="outline" className="border-highlight/30 bg-highlight/10 text-highlight font-bold">
                  {patent.status}
                </Badge>
              </div>
              <h4 className="text-lg font-semibold text-foreground">{patent.subtitle}</h4>
              <p className="text-muted-foreground font-mono text-sm">
                Reference No: {patent.referenceNumber}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {patent.description}
              </p>
            </div>
          </div>
        </Card>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card border-section-border hover:bg-card-hover transition-all duration-300 hover:shadow-elevated group"
            >
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-highlight/10 rounded-lg flex-shrink-0">
                    <FileText className="h-5 w-5 text-highlight" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm leading-tight group-hover:text-highlight transition-colors">
                      {cert.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-highlight font-medium text-sm">{cert.issuer}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {cert.date}
                  </div>
                </div>

                <Badge 
                  variant="outline" 
                  className={`text-xs ${typeColors[cert.type] || 'bg-secondary/50'}`}
                >
                  {cert.type}
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Always learning, always growing. Ready to tackle new challenges and technologies.
          </p>
          <Badge variant="outline" className="border-highlight/30 text-highlight px-6 py-2">
            🚀 Open to New Opportunities
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default Certifications;