import Link from "next/link";
import sidebarItems from "./sidebarItems.json";

export default function Sidebar() {
  return (
    <nav className="flex flex-col gap-1 p-4 mx-auto">
      <div className="font-semibold">Table of Contents</div>
      {sidebarItems.map((item) => (
        <Link key={item.name} href={item.link} className="">
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
