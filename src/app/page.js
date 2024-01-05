"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Badge from "@/components/Badge";
import Cards from "@/components/Cards";
import Rodape from "@/components/Rodape";
import AboutMe from "@/components/AboutMe";
import Cases from "@/components/Cases";
import Contact from "@/components/Contact";
import Abertura from "@/components/Abertura";

export default function Home() {
  if (typeof document !== 'undefined') {
    setTimeout(() => {
      const divElement = document.querySelector('.preto');
      divElement.classList.remove('overflow-y-hidden');
    }, 2600);
  }

  return (
    <div className="preto h-screen overflow-y-hidden">
      <Abertura />
      <div className="bg-gradiente-header">
        <div className="w-full mainContent max-w-[1246px] mx-auto flex items-center">
          <Header />
        </div>
        <div className="mainContent">
          <Hero />
          <Badge />
        </div>
      </div>
      <div className="bg-white">
        <div className="w-full mainContent max-w-[1246px] px-[15px] mx-auto flex items-center">
          <Cards />
        </div>
      </div>
      <div className="bg-badge-blue h-auto justify-center w-full flex">
        <AboutMe />
      </div>
      <div className="bg-black h-auto">
        <Cases />
      </div>
       <div className="bg-white h-auto">
        <Contact />
      </div>
      <div className="w-full bg-black">
        <div className="w-full mainContent max-w-[1246px]  px-[15px] mx-auto flex items-center">
          <Rodape />
        </div>
      </div>
    </div>
  );
}
