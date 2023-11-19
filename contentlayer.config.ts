// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";

export const Content = defineDocumentType(() => ({
  name: "Content",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (post) => `/content/${post._raw.flattenedPath}`,
    },
    headers: {
      type: "list",
      resolve: (post) => {
        const headers = post.body.raw.match(/#+\s+(.*)/g);
        if (!headers) return [];
        return headers.map((header) => header.replace(/#+\s+/, ""));
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Content],
});
