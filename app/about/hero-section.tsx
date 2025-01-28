import React from "react";
import Image from "next/image";

export default function AboutUsHeroSection() {
  return (
    <section className="relative h-[400px]">
      <Image
        src="https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&q=80"
        alt="Church Interior"
        fill
        className="object-cover brightness-50"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Our Story</h1>
      </div>
    </section>
  );
}
