import React from "react";
import Image from "next/image";

export default function StaffSection() {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Leadership</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="group relative">
              <div className="aspect-square overflow-hidden rounded-lg">
                <Image
                  src={`https://images.unsplash.com/photo-${
                    i === 1
                      ? "1573497019940-1c28c88b4f3e"
                      : i === 2
                      ? "1573496359142-b089c2a197f0"
                      : "1573497019658-92dd1b39140c"
                  }?auto=format&fit=crop&q=80`}
                  alt="Staff member"
                  width={400}
                  height={400}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-semibold">Pastor John Doe {i}</h3>
                <p className="text-sm text-muted-foreground">
                  {i === 1
                    ? "Senior Pastor"
                    : i === 2
                    ? "Worship Pastor"
                    : "Youth Pastor"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
