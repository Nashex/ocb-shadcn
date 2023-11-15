"use client";
import Link from "next/link";
import sections from "./sidebarItems.json";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col gap-1 p-10 w-[320px]">
      {sections.map((section, index) => (
        <div className="flex flex-col gap-1">
          <div className="text-xl">{section.sectionTitle}</div>
          {section.links.map((link: any) => {
            const isActive = pathname === link.link;
            return (
              <Link
                key={link.link}
                href={link.link}
                className={
                  isActive
                    ? "text-sm font-[700]"
                    : "text-sm opacity-60 hover:opacity-90 hover:transition duration-500"
                }
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
