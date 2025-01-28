import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Dribbble as Bible } from "lucide-react";
import React from "react";

export default function MissionVisionSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">Our Vision & Mission</h2>
          <p className="text-lg text-muted-foreground">
            To be a beacon of hope, love, and transformation in our community,
            leading people to a life-changing relationship with Jesus Christ.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Love God</h3>
                <p className="text-sm text-muted-foreground">
                  Through worship and devotion
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Love People</h3>
                <p className="text-sm text-muted-foreground">
                  Through fellowship and service
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Bible className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="font-semibold mb-2">Make Disciples</h3>
                <p className="text-sm text-muted-foreground">
                  Through teaching and mentoring
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
