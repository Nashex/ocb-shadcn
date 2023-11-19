import { Tag } from "@markdoc/markdoc";
import { Heading } from "@/components/markdoc/nodes/Heading";
import { generateID } from "@/lib/utils";

export const heading = {
  render: Heading,
  children: ["inline"],
  attributes: {
    id: { type: String },
    level: { type: Number, required: true, default: 1 },
    className: { type: String },
  },
  transform(node: any, config: any) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);
    const id = generateID(children, attributes);

    return new Tag(this.render as any, { ...attributes, id }, children);
  },
};
