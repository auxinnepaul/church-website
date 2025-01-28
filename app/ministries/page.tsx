import MinistriesHeroSection from "./hero-section";
import MinistriesGrid from "./ministries-grid";
import MinistriesCtaSection from "./cta-section";

export default function MinistriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <MinistriesHeroSection />
      <MinistriesGrid />
      <MinistriesCtaSection />
    </div>
  );
}
