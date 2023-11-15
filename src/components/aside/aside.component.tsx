import Link from "next/link";
import asideItems from "./asideItems.json";

export default function Aside() {
  return (
    <nav className="justify-self-end lg:flex lg:flex-col lg:gap-1 lg:p-10 w-[320px] hidden">
      <div className="text-xl">On This Page</div>
      {asideItems.map((item: any) => (
        <Link
          key={item.link}
          href={item.link}
          className={
            "text-sm opacity-60 hover:opacity-90 hover:transition duration-500"
          }
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
