import Image from "next/image";
import MainImg from "@/app/assets/MainImg.svg"


export default function Main() {
    return (
      <div>
        <div
          id="home"
          className="container mx-auto flex  w-screen h-screen relative  "
        >
          <div>
            <Image
              src={MainImg}
              alt="Main-image"
              className="flex w-screen  "
            />
          </div>
        </div>
      </div>
    );
}