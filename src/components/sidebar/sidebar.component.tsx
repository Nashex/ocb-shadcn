import Link from "next/link";
import sidebarItems from "./sidebarItems.json";

export default function Sidebar() {
  return (
    <nav className="flex flex-col gap-1 p-10 w-[320px]">
      {sidebarItems.map((item: any) => (
        <div className="flex flex-col gap-1">
          <div className="text-lg">{item.title}</div>
          {item.links.map((link: any) => (
            <Link
              key={link.link}
              href={link.link}
              className="font-extralight text-sm hover:font-normal hover:transition ease-in-out duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>
      ))}
    </nav>
  );
}
