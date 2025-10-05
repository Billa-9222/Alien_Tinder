import Image from "next/image";
import Link from "next/link";
import meteorBg from "@/app/assets/meteorBg.svg";
import quizBg from "@/app/assets/quizBg.png";
import einstein from "@/app/assets/einstein.png";
import alien from "@/app/assets/alien.png";
import eilien from "@/app/assets/eilien.png";

export default function Tests() {
  return (
    <div id="quiz" className=" w-screen relative">
      <Image
        src={quizBg}
        alt="starry-background"
        className="w-screen object-cover"
      />

      <div className="flex absolute top-48 left-36 right-36 gap-8">
        <Link href="/factualQuestions">
          <Image
            src={einstein}
            alt="einsteinCard"
            className="cursor-pointer hover:scale-105 transform transition duration-300 "
          />
        </Link>

        <Link href="/conspiracyQuestions">
          <Image
            src={alien}
            alt="alienCard"
            className="mt-56 cursor-pointer hover:scale-105 transform transition duration-300"
          />
        </Link>

        <Link href="/conAndFactQuestions">
          <Image
            src={eilien}
            alt="eilienCard"
            className="cursor-pointer hover:scale-105 transform transition duration-300"
          />
        </Link>
      </div>
      <div>
        <Image
          src={meteorBg}
          alt="meteor images"
          className="absolute z-20 bottom-1/12"
        />
      </div>
    </div>
  );
}
