"use client";

import { MouseEventHandler, useState } from "react";

export default function FunFact({ children }: { children: any }) {
  const [selection, setSelection] = useState(-1);
  const onClick = (num: number) => {
    if (num === selection) {
      setSelection(-1);
    } else {
      setSelection(num);
    }
  };
  return (
    <div className="bg-gray-100 rounded-2xl p-4 my-4">
      <div className="text-xl text-purple-700 font-semibold">💡 Fun Fact</div>
      <div className="text-gray-600 p-4">{children}</div>
      <div className="flex items-center gap-4 text-gray-500 text-xl">
        <div className="text-xs">How would you rate this fact?</div>
        <button
          onClick={() => onClick(0)}
          className={
            selection === 0 ? "border border-green-500 rounded-xl p-1" : ""
          }
        >
          😁
        </button>
        <button
          onClick={() => onClick(1)}
          className={
            selection === 1 ? "border border-red-500 rounded-xl p-1" : ""
          }
        >
          😔
        </button>
      </div>
    </div>
  );
}
