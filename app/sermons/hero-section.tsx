import React from "react";
import Image from "next/image";

export default function SermonsHeroSection() {
  return (
    <section className="relative h-[300px]">
      <Image
        src="https://images.unsplash.com/photo-1490127252417-7c393f993ee4?auto=format&fit=crop&q=80"
        alt="Sermons"
        fill
        className="object-cover brightness-50"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">Sermons</h1>
      </div>
    </section>
  );
}
