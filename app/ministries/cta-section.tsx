import { Button } from "@/components/ui/button";
import React from "react";

export default function MinistriesCtaSection() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Get Involved</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Your gifts and talents can make a difference. Join one of our ministry
          teams and be part of something meaningful.
        </p>
        <Button variant="secondary" size="lg">
          Volunteer Today
        </Button>
      </div>
    </section>
  );
}
