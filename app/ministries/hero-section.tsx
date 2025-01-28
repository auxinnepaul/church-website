import React from "react";
import Image from "next/image";

export default function MinistriesHeroSection() {
  return (
    <section className="relative h-[400px]">
      <Image
        src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80"
        alt="Ministries"
        fill
        className="object-cover brightness-50"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Our Ministries
        </h1>
      </div>
    </section>
  );
}
