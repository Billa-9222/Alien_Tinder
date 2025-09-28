"use client";
import Link from "next/link";
import Image from "next/image";
import teamLogo from "@/app/assets/teamLogo.svg";

export default function Header() {
  const links = [
    { id: "home", text: "Home", link: "/HomePage" },
    { id: "lessons", text: "Lessons", link: "/Lessons" },
    { id: "quiz", text: "Quizes", link: "/quizChoice" },
    // { id: "Games", text: "Games", link: "/Games" },
    { id: "results", text: "Results", link: "/Results" },
  ];

  return (
    <div className="flex items-center  absolute z-50 m-2">
      <div className="ml-52 mr-96 mt-4">
        <Image src={teamLogo} alt="logo" />
      </div>
      <div className=" w-2xl h-14 flex items-center justify-center  ">
        <ul className="flex gap-10 text-gray-400 text-xl ">
          {links.map((link) => {
            return (
              <li key={link.id} className="hover:text-white">
                <Link href={link.link}>{link.text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
