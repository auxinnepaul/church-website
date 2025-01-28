import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section className="relative h-[600px]">
      <Image
        src="https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&q=80"
        alt="Church"
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white space-y-6 max-w-3xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold">
            Welcome to {process.env.NEXT_PUBLIC_CHURCH_NAME}
          </h1>
          <p className="text-xl md:text-2xl">
            Join us in worship, fellowship, and spiritual growth
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
            Join Us This Sunday <ChevronRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
