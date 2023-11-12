import * as React from "react";

interface Props {
  id?: string;
  level?: number;
  children: React.ReactNode;
  className?: string;
}

export function Heading({ id = "", level = 1, children, className }: Props) {
  const classes = ["text-base", "text-lg", "text-xl", "text-2xl"];
  const sizeClass = classes[Math.max(classes.length - level, 0)];

  return React.createElement(
    `h${level}`,
    {
      id,
      className: ["font-bold", sizeClass, className]
        .filter(Boolean)
        .join(" "),
    },
    children
  );
}
