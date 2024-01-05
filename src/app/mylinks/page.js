"use client";

import Abertura from "@/components/Abertura";
import Background from "@/components/mylinks/Background";
import MyLinksBody from "@/components/mylinks/MyLinksBody";
import MyLinksHeader from "@/components/mylinks/MyLinksHeader";
import gsap from "gsap";
import { useEffect } from "react";

export default function Home() {

  if (typeof document !== 'undefined') {
    setTimeout(() => {
      const divElement = document.querySelector('.preto');
      divElement.classList.remove('overflow-y-hidden');
    }, 2000);
  }

  useEffect(() => {
    gsap.fromTo(
      ".back",
      { opacity: 1 },
      { opacity: 0, duration: 1.5, delay: 1.5 }
    );
    gsap.fromTo(
      ".front",
      { opacity: 0 },
      { opacity: 1, duration: 1, delay: 1.5 }
    );
  }, []);

  return (
    <div className="items-center overflow-y-hidden justify-center">
      <div className="w-full h-screen overflow-hidden flex justify-center items-center back absolute">
       <Abertura />
      </div>
      <Background />
      <div className="front">
        <MyLinksHeader />
        <MyLinksBody />
      </div>
    </div>
  );
}
