import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import {
  Dribbble as Bible,
  BookOpen,
  Heart,
  Music,
  PenTool,
  Users,
} from "lucide-react";

const ministries = [
  {
    title: "Children's Ministry",
    description:
      "Nurturing young hearts and minds in faith through engaging activities and biblical teaching.",
    icon: Heart,
    image:
      "https://images.unsplash.com/photo-1602052793312-b99c2a9ee797?auto=format&fit=crop&q=80",
  },
  {
    title: "Youth Ministry",
    description:
      "Empowering teenagers to grow in their faith journey through fellowship and mentorship.",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80",
  },
  {
    title: "Music Ministry",
    description:
      "Leading the congregation in worship through contemporary and traditional music.",
    icon: Music,
    image:
      "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&q=80",
  },
  {
    title: "Bible Study",
    description:
      "Deep diving into God's word through structured study and meaningful discussions.",
    icon: Bible,
    image:
      "https://images.unsplash.com/photo-1507409613952-518459ac866f?auto=format&fit=crop&q=80",
  },
  {
    title: "Adult Education",
    description:
      "Continuing spiritual education and growth for adults through various programs.",
    icon: BookOpen,
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80",
  },
  {
    title: "Creative Arts",
    description:
      "Expressing faith through various art forms including drama, dance, and visual arts.",
    icon: PenTool,
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&q=80",
  },
];

export default function MinistriesGrid() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ministries.map((ministry, index) => (
            <Card key={index} className="group overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={ministry.image}
                  alt={ministry.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ministry.icon className="h-5 w-5 text-primary" />
                  {ministry.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {ministry.description}
                </p>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
