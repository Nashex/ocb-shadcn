import Link from "next/link";

interface Props {
  children?: React.ReactNode[];
  sections: { name: string; link: string }[];
}

export default function Aside({ sections }: Props) {
  return (
    <nav className="justify-self-end lg:flex lg:flex-col lg:gap-1 lg:p-10 w-[320px] hidden">
      <div className="text-xl">On This Page</div>
      {sections.map((item, index) => (
        <Link
          href={item.link}
          className={
            "text-sm opacity-60 hover:opacity-90 hover:transition duration-500"
          }
          key={index}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
