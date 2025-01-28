import GiveHeroSection from "./hero-section";
import GiveOptionsSection from "./give-options";
import ImpactSection from "./impact-section";
import FAQsection from "./FAQ-section";

export default function GivePage() {
  return (
    <div className="min-h-screen bg-background">
      <GiveHeroSection />
      <GiveOptionsSection />
      <ImpactSection />
      <FAQsection />
    </div>
  );
}
