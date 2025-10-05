"use client";

import QuestionCard from "../components/QuestionCard";
import METEORITES from "../data/page";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FactualQuestions() {
  const questions = [
    {
      question: "What’s the largest meteorite ever found on Earth?",
      answers: [
        { text: "The Hoba meteorite in Namibia (about 60 tons)", meteor: "scholar" },
        { text: "The Gibeon meteorite in Botswana (30 tons)", meteor: "paternseer" },
        { text: "The Willamette meteorite in the USA (15 tons)", meteor: "warrior" },
        { text: "The Chelyabinsk meteorite in Russia (10 tons)", meteor: "artist" },
      ],
    },
    {
      question: "Some meteorites contain the “ingredients of life.” What exactly has been discovered inside them?",
      answers: [
        { text: "DNA strands", meteor: "storyseeker" },
        { text: "Amino acids", meteor: "scholar" },
        { text: "Bacteria", meteor: "artist" },
        { text: "Fungi", meteor: "paternseer" },
      ],
    },
    {
      question: "What unusual fact about meteorites makes them hard to spot in Antarctica?",
      answers: [
        { text: "They camouflage themselves", meteor: "paternseer" },
        { text: "They melt into ice instantly", meteor: "warrior" },
        { text: "They look just like black rocks on white ice", meteor: "scholar" },
        { text: "They sink deep under glaciers immediately", meteor: "artist" },
      ],
    },
    {
      question: "How old are the oldest meteorites scientists have ever found?",
      answers: [
        { text: "4.5 billion years", meteor: "scholar" },
        { text: "2 billion years", meteor: "paternseer" },
        { text: "500 billion years", meteor: "artist" },
        { text: "65 billion years", meteor: "storyseeker" },
      ],
    },
    {
      question: "Some meteorites contain precious metals. Which one is especially common in them, but rare on Earth’s surface?",
      answers: [
        { text: "Gold", meteor: "artist" },
        { text: "Platinum", meteor: "paternseer" },
        { text: "Iridium", meteor: "scholar" },
        { text: "Silver", meteor: "warrior" },
      ],
    },
    {
      question: "Why do scientists think a meteorite might have helped start life on Earth?",
      answers: [
        { text: "It carried water and organic molecules", meteor: "scholar" },
        { text: "It seeded bacteria from Mars", meteor: "artist" },
        { text: "It released cosmic energy that made DNA", meteor: "storyseeker" },
        { text: "It altered Earth’s gravity", meteor: "warrior" },
      ],
    },
    {
      question: "How fast can a meteorite enter Earth’s atmosphere?",
      answers: [
        { text: "10 km/h", meteor: "storyseeker" },
        { text: "100 km/h", meteor: "artist" },
        { text: "10,000 km/h", meteor: "warrior" },
        { text: "Up to 70,000 km/h", meteor: "scholar" },
      ],
    },
  ];

  const [answers, setAnswers] = useState({});
  const router = useRouter();

  const handleSelect = (qIndex, meteor) => {
    setAnswers({ ...answers, [qIndex]: meteor });
  };

  const handleSubmit = () => {
    const scores = {};
    Object.values(answers).forEach((meteor) => {
      scores[meteor] = (scores[meteor] || 0) + 1;
    });

    const winner = Object.keys(scores).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );

    localStorage.setItem("selectedMeteor", winner);
    router.push("/meteors");
  };

  // Проверка: все ли вопросы отвечены
  const allAnswered = Object.keys(answers).length === questions.length;

  return (
    <div className="min-h-screen bg-[url('/longBg.png')] bg-cover flex flex-col items-center pt-32">
      <h1 className="text-5xl text-center  text-white w-1/2 mt-10 mb-16 leading-relaxed">
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
     

      <button
        onClick={handleSubmit}
        disabled={!allAnswered}
        className={`w-48 h-18 text-3xl font-semibold border-2 rounded-full mt-10 mb-20 
          ${
            allAnswered
              ? "text-white border-fuchsia-500 hover:bg-fuchsia-600 hover:text-black"
              : "text-gray-400 border-gray-600 cursor-not-allowed"
          }`}
      >
        SUBMIT
      </button>

      {!allAnswered && (
        <p className="text-red-400 text-lg mt-4">
          ⚠️ You must answer all questions before submitting.
        </p>
      )}
    </div>
  );
}
