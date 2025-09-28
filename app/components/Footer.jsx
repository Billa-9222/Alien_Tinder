import Image from "next/image";
import meteorBg from "@/app/assets/meteorBg.svg"
import phone from "@/app/assets/phone.svg"
import MAIL from "@/app/assets/MAIL.svg";
import osaUX from "@/app/assets/osaUX.svg";
import instagram from "@/app/assets/instagram.svg";


export default function Footer() {
    return (
        <div className="w-full h-full bg-[#1D0E3D]">
            <Image src={meteorBg} alt="meteor-background" className="" />
        </div>
    )
}