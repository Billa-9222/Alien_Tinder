"use client";


import { useEffect, useState } from "react";
import METEORITES from "../data/page";

export default function MeteoritePage() {
  const [meteor, setMeteor] = useState(null);

  useEffect(() => {
    const selected = localStorage.getItem("selectedMeteor");
    if (selected && METEORITES[selected]) {
      setMeteor(METEORITES[selected]);
    }
  }, []);

  if (!meteor) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-2xl">
        Loading your meteorite match...
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center flex justify-center pt-36 p-6"
      style={{ backgroundImage: "url('/lastBg.svg')" }}
    >
      <div className="max-w-4xl w-full text-white rounded-2xl shadow-lg p-8 space-y-10">
        <h1 className="text-5xl font-extrabold text-center uppercase tracking-wide">
          {meteor.name}
        </h1>

        <div className="flex justify-center">
          <img
            src={meteor.image}
            alt={meteor.name}
            className="pt-8 pb-8 object-contain"
          />
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold">
            Your Meteorite Match: {meteor.name}
          </h2>
          <p className="mt-3 text-lg whitespace-pre-line">
            {meteor.sections.matchInfo}
          </p>
        </div>

        <hr className="text-gray-500" />

        <section>
          <h3 className="text-xl font-bold mb-2 text-center mt-10">
            {meteor.name}: Full Profile & Story
          </h3>
          <p className="text-lg leading-relaxed whitespace-pre-line">
            {meteor.sections.profile}
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-2 text-center">
            Classification & Composition
          </h3>
          <p className="text-lg leading-relaxed whitespace-pre-line">
            {meteor.sections.classification}
          </p>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-2 text-center">
            Visual & Scientific Significance
          </h3>
          <p className="text-lg leading-relaxed whitespace-pre-line">
            {meteor.sections.significance}
          </p>
        </section>
      </div>
    </div>
  );
}
