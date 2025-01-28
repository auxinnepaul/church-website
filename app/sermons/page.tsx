import SermonsHeroSection from "./hero-section";
import FeaturedSermon from "./featured-sermon";
import SermonGrid from "./sermon-grid";

export default function SermonsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SermonsHeroSection />
      <FeaturedSermon />
      <SermonGrid />
    </div>
  );
}
