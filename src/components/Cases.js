import Image from "next/image";
import case1 from "@/assets/cases/case1.png";
import case2 from "@/assets/cases/case2.png";
import case4 from "@/assets/cases/case4.png";
import case5 from "@/assets/cases/case5.png";
import icon from "@/assets/Programing, Data/monitor-code.svg";


export default function Cases() {
  return (
    <section>
      <div className="pt-8">
        <h1 className="text-white text-[32px] font-semibold leading-[38.40px] w-full text-center">
          Meus cases
        </h1>
      </div>
      <div className="mt-8 bg-black sticky flex-1 top-5 pt-1 ">
        <div className="flex mt-8 px-2 items-center mb-4">
          <div className="bg-pink-gradient w-12 h-12 flex justify-center rounded-full ">
            <Image src={icon} alt="Monitor svg" className="w-8" />
          </div>

          <h2 className="bg-gradient-to-r from-white to-pink-gradient inline-block bg-clip-text text-transparent text-[32px] font-semibold leading-[38.40px] ml-2">
            Sangue amigo
          </h2>
        </div>
        <Image src={case1} alt="Case Sangue Amigo" />
        <h3 className="w-full text-center mt-2 opacity-60">
          HTML5 - CSS3 - JS
        </h3>
        <h4 className="px-2 mt-4 text-left">
          Com o bjetivo de criar um sistema onde doadores de sangue pudessem ter
          maior facilidade para encontrar, agendar e realizar doação de sangue
          no estado de Alagoas surgiu o Sangue Amigo na disciplina de
          programação web na UFAL.
        </h4>
      </div>
      <div className="mt-8 bg-black sticky flex-1 top-5 pt-1">
        <div className="flex mt-8 px-2 items-center mb-4">
          <div className="bg-[rgb(73,160,217,1)] w-12 h-12 flex justify-center rounded-full ">
            <Image src={icon} alt="Monitor svg" className="w-8" />
          </div>

          <h2 className="bg-gradient-to-r from-white to-[rgb(73,160,217,1)] inline-block bg-clip-text text-transparent text-[32px] font-semibold leading-[38.40px] ml-2">
            Banco Neon
          </h2>
        </div>
        <Image src={case2} alt="Case Sangue Amigo" />
        <h3 className="w-full text-center mt-2 opacity-60">
          HTML5 - CSS3 - JS
        </h3>
        <h4 className="px-2 mt-4 text-left">
          O objetivo principal deste projeto foi explorar as várias técnicas e
          nuances do CSS, aumentando o aprendizado e permitindo a criação de sites mais
          eficientes, responsivos e visualmente atraentes.
        </h4>
      </div>
      <div className="mt-8 bg-black sticky flex-1 top-5 pt-1">
        <div className="flex mt-8 px-2 items-center mb-4">
          <div className="bg-[rgb(86,12,172,1)] w-12 h-12 flex justify-center rounded-full ">
            <Image src={icon} alt="Monitor svg" className="w-8" />
          </div>

          <h2 className="bg-gradient-to-r from-white to-[rgb(86,12,172,1)] inline-block bg-clip-text text-transparent text-[32px] font-semibold leading-[38.40px] ml-2">
            SEDECTI - SMC
          </h2>
        </div>
        <Image src={case5} alt="Case SEDECTI" />
        <h3 className="w-full text-center mt-2 opacity-60">
          HTML5 - CSS3 - JS
        </h3>
        <h4 className="px-2 mt-4 text-left">
          Sistema completo construído para permitir a inscrição de alunos em cursos ofertados gratuitamente pela prefeitura de São Miguel dos Campos, além de facilitar o trabalho administrativo dos professores e servidores com seu dashboard interno.
        </h4>
      </div>
      <div className="my-8 bg-black sticky flex-1 top-5 pt-1">
        <div className="flex mt-8 px-2 items-center mb-4">
          <div className="bg-[rgb(6,4,139,1)] w-12 h-12 flex justify-center rounded-full ">
            <Image src={icon} alt="Monitor svg" className="w-8" />
          </div>

          <h2 className="bg-gradient-to-r from-white to-[rgb(6,4,139,1)] inline-block bg-clip-text text-transparent text-[32px] font-semibold leading-[38.40px] ml-2">
            MyLinks
          </h2>
        </div>
        <Image src={case4} alt="Case MyLinks" />
        <h3 className="w-full text-center mt-2 opacity-60">
          REACTJS - NEXTJS - TAILWIND
        </h3>
        <h4 className="px-2 mt-4 text-left">
          Meu primeiro projeto utilizando as tecnologias listadas acima, completamente funcional, criado para ser adicionado na biografia do instagram e utilizado com meu próprio domínio
        </h4>
      </div>
      <div></div>
    </section>
  );
}
