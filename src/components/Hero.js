"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import ArrowRight from "@/assets/arrowRight.svg";
import Image from "next/image";
import Ghedyvan from "@/assets/ghedyvan.jpg";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCreative,
  EffectFade,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {
  const leftRef = useRef("");
  const rightRef = useRef("");

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1.5 } });
    const leftSide = leftRef.current;
    const rightSide = rightRef.current;
    tl.fromTo(leftSide, { opacity: 0, x: -100 }, { opacity: 1, x: 0,  delay: 3.3 }).fromTo(
      rightSide,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0 }
    );
  }, []);


  return (
    <div className="bg-gradiente-hero lg:px-4 md:h-[620px] lg:h-[700px] xl:h-[800px] w-full">
      <div className="w-full  max-w-[1246px] mx-auto flex justify-between">
        <div ref={leftRef} className="w-full lg:flex-col lg:flex lg:items-left lg:text-left text-center lg:max-w-[645px] mt-[80px] lg:mt-[100px] bg-red">
          <p className="text-[14px] text-neutral-400 font-normal leading-tight mb-6">
            Hi, I am{" "}
            <span className="text-base font-semibold text-white lg:text-lg">
              Ghedyvan Vinícius 👋🏻
            </span>
          </p>
          <h1 className="text-neutral-100 text-[36px] sm:px-4 lg:px-0 sm:text-[42px] overflow-hidden md:text-[64px] font-semibold leading-[50.80px] md:leading-[70.80px] mb-4">
            Desenvolvedor<br/>Front-end
          </h1>
          <p className="w-full lg:max-w-[520px] sm:text-sm px-2 text-neutral-400 md:text-[16px] lg:text-lg mb-[72px]">
            Venho estudando e construindo diversos projetos front-end, desde
            sistemas completos com HTML, CSS e JS puros a páginas com React e
            Next.js. Essa experiência prática vem me permitindo desenvolver
            habilidades que ajudam a criar soluções eficientes e eficazes.
          </p>
            <Link className="flex text-white justify-center lg:justify-start mb-16" href={ "https://wa.me/5582982371442" }>
            Comece um projeto{" "}
            <Image src={ArrowRight} alt="Seta direita" className="ml-4" />
          </Link>
        </div>
        <div
          ref={rightRef}
          className="hidden lg:block mt-[112px] max-w-[520px] overflow-hidden"
        >
          <Swiper
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[
              Navigation,
              Autoplay,
              EffectCreative,
              Pagination,
              EffectFade,
            ]}
            className="mySwiper max-w-[520px]"
          >
            <SwiperSlide className="mySwiper !w-full max-w-[450px]">
              <Image src={Ghedyvan} className="cover rounded-lg" alt="Foto Will Moreira" />
            </SwiperSlide>
            {/* <SwiperSlide className="mySwiper max-w-[520px]">
              <Image
                src={WillFoto2}
                className="cover"
                alt="Foto Will Moreira"
              />
            </SwiperSlide>
            <SwiperSlide className="mySwiper max-w-[520px]">
              <Image
                src={WillFoto3}
                className="cover"
                alt="Foto Will Moreira"
              />
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
