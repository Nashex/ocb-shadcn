"use client";

import { useState } from "react";

type QuizQuestionProps = {
  answer: number;
  children: any;
};

export default function QuizQuestion({ answer, children }: QuizQuestionProps) {
  const question = children[0].props.children;
  const options = children[1].props.children.map(
    (option: any) => option.props.children
  );
  const [selectedAnswer, setSelectedAnswer] = useState<number>(-1);

  const getButtonStyling = (index: number) => {
    const base = "rounded-full text-left py-2 px-4 ";
    if (index === selectedAnswer && index + 1 === answer) {
      return base + "border border-green-600 text-green-600";
    } else if (index === selectedAnswer) {
      return base + "border border-red-600 text-red-600";
    }
    return base + "border";
  };

  return (
    <div className="flex flex-col gap-4 border rounded-lg p-4 my-4">
      <div className="font-semibold text-purple-800">{question}</div>
      <div className="flex flex-col gap-2">
        {options.map((option: string, index: number) => (
          <button
            key={index}
            onClick={() =>
              selectedAnswer === index
                ? setSelectedAnswer(-1)
                : setSelectedAnswer(index)
            }
            className={getButtonStyling(index)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
