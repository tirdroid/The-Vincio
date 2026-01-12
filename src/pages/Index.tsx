// pages/index.tsx
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { SuccessStoriesSection } from "@/components/SuccessStoriesSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { InquiryFormSection } from "@/components/InquiryFormSection";
import { FooterSection } from "@/components/FooterSection";
import Head from "next/head";
import { useEffect } from "react";

export default function Index() {
  // Dynamically add Google Fonts to avoid Tailwind build errors
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap";
    document.head.appendChild(link);

    // Cleanup if component unmounts (optional)
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      <Head>
        <title>The Vincio | Unique Advertising Concepts for the Real World</title>
        <meta
          name="description"
          content="The Vincio is a concept-first advertising studio specializing in physical advertising, film, and print campaigns. We create bold, memorable brand experiences."
        />
        <meta
          name="keywords"
          content="advertising agency, advertising concepts, brand activation, physical advertising, film advertising, print advertising"
        />
      </Head>

      <main className="min-h-screen bg-background">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyUsSection />
        <SuccessStoriesSection />
        <ReviewsSection />
        <InquiryFormSection />
        <FooterSection />
      </main>
    </>
  );
}
