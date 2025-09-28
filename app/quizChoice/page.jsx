<<<<<<< HEAD
import Image from "next/image";
import Link from "next/link";
=======
import Image from "next/image"
import quizBg from "@/app/assets/quizBg.png"
import einstein from "@/app/assets/einstein.png"
import alien from "@/app/assets/alien.png"
import eilien from "@/app/assets/eilien.png"
import meteorBg from "@/app/assets/meteorBg.svg";

>>>>>>> 0d43d5b (created footer and adjusted header)

import quizBg from "@/app/assets/quizBg.png";
import einstein from "@/app/assets/einstein.png";
import alien from "@/app/assets/alien.png";
import eilien from "@/app/assets/eilien.png";

export default function Tests() {
<<<<<<< HEAD
  return (
    <div id="quiz" className="container mx-auto w-screen h-screen relative">
      <Image
        src={quizBg}
        alt="starry-background"
        className="w-screen object-cover"
      />

      <div className="flex absolute top-48 left-36 gap-8">
        <Link href="/quiz">
          <Image src={einstein} alt="einsteinCard" className="cursor-pointer" />
        </Link>

        <Link href="/quiz">
          <Image src={alien} alt="alienCard" className="mt-56 cursor-pointer" />
        </Link>

        <Link href="/quiz">
          <Image src={eilien} alt="eilienCard" className="cursor-pointer" />
        </Link>
=======
    return (
      <div id="quiz" className="container mx-auto w-screen h-screen">
        <Image
          src={quizBg}
          alt="starry-background"
          className="w-screen relative"
        />
        <div className="flex absolute top-48 left-36 gap-8">
          <div>
            <Image src={einstein} alt="einsteinCard " />
          </div>
          <div>
            <Image src={alien} alt="alienCard" className="mt-56" />
          </div>
          <div>
            <Image src={eilien} alt="einlienCard" />
          </div>
        </div>
        <div>
          <Image src={meteorBg} alt="meteor" className="absolute mt-80 top-96" />
        </div>
>>>>>>> 0d43d5b (created footer and adjusted header)
      </div>
    </div>
  );
}
