"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  Dribbble as Bible,
  Calendar,
  Church,
  Heart,
  Menu,
  MessageCircle,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "../theme-toggle";

const routes = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Sermons", path: "/sermons" },
  { name: "Ministries", path: "/ministries" },
  { name: "Events", path: "/events" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-primary">
            <Church className="h-6 w-6" />
            <span className="font-bold text-lg">
              {process.env.NEXT_PUBLIC_CHURCH_NAME}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === route.path
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {route.name}
              </Link>
            ))}
            <Link href={"/give"}>
              <Button>Give</Button>
            </Link>
            <ThemeToggle />
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    href={route.path}
                    className="flex items-center gap-2 text-lg font-medium p-2 rounded-lg hover:bg-muted"
                  >
                    {route.path === "/" && <Church className="h-5 w-5" />}
                    {route.path === "/about" && <Heart className="h-5 w-5" />}
                    {route.path === "/sermons" && (
                      <MessageCircle className="h-5 w-5" />
                    )}
                    {route.path === "/ministries" && (
                      <Users className="h-5 w-5" />
                    )}
                    {route.path === "/events" && (
                      <Calendar className="h-5 w-5" />
                    )}
                    {route.path === "/give" && <Bible className="h-5 w-5" />}
                    {route.name}
                  </Link>
                ))}
                <Button className="mt-4">Join Us</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
