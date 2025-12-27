import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      ref={ref}
      className="py-24 relative"
    >
      <div className="container mx-auto px-6">
        <div 
          className={`max-w-3xl mx-auto text-center space-y-6 opacity-0 ${
            isVisible ? "animate-fade-in" : ""
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Who We <span className="text-primary">Are</span>
          </h2>
          
          <div className="decorative-line w-24 mx-auto" />
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            We are a concept-first advertising studio that designs memorable, 
            real-world campaigns. From physical installations to film and print, 
            we focus on bold ideas that connect brands with audiences in meaningful, 
            lasting ways.
          </p>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-32 h-px decorative-line opacity-20" />
      <div className="absolute top-1/2 right-0 w-32 h-px decorative-line opacity-20" />
    </section>
  );
}
