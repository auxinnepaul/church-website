import { Button } from "@/components/ui/button";
import { Lightbulb } from "lucide-react";
import React from "react";

export default function AboutUsCtaSection() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <Lightbulb className="w-16 h-16 mx-auto mb-8" />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join Us This Sunday
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Experience the warmth of our community and the power of worship.
          Everyone is welcome!
        </p>
        <Button size="lg" variant="secondary">
          Plan Your Visit
        </Button>
      </div>
    </section>
  );
}
