"use client";

import QuestionCard from "../components/QuestionCard";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ConspiracyQuestions() {
  const questions = [
    {
      question: "What do you think meteorites really are?",
      answers: [
        { text: "Secret alien technology scattered across Earth", meteor: "artist" },
        { text: "Messages carved by ancient civilizations and launched into space", meteor: "explorer" },
        { text: "Cosmic eggs waiting to hatch life forms", meteor: "storyseeker" },
        { text: "Broken pieces of a destroyed planet hiding the truth of our origins", meteor: "warrior" },
      ],
    },
    {
      question: "Why do you think governments collect meteorites so quickly after a fall?",
      answers: [
        { text: "To hide evidence of alien contact", meteor: "scholar" },
        { text: "To use rare metals for secret advanced weapons", meteor: "truthseeker" },
        { text: "Because meteorites are keys to time travel", meteor: "artist" },
        { text: "To keep humanity from realizing its cosmic destiny", meteor: "storyseeker" },
      ],
    },
    {
      question: "What if meteorites are not rocks at all? Then they are…",
      answers: [
        { text: "Spying devices from extraterrestrials", meteor: "artist" },
        { text: "Seeds planted by higher beings to test us", meteor: "storyseeker" },
        { text: "Fragments of an interstellar library of knowledge", meteor: "scholar" },
        { text: "Traps meant to distract humans from real space mysteries", meteor: "warrior" },
      ],
    },
    {
      question: "Why do you think meteor showers happen regularly?",
      answers: [
        { text: "They are signals in a cosmic communication system", meteor: "scholar" },
        { text: "They are cleansing rituals of the universe", meteor: "artist" },
        { text: "They are “cosmic breadcrumbs” left by interstellar travelers", meteor: "storyseeker" },
        { text: "They’re glitches in Earth’s simulation", meteor: "warrior" },
      ],
    },
    {
      question: "If meteorites carry hidden powers, what kind of power do they bring?",
      answers: [
        { text: "Time distortion and glimpses into the past", meteor: "storyseeker" },
        { text: "Emotional amplification — turning fear or joy into extremes", meteor: "explorer" },
        { text: "The ability to bend gravity in small ways", meteor: "warrior" },
        { text: "Access to collective universal memory", meteor: "scholar" },
      ],
    },
    {
      question: "Some believe not all meteorites are from space. What if they’re actually…",
      answers: [
        { text: "Artifacts left by ancient humans who had advanced tech", meteor: "artist" },
        { text: "Remains of interdimensional objects that slipped through", meteor: "storyseeker" },
        { text: "Weapons used in forgotten galactic wars", meteor: "warrior" },
        { text: "Fragments of stars that were alive", meteor: "scholar" },
      ],
    },
    {
      question: "Why do people feel fascinated when they see a meteor streak across the sky?",
      answers: [
        { text: "It triggers ancient memories buried in our DNA", meteor: "truthseeker" },
        { text: "It’s a universal sign that someone is watching us", meteor: "scholar" },
        { text: "Our souls recognize them as lost companions", meteor: "artist" },
        { text: "Because deep down, we know they’re messages written in fire", meteor: "warrior" },
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

  return (
    <div className="min-h-screen bg-[url('/longBg.png')] bg-cover flex flex-col items-center pt-32">
      <h1 className="text-5xl text-center text-white w-1/2 mt-10 mb-16 leading-relaxed">
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
        className={`w-48 h-18 text-3xl text-fuchsia-200 font-semibold border-2 border-fuchsia-500 rounded-full mt-10 mb-20 hover:text-fuchsia-400 ${
          Object.keys(answers).length < questions.length
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
      >
        SUBMIT
      </button>
    </div>
  );
}
