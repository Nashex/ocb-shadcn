import Link from "next/link";
import asideItems from "./asideItems.json";

export default function Aside() {
  return (
    <nav className="lg:flex lg:flex-col lg:gap-1 lg:p-10 w-[320px] hidden">
      <div className="text-xl">On This Page</div>
      {asideItems.map((item: any) => (
        <Link
          key={item.link}
          href={item.link}
          className="font-extralight text-sm hover:font-normal hover:transition ease-in-out duration-200"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
