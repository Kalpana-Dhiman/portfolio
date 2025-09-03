import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <Badge variant="outline" className="text-highlight border-highlight/30">
                Software Developer
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-text-gradient bg-clip-text text-transparent">
                  Kalpana
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                Passionate Computer Science Engineering student crafting innovative solutions 
                with Java, React, and modern web technologies.
              </p>
            </div>

            {/* Highlight Boxes */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <div className="bg-skill-bg border border-section-border rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-highlight">8.748</div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </div>
              <div className="bg-skill-bg border border-section-border rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-highlight">650+</div>
                <div className="text-sm text-muted-foreground">AMCAT Score</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Patiala, Punjab
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                kalpanadhiman260@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +91 9876617418
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="group">
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Get In Touch
              </Button>
              <div className="flex gap-2">
                <Button variant="outline" size="lg" asChild>
                  <a href="https://github.com/Kalpana-Dhiman" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://linkedin.com/in/kalpana-536268297" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-hero-gradient rounded-2xl blur-2xl opacity-30 animate-pulse" />
              <img
                src={heroImage}
                alt="Kalpana"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-elevated border border-section-border"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;