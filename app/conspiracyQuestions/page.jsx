import QuestionCard from "../components/QuestionCard";


export default function ConspiracyQuestions() {
    const questions = [
      {
        question: "What do you think meteorites really are?",
        answers: [
          "Secret alien technology scattered across Earth",
          "Messages carved by ancient civilizations and launched into space",
          "Cosmic eggs waiting to hatch life forms",
          "Broken pieces of a destroyed planet hiding the truth of our origins",
        ],
      },
      {
        question:
          "Why do you think governments collect meteorites so quickly after a fall?",
        answers: [
          "To hide evidence of alien contact",
          "To use rare metals for secret advanced weapons",
          "Because meteorites are keys to time travel",
          "To keep humanity from realizing its cosmic destiny",
        ],
      },
      {
        question: "What if meteorites are not rocks at all? Then they are…",
        answers: [
          "Spying devices from extraterrestrials",
          "Seeds planted by higher beings to test us",
          "Fragments of an interstellar library of knowledge",
          "Traps meant to distract humans from real space mysteries",
        ],
      },
      {
        question: "Why do you think meteor showers happen regularly?",
        answers: [
          "They are signals in a cosmic communication system",
          "They are cleansing rituals of the universe",
          "They are “cosmic breadcrumbs” left by interstellar travelers",
          "They’re glitches in Earth’s simulation",
        ],
      },
      {
        question:
          "If meteorites carry hidden powers, what kind of power do they bring?",
        answers: [
          "Time distortion and glimpses into the past",
          "Emotional amplification — turning fear or joy into extremes",
          "The ability to bend gravity in small ways",
          "Access to collective universal memory",
        ],
      },
      {
        question:
          "Some believe not all meteorites are from space. What if they’re actually…",
        answers: [
          "Artifacts left by ancient humans who had advanced tech",
          "Remains of interdimensional objects that slipped through",
          "Weapons used in forgotten galactic wars",
          "Fragments of stars that were alive",
        ],
      },
      {
        question:
          "Why do people feel fascinated when they see a meteor streak across the sky?",
        answers: [
          "It triggers ancient memories buried in our DNA",
          "It’s a universal sign that someone is watching us",
          "Our souls recognize them as lost companions",
          "Because deep down, we know they’re messages written in fire",
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