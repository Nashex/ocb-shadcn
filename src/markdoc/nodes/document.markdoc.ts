import Document from "@/components/markdoc/nodes/Document";
import { Tag, nodes, Node } from "@markdoc/markdoc";
import yaml from "js-yaml";

export const document = {
  ...nodes.document,
  render: Document,
  transform(node: Node, config: any) {
    return new Tag(
      this.render as unknown as any,
      {
        source: config,
        frontmatter: yaml.load(node.attributes.frontmatter),
      },
      node.transformChildren(config)
    );
  },
};
