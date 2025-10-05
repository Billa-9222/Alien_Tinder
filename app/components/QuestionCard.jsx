"use client";

export default function QuestionCard({ question, answers, selected, onSelect }) {
  return (
    <div className="bg-[url('/questionCube.png')] bg-contain bg-center bg-no-repeat h-[480px] w-[90%] rounded-2xl pl-48 pr-48 p-10 text-white mb-10 ">
      <h2 className="text-3xl font-semibold mb-6 break-words leading-snug text-left">
        {question}
      </h2>
      <div className="flex flex-col space-y-3 ">
        {answers.map((answer, index) => (
          <label
            key={index}
            className="flex items-center space-x-3 cursor-pointer text-2xl"
          >
            <input
              type="radio"
              name={question}
              className="accent-purple-400"
              checked={selected === answer.meteor}
              onChange={() => onSelect(answer.meteor)}
            />
            <span>{answer.text}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
