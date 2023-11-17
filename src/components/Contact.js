import profileVideo2 from "@/assets/mylinks/profile2.mp4";
import { Oxanium } from "next/font/google";
import Image from "next/image";
import whatsapp from "@/assets/Icons/mylinks/whatsblack.svg";
import email from "@/assets/Icons/mylinks/emailblack.svg";
import instagram from "@/assets/Icons/mylinks/instablack.svg";

const oxanium = Oxanium({ subsets: ["latin"] });

export default function Contact() {
  return (
    <section id="contato">
      <div className="flex flex-col justify-center items-center text-black">
        <video
          playsinline
          autoPlay
          loop
          muted
          controlsList="nodownload"
            className="object-cover mb-4 w-28 h-28 rounded-full mt-16 border-4 border-solid border-indigo-600 pointer-events-none"
        >
          <source src={profileVideo2} alt="Video perfil" type="video/mp4" />
        </video>
        <h2 className={oxanium.className} style={{ fontSize: "24px" }}>
          FALE COMIGO
        </h2>
        <div className="flex mb-16 w-[150px] mt-4 justify-between">
          <a
            href="mailto:gvbs@ic.ufal.br"
            className="flex items-center justify-center max-w-[40px]"
          >
            <Image src={email} alt="logo email" />
          </a>
          <a
            href="https://wa.me/5582982371442"
            target="_blank"
            className="flex items-center justify-center max-w-[40px]"
          >
            <Image src={whatsapp} alt="logo whatsapp" />
          </a>
          <a
            href="https://instagram.com/vg_garcia"
            target="_blank"
            className=" flex items-center justify-center max-w-[36px]"
          >
            <Image
              src={instagram}
              className="w-full h-full"
              alt="logo instagram"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
