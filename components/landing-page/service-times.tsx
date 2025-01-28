import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Clock, Music, Users } from "lucide-react";

export default function ServiceTimes() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Sunday Services
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>9:00 AM - Early Service</li>
              <li>11:00 AM - Main Service</li>
              <li>6:00 PM - Evening Service</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Community Groups
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Wednesday 7:00 PM - Bible Study</li>
              <li>Thursday 6:30 PM - Youth Group</li>
              <li>Saturday 10:00 AM - Women&apos;s Fellowship</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Music className="h-5 w-5" />
              Choir Practice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>Tuesday 7:00 PM - Adult Choir</li>
              <li>Thursday 5:00 PM - Youth Choir</li>
              <li>Sunday 8:00 AM - Worship Team</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
