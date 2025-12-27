import vincioLogo from "@/assets/vincio-logo.png";
import { Button } from "@/components/ui/button";
import { Lightbulb, Volume2 } from "lucide-react";

export function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("inquiry-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px decorative-line" />
      <div className="absolute bottom-0 left-0 w-full h-px decorative-line" />
      <div className="absolute top-1/3 left-0 w-1/3 h-px decorative-line opacity-30" />
      <div className="absolute top-2/3 right-0 w-1/4 h-px decorative-line opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <img 
              src={vincioLogo} 
              alt="The Vincio Logo" 
              className="h-24 md:h-32 mx-auto lg:mx-0 animate-glow"
            />
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground tracking-tight">
                The <span className="text-primary glow-text">Vincio</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-xl">
                Unique Advertising Concepts for the Real World
              </p>
            </div>

            <Button 
              onClick={scrollToForm}
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-all duration-300 hover:scale-105 glow-effect"
            >
              Start a Project
            </Button>
          </div>

          {/* Right decorative elements */}
          <div className="hidden lg:flex items-center justify-center relative" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Glowing bulb */}
              <div className="absolute -top-20 right-0 animate-float">
                <div className="relative">
                  <Lightbulb className="w-32 h-32 text-primary animate-glow" strokeWidth={1} />
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
                </div>
              </div>

              {/* Speaker illustration */}
              <div className="absolute -bottom-10 -left-10 animate-float" style={{ animationDelay: "1s" }}>
                <Volume2 className="w-24 h-24 text-primary/60" strokeWidth={1} />
              </div>

              {/* Decorative circles */}
              <div className="w-64 h-64 border border-primary/20 rounded-full flex items-center justify-center">
                <div className="w-48 h-48 border border-primary/30 rounded-full flex items-center justify-center">
                  <div className="w-32 h-32 border border-primary/40 rounded-full animate-pulse-slow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
}
