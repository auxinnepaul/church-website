import React from "react";
import Image from "next/image";
import { Headphones, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FeaturedSermon() {
  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8">Latest Sermon</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1616442830389-0ad0c8a5a42c?auto=format&fit=crop&q=80"
              alt="Sermon Thumbnail"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircle className="w-16 h-16 text-white hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Walking in Faith</h3>
            <p className="text-muted-foreground">
              Discover how to strengthen your faith and trust in God&apos;s
              promises through life&apos;s challenges.
            </p>
            <div className="flex items-center gap-4">
              <Button>
                <PlayCircle className="mr-2 h-4 w-4" /> Watch Now
              </Button>
              <Button variant="outline">
                <Headphones className="mr-2 h-4 w-4" /> Listen
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
