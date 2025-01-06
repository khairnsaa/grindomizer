"use client";

import Icons from "@/utils/Icons";
import Image from "next/image";
import challanges from "@/assets/challange.json";
import { useState } from "react";

export default function Home() {
  const challengeList = challanges.challange;
  const [selectedChallenge, setSelectedChallange] = useState(null);
  const generateChallenge = () => {
    const randomIndex = Math.floor(Math.random() * challengeList.length);
    setSelectedChallange(challengeList[randomIndex]);
  };
  return (
    <div className="flex justify-center p-16 font-[family-name:var(--font-lexend)] h-full items-center">
      <div className="rounded-xl card h-fit px-16 md:px-24 py-24 md:py-32 pb-16 md:pb-24 flex flex-col items-center">
        <h1 className=" text-3xl lg:text-7xl font-bold text-center mb-8">
          Grindomizer
        </h1>
        <p>
          Tired of the same old exercises? Spice things up with unexpected
          fitness challenges that push your limits!
        </p>
        <button
          className="flex my-8 bg-white rounded-3xl py-2 px-4 block text-[#D9481C]"
          onClick={generateChallenge}
        >
          Generate Challenge
          <span className="ml-2">{Icons("generate", "#D9481C")}</span>
        </button>
        {selectedChallenge && (
          <div className="text-xl">
            <span className="mr-2 font-medium">Your Challenge:</span>
            <span>{selectedChallenge.quest}</span>
          </div>
        )}
      </div>
    </div>
  );
}
