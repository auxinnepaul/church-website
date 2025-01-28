import React from "react";

export default function ImpactSection() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Your Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">1,000+</div>
            <div className="text-lg font-medium mb-1">Families Supported</div>
            <p className="text-muted-foreground">
              Through our community outreach programs
            </p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-lg font-medium mb-1">Mission Projects</div>
            <p className="text-muted-foreground">
              Both local and international missions
            </p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-lg font-medium mb-1">Transparency</div>
            <p className="text-muted-foreground">In how your gifts are used</p>
          </div>
        </div>
      </div>
    </section>
  );
}
