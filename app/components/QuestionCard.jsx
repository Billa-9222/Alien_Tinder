export default function QuestionCard({ question, answers }) {
  return (
    <div className="bg-[url('/questionCube.png')] bg-contain bg-no-repeat min-h-[340px] w-2xl p-10 text-white   ">
      <h2 className="text-2xl font-semibold mb-2">{question}</h2>
      <div className="flex flex-col space-y-2">
        {answers.map((answer, index) => (
          <label
            key={index}
            className="flex items-center space-x-2 cursor-pointer text-xl"
          >
            <input type="radio" name="question" className="accent-purple-400" />
            <span>{answer}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
