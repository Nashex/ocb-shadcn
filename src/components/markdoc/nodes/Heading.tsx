import * as React from "react";

interface Props {
  id?: string;
  level?: number;
  children: React.ReactNode;
  className?: string;
}

export function Heading({ id = "", level = 1, children, className }: Props) {
  const classes = [
    "text-base/[0]",
    "text-lg/[0]",
    "text-xl/[0]",
    "text-2xl/[0]",
  ];
  const sizeClass = classes[Math.max(classes.length - level, 0)];

  return React.createElement(
    `h${level}`,
    {
      id,
      className: ["font-bold my-2 leading-tight", sizeClass, className]
        .filter(Boolean)
        .join(" "),
    },
    children
  );
}
