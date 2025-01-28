"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { CalendarIcon, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

const events = [
  {
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "9:00 AM & 11:00 AM",
    location: "Main Sanctuary",
    image:
      "https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&q=80",
  },
  {
    title: "Youth Night",
    date: "Every Wednesday",
    time: "6:30 PM",
    location: "Youth Center",
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80",
  },
  {
    title: "Bible Study",
    date: "Every Thursday",
    time: "7:00 PM",
    location: "Fellowship Hall",
    image:
      "https://images.unsplash.com/photo-1507409613952-518459ac866f?auto=format&fit=crop&q=80",
  },
];

export default function CalendarSection() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-8">Regular Events</h2>
            <div className="grid gap-6">
              {events.map((event, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="relative h-48 md:h-full">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="md:col-span-2 p-6">
                      <CardTitle className="mb-4">{event.title}</CardTitle>
                      <div className="space-y-2 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <CalendarIcon className="h-4 w-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      <Button className="mt-4">Learn More</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Event Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Plan Your Visit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Want to join us for an event? We&apos;d love to have you!
                </p>
                <Button className="w-full">Get Directions</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
