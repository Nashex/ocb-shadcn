import Aside from "@/components/shell/aside";
import * as React from "react";

interface Props {
  children: React.ReactNode[];
  source: string;
}

function collectHeadings(nodes: React.ReactNode[], sections: any[] = []) {
  const elements = React.Children.toArray(nodes) as React.ReactElement[];

  for (const element of elements) {
    if (element && element.type) {
      if (
        (
          element.type as {
            name?: string;
          }
        ).name === "Heading"
      ) {
        const title = element.props?.children;

        if (typeof title === "string") {
          sections.push({
            title,
            id: `${element.props.id}`,
          });
        }
      }

      collectHeadings(element.props?.children || [], sections);
    }
  }

  return sections;
}

export default function Document({ children, source, ...rest }: Props) {
  const sections = collectHeadings(children);

  return (
    <div className="w-full flex h-full">
      <div className="w-full justify-center flex px-12">
        <div className="prose">
          <article className="text-foreground  ocb w-full transition-all">
            {children}
          </article>
        </div>
      </div>
      <Aside sections={sections} />
    </div>
  );
}
