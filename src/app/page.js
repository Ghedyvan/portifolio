"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Badge from "@/components/Badge";
import Cards from "@/components/Cards";
import Rodape from "@/components/Rodape";
import ScreenLoading from "@/components/ScreenLoading";
import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import AboutMe from "@/components/AboutMe";
import Cases from "@/components/Cases";
import Contact from "@/components/Contact";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      ".mainContent",
      { opacity: 0 },
      { opacity: 1, duration: 2.5, delay: 4.5 }
    );
  }, []);

  return (
    <div>
      <div className="salve z-[999]">
        <ScreenLoading />
      </div>
      <div className="bg-gradiente-header">
        <div className="w-full mainContent max-w-[1246px] mx-auto flex items-center opacity-0">
          <Header />
        </div>
        <div className="mainContent opacity-0">
          <Hero />
          <Badge />
        </div>
      </div>
      <div className="bg-white">
        <div className="w-full mainContent max-w-[1246px] px-[15px] mx-auto flex items-center opacity-0">
          <Cards />
        </div>
      </div>
      <div className="bg-badge-blue h-auto">
        <AboutMe />
      </div>
      <div className="bg-black h-auto">
        <Cases />
      </div>
       <div className="bg-white h-auto">
        <Contact />
      </div>
      <div className="w-full bg-black">
        <div className="w-full mainContent max-w-[1246px]  px-[15px] mx-auto flex items-center opacity-0">
          <Rodape />
        </div>
      </div>
    </div>
  );
}
