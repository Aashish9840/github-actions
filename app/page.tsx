"use client";
import { useRef, useState } from "react";

export default function Home() {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const [input, setInput] = useState<string[]>(["", "", "", ""]);

  const handleInputChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = e.target.value;
    console.log("hello");
    if (/^[0-9]?$/.test(inputValue)) {
      const newInput = [...input];
      newInput[index] = inputValue;
      setInput(newInput);
      if (index < input.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const key = e.key;
    if (key === "Backspace") {
      e.preventDefault();
      if (input[index] === "") {
        inputRefs.current[index - 1]?.focus();
        return;
      } else {
        const newInput = [...input];
        newInput[index] = "";
        setInput(newInput);
        inputRefs.current[index]?.focus();
        return;
      }
    }
  };

  console.log(input, "input value");

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1>Welcome to Next.js!</h1>
      <h2>This is my new next js project</h2>

      <div className="space-y-1">
        <div className="flex gap-4 items-center">
          {input.map((item, index) => (
            <input
              key={index}
              value={item}
              maxLength={1}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onChange={(e) => handleInputChange(index, e)}
              ref={(el) => {
                if (el) {
                  inputRefs.current[index] = el;
                }
              }}
              className="border-2 border-gray-300 rounded-md p-2 h-16 w-16 text-center"
            />
          ))}
        </div>
        <button className="bg-blue-500 text-white rounded-md p-2">
          {" "}
          Click
        </button>
      </div>
    </main>
  );
}
