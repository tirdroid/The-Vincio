import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Building2, Film, FileImage } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Building2,
    title: "Physical Advertising Concepts",
    description: "Installations, experiential marketing, and real-world brand activations that captivate audiences.",
  },
  {
    icon: Film,
    title: "Film / TV / Video Advertising",
    description: "Cinematic storytelling and commercial concepts that bring your brand narrative to life.",
  },
  {
    icon: FileImage,
    title: "Print & Poster Advertising",
    description: "Bold visual designs and print campaigns that make lasting impressions.",
  },
];

export function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="py-24 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <div 
          className={`text-center space-y-4 mb-16 opacity-0 ${
            isVisible ? "animate-fade-in" : ""
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="decorative-line w-24 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`glass-card group hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:glow-effect opacity-0 ${
                isVisible ? "animate-fade-in" : ""
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
