import Image from "next/image";
import Link from "next/link";
import MainImg from "@/app/assets/MainImg.svg";
import buttonImg from "@/app/assets/buttonImg.png";

export default function Main() {
  return (
    <div>
      <div
        id="home"
        className="w-screen h-screen  relative"
      >
        <div>
          <Image src={MainImg} alt="Main-image" className="w-screen h-screen object-cover " />
        </div>

        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 translate-y-44 z-20">
          <Link href="/quizChoice">
            <Image
              src={buttonImg}
              alt="button image"
              className="cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
