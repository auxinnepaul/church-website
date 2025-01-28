import AboutUsHeroSection from "./hero-section";
import MissionVisionSection from "./mission-vision-section";
import StaffSection from "./staff-section";
import AboutUsCtaSection from "./cta-section";

export default function AboutPage() {
  return (
    <div className="bg-background">
      <AboutUsHeroSection />
      <MissionVisionSection />
      <StaffSection />
      <AboutUsCtaSection />
    </div>
  );
}
