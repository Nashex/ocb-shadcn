"use client";
import Link from "next/link";
import sections from "./sidebarItems.json";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <nav className="sm:flex sm:flex-col sm:gap-1 sm:p-10 sm:w-[320px] hidden">
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
