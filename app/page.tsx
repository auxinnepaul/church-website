import AboutCalendarSection from "@/components/landing-page/about-calendar-section";
import FeatureSection from "@/components/landing-page/feature-section";
import HeroSection from "@/components/landing-page/hero-section";
import ServiceTimes from "@/components/landing-page/service-times";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeatureSection />
      <ServiceTimes />
      <AboutCalendarSection />
    </div>
  );
}
