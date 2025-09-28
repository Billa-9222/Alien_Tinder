import Image from "next/image"
import quizBg from "@/app/assets/quizBg.png"
import einstein from "@/app/assets/einstein.png"
import alien from "@/app/assets/alien.png"
import eilien from "@/app/assets/eilien.png"



export default function Tests() {
    return (
      <div id="quiz" className="container mx-auto w-screen h-screen">
        <Image src={quizBg} alt="starry-background" className="w-screen relative" />
        <div className="flex absolute top-48 left-36 gap-8">
          <div>
            <Image src={einstein} alt="einsteinCard "  />
          </div>
          <div>
            <Image src={alien} alt="alienCard" className="mt-56" />
          </div>
          <div>
            <Image src={eilien} alt="einlienCard" />
          </div>
        </div>
      </div>
    );
}