"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation"; // Add this import

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";
import { cn } from "@/lib/utils";

export function NavBar() {
  const pathname = usePathname(); // Get current path

  const isActive = (path: string) => {
    return pathname === path;
  };
  const isDropDownActive = (paths: string[]) => {
    return paths.includes(pathname);
  };
  const navLinkStyles = (path: string) => {
    return cn(
      "group relative inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 ease-in-out",
      "before:absolute before:inset-0 before:rounded-md before:bg-blue-500 before:opacity-0 before:transition-opacity before:duration-300",
      "hover:before:opacity-10",
      "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
      isActive(path)
        ? "bg-blue-500 text-white before:opacity-100"
        : "bg-background hover:text-blue-500"
    );
  };
  const dropdownLinkStyles = (path: string[]) => {
    return cn(
      "group relative inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 ease-in-out",
      "before:absolute before:inset-0 before:rounded-md before:opacity-0 before:transition-opacity before:duration-300 before:text-black",
      "hover:before:opacity-10",
      "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
      isDropDownActive(path)
        ? "bg-blue-500 text-white before:opacity-1"
        : "bg-white hover:text-white"
    );
  };

  const dropdownTriggerStyles = cn(
    "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-300",
    "hover:bg-blue-50 hover:text-blue-500",
    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
    "data-[state=open]:bg-blue-50 data-[state=open]:text-blue-500"
  );

  return (
    <header className="w-full border-b bg-white fixed">
      <div className="mx-8">
        <div className="container flex h-16 items-center">
          {/* Logo */}
          <div className="w-40 h-8 bg-blue-600 flex items-center justify-center text-white rounded">
            Logo
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center justify-between w-[500px]">
              <NavigationMenu>
                <NavigationMenuList className="gap-2">
                  <NavigationMenuItem>
                    <NavigationMenuLink href="/" className={navLinkStyles("/")}>
                      <span className="relative z-10">Overview</span>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={`${dropdownTriggerStyles} ${dropdownLinkStyles(
                        ["/about/school", "/about/teachers", "/about"]
                      )}`}
                    >
                      About
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                        <NavigationMenuLink
                          href="/about/school"
                          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-500`}
                        >
                          <div className="text-sm font-medium leading-none">
                            Our School
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Learn about our journey and heritage
                          </p>
                        </NavigationMenuLink>
                        <NavigationMenuLink
                          href="/about/teachers"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-500"
                        >
                          <div className="text-sm font-medium leading-none">
                            Mission & Vision
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Our goals and commitments
                          </p>
                        </NavigationMenuLink>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/gallery"
                      className={navLinkStyles("/gallery")}
                    >
                      <span className="relative z-10">Gallery</span>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={`${dropdownTriggerStyles} ${dropdownLinkStyles(
                        ["/events/upcoming", "/events/calendar", "/events"]
                      )}`}
                    >
                      Events
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4">
                        <NavigationMenuLink
                          href="/events/"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-500"
                        >
                          <div className="text-sm font-medium leading-none">
                            Upcoming Events
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            See what's happening next
                          </p>
                        </NavigationMenuLink>
                        <NavigationMenuLink
                          href="/events/"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-500"
                        >
                          <div className="text-sm font-medium leading-none">
                            Academic Calendar
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Important dates and schedules
                          </p>
                        </NavigationMenuLink>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/contact"
                      className={navLinkStyles("/contact")}
                    >
                      <span className="relative z-10">Contact Us</span>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </ul>
          </nav>

          {/* Rest of the code remains the same */}
          {/* Mobile Navigation */}
          <div className="flex md:hidden flex-1 justify-end">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4">
                  <Link
                    href="/"
                    className={cn(
                      "text-lg font-semibold p-2 rounded-md transition-colors",
                      isActive("/") && "bg-blue-500 text-white"
                    )}
                  >
                    Overview
                  </Link>
                  <Link
                    href="/about"
                    className={cn(
                      "text-lg font-semibold p-2 rounded-md transition-colors",
                      isActive("/about") && "bg-blue-500 text-white"
                    )}
                  >
                    About
                  </Link>
                  <Link
                    href="/gallery"
                    className={cn(
                      "text-lg font-semibold p-2 rounded-md transition-colors",
                      isActive("/gallery") && "bg-blue-500 text-white"
                    )}
                  >
                    Gallery
                  </Link>
                  <div className="space-y-3">
                    <div className="font-semibold text-lg">Events</div>
                    <Link
                      href="/events/upcoming"
                      className={cn(
                        "block pl-4 p-2 rounded-md transition-colors",
                        isActive("/events/upcoming") && "bg-blue-500 text-white"
                      )}
                    >
                      Upcoming Events
                    </Link>
                    <Link
                      href="/events/calendar"
                      className={cn(
                        "block pl-4 p-2 rounded-md transition-colors",
                        isActive("/events/calendar") && "bg-blue-500 text-white"
                      )}
                    >
                      Academic Calendar
                    </Link>
                  </div>
                  <Link
                    href="/contact"
                    className={cn(
                      "text-lg font-semibold p-2 rounded-md transition-colors",
                      isActive("/contact") && "bg-blue-500 text-white"
                    )}
                  >
                    Contact Us
                  </Link>
                  <div className="mt-4 pt-4 border-t">
                    <Button
                      variant="outline"
                      className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    >
                      Apply Now
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Apply Now Button */}
          <InteractiveHoverButton className="hidden md:inline-flex border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white ml-4">
            Apply Now
          </InteractiveHoverButton>
        </div>
      </div>
    </header>
  );
}
