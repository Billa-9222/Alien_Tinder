import Image from "next/image";
import Link from "next/link";

import quizBg from "@/app/assets/quizBg.png";
import einstein from "@/app/assets/einstein.png";
import alien from "@/app/assets/alien.png";
import eilien from "@/app/assets/eilien.png";

export default function Tests() {
  return (
    <div id="quiz" className="container mx-auto w-screen h-screen relative">
      <Image
        src={quizBg}
        alt="starry-background"
        className="w-screen object-cover"
      />

      <div className="flex absolute top-48 left-36 gap-8">
        <Link href="/factualQuestions">
          <Image src={einstein} alt="einsteinCard" className="cursor-pointer" />
        </Link>

        <Link href="/conspiracyQuestions">
          <Image src={alien} alt="alienCard" className="mt-56 cursor-pointer" />
        </Link>

        <Link href="/conAndFactQuestions">
          <Image src={eilien} alt="eilienCard" className="cursor-pointer" />
        </Link>
      </div>
    </div>
  );
}
