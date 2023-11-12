import QuizQuestion from "@/components/quiz/QuizQuestion";

export const quiz = {
  render: QuizQuestion,
  children: ["paragraph", "tag", "list"],
  attributes: {
    answer: {
      type: Number,
    },
  },
};
