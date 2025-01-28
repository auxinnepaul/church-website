import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, Heart, Landmark, Sparkles } from "lucide-react";
import React from "react";

export default function GiveOptionsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Landmark className="h-5 w-5 text-primary" />
                Online Giving
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Make a secure online donation through our giving platform.
              </p>
              <Button className="w-full">Give Now</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                Recurring Gifts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Set up automatic recurring donations on a schedule that works
                for you.
              </p>
              <Button variant="outline" className="w-full">
                Set Up
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Gift className="h-5 w-5 text-primary" />
                Text to Give
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Text any amount to our giving number for quick and easy
                donations.
              </p>
              <Button variant="outline" className="w-full">
                Learn How
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Special Offerings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Support our special campaigns and mission projects.
              </p>
              <Button variant="outline" className="w-full">
                View Projects
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
