"use client";

import { usePathname } from "next/navigation";
import React from "react";
import sections from "../../../toc.json";
import { cn } from "@/lib/utils";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = { trigger?: React.ReactNode };

export default function SheetSidebar({ trigger }: Props) {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        {trigger || <Button aria-label="Table of Contents">Open</Button>}
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader className="text-left pb-4 border-b mb-4">
          <SheetTitle>Table of Contents</SheetTitle>
        </SheetHeader>
        {sections.map((section, index) => (
          <div className="flex flex-col text-sm gap-1" key={index}>
            <h3 className="text-base font-semibold mb-1">
              {section.sectionTitle}
            </h3>
            {section.links.map((link, index) => {
              const isActive = pathname === link.link;
              return (
                <Link
                  href={link.link}
                  className={cn(
                    "opacity-60 hover:opacity-100 hover:transition duration-500",
                    isActive && "font-semibold opacity-100"
                  )}
                  key={index}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        ))}
      </SheetContent>
    </Sheet>
  );
}
