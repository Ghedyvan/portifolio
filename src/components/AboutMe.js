import Image from "next/image";
import FotoExemplo from "../assets/ghedyvan.jpg";
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";

export default function AboutMe() {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      ".triggerAbout",
      { y: 200 },
      {
        y: 0,
        duration: 1,
        scrollTrigger: ".triggerAbout",
      }
    );
  }, []);

  return (
    <section
      id="aboutMe"
      className="triggerAbout about-me px-4 flex flex-col w-full items-center h-[600px] sm:h-[500px] md:flex-row max-w-[1246px]"
    >
      <div className="h-[285px] md:h-[350px] w-full px-4 flex justify-center absolute md:static">
        <Image
          src={FotoExemplo}
          alt="foto de exemplo"
          className="w-full h-full object-cover rounded-md relative md:static top-[-80px] lg:object-right"
        />
      </div>
      <div>
        <div className="text-white text-left relative top-[220px] md:top-0 w-full">
          <h2 className="text-lgfont-semibold">Olá, prazer 👋🏻</h2>
          <h1 className="text-[36px] font-semibold leading-[40px] mb-1 mt-2 text-left">
            Ghedyvan Vinícius
          </h1>
          <h3 className=" text-lg font-semibold leading-snug">
            Desenvolvedor Front end
          </h3>
          <p className=" text-base font-normal mt-5 mb-3 ">
            Sou graduando em Ciência da Computação e trabalho como desenvolvedor
            front-end. Como consequência do amor pela programação,
            desenvolver se tornou meu hobby favorito.
          </p>
          <h2>@vg_garcia</h2>
        </div>
      </div>
    </section>
  );
}
