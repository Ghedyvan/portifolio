import CardDiff from "./CardDiff";
import NextJs from "@/assets/next-js.svg";
import StudentCap from "@/assets/student.svg";
import Notion from "@/assets/notion.svg";
import Rocket from "@/assets/rocket.svg";
import Icon4 from "@/assets/Icons/essential/codeblack.svg";

export default function Cards() {
  return (
    <div className="pt-[112px] w-full pb-[112px] border-b-2 border-solid border-[#EAEAEA]">
      <div className="flex justify-between w-full">
        <h2 className="text-[32px] font-semibold text-gray-950 leading-[38.40px]">
          Meus diferenciais
        </h2>
        <p className="text-neutral-500 text-base font-normal max-w-[384px] pb-[69px]">
          <strong className="text-gray-950 text-base font-semibold">
            Transformo design{" "} 
          </strong>
          em páginas para a web com agilidade, qualidade e{" "}
          <strong className="text-gray-950 text-base font-semibold">
            alta performance.
          </strong>
        </p>
      </div>
      <div className="grid grid-cols-3 gap-y-5">
        <CardDiff image={ NextJs } word="Tecnologias" text="Busco sempre aprender as tecnologias mais usadas pelos profissionais para estar sempre atualizado"/>
        <CardDiff image={ StudentCap } word="Formação" text="Atualmente cursando Ciência da Computação da Universidade Federal de Alagoas - UFAL"/>
        <CardDiff image={ Icon4 } word="Boas práticas" text="Sempre trabalhando para manter o código limpo e organizado, assim facilitando sua leitura e compreensão"/>
        <CardDiff image={ Notion } word="Organização" text="Através do Notion você saberá detalhadamente o estado de cada etapa do seu sistema"/>
        <CardDiff image={ Rocket } word="Formação" text="Atualmente cursando Ciência da Computação da Universidade Federal de Alagoas - UFAL"/>
        <CardDiff image={ NextJs } word="Boas práticas" text="Sempre trabalhando para manter o código organizado, assim facilitando sua leitura e compreensão"/>
      </div>
    </div>
  );
}
