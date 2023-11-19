import FunFact from "@/components/markdoc/tags/quiz/FunFact";

export const funfact = {
  render: FunFact,
  children: ["paragraph", "tag", "list"],
  attributes: {
    title: {
      type: String,
    },
  },
};
