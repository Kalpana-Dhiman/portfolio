import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-text-gradient bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Driven by passion, powered by innovation
          </p>
        </div>

        <Card className="p-8 bg-card border-section-border hover:bg-card-hover transition-colors">
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed mb-6">
              I'm a <strong className="text-highlight">Computer Science Engineering student</strong> with a deep passion 
              for technology and innovation. Currently pursuing my B.Tech at Chandigarh Group of Colleges with a 
              <strong className="text-highlight"> CGPA of 8.748</strong>, I've consistently demonstrated academic excellence 
              throughout my journey.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              My expertise spans across <strong className="text-highlight">Java development</strong>, 
              <strong className="text-highlight"> web technologies</strong>, and 
              <strong className="text-highlight"> software engineering</strong>. I've earned recognition through my 
              <strong className="text-highlight"> AMCAT score of 650+ out of 800</strong>, showcasing my technical 
              proficiency and problem-solving abilities.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              What sets me apart is my ability to transform ideas into functional, real-world solutions. From developing 
              Android applications to creating web interfaces, I approach every project with a detail-oriented mindset 
              and a commitment to excellence. My participation in prestigious events like the 
              <strong className="text-highlight"> Smart India Hackathon</strong> and earning a 
              <strong className="text-highlight"> patent for healthcare innovation</strong> demonstrates my drive to 
              make a meaningful impact in the tech industry.
            </p>

            <p className="text-lg leading-relaxed">
              I believe in continuous learning and staying updated with emerging technologies. Whether it's mastering 
              new frameworks, contributing to open-source projects, or collaborating on innovative solutions, I'm always 
              eager to push boundaries and contribute to forward-thinking tech initiatives that create positive change.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;