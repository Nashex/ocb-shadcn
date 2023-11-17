import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ControlMenu from "@/components/control-menu/control-menu.component";
import Sidebar from "@/components/sidebar/sidebar.component";
import Aside from "@/components/aside/aside.component";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OCB ShadCN Demo",
  description: "Minimal ShadCN Demo for OpenCourseBook",
};

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
          });
        }
      }

      collectHeadings(element.props?.children || [], sections);
    }
  }

  return sections;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // console.log(children.props.template);
  // const sections = collectHeadings(children);
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
        <main className="flex flex-col items-center justify-between">
          <div className="p-4 max-w-5xl w-full">
            <ControlMenu />
          </div>
          <div className="flex w-full">
            <Sidebar />
            <article className="ocb art p-4 w-full max-w-5xl mx-auto">
              {children}
            </article>
            <Aside sections={[]} />
            {/* <article className="w-full">{children}</article>
      <div>Define aside here</div> */}
          </div>
        </main>
      </body>
    </html>
  );
}
