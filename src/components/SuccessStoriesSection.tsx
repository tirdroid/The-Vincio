import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const clients = [
  {
    name: "DATOFFEE",
    services: ["Physical Advertising", "Brand Activation"],
  },
  {
    name: "Engineering Vadapav",
    services: ["Print & Poster", "Social Concepts"],
  },
  {
    name: "TOURIXAA",
    services: ["Film Advertising", "Physical Concepts"],
  },
  {
    name: "mecuVR",
    services: ["Video Advertising", "Brand Strategy"],
  },
];

export function SuccessStoriesSection() {
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
            Selected <span className="text-primary">Success Stories</span>
          </h2>
          <div className="decorative-line w-24 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {clients.map((client, index) => (
            <Card 
              key={client.name}
              className={`glass-card group hover:border-primary/50 transition-all duration-500 opacity-0 ${
                isVisible ? "animate-scale-in" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                  {client.name}
                </h3>
                <ul className="space-y-2">
                  {client.services.map((service) => (
                    <li key={service} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <p 
          className={`text-center text-muted-foreground text-sm italic opacity-0 ${
            isVisible ? "animate-fade-in" : ""
          }`}
          style={{ animationDelay: "0.5s" }}
        >
          Additional work available upon request
        </p>
      </div>
    </section>
  );
}
