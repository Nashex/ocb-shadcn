"use client";
import Link from "next/link";
import sections from "../../../toc.json";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <nav className="hidden sm:block sm:w-[320px] px-9 py-4 sticky top-20 h-full">
      {sections.map((section, index) => (
        <div className="flex flex-col gap-1" key={index}>
          <h3 className="text-lg font-semibold mb-2">{section.sectionTitle}</h3>
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
    </nav>
  );
}
