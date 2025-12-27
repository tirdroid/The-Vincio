import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { SuccessStoriesSection } from "@/components/SuccessStoriesSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { InquiryFormSection } from "@/components/InquiryFormSection";
import { FooterSection } from "@/components/FooterSection";
import { Helmet } from "react-helmet-async";

export default function Index() {
  return (
    <>
      <Helmet>
        <title>The Vincio | Unique Advertising Concepts for the Real World</title>
        <meta name="description" content="The Vincio is a concept-first advertising studio specializing in physical advertising, film, and print campaigns. We create bold, memorable brand experiences." />
        <meta name="keywords" content="advertising agency, advertising concepts, brand activation, physical advertising, film advertising, print advertising" />
      </Helmet>
      
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
