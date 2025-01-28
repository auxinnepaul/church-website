"use client";

import { useState } from "react";
import { Church, Heart, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";

export default function AboutCalendarSection() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">About Our Church</h2>
          <p className="text-lg text-muted-foreground">
            {process.env.NEXT_PUBLIC_CHURCH_DESCRIPTION}
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Heart className="h-5 w-5 text-primary" />
              <span>Inclusive and welcoming community</span>
            </div>
            <div className="flex items-center gap-3">
              <Church className="h-5 w-5 text-primary" />
              <span>Traditional and contemporary worship</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Located in the heart of the community</span>
            </div>
          </div>
          <Button variant="outline">Learn More About Us</Button>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Upcoming Events</h2>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
      </div>
    </section>
  );
}
