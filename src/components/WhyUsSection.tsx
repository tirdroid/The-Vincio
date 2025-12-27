import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Sparkles, Target, Users } from "lucide-react";

const reasons = [
  {
    icon: Sparkles,
    title: "Concept-First Thinking",
    description: "We start with the idea, not the medium. Every campaign begins with a unique concept tailored to your brand.",
  },
  {
    icon: Target,
    title: "Real-World Impact",
    description: "Our campaigns exist in the physical world, creating tangible experiences that resonate with audiences.",
  },
  {
    icon: Users,
    title: "Limited Projects, High Involvement",
    description: "We take on select projects to ensure dedicated attention and exceptional results for every client.",
  },
];

export function WhyUsSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={ref} className="py-24 relative">
      <div className="container mx-auto px-6">
        <div 
          className={`text-center space-y-4 mb-16 opacity-0 ${
            isVisible ? "animate-fade-in" : ""
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Why <span className="text-primary">The Vincio</span>
          </h2>
          <div className="decorative-line w-24 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={reason.title}
              className={`text-center space-y-4 opacity-0 ${
                isVisible ? "animate-fade-in" : ""
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-12 h-12 mx-auto rounded-full border border-primary/50 flex items-center justify-center">
                <reason.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-48 h-px decorative-line opacity-10" />
      <div className="absolute bottom-1/4 left-0 w-48 h-px decorative-line opacity-10" />
    </section>
  );
}
