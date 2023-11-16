'use client'

import CardDiff from "./CardDiff";
import NextJs from "@/assets/next-js.svg";
import StudentCap from "@/assets/student.svg";
import Notion from "@/assets/notion.svg";
import Rocket from "@/assets/rocket.svg";
import CSS from "@/assets/css.svg";
import Warning from "../assets/warningApple.png";
import Icon4 from "@/assets/Icons/essential/codeblack.svg";
import Image from "next/image";
import React, { useState, useRef, useEffect } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";


export default function Cards() {

  const [classe, setClasse] = useState('flex flex-col items-center justify-center duration-[1000ms] ease-in-out');
  const [quadrado, setQuadrado] = useState('py-8 px-8 flex justify-start flex-col rounded-[8px] altura h-[230px] w-[200px] bg-neutral-100 duration-[1500ms] ease-in-out');
  const adicionarClasse = () => {
    setClasse('hidden');
    setQuadrado(quadrado.replace(' w-[200px]', ' w-full h-auto'))
    transition: 'all 2s'
  };

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.utils.toArray(".trigger").forEach((card) => {
      gsap.fromTo(
        card,
        { x: -200 },
        {
          x: 0,
          duration: 1.5,
          scrollTrigger: card,
        }
      );
    });
  }, []);

  return (
    <div className="pt-[80px] w-full pb-[112px] border-b-2 border-solid border-[#EAEAEA]">
      <div className="flex flex-col lg:mb-10 text-center items-center lg:flex-row justify-between w-full">
        <h2 className="text-[32px] mb-4 font-semibold lg:mb-0 text-gray-950 leading-[38.40px]">
          Meus diferenciais
        </h2>
        <p className="text-neutral-500 w-full  text-base font-normal lg:pb-0 max-w-[384px] pb-[69px] lg:text-right">
            <strong className="text-gray-950 text-base font-semibold text-left ">
            Transformo design{" "}
          </strong>
          em páginas para a web com agilidade, qualidade e{" "}
          <strong className="text-gray-950 text-base font-semibold">
            alta performance.
          </strong>
        </p>
      </div>
      <div className="grid lg:gap-x-5 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-5">
        <CardDiff
          image={NextJs}
          word="Tecnologias"
          text="Busco sempre aprender as tecnologias mais recentes e otimizadas para estar sempre um passo a frente"
        />
        <CardDiff
          image={StudentCap}
          word="Formação"
          text="Atualmente cursando Ciência da Computação da Universidade Federal de Alagoas - UFAL"
        />
        <CardDiff
          image={Icon4}
          word="Boas práticas"
          text="Sempre trabalhando para manter o código limpo e organizado, assim facilitando sua leitura e compreensão"
        />
        <CardDiff
          image={Notion}
          word="Organização"
          text="Através do Notion você saberá detalhadamente o andamento da construção do seu sistema"
        />
        <CardDiff
          image={Rocket}
          word="Performance"
          text="Sites otimizados para oferecer um carregamento rápido e interações suaves durante a navegação"
        />
        {/* <CardDiff image={ CSS } word="Layouts bem construídos" text="Assim evitando que os textos e itens fiquem 'bugados' no seu layout e causando problemas" /> */}
        <div className="flex">
          <div className={ quadrado }>
            <Image
              src={CSS}
              alt="Imagem do card"
              width={40}
              height={40}
              className="mb-4"
            />
            <h2 className="mb-4 text-gray-950 text-xl font-semibold">
              Layouts bem construídos
            </h2>
            <p className="text-neutral-500 text-base">
              Assim evitando que os textos e itens fiquem{" "}
              <span className="font-bold">bugados</span> no seu layout e
              causando problemas
            </p>
          </div>
          <div className={classe}>
            <div className="text-red-800 text-center items-center justify-center flex flex-col">
              <Image src={ Warning } alt="Alerta" className="max-w-[50px] mb-4" /> Ops,
              encontramos um problema, me ajude a consertar
            </div>
            <button onClick={ adicionarClasse } className="bg-red-600 p-2 rounded-md mt-2">
              CONSERTAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
