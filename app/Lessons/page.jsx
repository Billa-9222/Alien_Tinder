import Image from "next/image"
import comingSoon3 from "@/app/assets/comingSoon3.jpg"

export default function Lessons() {
    return (
      <div id="lessons">
        <Image src={comingSoon3} alt="comingSoon3" className="w-screen h-screen"/>
      </div>
    );
}