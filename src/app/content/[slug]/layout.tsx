import Aside from "@/components/shell/aside";
import { generateID } from "@/lib/utils";
import { allContents } from "contentlayer/generated";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

export default function ContentLayout({ children, params }: Props) {
  const content = allContents.find(
    (content) => content._raw.flattenedPath === params.slug
  );
  if (!content) notFound();

  const outline = content.headers.map((header: string) => ({
    title: header,
    id: generateID(header),
  }));

  return (
    <div className="w-full flex h-full">
      {children}
      <Aside sections={outline} />
    </div>
  );
}

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const content = allContents.find(
    (content) => content._raw.flattenedPath === params.slug
  );
  if (!content) throw new Error(`Content not found for slug: ${params.slug}`);
  return { title: content.title };
};
