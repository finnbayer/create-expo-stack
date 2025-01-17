// Import React and other necessary modules
import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { SIDEBAR } from "@/consts";
import { cn } from "@/lib/utils";

// Define the MobileNav component
export default function MobileNav() {
  // State to manage the sheet open/closed state
  const [open, setOpen] = useState(false);

  // Extracting the "Create Expo Stack" array from the consts
  const createExpoStackArray = SIDEBAR.en?.["Getting Started"];

  return (
    // Sheet component for mobile navigation
    <Sheet open={open} onOpenChange={setOpen}>
      {/* SheetTrigger to toggle the sheet */}
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      {/* SheetContent with left side alignment */}
      <SheetContent side="left" className="pr-0">
        {/* Logo and app name */}
        <a href="/" className="mr-6 flex items-center space-x-2">
          <div>
            <img
              className="block dark:hidden"
              width="28"
              height="28"
              src="/logo-light.svg"
              alt="Create Expo Stack Logo Dark"
            />
            <img
              className="hidden dark:block"
              width="28"
              height="28"
              src="/logo-dark.svg"
              alt="Create Expo Stack Logo Light"
            />
          </div>
          <span className="font-bold  inline-block">Create Expo Stack</span>
        </a>
        {/* Scrollable area for navigation links */}
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-10">
          <div className="flex flex-col space-y-3">
            {/* Map through the navigation array to create links */}
            {createExpoStackArray?.map((item, idx) => (
              <div key={idx}>
                {/* MobileLink component for each navigation link */}
                <a
                  href={`/${item.link}`}
                  onClick={() => setOpen(false)}
                  className="flex items-start"
                >
                  {item.text}
                </a>
              </div>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
