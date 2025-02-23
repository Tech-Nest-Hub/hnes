"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

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
import { ShineBorder } from "./magicui/shine-border";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";

export function NavBar() {


  return (
    <header className="w-full border-b bg-white fixed">
      <div className="mx-8">
        <div className="container flex h-16 items-center">
          {/* Logo */}
          <div className="w-40 h-8 bg-red-600 flex items-center justify-center text-white rounded">
            Logo
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center justify-between w-[600px]">
              <NavigationMenu>
                <NavigationMenuList>
                  
                  <NavigationMenuItem>
                    
                     
                    
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </ul>
          </nav>

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
                <NavigationMenu>
                <NavigationMenuList>
                  
                  <NavigationMenuItem>
                    Hello
                     
                    
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
                  {/* Add Apply Now button at the bottom of mobile menu */}
                  <div className="mt-4 pt-4 border-t">
                    <Button
                      variant="outline"
                      className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                    >
                      Apply Now
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Apply Now Button */}
          <InteractiveHoverButton
            className="hidden md:inline-flex border-red-600 text-red-600 hover:bg-red-600 hover:text-white ml-4"
          >
            Apply Now
        </InteractiveHoverButton>
        </div>
      </div>
    </header>
  );
}
