
import Image from "next/image";
import phone from "@/app/assets/phone.svg"
import MAIL from "@/app/assets/MAIL.svg";
import instagram from "@/app/assets/instagram.svg";
import teamLogo from "@/app/assets/teamLogo.svg";


export default function Footer() {
    return (
      <div className=" w-full h-60 bg-[#1D0E3D] absolute z-50 mt-auto pt-12">
        <div className="flex flex-column items-center justify-center gap-20 mr-20">
          <div>
            <Image src={teamLogo} alt="logo" />
          </div>
          <div>
            <ul className="text-gray-400">
              <li className="text-2xl text-white pb-3">INFO</li>
              <li className="pb-1">About us</li>
              <li className="pb-1">How to use</li>
              <li className="pb-1">Blog</li>
            </ul>
          </div>
          <div>
            <ul className="text-gray-400">
              <li className="text-2xl text-white pb-3">CONTACT</li>
              <li className="flex pb-2 gap-2">
                <Image src={phone} alt="phoneIcon" />
                989997177
              </li>
              <li className="flex pb-2 gap-2">
                <Image src={MAIL} alt="mailIcon" />
                Vasilcamila806@gmail.com
              </li>
            </ul>
          </div>
          <div>
            <ul className="text-white">
              <li className="text-2xl">FOLLOW</li>
              <li>
                <Image src={instagram} alt="insta" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}