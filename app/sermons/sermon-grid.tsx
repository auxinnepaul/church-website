import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Headphones, PlayCircle } from "lucide-react";
import React from "react";
import Image from "next/image";

export default function SermonGrid() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="overflow-hidden">
              <div className="relative aspect-video">
                <Image
                  src={`https://images.unsplash.com/photo-${
                    i % 2 === 0
                      ? "1490127252417-7c393f993ee4"
                      : "1616442830389-0ad0c8a5a42c"
                  }?auto=format&fit=crop&q=80`}
                  alt="Sermon Thumbnail"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <PlayCircle className="w-12 h-12 text-white hover:text-primary cursor-pointer transition-colors" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">
                  {i % 2 === 0
                    ? "Finding Peace in Chaos"
                    : "The Power of Prayer"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {i % 2 === 0
                    ? "Learn how to find God's peace in the midst of life's storms."
                    : "Understanding the transformative power of prayer in our daily lives."}
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm">
                  <PlayCircle className="mr-2 h-4 w-4" /> Watch
                </Button>
                <Button variant="ghost" size="sm">
                  <Headphones className="mr-2 h-4 w-4" /> Listen
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
