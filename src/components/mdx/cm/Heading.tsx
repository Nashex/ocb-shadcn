import { generateID } from "@/lib/utils";
import React from "react";

export default function Heading({
  level = 1,
  children,
}: {
  level?: number;
  children: React.ReactNode;
}) {
  const classes = ["text-base", "text-lg", "text-xl", "text-2xl"];
  const sizeClass = classes[Math.max(classes.length - level, 0)];

  const id = generateID(children);

  return React.createElement(
    `h${level}`,
    {
      id,
      className: ["not-prose font-bold my-2 leading-tight", sizeClass]
        .filter(Boolean)
        .join(" "),
    },
    children
  );
}
