import QuestionCard from "../components/QuestionCard";

export default function FactualQuestions() {
  const questions = [
    {
      question: "What’s the largest meteorite ever found on Earth?",
      answers: [
        "The Hoba meteorite in Namibia (about 60 tons) ",
        "The Gibeon meteorite in Botswana (30 tons)",
        "The Willamette meteorite in the USA (15 tons)",
        "The Chelyabinsk meteorite in Russia (10 tons)",
      ],
    },
    {
      question:
        "Some meteorites contain the “ingredients of life.” What exactly has been discovered inside them?",
      answers: ["DNA strands", "Amino acids", "Bacteria", "Fungi"],
    },
    {
      question:
        "What unusual fact about meteorites makes them hard to spot in Antarctica?",
      answers: [
        "They camouflage themselves ",
        "They melt into ice instantly",
        "They look just like black rocks on white ice ",
        "They sink deep under glaciers immediately",
      ],
    },
    {
      question:
        " How old are the oldest meteorites scientists have ever found?",
      answers: [
        "4.5 billion years ",
        "2 billion years",
        "500 billion years",
        "65 billion years",
      ],
    },
    {
      question:
        "Some meteorites contain precious metals. Which one is especially common in them, but rare on Earth’s surface?",
      answers: ["Gold", "Platinum", "Iridium", "Silver"],
    },
    {
      question:
        "Why do scientists think a meteorite might have helped start life on Earth?",
      answers: [
        "It carried water and organic molecules ",
        "It seeded bacteria from Mars",
        "It released cosmic energy that made DNA",
        "It altered Earth’s gravity",
      ],
    },
    {
      question: " How fast can a meteorite enter Earth’s atmosphere?",
      answers: ["10 km/h", "100 km/h", "10,000 km/h", "Up to 70,000 km/h"],
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
