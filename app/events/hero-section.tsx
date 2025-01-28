import React from "react";
import Image from "next/image";

export default function EventsHeroSection() {
  return (
    <section className="relative h-[400px]">
      <Image
        src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80"
        alt="Events"
        fill
        className="object-cover brightness-50"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Upcoming Events
        </h1>
      </div>
    </section>
  );
}
