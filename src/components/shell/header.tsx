"use client";

import React, { useEffect, useRef, useState } from "react";
import { CaseSensitive, Home, PanelLeftOpen } from "lucide-react";
import ControlPopover from "../controls/control-popover";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import SheetSidebar from "./sheet-sidebar";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  const [scrollingDown, setScrollingDown] = useState(true);
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const st = window.scrollY || document.documentElement.scrollTop;

      setScrollingDown(st > lastScrollTop.current);

      lastScrollTop.current = st <= 0 ? 0 : st; // Updates the scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky bg-background z-[10] top-0 h-20 transition-all overflow-hidden flex flex-row items-center sm:w-fit w-full justify-start p-4 px-9 gap-x-2",
        scrollingDown && "-translate-y-20 sm:-translate-y-0"
      )}
    >
      <Button variant="outline" size="icon">
        <Link href="/" className="flex flex-row items-center gap-2">
          <Home size={24} strokeWidth={1.5} />
        </Link>
      </Button>

      <SheetSidebar
        trigger={
          <Button variant="outline" size="icon" className="md:hidden">
            <PanelLeftOpen size={24} strokeWidth={1.5} />
          </Button>
        }
      />

      <ControlPopover
        trigger={
          <Button variant="outline" size="icon">
            <CaseSensitive size={24} strokeWidth={1.5} />
          </Button>
        }
      />
    </header>
  );
}
