import Image from "next/image";
import FotoExemplo from "../assets/ghedyvan.jpg";
import IconExemplo from "../assets/Icons/next.svg";
import AMRectangle from "./AMRectangles";

export default function AboutMe() {
  return (
    <section id="aboutMe" className="about-me px-4 flex flex-col w-full items-center h-[600px] sm:h-[500px] md:flex-row max-w-[1246px]">
      <div className="h-[285px] md:h-[350px] w-full px-4 flex justify-center absolute md:static">
        <Image
          src={FotoExemplo}
          alt="foto de exemplo"
          className="w-full h-full object-cover rounded-md relative md:static top-[-80px] lg:object-right"
        />
      </div>
      <div>
        <div className="text-white text-left relative top-[220px] md:top-0 w-full">
          <h2
            className="text-lgfont-semibold"
          >
            Olá, prazer 👋🏻
          </h2>
          <h1 className="text-[36px] font-semibold leading-[40px] mb-1 mt-2 text-left">Ghedyvan Vinícius</h1>
          <h3 className=" text-lg font-semibold leading-snug">Desenvolvedor Front end</h3>
          <p className=" text-base font-normal mt-5 mb-3 ">
            Sou graduando em Ciência da Computação e trabalho como desenvolvedor
            front-end. Como consequência do amor pelo
            pela programação, desenvolver se tornou meu hobby favorito.
          </p>
          <h2>@vg_garcia</h2>
        </div>
      </div>
       {/* <div className="flex relative top-[250px]">
          <AMRectangle image={IconExemplo} text="+1 ano de experiência" />
          <AMRectangle image={IconExemplo} text="Desenvolvedor web" />
          <AMRectangle image={IconExemplo} text="Front end na SEDECTI" />
          <AMRectangle image={IconExemplo} text="Freelancer" />
          <AMRectangle image={IconExemplo} text="HomeOffice" />
        </div> */}
    </section>
  );
}
