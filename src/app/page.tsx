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
    <div className="w-full mx-auto max-w-xl p-8">
      <div className="mb-8">
        <h1 className="text-xl mb-2 font-black">OCB + MDX Table of Contents</h1>
        <p>
          This is a demo of OCB + MDX + ContentLayer.{" "}
          <a
            href="https://github.com/Nashex/ocb-shadcn/tree/mdx"
            className="text-blue-500"
          >
            Here is the repo.
          </a>
        </p>
      </div>
      {toc.map((section, index) => (
        <div className="flex flex-col text-lg gap-1" key={index}>
          <h3 className="text-xl font-semibold mb-1">{section.sectionTitle}</h3>
          {section.links.map((link, index) => {
            return (
              <Link
                href={link.link}
                className="opacity-60 w-full rounded hover:opacity-100 hover:transition duration-500"
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
