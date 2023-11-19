"use client";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
  children?: React.ReactNode[];
  sections: { title: string; id: string }[];
}

export default function InlineAside({ sections }: Props) {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Accordion type="single" collapsible className="md:hidden w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-base font-semibold mb-2">
          Contents on This Page
        </AccordionTrigger>
        <AccordionContent>
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
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
