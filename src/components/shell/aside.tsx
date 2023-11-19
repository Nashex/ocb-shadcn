"use client";

import Link from "next/link";

interface Props {
  children?: React.ReactNode[];
  sections: { title: string; id: string }[];
}

export default function Aside({ sections }: Props) {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="hidden md:block md:w-[320px] px-9 py-4 sticky top-20 h-full">
      <h4 className="text-lg font-semibold mb-2">On This Page</h4>
      <div className="flex flex-col gap-2">
        {sections.map(({ title, id }, index) => (
          <Link
            href={`#${id}`}
            className={
              "text-left leading-tight opacity-60 hover:opacity-100 transition duration-500"
            }
            onClick={() => scrollTo(id)}
            scroll={false}
            key={index}
          >
            {title}
          </Link>
        ))}
      </div>
    </aside>
  );
}
