import FunFact from "@/components/quiz/FunFact";

export const funfact = {
  render: FunFact,
  children: ["paragraph", "tag", "list"],
  attributes: {
    title: {
      type: String,
    },
  },
};
