"use client";

import QuestionCard from "../components/QuestionCard";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ConFactQuestions() {
  const questions = [
    {
      question: "What happens to most meteorites before they even hit the ground?",
      answers: [
        { text: "They vaporize in the atmosphere", meteor: "scholar" },
        { text: "They explode and vanish into smoke", meteor: "warrior" },
        { text: "They bounce back into space", meteor: "artist" },
        { text: "They become invisible", meteor: "paternseer" },
      ],
    },
    {
      question: "If meteorites are messengers, who are they delivering messages from?",
      answers: [
        { text: "Civilizations older than the Milky Way", meteor: "scholar" },
        { text: "Alternate versions of ourselves in parallel universes", meteor: "storyseeker" },
        { text: "The universe itself, teaching us its secrets", meteor: "truthseeker" },
        { text: "A future Earth, warning us about what’s coming", meteor: "warrior" },
      ],
    },
    {
      question: "What is strange about the Willamette meteorite in the USA?",
      answers: [
        { text: "It’s hollow inside", meteor: "artist" },
        { text: "It has giant pits formed by acid rain on Earth", meteor: "warrior" },
        { text: "It glows in the dark", meteor: "scholar" },
        { text: "It contains living microbes", meteor: "paternseer" },
      ],
    },
    {
      question: "Some say meteorites influence people who touch them. If true, how do they affect us?",
      answers: [
        { text: "They unlock hidden psychic abilities", meteor: "artist" },
        { text: "They bind your fate to the stars", meteor: "scholar" },
        { text: "They erase parts of your memory to keep secrets hidden", meteor: "storyseeker" },
        { text: "They awaken visions of cosmic patterns", meteor: "paternseer" }, 
      ],
    },
    {
      question: "Imagine one meteorite contains the answer to everything. Who do you think is already hiding it?",
      answers: [
        { text: "NASA and other space agencies", meteor: "scholar" },
        { text: "Ancient secret societies", meteor: "truthseeker" },
        { text: "Billionaires planning space colonies", meteor: "artist" },
        { text: "No one — because it’s buried deep inside our subconscious", meteor: "storyseeker" },
      ],
    },
    {
      question: "What do some lunar and Martian meteorites on Earth have in common?",
      answers: [
        { text: "They are made of pure diamond", meteor: "artist" },
        { text: "They match rocks collected by Apollo missions", meteor: "scholar" },
        { text: "They are invisible to the naked eye", meteor: "paternseer" },
        { text: "They carry alien carvings", meteor: "explorer" },
      ],
    },
    {
      question: "What unusual fact about meteorites makes them hard to spot in Antarctica?",
      answers: [
        { text: "They camouflage themselves", meteor: "paternseer" },
        { text: "They melt into ice instantly", meteor: "warrior" },
        { text: "They look just like black rocks on white ice", meteor: "explorer" },
        { text: "They sink deep under glaciers immediately", meteor: "artist" },
      ],
    },
  ];

  const [answers, setAnswers] = useState({});
  const [warning, setWarning] = useState("");
  const router = useRouter();

  const handleSelect = (qIndex, meteor) => {
    setAnswers({ ...answers, [qIndex]: meteor });
    setWarning("");
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < questions.length) {
      setWarning("⚠️ Please answer all questions before submitting!");
      return;
    }

    // подсчет баллов
    const scores = {};
    Object.values(answers).forEach((meteor) => {
      scores[meteor] = (scores[meteor] || 0) + 1;
    });

    // победитель
    const winner = Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );

    localStorage.setItem("selectedMeteor", winner);
    router.push("/meteors");
  };

  return (
    <div className="min-h-screen bg-[url('/longBg.png')] bg-cover flex flex-col items-center pt-32">
      <h1 className="text-4xl text-center text-white w-1/2 mt-20 mb-20">
        CHOOSE THE MOST ACCURATE STATEMENT ACCORDING TO YOU
      </h1>

      {questions.map((q, index) => (
        <QuestionCard
          key={index}
          question={q.question}
          answers={q.answers}
          selected={answers[index]}
          onSelect={(meteor) => handleSelect(index, meteor)}
        />
      ))}

      {warning && <p className="text-red-400 mt-4">{warning}</p>}

      <button
        onClick={handleSubmit}
        disabled={Object.keys(answers).length < questions.length}
        className={`w-48 h-18 text-3xl text-fuchsia-200 font-semibold border-2 border-fuchsia-500 rounded-full mt-10 mb-20 transition ${
          Object.keys(answers).length < questions.length
            ? "opacity-50 cursor-not-allowed"
            : "hover:text-fuchsia-400"
        }`}
      >
        SUBMIT
      </button>
    </div>
  );
}
