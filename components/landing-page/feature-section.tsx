import React from "react";
import { Card, CardContent } from "../ui/card";
import { Dribbble as Bible, Lightbulb, HandHeart } from "lucide-react";

export default function FeatureSection() {
  return (
    <section className="relative -mt-20 z-10 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-primary text-primary-foreground hover:scale-105 transition-transform duration-300">
            <CardContent className="p-8 text-center space-y-4">
              <Bible className="w-12 h-12 mx-auto" />
              <h3 className="text-xl font-semibold">Biblical Teaching</h3>
              <p className="text-primary-foreground/90">
                Discover the transformative power of God&apos;s Word through
                engaging and relevant teaching.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-secondary text-secondary-foreground md:-mt-8 hover:scale-105 transition-transform duration-300">
            <CardContent className="p-8 text-center space-y-4">
              <HandHeart className="w-12 h-12 mx-auto text-primary" />
              <h3 className="text-xl font-semibold">Community Service</h3>
              <p className="text-muted-foreground">
                Making a difference in our community through acts of service and
                compassion.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-primary text-primary-foreground hover:scale-105 transition-transform duration-300">
            <CardContent className="p-8 text-center space-y-4">
              <Lightbulb className="w-12 h-12 mx-auto" />
              <h3 className="text-xl font-semibold">Spiritual Growth</h3>
              <p className="text-primary-foreground/90">
                Nurturing your faith journey through fellowship, prayer, and
                discipleship.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
