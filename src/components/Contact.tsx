import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kalpanadhiman260@gmail.com",
      href: "mailto:kalpanadhiman260@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9876617418",
      href: "tel:+919876617418"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Patiala, Punjab, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Kalpana-Dhiman",
      username: "Kalpana-Dhiman"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/kalpana-536268297",
      username: "kalpana-536268297"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="bg-text-gradient bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Let's collaborate and build something amazing together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="p-8 bg-card border-section-border">
            <h3 className="text-2xl font-bold mb-6 text-center">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="p-3 bg-highlight/10 rounded-lg group-hover:bg-highlight/20 transition-colors">
                      <Icon className="h-5 w-5 text-highlight" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href && info.href !== "#" ? (
                        <a 
                          href={info.href} 
                          className="font-medium hover:text-highlight transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-section-border">
              <h4 className="text-lg font-semibold mb-4 text-center">Follow Me</h4>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <Button 
                      key={index} 
                      variant="outline" 
                      size="lg" 
                      asChild
                      className="border-highlight/30 hover:bg-highlight/10 hover:border-highlight transition-all"
                    >
                      <a 
                        href={social.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Icon className="h-5 w-5" />
                        {social.label}
                      </a>
                    </Button>
                  );
                })}
              </div>
            </div>
          </Card>

          {/* CTA Card */}
          <Card className="p-8 bg-card border-section-border flex flex-col justify-center">
            <div className="text-center space-y-6">
              <div className="p-4 bg-highlight/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto">
                <Send className="h-8 w-8 text-highlight" />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Ready to Collaborate?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always excited to work on innovative projects and contribute to meaningful 
                  tech initiatives. Whether it's a full-time opportunity, internship, or freelance 
                  project, I'd love to hear from you!
                </p>
              </div>

              <div className="space-y-3">
                <Button size="lg" className="w-full group" asChild>
                  <a href="mailto:kalpanadhiman260@gmail.com">
                    <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Send Email
                  </a>
                </Button>
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <a href="tel:+919876617418">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Me
                  </a>
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                Available for opportunities • Open to relocate
              </p>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-section-border">
          <p className="text-muted-foreground">
            © 2024 Kalpana. Built with passion and{" "}
            <span className="text-highlight">React.js</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;