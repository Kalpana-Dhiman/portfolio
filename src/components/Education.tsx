import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Chandigarh Group of Colleges, Landran",
      duration: "2022 - 2026",
      score: "CGPA: 8.748",
      scoreType: "cgpa",
      description: "Comprehensive computer science curriculum covering software engineering, data structures, algorithms, and modern development practices."
    },
    {
      degree: "Intermediate (PSEB)",
      institution: "Senior Secondary Model School P.U.P",
      duration: "2021 - 2022",
      score: "96.2%",
      scoreType: "percentage",
      description: "Excellent academic performance with focus on mathematics and science subjects, building strong foundation for engineering studies."
    },
    {
      degree: "Matriculation (PSEB)",
      institution: "Senior Secondary Model School P.U.P",
      duration: "2019 - 2020",
      score: "Grade A+",
      scoreType: "grade",
      description: "Outstanding academic achievement demonstrating consistent excellence and strong analytical abilities across all subjects."
    }
  ];

  const achievements = [
    "Participation in Smart India Hackathon (SIH)",
    "Training in Android App Development",
    "Patent for Transformative Healthcare Innovation",
    "Multiple Technical Certifications",
    "Academic Excellence Awards"
  ];

  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="bg-text-gradient bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Academic excellence and continuous learning journey
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8 mb-16">
          {educationData.map((edu, index) => (
            <Card 
              key={index} 
              className="p-6 bg-card border-section-border hover:bg-card-hover transition-all duration-300 hover:shadow-elevated"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex items-center gap-4 md:w-1/3">
                  <div className="p-3 bg-highlight/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-highlight" />
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {edu.duration}
                  </div>
                </div>
                
                <div className="flex-1 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <Badge 
                      variant="outline" 
                      className={`
                        border-highlight/30 
                        ${edu.scoreType === 'cgpa' ? 'bg-highlight/10 text-highlight font-bold' : ''}
                      `}
                    >
                      {edu.score}
                    </Badge>
                  </div>
                  <p className="text-highlight font-medium">{edu.institution}</p>
                  <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Academic Achievements */}
        <Card className="p-8 bg-card border-section-border">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="h-6 w-6 text-highlight" />
              <h3 className="text-2xl font-bold">Academic Achievements</h3>
            </div>
            <p className="text-muted-foreground">Recognition for excellence and innovation</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="flex items-start gap-3 p-4 bg-skill-bg rounded-lg border border-section-border hover:bg-card-hover transition-colors"
              >
                <div className="flex-shrink-0 w-2 h-2 bg-highlight rounded-full mt-2" />
                <span className="text-sm leading-relaxed">{achievement}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Education;