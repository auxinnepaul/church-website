import React from "react";
import Image from "next/image";

export default function GiveHeroSection() {
  return (
    <section className="relative h-[400px]">
      <Image
        src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80"
        alt="Give"
        fill
        className="object-cover brightness-50"
      />
      <div className="absolute inset-0 flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Supporting Our Mission
          </h1>
          <p className="text-lg text-white/90">
            Your generous giving helps us spread God&apos;s love and make a
            difference in our community.
          </p>
        </div>
      </div>
    </section>
  );
}
