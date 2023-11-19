// app/page.tsx
import Link from "next/link";
import { allContents, Content } from "contentlayer/generated";
import toc from "../../toc.json";

function ContentCard(post: Content) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {post.title}
        </Link>
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <div className="w-full py-8">
      <h1 className="mb-8 text-center text-2xl font-black">
        OCB + MDX Table of Contents
      </h1>
      {toc.map((section, index) => (
        <div className="flex flex-col text-lg gap-1" key={index}>
          <h3 className="text-xl font-semibold mb-1">{section.sectionTitle}</h3>
          {section.links.map((link, index) => {
            return (
              <Link
                href={link.link}
                className="opacity-60 w-full border border-border p-2 rounded hover:opacity-100 hover:transition duration-500"
                key={index}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      ))}
    </div>
  );
}
