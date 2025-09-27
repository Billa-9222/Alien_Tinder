"use client";
import Link from "next/link";

export default function Header() {
  const links = [
    { id: "home", text: "Home", link: "/Main" },
    { id: "lessons", text: "Lessons", link: "/Lessons" },
    { id: "test", text: "Tests", link: "/testPage" },
    { id: "Games", text: "Games", link: "/Games" },
    { id: "results", text: "Results", link: "/Results" },
  ];

  return (
    <div className="flex items-center gap-96 absolute z-50 m-2">
      <div className="mr-50 ml-32 mt-2">
        <h1 className="text-white text-2xl ">Logo is gonna be here</h1>
      </div>
      <div className=" w-2xl h-14 flex items-center justify-center  mr-32">
        <ul className="flex gap-10 text-white text-2xl">
          {links.map((link) => {
            return (
              <li key={link.id}>
                <Link href={link.link}>{link.text}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
