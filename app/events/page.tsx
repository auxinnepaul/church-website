import EventsHeroSection from "./hero-section";
import CalendarSection from "./calendar-section";

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-background">
      <EventsHeroSection />
      <CalendarSection />
    </div>
  );
}
