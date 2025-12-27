import { MapPin, Phone, Mail, Calendar } from "lucide-react";
import vincioLogo from "@/assets/vincio-logo.png";

export function FooterSection() {
  return (
    <footer className="py-16 relative border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <img src={vincioLogo} alt="The Vincio" className="h-12" />
            <p className="text-muted-foreground text-sm">
              Unique Advertising Concepts for the Real World
            </p>
          </div>

          {/* Locations */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              Locations
            </h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Canada</li>
              <li>Ahmedabad, India</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground">Contact</h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+917046726220" className="hover:text-primary transition-colors">
                  +91 70467 26220
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:tirthmp2002@gmail.com" className="hover:text-primary transition-colors">
                  tirthmp2002@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Appointment */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-foreground flex items-center gap-2">
              <Calendar className="w-4 h-4 text-primary" />
              Appointments
            </h4>
            <p className="text-muted-foreground text-sm italic">
              Concept discussions by appointment only
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="decorative-line mb-6" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} The Vincio. All rights reserved.</p>
          <p className="text-primary/80">Crafting memorable brand experiences</p>
        </div>
      </div>
    </footer>
  );
}
