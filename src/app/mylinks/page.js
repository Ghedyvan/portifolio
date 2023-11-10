"use client";

import Background from "@/components/mylinks/Background";
import MyLinksBody from "@/components/mylinks/MyLinksBody";
import MyLinksHeader from "@/components/mylinks/MyLinksHeader";
import ScreenLoading from "@/components/ScreenLoading";
import { gsap } from "gsap";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    gsap.fromTo(".salve", { opacity: .25 }, { opacity: 1, duration: 2.5});
    gsap.fromTo(".salve", { opacity: 1 }, { opacity: 0, duration: 1.5, delay: 2.5});
  }, []);

  return (
    <div className="items-center">
      <div className="salve z-[999]">
        <ScreenLoading />
      </div>
      <Background />
      <MyLinksHeader />
      <MyLinksBody />
    </div>
  );
}
