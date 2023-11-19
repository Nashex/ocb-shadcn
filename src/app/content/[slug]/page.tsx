import { allContents } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { useMDXComponent } from "next-contentlayer/hooks";
import { mdxComponents } from "@/components/mdx";
import { generateID } from "@/lib/utils";
import InlineAside from "@/components/shell/inline-aside";

export const generateStaticParams = async () =>
  allContents.map((content) => ({ slug: content._raw.flattenedPath }));

const ContentPage = ({ params }: { params: { slug: string } }) => {
  const content = allContents.find(
    (content) => content._raw.flattenedPath === params.slug
  );
  if (!content) notFound();

  const MDXContent = useMDXComponent(content.body.code);

  const outline = content.headers.map((header: string) => ({
    title: header,
    id: generateID(header),
  }));

  return (
    <div className="w-full justify-center flex flex-col items-start px-12">
      <InlineAside sections={outline} />

      <div className="prose">
        {/* Temporary workaround, need to move ocb class into a lower CSS layer to override prose */}
        <article className="text-foreground prose-headings:text-foreground ocb w-full transition-all">
          <MDXContent components={mdxComponents} />
        </article>
      </div>
    </div>
  );
};

export default ContentPage;
