import QuestionCard from "../components/QuestionCard";

export default function ConFactQuestions() {
  const questions = [
    {
      question:
        " What happens to most meteorites before they even hit the ground?",
      answers: [
        "They vaporize in the atmosphere",
        "They explode and vanish into smoke",
        "They bounce back into space",
        "They become invisible",
      ],
    },
    {
      question:
        "If meteorites are messengers, who are they delivering messages from?",
      answers: [
        "Civilizations older than the Milky Way",
        "Alternate versions of ourselves in parallel universes",
        "The universe itself, teaching us its secrets",
        "A future Earth, warning us about what’s coming",
      ],
    },
    {
      question: "What is strange about the Willamette meteorite in the USA?",
      answers: [
        "It’s hollow inside",
        "It has giant pits formed by acid rain on Earth",
        "It glows in the dark",
        "It contains living microbes",
      ],
    },
    {
      question:
        "Some say meteorites influence people who touch them. If true, how do they affect us?",
      answers: [
        "They unlock hidden psychic abilities",
        "They unlock hidden psychic abilities",
        "They bind your fate to the stars",
        "They erase parts of your memory to keep secrets hidden",
      ],
    },
    {
      question:
        "Imagine one meteorite contains the answer to everything. Who do you think is already hiding it?",
      answers: [
        "NASA and other space agencies",
        "Ancient secret societies",
        "Billionaires planning space colonies",
        "No one — because it’s buried deep inside our subconscious",
      ],
    },
    {
      question:
        "What do some lunar and Martian meteorites on Earth have in common?",
      answers: [
        "They are made of pure diamond",
        "They match rocks collected by Apollo missions",
        "They are invisible to the naked eye",
        "They carry alien carvings",
      ],
    },
    {
      question:
        "What unusual fact about meteorites makes them hard to spot in Antarctica?",
      answers: [
        "They camouflage themselves",
        "They melt into ice instantly",
        "They look just like black rocks on white ice",
        "They sink deep under glaciers immediately",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[url('/longBg.png')] bg-cover flex flex-col items-center pt-32">
      <h1 className="flex items-center justify-center text-4xl text-center text-white w-1/2  mt-20 mb-20">
        CHOOSE THE MOST ACCURATE STATEMENT ACCORDING TO YOU
      </h1>

      {questions.map((q, index) => (
        <QuestionCard key={index} question={q.question} answers={q.answers} />
      ))}

      <div>
        <button className="w-48 h-18 text-3xl text-white font-semibold border-2 border-fuchsia-500 rounded-full mt-10 mb-20 ">
          SUBMIT
        </button>
      </div>
    </div>
  );
}
